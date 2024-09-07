import { _ as __nuxt_component_1 } from './Avatar-CM8WZfag.mjs';
import { h as useFiles } from './server.mjs';
import { u as userName } from './user-name-hNaZlTuZ.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserBadge",
  __ssrInlineRender: true,
  props: {
    user: {},
    size: { default: "md" }
  },
  setup(__props) {
    const { fileUrl } = useFiles();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center flex-none group dark:text-gray-100" }, _attrs))}><div class="mr-3">`);
      if (_ctx.user.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, {
          size: _ctx.size,
          src: unref(fileUrl)(_ctx.user.avatar),
          alt: ("userName" in _ctx ? _ctx.userName : unref(userName))(_ctx.user)
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
        "font-display font-bold word-spacing-tight"
      ])}">${ssrInterpolate(("userName" in _ctx ? _ctx.userName : unref(userName))(_ctx.user))} `);
      if (_ctx.user.title) {
        _push(`<span class="${ssrRenderClass([
          {
            "text-xs": _ctx.size === "sm",
            "text-sm": _ctx.size === "md",
            "": _ctx.size === "lg"
          },
          "block  font-bold tracking-widest uppercase pt-0.5"
        ])}">${ssrInterpolate(_ctx.user.title)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/UserBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UserBadge-DzE2kIn7.mjs.map
