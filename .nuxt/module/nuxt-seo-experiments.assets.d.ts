// Generated by nuxt-seo-experiments.assets

declare module '#app' {
  import { HeadEntry, HeadTag } from '@unhead/schema'

  interface RuntimeNuxtHooks {
    'head:tags': (tag: HeadTag[]) => Promise<void> | void
    'head:entries': (entries: HeadEntry[]) => Promise<void> | void
  }
}
declare module '@unhead/schema' {

  type PublicFiles = '/android-chrome-192x192.png' | '/android-chrome-512x512.png' | '/apple-touch-icon.png' | '/favicon-16x16.png' | '/favicon-32x32.png' | '/favicon.ico' | '/logos/agencyos.png' | '/logos/directus.svg' | '/logos/formkit.svg' | '/logos/headlessui.svg' | '/logos/heroicons.svg' | '/logos/nuxt3.svg' | '/logos/pinia.svg' | '/logos/tailwind.svg' | '/logos/vueuse.svg' | (string & Record<never, never>)
  type JsFiles = (string & Record<never, never>)

  interface SchemaAugmentations {
    link: import('@unhead/schema').UserTagConfigWithoutInnerContent & {
      href: PublicFiles
    }
    script: import('@unhead/schema').TagUserProperties & {
      src: JsFiles
    }
  }
}
export {}
