import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { u as userName } from './user-name-hNaZlTuZ.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VAvatar",
  __ssrInlineRender: true,
  props: {
    author: {},
    size: { default: "md" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center flex-none group dark:text-gray-100" }, _attrs))}><div class="mr-3">`);
      if (_ctx.author.avatar) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: [
            {
              "w-8 h-8 sm:h-10 sm:w-10": _ctx.size === "sm",
              "w-10 h-10 sm:h-14 sm:w-14": _ctx.size === "md",
              "w-12 h-12 sm:h-16 sm:w-16": _ctx.size === "lg"
            },
            "object-cover rounded-full dark:brightness-90"
          ],
          src: _ctx.author.avatar
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([
        {
          "text-sm sm:text-base": _ctx.size === "sm",
          "text-base sm:text-lg": _ctx.size === "md",
          "text-lg sm:text-xl": _ctx.size === "lg"
        },
        " "
      ])}"><span class="font-semibold font-display">${ssrInterpolate(("userName" in _ctx ? _ctx.userName : unref(userName))(_ctx.author))}</span>`);
      if (_ctx.author.title) {
        _push(`<span class="${ssrRenderClass([
          {
            "text-xs": _ctx.size === "sm",
            "text-sm": _ctx.size === "md",
            "": _ctx.size === "lg"
          },
          "block   pt-0.5"
        ])}">${ssrInterpolate(_ctx.author.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VAvatar-DZ5-rAwN.mjs.map
