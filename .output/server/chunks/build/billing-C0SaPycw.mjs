import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$1 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$2 } from './Prose-C5ZYWjWj.mjs';
import { a as useRoute } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@iconify/vue';
import '@directus/sdk';
import 'vue-dompurify-html';
import 'node:crypto';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "billing",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_TypographyHeadline = _sfc_main$1;
      const _component_TypographyProse = _sfc_main$2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mt-6" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Billing",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              size: "sm",
              content: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TypographyHeadline, {
                content: "Billing",
                size: "xs"
              }),
              createVNode(_component_TypographyProse, {
                size: "sm",
                content: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id]/billing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=billing-C0SaPycw.mjs.map
