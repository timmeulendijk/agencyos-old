import { _ as _sfc_main$1 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as _sfc_main$2 } from './CollectionsIndex-Cp9PF22N.mjs';
import { useSSRContext, withCtx } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-Dix5D_y-.mjs';
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
import './server.mjs';
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
import './index-Dqa-xyfo.mjs';
import '@iconify/utils/lib/css/icon';
import './Headline-OuodUiss.mjs';
import './UIcon-CFeTNZEP.mjs';
import './asyncContext-DyyyRmEv.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PortalPageHeader = _sfc_main$1;
  const _component_HelpCollectionsIndex = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PortalPageHeader, {
    title: "Help Center",
    breadcrumbs: [
      {
        title: "Portal",
        href: "/portal"
      },
      {
        title: "Help Center"
      }
    ]
  }, {
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HelpCollectionsIndex, { "base-url": "/portal" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/help/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Bpa9PfsD.mjs.map
