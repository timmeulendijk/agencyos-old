import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$1 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$2 } from './Prose-C5ZYWjWj.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './FilesView-CgEmPHdR.mjs';
import { a as useRoute } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './UIcon-CFeTNZEP.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import '@directus/sdk';
import 'vue-dompurify-html';
import 'node:crypto';
import './Icon-BRjp6c2n.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Modal-B8yYdas2.mjs';
import './id-CsF31SPu.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './keyboard-puKMRDGD.mjs';
import './VUpload-DWTZMVN2.mjs';
import './VLabel-D4wsGVsj.mjs';
import './VAlert-B7QIU45Y.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './asyncContext-DyyyRmEv.mjs';
import './FileCard-lKi1YShj.mjs';
import './Dropdown-CMDTLEPg.mjs';
import './Avatar-CM8WZfag.mjs';
import './useToast-BMHYguAT.mjs';

const folderId = "3545f8b9-d7a4-449c-86e1-5353bd69101a";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "files",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_TypographyHeadline = _sfc_main$1;
      const _component_TypographyProse = _sfc_main$2;
      const _component_PortalFileUploadModal = _sfc_main$1$1;
      const _component_PortalFilesView = _sfc_main$3;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: "mt-6",
        ui: {
          background: "bg-transparent dark:bg-transparent"
        }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Files",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              size: "sm",
              content: "These are the files you'll need to complete your project"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PortalFileUploadModal, { "folder-id": folderId }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                createVNode("div", null, [
                  createVNode(_component_TypographyHeadline, {
                    content: "Files",
                    size: "xs"
                  }),
                  createVNode(_component_TypographyProse, {
                    size: "sm",
                    content: "These are the files you'll need to complete your project"
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_PortalFileUploadModal, { "folder-id": folderId })
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PortalFilesView, { "folder-id": folderId }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PortalFilesView, { "folder-id": folderId })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id]/files.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=files-Do5gNjb5.mjs.map
