import { q as useNuxtApp } from './server.mjs';
import { withAsyncContext as withAsyncContext$1, getCurrentInstance } from 'vue';

async function useDirectus(options) {
  const nuxtApp = useNuxtApp();
  const $directus = nuxtApp.$directus;
  return await $directus.request(options);
}
function withAsyncContext(fn) {
  return withAsyncContext$1(() => {
    var _a;
    const nuxtApp = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
    return nuxtApp ? nuxtApp.runWithContext(fn) : fn();
  });
}

export { useDirectus as u, withAsyncContext as w };
//# sourceMappingURL=asyncContext-DyyyRmEv.mjs.map
