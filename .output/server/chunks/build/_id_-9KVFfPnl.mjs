import { _ as _sfc_main$1 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './FilesView-CgEmPHdR.mjs';
import { a as useRoute, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readFolder } from '@directus/sdk';
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from 'vue';
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
import 'tailwind-merge';
import 'vue-dompurify-html';
import 'node:crypto';
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
import './FileCard-lKi1YShj.mjs';
import './Dropdown-CMDTLEPg.mjs';
import './Avatar-CM8WZfag.mjs';
import './useToast-BMHYguAT.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path, params } = useRoute();
    const {
      data: folder,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`folder-${params.id}`, () => {
      return useDirectus(readFolder(params.id, {}));
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PortalPageHeader = _sfc_main$1;
      const _component_PortalFileUploadModal = _sfc_main$1$1;
      const _component_PortalFilesView = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: (_a = unref(folder)) == null ? void 0 : _a.name,
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Files",
            href: "/portal/files"
          }
        ]
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PortalFileUploadModal, {
              "folder-id": (_a2 = unref(folder)) == null ? void 0 : _a2.id
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_PortalFileUploadModal, {
                  "folder-id": (_b = unref(folder)) == null ? void 0 : _b.id
                }, null, 8, ["folder-id"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PortalFilesView, {
        "folder-id": unref(params).id,
        class: "mt-6"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/files/folders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-9KVFfPnl.mjs.map
