import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VText",
  __ssrInlineRender: true,
  props: {
    as: { default: "p" },
    size: { default: "sm" },
    textColor: { default: "default" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
        class: [
          {
            "text-gray-900 dark:text-white": _ctx.textColor === "default",
            "text-gray-600 dark:text-gray-300": _ctx.textColor === "light"
          },
          {
            "text-xs sm:text-sm": _ctx.size === "xs",
            "text-sm sm:text-base": _ctx.size === "sm",
            "text-base sm:text-lg": _ctx.size === "md",
            "text-lg sm:text-xl": _ctx.size === "lg",
            "text-xl sm:text-2xl": _ctx.size === "xl",
            "text-2xl sm:text-3xl": _ctx.size === "2xl",
            "text-3xl sm:text-4xl": _ctx.size === "3xl"
          }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VText-D0MQff2t.mjs.map
