import { defineComponent, useSlots, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';

function getContrastColor(hexColor) {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const colorChoices = [
      "gray",
      "green",
      "purple",
      "blue",
      "amber",
      "orange",
      "red",
      "indigo",
      "violet",
      "pink",
      "yellow"
    ];
    function randomBackgroundColor(seed, colors) {
      return colors[seed % colors.length];
    }
    const badgeColor = computed(() => {
      if (props.color)
        return props.color;
      const defaultSlot = slots.default ? slots.default()[0] : void 0;
      if (!defaultSlot || !(defaultSlot == null ? void 0 : defaultSlot.children))
        return null;
      return randomBackgroundColor(defaultSlot == null ? void 0 : defaultSlot.children.length, colorChoices);
    });
    const styleProp = computed(() => {
      if (!props.color)
        return void 0;
      return {
        backgroundColor: props.color,
        color: getContrastColor(props.color)
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: unref(styleProp),
        class: [
          "inline-flex items-center font-display font-medium rounded-button",
          unref(badgeColor) === "gray" ? `bg-gray-100 text-gray-800` : "",
          unref(badgeColor) === "green" ? `bg-green-100 text-green-800` : "",
          unref(badgeColor) === "purple" ? `bg-purple-100 text-purple-800` : "",
          unref(badgeColor) === "blue" ? `bg-blue-100 text-blue-800` : "",
          unref(badgeColor) === "amber" ? `bg-amber-100 text-amber-800` : "",
          unref(badgeColor) === "orange" ? `bg-orange-100 text-orange-800` : "",
          unref(badgeColor) === "red" ? `bg-red-100 text-red-800` : "",
          unref(badgeColor) === "indigo" ? `bg-indigo-100 text-indigo-800` : "",
          unref(badgeColor) === "violet" ? `bg-violet-100 text-violet-800` : "",
          unref(badgeColor) === "pink" ? `bg-primary-100 text-primary` : "",
          unref(badgeColor) === "yellow" ? `bg-yellow-100 text-yellow-800` : "",
          __props.size === "sm" ? "text-xs px-2 py-0.5" : "",
          __props.size === "lg" ? " px-2.5 py-0.5" : "",
          {
            " bg-gray-100 text-gray-800": !props.color
          }
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Category.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Author",
  __ssrInlineRender: true,
  props: {
    author: {},
    size: { default: "sm" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtImg = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center flex-none group dark:text-gray-100" }, _attrs))}><div class="mr-3">`);
      if ((_a = _ctx.author) == null ? void 0 : _a.image) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: [
            {
              "w-8 h-8 sm:h-10 sm:w-10": _ctx.size === "sm",
              "w-10 h-10 sm:h-14 sm:w-14": _ctx.size === "md",
              "w-12 h-12 sm:h-16 sm:w-16": _ctx.size === "lg"
            },
            "object-cover rounded-full dark:brightness-90"
          ],
          src: _ctx.author.image
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
      ])}"><span class="font-semibold font-display">${ssrInterpolate((_b = _ctx.author) == null ? void 0 : _b.name)}</span>`);
      if ((_c = _ctx.author) == null ? void 0 : _c.job_title) {
        _push(`<span class="${ssrRenderClass([
          {
            "text-xs": _ctx.size === "sm",
            "text-sm": _ctx.size === "md",
            "": _ctx.size === "lg"
          },
          "block   pt-0.5"
        ])}">${ssrInterpolate(_ctx.author.job_title)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Author.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Author-qysfQUeu.mjs.map
