import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VDivider",
  __ssrInlineRender: true,
  props: {
    vertical: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.vertical) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full border-l border-gray-300 dark:border-gray-700" }, _attrs))}></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full border-t border-gray-300 dark:border-gray-700" }, _attrs))}></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VDivider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VDivider-CoLvA21X.mjs.map
