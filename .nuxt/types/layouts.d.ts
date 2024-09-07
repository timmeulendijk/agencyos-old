import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "app" | "auth" | "blank" | "default" | "proposal"
declare module "../../node_modules/.pnpm/nuxt@3.12.4_@parcel+watcher@2.4.1_@types+node@22.0.0_eslint@8.56.0_ioredis@5.4.1_magicast@0.3_2vjq6nn6zr6vkankfqsox74fj4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}