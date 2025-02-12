import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { $ as useSiteConfig } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { w as parseURL } from '../runtime.mjs';
import '../routes/renderer.mjs';
import 'node:async_hooks';
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
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimpleBlog",
  __ssrInlineRender: true,
  props: {
    title: { default: "title" },
    website: {}
  },
  setup(__props) {
    const props = __props;
    const website = computed(() => {
      return props.website || parseURL(useSiteConfig().url).host;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start border-solid border-blue-500 border-[12px] bg-gray-50" }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full"><h1 class="text-[80px] p-20 font-black text-left">${ssrInterpolate(_ctx.title)}</h1><p class="text-2xl pb-10 px-20 font-bold mb-0">${ssrInterpolate(unref(website))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@3.0.0-rc.64_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5_qkcgep76462eg4tttvotfrvcmu/node_modules/nuxt-og-image/dist/runtime/nuxt/components/Templates/Community/SimpleBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SimpleBlog-CB5EToLU.mjs.map
