import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$2 } from './UIcon-CFeTNZEP.mjs';
import { u as usePopper, _ as __nuxt_component_2 } from './Dropdown-CMDTLEPg.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_4$1 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as __nuxt_component_0 } from './Kbd-CrBwD9Ot.mjs';
import { defineComponent, toRef, computed, ref, useSSRContext, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode } from 'vue';
import { m as mergeConfig, j as appConfig, v as defu, n as navigateTo, h as useFiles } from './server.mjs';
import { u as useUI, a as arrow } from './selectMenu-BQkBDEWS.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useToast } from './useToast-BMHYguAT.mjs';

const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-20 group",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",
  shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5",
  middot: "mx-1 text-gray-700 dark:text-gray-200",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow,
    base: "[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$1 = defineComponent({
  components: {
    UKbd: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: () => config.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config.default.closeDelay
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    function onMouseEnter() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      open,
      onMouseEnter,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UKbd = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if ((_a = _ctx.shortcuts) == null ? void 0 : _a.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">\xB7</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const fileIconMap = {
  folder: "material-symbols:folder",
  // Images
  "image/jpeg": "material-symbols:image",
  "image/png": "material-symbols:image",
  "image/gif": "material-symbols:image",
  "image/svg+xml": "material-symbols:image",
  "image/webp": "material-symbols:image",
  // Videos
  "video/mp4": "material-symbols:smart-display",
  "video/quicktime": "material-symbols:smart-display",
  // Audio
  "audio/mp3": "material-symbols:audio-file",
  "audio/aac": "material-symbols:audio-file",
  "audio/wav": "material-symbols:audio-file",
  "audio/ogg": "material-symbols:audio-file",
  // Text
  "text/csv": "material-symbols:csv",
  "text/plain": "material-symbols:text-snippet",
  // Files
  "application/pdf": "material-symbols:picture-as-pdf-sharp",
  "application/vnd.ms-excel": "material-symbols:sheets",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "material-symbols:sheets",
  "application/msword": "material-symbols:docs",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "material-symbols:docs",
  "application/vnd.ms-powerpoint": "material-symbols:slides",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "material-symbols:slides"
};
function getFileIcon(filetype) {
  if (!filetype)
    return "material-symbols:attachment";
  if (typeof filetype === "string" && !(filetype in fileIconMap)) {
    return "material-symbols:attachment";
  }
  return fileIconMap[filetype];
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileCard",
  __ssrInlineRender: true,
  props: {
    file: {}
  },
  setup(__props) {
    const toast = useToast();
    const { fileUrl } = useFiles();
    const possibleActions = (file) => {
      return [
        [
          {
            label: "Download File",
            icon: "material-symbols:download",
            click: () => {
              navigateTo(fileUrl(file.id + "?download"), {
                external: true
              });
            }
          },
          {
            label: "Open File in New Tab",
            icon: "material-symbols:tab-new-right-outline",
            click: () => {
              navigateTo(fileUrl(file.id), {
                external: true,
                open: {
                  target: "_blank"
                }
              });
            }
          },
          {
            label: "Preview Image",
            icon: "material-symbols:zoom-in"
          },
          {
            label: "Copy Link to File",
            icon: "material-symbols:link",
            click: () => {
              var _a;
              if (!file || !file.id)
                return;
              (void 0).clipboard.writeText((_a = fileUrl(file.id)) != null ? _a : "");
              toast.add({
                title: "Link Copied",
                description: "The link to the file has been copied to your clipboard.",
                icon: "material-symbols:content-copy-outline",
                color: "green",
                timeout: 3e3
              });
            }
          }
        ]
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_UIcon = _sfc_main$2;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _component_UTooltip = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: "h-full",
        ui: {
          strategy: "merge",
          ring: "hover:ring-primary dark:hover:ring-primary",
          body: {
            base: "h-full flex flex-col",
            padding: "p-4 md:p-4"
          }
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: ("getFileIcon" in _ctx ? _ctx.getFileIcon : unref(getFileIcon))((_a = _ctx.file) == null ? void 0 : _a.type),
              class: "flex-shrink-0 w-6 h-6 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs line-clamp-2"${_scopeId}>${ssrInterpolate(_ctx.file.filename_download)}</p></div>`);
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: possibleActions(_ctx.file)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "material-symbols:more-vert",
                    variant: "ghost",
                    color: "gray",
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "material-symbols:more-vert",
                      variant: "ghost",
                      color: "gray",
                      size: "lg"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="relative mt-2"${_scopeId}>`);
            if (_ctx.file.type.startsWith("image")) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: _ctx.file.id,
                alt: _ctx.file.filename_download,
                class: "object-cover object-center w-full rounded-card aspect-square bg-checkerboard dark:brightness-90"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="flex items-center justify-center h-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: ("getFileIcon" in _ctx ? _ctx.getFileIcon : unref(getFileIcon))(_ctx.file.type),
                class: "w-24 h-24 text-gray-500/30"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="absolute inset-0 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75"${_scopeId}><div class="flex gap-6"${_scopeId}>`);
            if (_ctx.file.type.startsWith("image")) {
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "material-symbols:zoom-in-rounded",
                size: "xl"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UTooltip, { text: "Open File in New Tab" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "material-symbols:tab-new-right-outline-rounded",
                    size: "xl",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id), {
                      external: true,
                      open: {
                        target: "_blank"
                      }
                    })
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "material-symbols:tab-new-right-outline-rounded",
                      size: "xl",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id), {
                        external: true,
                        open: {
                          target: "_blank"
                        }
                      })
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UTooltip, { text: "Download File" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "material-symbols:download-rounded",
                    size: "xl",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id + "?download"), {
                      external: true
                    })
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "material-symbols:download-rounded",
                      size: "xl",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id + "?download"), {
                        external: true
                      })
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full gap-2" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: ("getFileIcon" in _ctx ? _ctx.getFileIcon : unref(getFileIcon))((_b = _ctx.file) == null ? void 0 : _b.type),
                    class: "flex-shrink-0 w-6 h-6 text-gray-500"
                  }, null, 8, ["name"]),
                  createVNode("p", { class: "text-xs line-clamp-2" }, toDisplayString(_ctx.file.filename_download), 1)
                ]),
                createVNode(_component_UDropdown, {
                  items: possibleActions(_ctx.file)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      icon: "material-symbols:more-vert",
                      variant: "ghost",
                      color: "gray",
                      size: "lg"
                    })
                  ]),
                  _: 1
                }, 8, ["items"])
              ]),
              createVNode("div", { class: "relative mt-2" }, [
                _ctx.file.type.startsWith("image") ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  src: _ctx.file.id,
                  alt: _ctx.file.filename_download,
                  class: "object-cover object-center w-full rounded-card aspect-square bg-checkerboard dark:brightness-90"
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex items-center justify-center h-full"
                }, [
                  createVNode(_component_UIcon, {
                    name: ("getFileIcon" in _ctx ? _ctx.getFileIcon : unref(getFileIcon))(_ctx.file.type),
                    class: "w-24 h-24 text-gray-500/30"
                  }, null, 8, ["name"])
                ])),
                createVNode("div", { class: "absolute inset-0 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75" }, [
                  createVNode("div", { class: "flex gap-6" }, [
                    _ctx.file.type.startsWith("image") ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      icon: "material-symbols:zoom-in-rounded",
                      size: "xl"
                    })) : createCommentVNode("", true),
                    createVNode(_component_UTooltip, { text: "Open File in New Tab" }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          icon: "material-symbols:tab-new-right-outline-rounded",
                          size: "xl",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id), {
                            external: true,
                            open: {
                              target: "_blank"
                            }
                          })
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTooltip, { text: "Download File" }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          icon: "material-symbols:download-rounded",
                          size: "xl",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(fileUrl)(_ctx.file.id + "?download"), {
                            external: true
                          })
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/FileCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FileCard-lKi1YShj.mjs.map
