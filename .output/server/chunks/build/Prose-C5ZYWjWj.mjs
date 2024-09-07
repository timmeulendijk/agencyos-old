import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Prose",
  __ssrInlineRender: true,
  props: {
    content: {},
    size: { default: "md" }
  },
  setup(__props) {
    const contentEl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "contentEl",
        ref: contentEl,
        class: [
          {
            "prose-sm": _ctx.size === "sm",
            "md:prose-base lg:prose-lg": _ctx.size === "md",
            "prose-lg lg:prose-xl": _ctx.size === "lg"
          },
          "prose dark:prose-invert prose-img:rounded-lg prose-img:rounded-lg prose-img:border-2 prose-img:border-gray-500 prose-headings:font-display prose-headings:font-semibold"
        ]
      }, _attrs))}>${(_a = _ctx.content) != null ? _a : ""}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/typography/Prose.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Prose-C5ZYWjWj.mjs.map
