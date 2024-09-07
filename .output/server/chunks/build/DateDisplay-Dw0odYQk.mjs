import { a as getMonth, b as getDate, c as getDay } from './time-C5trUN3I.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DateDisplay",
  __ssrInlineRender: true,
  props: {
    date: {},
    size: { default: "md" },
    color: { default: "primary" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          {
            "border-primary-500": _ctx.color === "primary",
            "border-gray-500": _ctx.color === "gray",
            "border-amber-500": _ctx.color === "amber"
          },
          "overflow-hidden text-center border rounded-lg"
        ]
      }, _attrs))}><div class="${ssrRenderClass([
        {
          "px-2 py-0.5 text-xs": _ctx.size === "xs",
          "px-2 py-1 text-xs": _ctx.size === "sm",
          "px-4 py-1 text-sm": _ctx.size === "md",
          "px-6 py-2 text-base": _ctx.size === "lg"
        },
        {
          "bg-primary-500": _ctx.color === "primary",
          "bg-gray-500": _ctx.color === "gray",
          "bg-amber-500": _ctx.color === "amber"
        },
        "font-semibold text-white uppercase"
      ])}">${ssrInterpolate(_ctx.date ? ("getMonth" in _ctx ? _ctx.getMonth : unref(getMonth))(_ctx.date) : "?")}</div><div class="${ssrRenderClass([
        {
          "py-1 px-1 text-xs": _ctx.size === "xs",
          "px-2": _ctx.size === "sm",
          "px-4 text-2xl": _ctx.size === "md",
          "px-6 text-3xl": _ctx.size === "lg"
        },
        "font-bold"
      ])}">${ssrInterpolate(_ctx.date ? ("getDate" in _ctx ? _ctx.getDate : unref(getDate))(_ctx.date) : "TBD")}</div>`);
      if (_ctx.size !== "xs") {
        _push(`<div class="${ssrRenderClass([
          {
            "px-2 text-xs": _ctx.size === "sm",
            "px-4 text-sm": _ctx.size === "md",
            "px-6 text-base": _ctx.size === "lg"
          },
          "text-primary-500"
        ])}">${ssrInterpolate(_ctx.date ? ("getDay" in _ctx ? _ctx.getDay : unref(getDay))(_ctx.date) : "")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DateDisplay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DateDisplay-Dw0odYQk.mjs.map
