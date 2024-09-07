import { _ as _sfc_main$2 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as _sfc_main$3 } from './VText-D0MQff2t.mjs';
import { _ as _sfc_main$4 } from './DateDisplay-Dw0odYQk.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute, i as useAsyncData, _ as __nuxt_component_4 } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem } from '@directus/sdk';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import 'vue-dompurify-html';
import 'node:crypto';
import './Headline-OuodUiss.mjs';
import './time-C5trUN3I.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VHorizontalNavigation",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex" }, _attrs))}><nav class="flex gap-4"><!--[-->`);
      ssrRenderList(_ctx.items, (tab) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: tab.name,
          href: tab.href,
          "exact-active-class": "text-primary-700 bg-primary-100 dark:bg-primary-900 dark:text-white",
          class: "px-3 py-2 text-sm font-medium text-gray-500 transition duration-300 rounded-button hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tab.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tab.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VHorizontalNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path, params } = useRoute();
    const {
      data: project,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(Math.random().toString(36).substring(2, 15), () => {
      return useDirectus(readItem("os_projects", params.id));
    }, "$xjJu4XoYNq")), __temp = await __temp, __restore(), __temp);
    const tabs = [
      {
        name: "Overview",
        href: `/portal/projects/${params.id}`
      },
      {
        name: "Tasks",
        href: `/portal/projects/${params.id}/tasks`
      },
      {
        name: "Conversations",
        href: `/portal/projects/${params.id}/conversations`
      },
      {
        name: "Files",
        href: `/portal/projects/${params.id}/files`
      },
      {
        name: "Billing",
        href: `/portal/projects/${params.id}/billing`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PortalPageHeader = _sfc_main$2;
      const _component_VText = _sfc_main$3;
      const _component_DateDisplay = _sfc_main$4;
      const _component_VHorizontalNavigation = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: (_a = unref(project)) == null ? void 0 : _a.name,
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Projects",
            href: "/portal/projects"
          }
        ]
      }, {
        center: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="inline-flex items-center gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VText, {
              class: "font-semibold",
              "text-color": "light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Target Date`);
                } else {
                  return [
                    createTextVNode("Target Date")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DateDisplay, {
              date: (_a2 = unref(project)) == null ? void 0 : _a2.due_date,
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "inline-flex items-center gap-x-4" }, [
                createVNode(_component_VText, {
                  class: "font-semibold",
                  "text-color": "light"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Target Date")
                  ]),
                  _: 1
                }),
                createVNode(_component_DateDisplay, {
                  date: (_b = unref(project)) == null ? void 0 : _b.due_date,
                  size: "xs"
                }, null, 8, ["date"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="relative">`);
      _push(ssrRenderComponent(_component_VHorizontalNavigation, { items: tabs }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BwkzMlQM.mjs.map
