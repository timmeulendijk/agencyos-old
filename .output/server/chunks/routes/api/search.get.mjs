import { a as cachedEventHandler, g as getQuery, c as createError } from '../../runtime.mjs';
import { d as directusServer } from '../../_/directus-server.mjs';
import { readItems } from '@directus/sdk';
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
    posts: (post) => mapEntity({
      entity: post,
      title: post.title,
      type: "post",
      urlPattern: "/posts/:slug",
      description: post.summary,
      image: post.image
    }),
    projects: (project) => mapEntity({
      entity: project,
      title: project.title,
      type: "project",
      urlPattern: "/projects/:slug",
      description: project.summary,
      image: project.image
    }),
    pages: (page) => mapEntity({
      entity: page,
      title: page.title,
      type: "page",
      urlPattern: "/:slug"
    }),
    categories: (category) => mapEntity({
      entity: category,
      title: category.title,
      type: "category",
      urlPattern: "/posts/categories/:slug"
    }),
    help_articles: (article) => mapEntity({
      entity: article,
      title: article.title,
      type: "article",
      urlPattern: "/help/articles/:slug",
      description: "",
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
      const query = getQuery(event);
      let { collections } = query;
      const { search, raw } = query;
      if (typeof collections === "string") {
        collections = [collections];
      }
      if (!collections || !Array.isArray(collections) || collections.every(
        (collection) => !["posts", "projects", "pages", "categories", "help_articles"].includes(collection)
      )) {
        throw new Error("Invalid or missing collections param");
      }
      const data = await Promise.all(
        collections.map(async (collection) => {
          const searchQuery = search != null ? search : "";
          const searchParam = typeof searchQuery === "string" ? searchQuery : String(searchQuery);
          const data2 = await directusServer.request(readItems(collection, { search: searchParam }));
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
    maxAge: 60 * 5
    // Cache the results for 5 minutes
  }
);

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
