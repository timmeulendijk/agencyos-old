import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import __nuxt_component_0$1 from './index-Dqa-xyfo.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VBreadcrumbs",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center space-x-1 text -sm dark:text-gray-200" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.items, (item, itemIdx) => {
        _push(`<!--[-->`);
        if (item.href) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: item.href,
            class: "hover:text-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (itemIdx !== _ctx.items.length - 1) {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:chevron-right-rounded",
              class: "h-6 w-6 text-gray-500"
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<span class="font-bold">${ssrInterpolate(item.title)}</span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VBreadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VBreadcrumbs = _sfc_main$1;
      const _component_TypographyHeadline = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "px-4 py-3 border-b md:flex md:items-center md:justify-between dark:border-gray-700" }, _attrs))}><div class="flex-shrink-0 min-w-0">`);
      if (_ctx.breadcrumbs) {
        _push(ssrRenderComponent(_component_VBreadcrumbs, { items: _ctx.breadcrumbs }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.title) {
        _push(ssrRenderComponent(_component_TypographyHeadline, { content: _ctx.title }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "center", {}, null, _push, _parent);
      _push(`<div class="flex mt-4 md:ml-4 md:mt-0">`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHeader-BXMJ16Z0.mjs.map
