import { d as directusServer } from '../../_/directus-server.mjs';
import { d as defineEventHandler } from '../../runtime.mjs';
import { readItems, readSingleton } from '@directus/sdk';
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

async function getPosts() {
  const posts = await directusServer.request(
    readItems("posts", {
      fields: [
        "id",
        "slug",
        "date_updated",
        {
          seo: ["canonical_url", "sitemap_change_frequency", "sitemap_priority"]
        }
      ],
      // @ts-ignore
      filter: {
        status: {
          _eq: "published"
        }
      },
      limit: -1
    })
  );
  const entries = posts.map((post) => {
    const seo = post.seo;
    return {
      loc: `/posts/${post.slug}`,
      lastmod: post.date_updated,
      changefreq: (seo == null ? void 0 : seo.sitemap_change_frequency) || "monthly",
      priority: (seo == null ? void 0 : seo.sitemap_priority) || 0.5
    };
  });
  return entries;
}
async function getPages() {
  const pages = await directusServer.request(
    readItems("pages", {
      fields: [
        "id",
        "permalink",
        "date_updated",
        {
          seo: ["canonical_url", "sitemap_change_frequency", "sitemap_priority"]
        }
      ],
      // @ts-ignore
      filter: {
        status: {
          _eq: "published"
        }
      },
      limit: -1
    })
  );
  const entries = pages.map((page) => {
    const seo = page.seo;
    return {
      loc: `${page.permalink}`,
      lastmod: page.date_updated,
      changefreq: (seo == null ? void 0 : seo.sitemap_change_frequency) || "monthly",
      priority: (seo == null ? void 0 : seo.sitemap_priority) || 0.5
    };
  });
  return entries;
}
async function getCategories() {
  const categories = await directusServer.request(
    readItems("categories", {
      fields: [
        "id",
        "slug",
        {
          seo: ["canonical_url", "sitemap_change_frequency", "sitemap_priority"]
        }
      ],
      limit: -1
    })
  );
  const entries = categories.map((category) => {
    var _a, _b;
    return {
      loc: `/posts/categories/${category.slug}`,
      changefreq: ((_a = category.seo) == null ? void 0 : _a.sitemap_change_frequency) || "monthly",
      priority: ((_b = category.seo) == null ? void 0 : _b.sitemap_priority) || 0.5
    };
  });
  return entries;
}
async function getHelpArticles() {
  const articles = await directusServer.request(
    readItems("help_articles", {
      fields: ["id", "slug", "date_updated"],
      // @ts-ignore
      filter: {
        status: {
          _eq: "published"
        }
      },
      limit: -1
    })
  );
  const entries = articles.map((article) => {
    return {
      loc: `/help/articles/${article.slug}`,
      lastmod: article.date_updated,
      changefreq: "daily",
      priority: 0.5
    };
  });
  return entries;
}
async function getHelpCollections() {
  const collections = await directusServer.request(
    readItems("help_collections", {
      fields: ["id", "slug"],
      // @ts-ignore
      filter: {
        articles: {
          _nnull: true
        }
      },
      limit: -1
    })
  );
  const entries = collections.map((collection) => {
    return {
      loc: `/help/collections/${collection.slug}`,
      changefreq: "daily",
      priority: 0.5
    };
  });
  return entries;
}
async function getBlogAndProjctPages() {
  var _a, _b, _c, _d;
  const blogPage = await directusServer.request(
    readSingleton("pages_blog", {
      fields: [
        {
          seo: ["canonical_url", "sitemap_change_frequency", "sitemap_priority"]
        }
      ]
    })
  );
  const projectPage = await directusServer.request(
    readSingleton("pages_projects", {
      fields: [
        {
          seo: ["canonical_url", "sitemap_change_frequency", "sitemap_priority"]
        }
      ]
    })
  );
  const entries = [
    {
      loc: `/posts`,
      changefreq: ((_a = blogPage.seo) == null ? void 0 : _a.sitemap_change_frequency) || "monthly",
      priority: ((_b = blogPage.seo) == null ? void 0 : _b.sitemap_priority) || 0.5
    },
    {
      loc: `/projects`,
      changefreq: ((_c = projectPage.seo) == null ? void 0 : _c.sitemap_change_frequency) || "monthly",
      priority: ((_d = projectPage.seo) == null ? void 0 : _d.sitemap_priority) || 0.5
    }
  ];
  return entries;
}
const _sitemapUrls = defineEventHandler(async () => {
  const [posts, pages, categories, help_articles, help_collections, misc_pages] = await Promise.all([
    getPosts(),
    getPages(),
    getBlogAndProjctPages(),
    getCategories(),
    getHelpArticles(),
    getHelpCollections()
  ]);
  return [...posts, ...pages, ...misc_pages, ...categories, ...help_articles, ...help_collections];
});

export { _sitemapUrls as default };
//# sourceMappingURL=_sitemap-urls.mjs.map
