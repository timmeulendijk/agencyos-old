import { _ as _sfc_main$1 } from './DarkModeToggle-Dqz9Fta5.mjs';
import { _ as _sfc_main$2 } from './Logo-Dz7nGNoc.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@formkit/auto-animate/vue';
import '@unhead/addons';
import 'tailwind-merge';
import '@iconify/vue';
import '@directus/sdk';
import 'vue-dompurify-html';
import 'node:crypto';
import './composables-BxS0fVn-.mjs';
import './nuxt-img-BL8_SQyR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DarkModeToggle = _sfc_main$1;
      const _component_Logo = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-full overflow-hidden antialiased transition duration-150 bg-white visual-effects bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-700" }, _attrs))}><div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"><div class="w-full max-w-sm mx-auto space-y-8 lg:w-96">`);
      _push(ssrRenderComponent(_component_DarkModeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_Logo, { class: "w-auto h-12" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="relative flex-1 hidden bg-white border-l-2 border-primary/50 lg:block"><div class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary"></div><div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-s08T1JUZ.mjs.map
