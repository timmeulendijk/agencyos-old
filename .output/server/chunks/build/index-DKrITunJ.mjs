import { _ as _sfc_main$1 } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$2 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './GlobalSearch-DmC-IZ7s.mjs';
import { _ as _sfc_main$5 } from './CollectionsIndex-Cp9PF22N.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Button-CwvMvtUt.mjs';
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
import './UIcon-CFeTNZEP.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/utils/lib/css/icon';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Modal-B8yYdas2.mjs';
import './id-CsF31SPu.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './keyboard-puKMRDGD.mjs';
import './defineShortcuts-CsT8B_oy.mjs';
import './combobox-9r9zJfab.mjs';
import '@tanstack/vue-virtual';
import '@vueuse/integrations/useFuse';
import './Avatar-CM8WZfag.mjs';
import './asyncContext-DyyyRmEv.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BlockContainer = _sfc_main$1;
  const _component_TypographyTitle = _sfc_main$2;
  const _component_TypographyHeadline = _sfc_main$3;
  const _component_GlobalSearch = _sfc_main$4;
  const _component_HelpCollectionsIndex = _sfc_main$5;
  _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<header class="pb-8 border-b border-gray-300 dark:border-gray-700"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TypographyTitle, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Help Center`);
            } else {
              return [
                createTextVNode("Help Center")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TypographyHeadline, { content: "<p>How can we <em>help</em> you?</p>" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_GlobalSearch, {
          placeholder: "Search for articles",
          collections: ["help_articles"],
          class: "flex"
        }, null, _parent2, _scopeId));
        _push2(`</header>`);
        _push2(ssrRenderComponent(_component_HelpCollectionsIndex, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("header", { class: "pb-8 border-b border-gray-300 dark:border-gray-700" }, [
            createVNode(_component_TypographyTitle, null, {
              default: withCtx(() => [
                createTextVNode("Help Center")
              ]),
              _: 1
            }),
            createVNode(_component_TypographyHeadline, { content: "<p>How can we <em>help</em> you?</p>" }),
            createVNode(_component_GlobalSearch, {
              placeholder: "Search for articles",
              collections: ["help_articles"],
              class: "flex"
            })
          ]),
          createVNode(_component_HelpCollectionsIndex)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DKrITunJ.mjs.map
