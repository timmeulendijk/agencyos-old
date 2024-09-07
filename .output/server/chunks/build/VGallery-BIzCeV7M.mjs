import { defineComponent, mergeProps, unref, useSSRContext, ref, computed, resolveDirective, withCtx, createVNode, withDirectives, openBlock, createBlock, createTextVNode, createCommentVNode, toDisplayString, Fragment, renderList, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { g as generateVideoEmbed } from './embed-BNjS_SEV.mjs';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as _sfc_main$2 } from './UIcon-CFeTNZEP.mjs';
import { _ as __nuxt_component_4$1 } from './Button-CwvMvtUt.mjs';
import { S as Se, _ as __nuxt_component_0 } from './Kbd-CrBwD9Ot.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VVideo",
  __ssrInlineRender: true,
  props: {
    url: {},
    title: {},
    name: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        id: _ctx.name,
        class: "w-full aspect-video",
        loading: "lazy",
        src: unref(generateVideoEmbed)(_ctx.url),
        frameborder: "0",
        allow: "autoplay; fullscreen; picture-in-picture",
        allowfullscreen: "",
        title: _ctx.title
      }, _attrs))}></iframe>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VGallery",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const currentItemIdx = ref(0);
    const currentItem = computed(() => {
      return props.items[currentItemIdx.value];
    });
    function next() {
      currentItemIdx.value = currentItemIdx.value === props.items.length - 1 ? 0 : currentItemIdx.value + 1;
    }
    function prev() {
      currentItemIdx.value = currentItemIdx.value === 0 ? props.items.length - 1 : currentItemIdx.value - 1;
    }
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    const isHelpOpen = ref(false);
    function toggleHelp() {
      isHelpOpen.value = !isHelpOpen.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_4;
      const _component_UIcon = _sfc_main$2;
      const _component_UButton = __nuxt_component_4$1;
      const _component_UKbd = __nuxt_component_0;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<!--[--><div class="gap-4 mt-4 md:columns-3"><!--[-->`);
      ssrRenderList(_ctx.items, (item, itemIdx) => {
        var _a;
        _push(`<button class="${ssrRenderClass([
          "block relative w-full mb-6 overflow-hidden border dark:border-gray-700 rounded-card focus:outline-none"
        ])}"><div class="relative block w-full overflow-hidden rounded-card group">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.id,
          alt: (_a = item.description) != null ? _a : "",
          class: "object-cover w-full transition duration-300 group-hover:scale-110"
        }, null, _parent));
        _push(`<div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "material-symbols:zoom-in-rounded",
          class: "w-12 h-12 text-primary"
        }, null, _parent));
        _push(`</div></div></button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(Se), {
        show: unref(isOpen),
        enter: "ease-out duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-75"${_scopeId}><div class="relative flex flex-col items-center justify-center w-full h-full max-w-7xl"${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "absolute z-50 hidden gap-2 text-white bg-opacity-75 item-center md:flex top-4 left-4" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: unref(isHelpOpen) ? "material-symbols:hide" : "material-symbols:help-outline-rounded",
              size: "xl",
              onClick: toggleHelp
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(isHelpOpen)) {
              _push2(`<div class="flex items-center px-3 py-1 text-xs bg-gray-900 backdrop-blur-sm rounded-button gap-x-4"${_scopeId}><p${_scopeId}> Press `);
              _push2(ssrRenderComponent(_component_UKbd, { value: "esc" }, null, _parent2, _scopeId));
              _push2(` to close </p><p${_scopeId}> Press `);
              _push2(ssrRenderComponent(_component_UKbd, { value: "\u2190" }, null, _parent2, _scopeId));
              _push2(` or `);
              _push2(ssrRenderComponent(_component_UKbd, { value: "\u2192" }, null, _parent2, _scopeId));
              _push2(` to navigate </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              class: "absolute z-50 top-4 right-4",
              icon: "material-symbols:close-rounded",
              size: "xl",
              onClick: toggle
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-center w-full h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              class: "absolute z-50 left-4",
              icon: "material-symbols:arrow-back-rounded",
              size: "xl",
              onClick: prev
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              class: "absolute z-50 right-4",
              icon: "material-symbols:arrow-forward-rounded",
              size: "xl",
              onClick: next
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative flex flex-col items-center justify-center w-full h-full p-20 mx-auto"${_scopeId}>`);
            if (unref(currentItem).description) {
              _push2(`<p class="inline-block px-6 py-2 text-sm text-white bg-gray-900 rounded-t-xl"${_scopeId}>${ssrInterpolate(unref(currentItem).description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.items, (item, itemIdx) => {
              var _a;
              _push2(ssrRenderComponent(_component_NuxtImg, {
                style: unref(currentItemIdx) === itemIdx ? null : { display: "none" },
                src: item.id,
                alt: (_a = item.description) != null ? _a : "",
                class: "object-contain w-full rounded-card"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-75" }, [
                createVNode("div", { class: "relative flex flex-col items-center justify-center w-full h-full max-w-7xl" }, [
                  withDirectives((openBlock(), createBlock("div", { class: "absolute z-50 hidden gap-2 text-white bg-opacity-75 item-center md:flex top-4 left-4" }, [
                    createVNode("div", null, [
                      createVNode(_component_UButton, {
                        icon: unref(isHelpOpen) ? "material-symbols:hide" : "material-symbols:help-outline-rounded",
                        size: "xl",
                        onClick: toggleHelp
                      }, null, 8, ["icon"])
                    ]),
                    unref(isHelpOpen) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center px-3 py-1 text-xs bg-gray-900 backdrop-blur-sm rounded-button gap-x-4"
                    }, [
                      createVNode("p", null, [
                        createTextVNode(" Press "),
                        createVNode(_component_UKbd, { value: "esc" }),
                        createTextVNode(" to close ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(" Press "),
                        createVNode(_component_UKbd, { value: "\u2190" }),
                        createTextVNode(" or "),
                        createVNode(_component_UKbd, { value: "\u2192" }),
                        createTextVNode(" to navigate ")
                      ])
                    ])) : createCommentVNode("", true)
                  ])), [
                    [_directive_auto_animate]
                  ]),
                  createVNode(_component_UButton, {
                    class: "absolute z-50 top-4 right-4",
                    icon: "material-symbols:close-rounded",
                    size: "xl",
                    onClick: toggle
                  }),
                  createVNode("div", { class: "flex items-center justify-center w-full h-full" }, [
                    createVNode(_component_UButton, {
                      class: "absolute z-50 left-4",
                      icon: "material-symbols:arrow-back-rounded",
                      size: "xl",
                      onClick: prev
                    }),
                    createVNode(_component_UButton, {
                      class: "absolute z-50 right-4",
                      icon: "material-symbols:arrow-forward-rounded",
                      size: "xl",
                      onClick: next
                    }),
                    createVNode("div", { class: "relative flex flex-col items-center justify-center w-full h-full p-20 mx-auto" }, [
                      unref(currentItem).description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "inline-block px-6 py-2 text-sm text-white bg-gray-900 rounded-t-xl"
                      }, toDisplayString(unref(currentItem).description), 1)) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, itemIdx) => {
                        var _a;
                        return withDirectives((openBlock(), createBlock(_component_NuxtImg, {
                          key: item.id,
                          src: item.id,
                          alt: (_a = item.description) != null ? _a : "",
                          class: "object-contain w-full rounded-card"
                        }, null, 8, ["src", "alt"])), [
                          [vShow, unref(currentItemIdx) === itemIdx]
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=VGallery-BIzCeV7M.mjs.map
