import { _ as _sfc_main$1 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './FilesView-CgEmPHdR.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './Button-CwvMvtUt.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './UIcon-CFeTNZEP.mjs';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Modal-B8yYdas2.mjs';
import './id-CsF31SPu.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './keyboard-puKMRDGD.mjs';
import './Card-Bnf4_qmP.mjs';
import './VUpload-DWTZMVN2.mjs';
import './VLabel-D4wsGVsj.mjs';
import './VAlert-B7QIU45Y.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './asyncContext-DyyyRmEv.mjs';
import './FileCard-lKi1YShj.mjs';
import './Dropdown-CMDTLEPg.mjs';
import './Avatar-CM8WZfag.mjs';
import './useToast-BMHYguAT.mjs';

const folderId = null;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalPageHeader = _sfc_main$1;
      const _component_PortalFileUploadModal = _sfc_main$1$1;
      const _component_PortalFilesView = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: "File Library",
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Files"
          }
        ]
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PortalFileUploadModal, { "folder-id": folderId }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_PortalFileUploadModal, { "folder-id": folderId })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PortalFilesView, {
        "folder-id": folderId,
        class: "mt-6"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/files/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DAvq8koE.mjs.map
