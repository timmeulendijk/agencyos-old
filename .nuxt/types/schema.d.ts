import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["directus"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/modules/directus/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-site-config@2.2.15_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_o5rtvnezlkgfuxtbj4smkjdzqe/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+robots@4.0.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3_5ypj5ppfq3c6kjdx7sb4j642ty/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+sitemap@5.3.5_h3@1.12.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_te_2vc454inleotrwafoqxvosrtte/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-og-image@3.0.0-rc.64_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5_qkcgep76462eg4tttvotfrvcmu/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-schema-org@3.3.9_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31._kzwlsvfawaad24ep7llb3hnehq/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-seo-experiments@4.0.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@_wfjahefcl25lpsyv7zvg7pbhem/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-link-checker@3.1.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_qz632okxzowueqftu7wqgjykmi/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["autoAnimate"]?: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["motion"]?: typeof import("@vueuse/motion/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/modules/directus/index", Exclude<NuxtConfig["directus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-site-config@2.2.15_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_o5rtvnezlkgfuxtbj4smkjdzqe/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+robots@4.0.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3_5ypj5ppfq3c6kjdx7sb4j642ty/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+sitemap@5.3.5_h3@1.12.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_te_2vc454inleotrwafoqxvosrtte/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-og-image@3.0.0-rc.64_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5_qkcgep76462eg4tttvotfrvcmu/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-schema-org@3.3.9_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31._kzwlsvfawaad24ep7llb3hnehq/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-seo-experiments@4.0.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@_wfjahefcl25lpsyv7zvg7pbhem/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-link-checker@3.1.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_qz632okxzowueqftu7wqgjykmi/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@formkit/auto-animate/nuxt", Exclude<NuxtConfig["autoAnimate"], boolean>] | ["@vueuse/motion/nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["directus"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/modules/directus/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-site-config@2.2.15_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_o5rtvnezlkgfuxtbj4smkjdzqe/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+robots@4.0.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3_5ypj5ppfq3c6kjdx7sb4j642ty/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+sitemap@5.3.5_h3@1.12.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_te_2vc454inleotrwafoqxvosrtte/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-og-image@3.0.0-rc.64_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5_qkcgep76462eg4tttvotfrvcmu/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-schema-org@3.3.9_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31._kzwlsvfawaad24ep7llb3hnehq/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-seo-experiments@4.0.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@_wfjahefcl25lpsyv7zvg7pbhem/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-link-checker@3.1.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_qz632okxzowueqftu7wqgjykmi/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["autoAnimate"]?: typeof import("@formkit/auto-animate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["motion"]?: typeof import("@vueuse/motion/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/modules/directus/index", Exclude<NuxtConfig["directus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-site-config@2.2.15_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_o5rtvnezlkgfuxtbj4smkjdzqe/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+robots@4.0.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3_5ypj5ppfq3c6kjdx7sb4j642ty/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/@nuxtjs+sitemap@5.3.5_h3@1.12.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_te_2vc454inleotrwafoqxvosrtte/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-og-image@3.0.0-rc.64_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5_qkcgep76462eg4tttvotfrvcmu/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-schema-org@3.3.9_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31._kzwlsvfawaad24ep7llb3hnehq/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-seo-experiments@4.0.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@_wfjahefcl25lpsyv7zvg7pbhem/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/timmeulendijk/Desktop/Workspace/projects/agencyos/node_modules/.pnpm/nuxt-link-checker@3.1.0_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.3_qz632okxzowueqftu7wqgjykmi/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@formkit/auto-animate/nuxt", Exclude<NuxtConfig["autoAnimate"], boolean>] | ["@vueuse/motion/nuxt", Exclude<NuxtConfig["motion"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   stripeSecretKey: string,

   stripeWebhookSecret: string,

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         index: {
            sitemapName: string,

            _route: string,

            sitemaps: Array<any>,

            include: Array<any>,

            exclude: Array<any>,
         },

         pages: {
            include: Array<any>,

            exclude: Array<string>,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         posts: {
            include: Array<string>,

            exclude: Array<string>,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         help: {
            include: Array<string>,

            exclude: Array<string>,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },
      },
   },

   motion: any,

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   stripePublishableKey: string,

   siteUrl: string,

   directus: {
      rest: {
         baseUrl: string,

         nuxtBaseUrl: string,
      },

      auth: {
         enabled: boolean,

         enableGlobalAuthMiddleware: boolean,

         userFields: Array<string|{

         }>,

         redirect: {
            login: string,

            logout: string,

            home: string,

            resetPassword: string,

            callback: string,
         },
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      isNuxtContentDocumentDriven: boolean,

      excludeLinks: Array<any>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }