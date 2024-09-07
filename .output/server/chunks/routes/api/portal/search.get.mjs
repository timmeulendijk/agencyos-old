import { a as cachedEventHandler, u as useRuntimeConfig, g as getQuery, p as parseCookies, c as createError } from '../../../runtime.mjs';
import { d as directusServer } from '../../../_/directus-server.mjs';
import { withToken, readItems } from '@directus/sdk';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vue';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';

function mapEntity({
  title,
  entity,
  type,
  urlPattern,
  description = "",
  image = ""
}) {
  if (urlPattern.includes(":slug")) {
    urlPattern = urlPattern.replace(":slug", entity.slug);
  }
  if (urlPattern.includes(":project")) {
    urlPattern = urlPattern.replace(":project", entity.project);
  }
  if (urlPattern.includes(":id")) {
    urlPattern = urlPattern.replace(":id", entity.id);
  }
  return {
    title,
    type,
    description,
    image,
    url: urlPattern
  };
}
function mapResults(collection, results) {
  const mapping = {
    help_articles: (article) => mapEntity({
      entity: article,
      title: article.title,
      type: "article",
      urlPattern: "/help/articles/:slug",
      description: "",
      image: ""
    }),
    os_projects: (project) => mapEntity({
      entity: project,
      title: project.name,
      type: "project",
      urlPattern: "/portal/projects/:id",
      description: project.description,
      image: project.image
    }),
    os_tasks: (task) => mapEntity({
      entity: task,
      title: task.name,
      type: "task",
      urlPattern: "/portal/projects/:project/tasks",
      description: task.description,
      image: ""
    }),
    os_invoices: (invoice) => mapEntity({
      entity: invoice,
      title: `INV#-${invoice.invoice_number}`,
      type: "invoice",
      urlPattern: "/portal/billing/invoices/:id",
      description: invoice.reference,
      image: ""
    })
  };
  return results.map((result) => {
    const mapFunction = mapping[collection];
    if (typeof mapFunction === "function") {
      return mapFunction(result);
    } else {
      throw new Error(`Invalid collection: ${collection}`);
    }
  });
}
const search_get = cachedEventHandler(
  async (event) => {
    try {
      const config = useRuntimeConfig();
      const query = getQuery(event);
      const cookies = parseCookies(event);
      const directusData = JSON.parse(cookies["directus-auth"]);
      const access_token = directusData == null ? void 0 : directusData.access_token;
      let { collections } = query;
      const { search, raw } = query;
      if (typeof collections === "string") {
        collections = [collections];
      }
      if (!collections || !Array.isArray(collections) || collections.every(
        (collection) => !["help_articles", "os_projects", "os_tasks", "os_invoices"].includes(collection)
      )) {
        throw new Error("Invalid or missing collections param");
      }
      const data = await Promise.all(
        collections.map(async (collection) => {
          var _a;
          const data2 = await directusServer.request(
            withToken(access_token, readItems(collection, { search: (_a = search == null ? void 0 : search.toString()) != null ? _a : "" }))
          );
          if (raw) {
            return data2;
          } else {
            return mapResults(collection, data2);
          }
        })
      );
      return {
        statusCode: 200,
        data: data.flat()
      };
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: err.message
      });
    }
  },
  {
    // Cache for 60 seconds
    maxAge: 60,
    // Normally cachedEventHandler drops all the headers from the original request. This ensures that the cookie header is passed through.
    varies: ["cookie"]
  }
);

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
