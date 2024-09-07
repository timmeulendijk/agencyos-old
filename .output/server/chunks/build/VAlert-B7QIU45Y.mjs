import __nuxt_component_0 from './index-Dqa-xyfo.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VAlert",
  __ssrInlineRender: true,
  props: {
    type: { default: "info" }
  },
  setup(__props) {
    const iconMap = {
      info: "heroicons:information-circle-solid",
      success: "heroicons:check-circle-solid",
      warning: "heroicons:exclamation-triangle-solid",
      error: "heroicons:x-circle-solid"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "p-4 dark:brightness-90 border-2",
          {
            "border-amber-500 text-amber-800 dark:text-amber-200": _ctx.type === "warning",
            "border-rose-500 text-rose-800 dark:text-rose-200": _ctx.type === "error",
            "border-green-500 text-green-800 dark:text-green-200": _ctx.type === "success",
            "border-blue-500 text-blue-800 dark:text-blue-200": _ctx.type === "info"
          }
        ]
      }, _attrs))}><div class="flex items-center"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: iconMap[_ctx.type],
        class: [
          "w-6 h-6",
          {
            "text-amber-500": _ctx.type === "warning",
            "text-rose-500": _ctx.type === "error",
            "text-green-500": _ctx.type === "success",
            "text-blue-500": _ctx.type === "info"
          }
        ],
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</div><div class="ml-3">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VAlert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VAlert-B7QIU45Y.mjs.map
