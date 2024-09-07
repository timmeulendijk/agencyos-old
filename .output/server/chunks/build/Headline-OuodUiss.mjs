import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Headline",
  __ssrInlineRender: true,
  props: {
    content: {},
    as: { default: "h2" },
    size: { default: "md" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          {
            "text-xl": _ctx.size === "xs",
            "text-2xl": _ctx.size === "sm",
            "text-3xl": _ctx.size === "md",
            "text-4xl": _ctx.size === "lg",
            "text-2xl md:text-5xl": _ctx.size === "xl",
            "text-4xl xs:text-5xl md:text-7xl  dark:drop-shadow": _ctx.size === "title"
          },
          "font-display font-semibold leading-snug tracking-tight color-em dark:text-white"
        ]
      }, _attrs))}>${(_a = _ctx.content) != null ? _a : ""}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/typography/Headline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Headline-OuodUiss.mjs.map
