import { _ as _sfc_main$j } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$k } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$l } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$m } from './Prose-C5ZYWjWj.mjs';
import { b as button, _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { useSSRContext, defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, toRef, watch, unref, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, inject, resolveDirective, withDirectives, vShow, Fragment, renderList, resolveComponent, renderSlot, withKeys, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_4$1 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as _sfc_main$n } from './UIcon-CFeTNZEP.mjs';
import { u as useId } from './id-CsF31SPu.mjs';
import { I, u, o, t, i, A, l, N as N$1, a as l$1 } from './open-closed-Dy9w_Ur1.mjs';
import { s, o as o$1 } from './keyboard-puKMRDGD.mjs';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { u as useUI, o as omit$1 } from './selectMenu-BQkBDEWS.mjs';
import { m as mergeConfig, j as appConfig, r as useDebounceFn, i as useAsyncData, s as useIntersectionObserver, t as useResizeObserver, h as useFiles } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$o } from './UForm-BXdHEs5F.mjs';
import { _ as _sfc_main$p } from './Motionable-BeRKE-n3.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import __nuxt_component_0$1 from './index-Dqa-xyfo.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { _ as _sfc_main$1$1, a as _sfc_main$q } from './VGallery-BIzCeV7M.mjs';
import { s as safeRelationId, a as safeRelation } from './relations-DIdeUpYC.mjs';

const accordion = {
  wrapper: "w-full flex flex-col",
  container: "w-full flex flex-col",
  item: {
    base: "",
    size: "text-sm",
    color: "text-gray-500 dark:text-gray-400",
    padding: "pt-1.5 pb-3",
    icon: "ms-auto transform transition-transform duration-200 flex-shrink-0"
  },
  transition: {
    enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
    leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
  },
  default: {
    openIcon: "i-heroicons-chevron-down-20-solid",
    closeIcon: "",
    class: "mb-1.5 w-full",
    variant: "soft",
    truncate: true
  }
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "ButtonGroup",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    function getUrl(button2) {
      var _a2, _b2, _c;
      var _a, _b;
      switch (button2.type) {
        case "pages":
          return (_a2 = (_a = button2.page) == null ? void 0 : _a.permalink) != null ? _a2 : void 0;
        case "posts":
          return (_b2 = (_b = button2.post) == null ? void 0 : _b.slug) != null ? _b2 : void 0;
        case "external":
          return (_c = button2.external_url) != null ? _c : void 0;
        default:
          return void 0;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `flex flex-col justify-${_ctx.data.alignment} space-y-4 md:space-x-4 md:flex-row md:space-y-0`
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data.buttons, (button2) => {
        var _a;
        _push(ssrRenderComponent(_component_UButton, {
          key: button2.id,
          to: getUrl(button2),
          color: button2 == null ? void 0 : button2.color,
          variant: button2 == null ? void 0 : button2.variant,
          target: (button2 == null ? void 0 : button2.external_url) ? "_blank" : "_self",
          label: (_a = button2 == null ? void 0 : button2.label) != null ? _a : void 0,
          size: "xl",
          "trailing-icon": "material-symbols:arrow-forward-rounded"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ButtonGroup.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyProse = _sfc_main$m;
      const _component_BlocksButtonGroup = _sfc_main$i;
      const _component_NuxtImg = __nuxt_component_4$1;
      _push(ssrRenderComponent(_component_BlockContainer, mergeProps({ class: "relative grid gap-12 md:grid-cols-3" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="md:pt-12 md:col-span-2"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "title",
                as: "h1"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.content) {
              _push2(ssrRenderComponent(_component_TypographyProse, {
                content: _ctx.data.content,
                size: "lg",
                class: "py-6 font-display"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.button_group) {
              _push2(ssrRenderComponent(_component_BlocksButtonGroup, {
                data: _ctx.data.button_group
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.data.image) {
              _push2(`<div class="${ssrRenderClass([_ctx.data.image_position === "left" ? "order-first lg:-ml-48 md:-ml-16" : "lg:-mr-48 md:-mr-16 ", "overflow-hidden border lg:relative lg:h-full dark:border-gray-700 rounded-card"])}"${_scopeId}>`);
              if (_ctx.data.image) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  class: "w-full overflow-hidden dark:brightness-90 max-h-[700px] h-full object-cover rounded-card",
                  src: _ctx.data.image,
                  alt: ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "md:pt-12 md:col-span-2" }, [
                _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.data.title), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 1,
                  content: _ctx.data.headline,
                  size: "title",
                  as: "h1"
                }, null, 8, ["content"])) : createCommentVNode("", true),
                _ctx.data.content ? (openBlock(), createBlock(_component_TypographyProse, {
                  key: 2,
                  content: _ctx.data.content,
                  size: "lg",
                  class: "py-6 font-display"
                }, null, 8, ["content"])) : createCommentVNode("", true),
                _ctx.data.button_group ? (openBlock(), createBlock(_component_BlocksButtonGroup, {
                  key: 3,
                  data: _ctx.data.button_group
                }, null, 8, ["data"])) : createCommentVNode("", true)
              ]),
              _ctx.data.image ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["overflow-hidden border lg:relative lg:h-full dark:border-gray-700 rounded-card", _ctx.data.image_position === "left" ? "order-first lg:-ml-48 md:-ml-16" : "lg:-mr-48 md:-mr-16 "]
              }, [
                _ctx.data.image ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  class: "w-full overflow-hidden dark:brightness-90 max-h-[700px] h-full object-cover rounded-card",
                  src: _ctx.data.image,
                  alt: ""
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Hero.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s2 = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i$1 = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${I()}`), panelId: ref(`headlessui-disclosure-panel-${I()}`), disclosureState: s2, panel: e, button: i$1, toggleDisclosure() {
    s2.value = u(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o(l2) : o(n.button) : o(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), t(computed(() => u(s2.value, { [0]: i.Open, [1]: i.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c = { open: s2.value === 0, close: n.close };
    return A({ theirProps: a, ourProps: {}, slot: c, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2, expose: s$1 }) {
  let e = O("DisclosureButton"), i2 = U(), n = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$1({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled)
      if (n.value)
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o(e.button)) == null || S.focus();
            break;
        }
      else
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
            break;
        }
  }
  function v(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v };
    return A({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i$1 = l(), n = computed(() => i$1 !== null ? (i$1.value & i.Open) === i.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return A({ ourProps: D, theirProps: c, slot: l2, attrs: r, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.accordion, accordion);
const configButton = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$g = defineComponent({
  components: {
    HDisclosure: N,
    HDisclosureButton: Q,
    HDisclosurePanel: V,
    UIcon,
    UButton: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String,
      default: () => config.default.openIcon
    },
    unmount: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: () => config.default.closeIcon
    },
    multiple: {
      type: Boolean,
      default: false
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
  emits: ["open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("accordion", toRef(props, "ui"), config, toRef(props, "class"));
    const uiButton = computed(() => configButton);
    const buttonRefs = ref([]);
    const openedStates = computed(() => buttonRefs.value.map(({ open }) => open));
    watch(openedStates, (newValue, oldValue) => {
      for (const index in newValue) {
        const isOpenBefore = oldValue[index];
        const isOpenAfter = newValue[index];
        if (!isOpenBefore && isOpenAfter) {
          emit("open", index);
        }
      }
    }, { immediate: true });
    function closeOthers(currentIndex, e) {
      if (!props.items[currentIndex].closeOthers && props.multiple) {
        return;
      }
      buttonRefs.value.forEach((button2) => {
        if (button2.open) {
          button2.close(e.target);
        }
      });
    }
    function onEnter(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(_el) {
      const el = _el;
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(_el) {
      const el = _el;
      el.style.height = "auto";
    }
    function onLeave(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    l$1(() => useId("$bsXgmaOzXR"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      uiButton,
      attrs,
      buttonRefs,
      closeOthers,
      omit: omit$1,
      onEnter,
      onBeforeLeave,
      onAfterEnter,
      onLeave
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HDisclosure = resolveComponent("HDisclosure");
  const _component_HDisclosureButton = resolveComponent("HDisclosureButton");
  const _component_UButton = __nuxt_component_4;
  const _component_UIcon = _sfc_main$n;
  const _component_HDisclosurePanel = resolveComponent("HDisclosurePanel");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(ssrRenderComponent(_component_HDisclosure, {
      key: index,
      as: "div",
      class: _ctx.ui.container,
      "default-open": _ctx.defaultOpen || item.defaultOpen
    }, {
      default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_HDisclosureButton, {
            ref_for: true,
            ref: () => _ctx.buttonRefs[index] = { open, close },
            as: "template",
            disabled: item.disabled,
            onClick: ($event) => _ctx.closeOthers(index, $event),
            onKeydown: [($event) => _ctx.closeOthers(index, $event), ($event) => _ctx.closeOthers(index, $event)]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => {
                  _push3(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ...("omit" in _ctx ? _ctx.omit : unref(omit))(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ...("omit" in _ctx ? _ctx.omit : unref(omit))(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                            class: [
                              open && !_ctx.closeIcon ? "-rotate-180" : "",
                              _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                              _ctx.ui.item.icon
                            ]
                          }, null, 8, ["name", "class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default", {
                    item,
                    index,
                    open,
                    close
                  }, () => [
                    createVNode(_component_UButton, mergeProps({ ref_for: true }, { ...("omit" in _ctx ? _ctx.omit : unref(omit))(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ...("omit" in _ctx ? _ctx.omit : unref(omit))(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                      trailing: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, 8, ["name", "class"])
                      ]),
                      _: 2
                    }, 1040)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(``);
          if (_ctx.unmount) {
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              unmount: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<div style="${ssrRenderStyle(open ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              static: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          }
        } else {
          return [
            createVNode(_component_HDisclosureButton, {
              ref_for: true,
              ref: () => _ctx.buttonRefs[index] = { open, close },
              as: "template",
              disabled: item.disabled,
              onClick: ($event) => _ctx.closeOthers(index, $event),
              onKeydown: [
                withKeys(($event) => _ctx.closeOthers(index, $event), ["enter"]),
                withKeys(($event) => _ctx.closeOthers(index, $event), ["space"])
              ]
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => [
                  createVNode(_component_UButton, mergeProps({ ref_for: true }, { ...("omit" in _ctx ? _ctx.omit : unref(omit))(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ...("omit" in _ctx ? _ctx.omit : unref(omit))(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                        class: [
                          open && !_ctx.closeIcon ? "-rotate-180" : "",
                          _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                          _ctx.ui.item.icon
                        ]
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1040)
                ])
              ]),
              _: 2
            }, 1032, ["disabled", "onClick", "onKeydown"]),
            createVNode(Transition, mergeProps({ ref_for: true }, _ctx.ui.transition, {
              onEnter: _ctx.onEnter,
              onAfterEnter: _ctx.onAfterEnter,
              onBeforeLeave: _ctx.onBeforeLeave,
              onLeave: _ctx.onLeave
            }), {
              default: withCtx(() => [
                _ctx.unmount ? (openBlock(), createBlock(_component_HDisclosurePanel, {
                  key: 0,
                  class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                  unmount: ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"])) : withDirectives((openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_HDisclosurePanel, {
                    class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        open,
                        close
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 512)), [
                  [vShow, open]
                ])
              ]),
              _: 2
            }, 1040, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Faqs",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const offset = ref(0);
    const limit = ref(5);
    const faqs = computed(() => {
      var _a, _b;
      return (_b = (_a = props.data) == null ? void 0 : _a.faqs) == null ? void 0 : _b.slice(offset.value, limit.value).map((item) => {
        return {
          label: item == null ? void 0 : item.title,
          content: item == null ? void 0 : item.answer
        };
      });
    });
    function loadMore() {
      limit.value += 5;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_UAccordion = __nuxt_component_3;
      const _component_UIcon = _sfc_main$n;
      const _component_UButton = __nuxt_component_4;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([
              {
                "mx-auto max-w-3xl": _ctx.data.alignment === "center"
              }
            ])}"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="pt-6 mt-6"${_scopeId}>`);
            if (unref(faqs)) {
              _push2(ssrRenderComponent(_component_UAccordion, mergeProps({
                items: unref(faqs),
                ui: { wrapper: "space-y-2" }
              }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)), {
                default: withCtx(({ item, index, open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="${ssrRenderClass([[
                      open ? "bg-primary/20" : "bg-gray-100 dark:bg-gray-800",
                      `rounded-card`,
                      "relative px-6 py-4   0"
                    ], "flex items-center justify-between w-full text-left text-gray-400 transition duration-150 focus:outline-none focus:text-gray-900 dark:focus:text-primary"])}"${_scopeId2}><span class="text-sm font-medium text-gray-900 dark:text-white font-display md:text-base"${_scopeId2}>${ssrInterpolate(item.label)}</span><span class="flex items-center"${_scopeId2}>`);
                    if (!open) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "material-symbols:add-rounded",
                        class: "w-8 h-8 rounded-full fill-current text-primary"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (open) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "material-symbols:remove-rounded",
                        class: "w-8 h-8 rounded-full fill-current text-primary"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></button>`);
                  } else {
                    return [
                      (openBlock(), createBlock("button", {
                        key: index,
                        class: [[
                          open ? "bg-primary/20" : "bg-gray-100 dark:bg-gray-800",
                          `rounded-card`,
                          "relative px-6 py-4   0"
                        ], "flex items-center justify-between w-full text-left text-gray-400 transition duration-150 focus:outline-none focus:text-gray-900 dark:focus:text-primary"]
                      }, [
                        createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white font-display md:text-base" }, toDisplayString(item.label), 1),
                        createVNode("span", { class: "flex items-center" }, [
                          !open ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "material-symbols:add-rounded",
                            class: "w-8 h-8 rounded-full fill-current text-primary"
                          })) : createCommentVNode("", true),
                          open ? (openBlock(), createBlock(_component_UIcon, {
                            key: 1,
                            name: "material-symbols:remove-rounded",
                            class: "w-8 h-8 rounded-full fill-current text-primary"
                          })) : createCommentVNode("", true)
                        ])
                      ], 2))
                    ];
                  }
                }),
                item: withCtx(({ item, open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle(open ? null : { display: "none" })}" class="relative px-6 pt-2 pb-6"${_scopeId2}><div class="prose text-left dark:prose-invert"${_scopeId2}>${ssrInterpolate(item.content)}</div></div>`);
                  } else {
                    return [
                      withDirectives(createVNode("div", { class: "relative px-6 pt-2 pb-6" }, [
                        createVNode("div", { class: "prose text-left dark:prose-invert" }, toDisplayString(item.content), 1)
                      ], 512), [
                        [vShow, open]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-2 text-center"${_scopeId}>`);
            if (unref(faqs) && props.data.faqs && unref(faqs).length < props.data.faqs.length) {
              _push2(ssrRenderComponent(_component_UButton, {
                variant: "ghost",
                size: "xl",
                onClick: loadMore
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Load More `);
                  } else {
                    return [
                      createTextVNode(" Load More ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: [
                  {
                    "mx-auto max-w-3xl": _ctx.data.alignment === "center"
                  }
                ]
              }, [
                _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.data.title), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 1,
                  content: _ctx.data.headline,
                  size: "lg"
                }, null, 8, ["content"])) : createCommentVNode("", true),
                createVNode("div", { class: "pt-6 mt-6" }, [
                  unref(faqs) ? withDirectives((openBlock(), createBlock(_component_UAccordion, {
                    key: 0,
                    items: unref(faqs),
                    ui: { wrapper: "space-y-2" }
                  }, {
                    default: withCtx(({ item, index, open }) => [
                      (openBlock(), createBlock("button", {
                        key: index,
                        class: [[
                          open ? "bg-primary/20" : "bg-gray-100 dark:bg-gray-800",
                          `rounded-card`,
                          "relative px-6 py-4   0"
                        ], "flex items-center justify-between w-full text-left text-gray-400 transition duration-150 focus:outline-none focus:text-gray-900 dark:focus:text-primary"]
                      }, [
                        createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white font-display md:text-base" }, toDisplayString(item.label), 1),
                        createVNode("span", { class: "flex items-center" }, [
                          !open ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "material-symbols:add-rounded",
                            class: "w-8 h-8 rounded-full fill-current text-primary"
                          })) : createCommentVNode("", true),
                          open ? (openBlock(), createBlock(_component_UIcon, {
                            key: 1,
                            name: "material-symbols:remove-rounded",
                            class: "w-8 h-8 rounded-full fill-current text-primary"
                          })) : createCommentVNode("", true)
                        ])
                      ], 2))
                    ]),
                    item: withCtx(({ item, open }) => [
                      withDirectives(createVNode("div", { class: "relative px-6 pt-2 pb-6" }, [
                        createVNode("div", { class: "prose text-left dark:prose-invert" }, toDisplayString(item.content), 1)
                      ], 512), [
                        [vShow, open]
                      ])
                    ]),
                    _: 1
                  }, 8, ["items"])), [
                    [_directive_auto_animate]
                  ]) : createCommentVNode("", true),
                  createVNode("div", { class: "mt-2 text-center" }, [
                    unref(faqs) && props.data.faqs && unref(faqs).length < props.data.faqs.length ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      variant: "ghost",
                      size: "xl",
                      onClick: loadMore
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Load More ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Faqs.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RichText",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({
      alignment: "center"
    }) }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyProse = _sfc_main$m;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([
              {
                "text-left": _ctx.data.alignment === "left",
                "text-center": _ctx.data.alignment === "center"
              }
            ])}"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.data.content) {
              _push2(ssrRenderComponent(_component_TypographyProse, {
                content: _ctx.data.content,
                class: [
                  {
                    "mx-auto": _ctx.data.alignment === "center"
                  },
                  "mt-8 "
                ]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: [
                  {
                    "text-left": _ctx.data.alignment === "left",
                    "text-center": _ctx.data.alignment === "center"
                  }
                ]
              }, [
                _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.data.title), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 1,
                  content: _ctx.data.headline,
                  size: "lg"
                }, null, 8, ["content"])) : createCommentVNode("", true)
              ], 2),
              _ctx.data.content ? (openBlock(), createBlock(_component_TypographyProse, {
                key: 0,
                content: _ctx.data.content,
                class: [
                  {
                    "mx-auto": _ctx.data.alignment === "center"
                  },
                  "mt-8 "
                ]
              }, null, 8, ["content", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/RichText.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const testimonials = computed(() => {
      const testimonialsArray = unref(props.data).testimonials;
      if (!testimonialsArray)
        return [];
      return testimonialsArray.map((item) => {
        return item.testimonials_id;
      });
    });
    const testimonialContainer = ref(null);
    const testimonialRefs = ref([]);
    const currentItemIdx = ref(0);
    function handleScroll(e) {
      var _a;
      const target = e.target;
      if (!testimonialContainer.value || !testimonialRefs.value)
        return;
      const testimonialWidth = ((_a = testimonialRefs.value[0]) == null ? void 0 : _a.offsetWidth) || 0;
      const testimonialCenter = testimonialWidth / 2;
      const scrollLeft = target.scrollLeft;
      const scrollCenter = scrollLeft + testimonialCenter;
      const closestTestimonial = Math.round(scrollCenter / testimonialWidth);
      if (scrollLeft === 0) {
        currentItemIdx.value = 0;
      } else if (scrollLeft + target.offsetWidth + 1 >= target.scrollWidth) {
        currentItemIdx.value = testimonialRefs.value.length - 1;
      } else {
        currentItemIdx.value = closestTestimonial;
      }
    }
    const debouncedScroll = useDebounceFn(handleScroll, 150);
    function handleScrollDebounced(e) {
      debouncedScroll(e);
    }
    function handleIndicatorButton(index) {
      var _a, _b;
      if (!testimonialContainer.value || !testimonialRefs.value)
        return;
      const scrollLeft = (_a = testimonialContainer == null ? void 0 : testimonialContainer.value) == null ? void 0 : _a.scrollLeft;
      const offsetLeft = (_b = testimonialRefs == null ? void 0 : testimonialRefs.value[index]) == null ? void 0 : _b.offsetLeft;
      if (typeof scrollLeft !== "undefined" && typeof offsetLeft !== "undefined") {
        testimonialContainer.value.scrollLeft = offsetLeft - 16;
      }
    }
    function handleNavButton(direction) {
      var _a, _b;
      if (!testimonialContainer.value || !testimonialRefs.value)
        return;
      const scrollLeft = (_a = testimonialContainer == null ? void 0 : testimonialContainer.value) == null ? void 0 : _a.scrollLeft;
      const offsetWidth = (_b = testimonialRefs == null ? void 0 : testimonialRefs.value[currentItemIdx == null ? void 0 : currentItemIdx.value]) == null ? void 0 : _b.offsetWidth;
      if (typeof scrollLeft !== "undefined" && typeof offsetWidth !== "undefined") {
        if (direction === "left") {
          testimonialContainer.value.scrollLeft -= offsetWidth;
        } else {
          testimonialContainer.value.scrollLeft += offsetWidth;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_UButton = __nuxt_component_4;
      const _component_UIcon = _sfc_main$n;
      const _component_TypographyProse = _sfc_main$m;
      const _component_NuxtImg = __nuxt_component_4$1;
      _push(ssrRenderComponent(_component_BlockContainer, mergeProps({
        class: "relative overflow-hidden",
        "full-width": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary"${_scopeId}></div><div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10"${_scopeId}></div><div class="relative text-center"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(testimonials).length > 0) {
              _push2(`<div class="relative mt-4"${_scopeId}><div class="flex items-center justify-end px-6 space-x-8 lg:px-16"${_scopeId}><div class="inline-flex space-x-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(testimonials), (item, itemIdx) => {
                _push2(`<button class="${ssrRenderClass([[
                  {
                    "bg-primary": itemIdx === unref(currentItemIdx),
                    "bg-gray-500 bg-opacity-50 dark:bg-gray-900 ": itemIdx !== unref(currentItemIdx)
                  }
                ], "flex items-center justify-center w-12 h-3 rounded-button hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"])}"${_scopeId}></button>`);
              });
              _push2(`<!--]--></div><div class="flex gap-2 justify-self-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                disabled: unref(currentItemIdx) === 0,
                icon: "material-symbols:arrow-back-rounded",
                size: "lg",
                square: "",
                onClick: ($event) => handleNavButton("left")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                disabled: unref(currentItemIdx) === unref(testimonials).length - 1,
                icon: "material-symbols:arrow-forward-rounded",
                size: "lg",
                square: "",
                onClick: ($event) => handleNavButton("right")
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex w-full px-4 py-6 space-x-6 overflow-x-auto md:px-6 lg:px-16 scrollbar-hide md:pt-8 snap-x scroll-smooth"${_scopeId}><!--[-->`);
              ssrRenderList(unref(testimonials), (testimonial) => {
                var _a2;
                var _a, _b;
                _push2(`<div class="${ssrRenderClass([["snap-center"], "relative w-[350px] md:w[450px] lg:w-[600px] flex flex-col justify-between flex-shrink-0 p-8 bg-white dark:bg-gray-900 shadow-md rounded-card overflow-hidden"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "material-symbols:format-quote-rounded",
                  class: "absolute w-20 h-20 rotate-180 left-2 text-primary/20 top-2"
                }, null, _parent2, _scopeId));
                if (testimonial == null ? void 0 : testimonial.content) {
                  _push2(ssrRenderComponent(_component_TypographyProse, {
                    content: testimonial == null ? void 0 : testimonial.content,
                    size: "lg",
                    class: "relative"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex pt-6 mt-4 space-x-2 border-t border-gray-300 dark:border-gray-700"${_scopeId}>`);
                if ((_a = testimonial == null ? void 0 : testimonial.image) == null ? void 0 : _a.id) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    class: "inline-block w-16 h-16 border rounded-button",
                    src: (_b = testimonial == null ? void 0 : testimonial.image) == null ? void 0 : _b.id,
                    alt: (_a2 = testimonial.title) != null ? _a2 : ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "material-symbols:account-circle",
                    class: "inline-block w-16 h-16 text-gray-300 border rounded-button"
                  }, null, _parent2, _scopeId));
                }
                _push2(`<div class="relative"${_scopeId}>`);
                if (testimonial.title) {
                  _push2(`<p class="font-semibold text-primary font-display lg:text-2xl"${_scopeId}>${ssrInterpolate(testimonial.title)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p class="text-sm text-gray-700 lg:text-lg dark:text-gray-300"${_scopeId}>${ssrInterpolate(testimonial.subtitle)} at ${ssrInterpolate(testimonial.company)}</p></div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary" }),
              createVNode("div", { class: "absolute inset-0 opacity-50 grain-bg dark:opacity-10" }),
              createVNode("div", { class: "relative text-center" }, [
                _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.data.title), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 1,
                  content: _ctx.data.headline,
                  size: "lg"
                }, null, 8, ["content"])) : createCommentVNode("", true)
              ]),
              unref(testimonials).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "relative mt-4"
              }, [
                createVNode("div", { class: "flex items-center justify-end px-6 space-x-8 lg:px-16" }, [
                  createVNode("div", { class: "inline-flex space-x-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonials), (item, itemIdx) => {
                      return openBlock(), createBlock("button", {
                        key: item.id,
                        class: [[
                          {
                            "bg-primary": itemIdx === unref(currentItemIdx),
                            "bg-gray-500 bg-opacity-50 dark:bg-gray-900 ": itemIdx !== unref(currentItemIdx)
                          }
                        ], "flex items-center justify-center w-12 h-3 rounded-button hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"],
                        onClick: ($event) => handleIndicatorButton(itemIdx)
                      }, null, 10, ["onClick"]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex gap-2 justify-self-end" }, [
                    createVNode(_component_UButton, {
                      disabled: unref(currentItemIdx) === 0,
                      icon: "material-symbols:arrow-back-rounded",
                      size: "lg",
                      square: "",
                      onClick: ($event) => handleNavButton("left")
                    }, null, 8, ["disabled", "onClick"]),
                    createVNode(_component_UButton, {
                      disabled: unref(currentItemIdx) === unref(testimonials).length - 1,
                      icon: "material-symbols:arrow-forward-rounded",
                      size: "lg",
                      square: "",
                      onClick: ($event) => handleNavButton("right")
                    }, null, 8, ["disabled", "onClick"])
                  ])
                ]),
                createVNode("div", {
                  ref_key: "testimonialContainer",
                  ref: testimonialContainer,
                  class: "flex w-full px-4 py-6 space-x-6 overflow-x-auto md:px-6 lg:px-16 scrollbar-hide md:pt-8 snap-x scroll-smooth",
                  onScroll: handleScrollDebounced
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonials), (testimonial) => {
                    var _a2;
                    var _a, _b;
                    return openBlock(), createBlock("div", {
                      key: testimonial.id,
                      ref_for: true,
                      ref_key: "testimonialRefs",
                      ref: testimonialRefs,
                      class: [["snap-center"], "relative w-[350px] md:w[450px] lg:w-[600px] flex flex-col justify-between flex-shrink-0 p-8 bg-white dark:bg-gray-900 shadow-md rounded-card overflow-hidden"]
                    }, [
                      createVNode(_component_UIcon, {
                        name: "material-symbols:format-quote-rounded",
                        class: "absolute w-20 h-20 rotate-180 left-2 text-primary/20 top-2"
                      }),
                      (testimonial == null ? void 0 : testimonial.content) ? (openBlock(), createBlock(_component_TypographyProse, {
                        key: 0,
                        content: testimonial == null ? void 0 : testimonial.content,
                        size: "lg",
                        class: "relative"
                      }, null, 8, ["content"])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex pt-6 mt-4 space-x-2 border-t border-gray-300 dark:border-gray-700" }, [
                        ((_a = testimonial == null ? void 0 : testimonial.image) == null ? void 0 : _a.id) ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 0,
                          class: "inline-block w-16 h-16 border rounded-button",
                          src: (_b = testimonial == null ? void 0 : testimonial.image) == null ? void 0 : _b.id,
                          alt: (_a2 = testimonial.title) != null ? _a2 : ""
                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                          key: 1,
                          name: "material-symbols:account-circle",
                          class: "inline-block w-16 h-16 text-gray-300 border rounded-button"
                        })),
                        createVNode("div", { class: "relative" }, [
                          testimonial.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "font-semibold text-primary font-display lg:text-2xl"
                          }, toDisplayString(testimonial.title), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "text-sm text-gray-700 lg:text-lg dark:text-gray-300" }, toDisplayString(testimonial.subtitle) + " at " + toDisplayString(testimonial.company), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ], 544)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Testimonials.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Quote",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_UIcon = _sfc_main$n;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              initial: {
                opacity: 0,
                y: 100
              },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 250
                }
              },
              class: "relative"
            }, ssrGetDirectiveProps(_ctx, _directive_motion)))}${_scopeId}><div class="relative text-4xl italic leading-tight text-gray-900 font-display md:leading-tight dark:text-gray-100 md:text-6xl text-wrap-[balance] dark:drop-shadow"${_scopeId}>${(_a = _ctx.data.content) != null ? _a : ""}</div>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:format-quote-rounded",
              class: "absolute w-20 h-20 rotate-180 -left-8 text-primary/20 -top-8"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full mt-4 text-sm font-semibold tracking-wider uppercase word-spacing-tight lg:text-lg font-display"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(`<p class="text-primary"${_scopeId}>${ssrInterpolate(_ctx.data.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.subtitle) {
              _push2(`<p class="dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.data.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", {
                initial: {
                  opacity: 0,
                  y: 100
                },
                visibleOnce: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 250
                  }
                },
                class: "relative"
              }, [
                createVNode("div", {
                  class: "relative text-4xl italic leading-tight text-gray-900 font-display md:leading-tight dark:text-gray-100 md:text-6xl text-wrap-[balance] dark:drop-shadow",
                  innerHTML: _ctx.data.content
                }, null, 8, ["innerHTML"]),
                createVNode(_component_UIcon, {
                  name: "material-symbols:format-quote-rounded",
                  class: "absolute w-20 h-20 rotate-180 -left-8 text-primary/20 -top-8"
                })
              ])), [
                [_directive_motion]
              ]),
              createVNode("div", { class: "w-full mt-4 text-sm font-semibold tracking-wider uppercase word-spacing-tight lg:text-lg font-display" }, [
                _ctx.data.title ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-primary"
                }, toDisplayString(_ctx.data.title), 1)) : createCommentVNode("", true),
                _ctx.data.subtitle ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "dark:text-white"
                }, toDisplayString(_ctx.data.subtitle), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Quote.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Cta",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyProse = _sfc_main$m;
      const _component_BlocksButtonGroup = _sfc_main$i;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="relative overflow-hidden p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"${_scopeId}></div><div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10"${_scopeId}></div><div class="relative md:flex md:items-center md:justify-between md:space-x-4"${_scopeId}><div${_scopeId}>`);
            if ((_a = _ctx.data) == null ? void 0 : _a.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                class: "font-bold"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.content) {
              _push2(ssrRenderComponent(_component_TypographyProse, {
                content: _ctx.data.content,
                class: "mt-2"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex-shrink-0 mt-4 md:mt-0"${_scopeId}>`);
            if (_ctx.data.button_group) {
              _push2(ssrRenderComponent(_component_BlocksButtonGroup, {
                data: _ctx.data.button_group
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600" }),
                createVNode("div", { class: "absolute inset-0 opacity-50 grain-bg dark:opacity-10" }),
                createVNode("div", { class: "relative md:flex md:items-center md:justify-between md:space-x-4" }, [
                  createVNode("div", null, [
                    ((_b = _ctx.data) == null ? void 0 : _b.title) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.data.title), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                      key: 1,
                      content: _ctx.data.headline,
                      class: "font-bold"
                    }, null, 8, ["content"])) : createCommentVNode("", true),
                    _ctx.data.content ? (openBlock(), createBlock(_component_TypographyProse, {
                      key: 2,
                      content: _ctx.data.content,
                      class: "mt-2"
                    }, null, 8, ["content"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex-shrink-0 mt-4 md:mt-0" }, [
                    _ctx.data.button_group ? (openBlock(), createBlock(_component_BlocksButtonGroup, {
                      key: 0,
                      data: _ctx.data.button_group
                    }, null, 8, ["data"])) : createCommentVNode("", true)
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Cta.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_UForm = _sfc_main$o;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="max-w-3xl p-8 mx-auto mt-4 bg-gray-100 dark:bg-gray-800 rounded-panel"${_scopeId}>`);
            if ((_a = _ctx.data) == null ? void 0 : _a.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate((_a2 = _ctx.data) == null ? void 0 : _a2.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_b2 = _ctx.data) == null ? void 0 : _b2.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_b = _ctx.data) == null ? void 0 : _b.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: (_c = _ctx.data) == null ? void 0 : _c.headline
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_d = _ctx.data) == null ? void 0 : _d.form) {
              _push2(ssrRenderComponent(_component_UForm, {
                form: (_e = _ctx.data) == null ? void 0 : _e.form,
                class: "mt-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-3xl p-8 mx-auto mt-4 bg-gray-100 dark:bg-gray-800 rounded-panel" }, [
                ((_f = _ctx.data) == null ? void 0 : _f.title) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createTextVNode(toDisplayString((_a2 = _ctx.data) == null ? void 0 : _a2.title), 1)
                    ];
                  }),
                  _: 1
                })) : createCommentVNode("", true),
                ((_g = _ctx.data) == null ? void 0 : _g.headline) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 1,
                  content: (_h = _ctx.data) == null ? void 0 : _h.headline
                }, null, 8, ["content"])) : createCommentVNode("", true),
                ((_i = _ctx.data) == null ? void 0 : _i.form) ? (openBlock(), createBlock(_component_UForm, {
                  key: 2,
                  form: (_j = _ctx.data) == null ? void 0 : _j.form,
                  class: "mt-4"
                }, null, 8, ["form"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Form.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "LogoCloud",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if ((_a = _ctx.data) == null ? void 0 : _a.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate((_a2 = _ctx.data) == null ? void 0 : _a2.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_b2 = _ctx.data) == null ? void 0 : _b2.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_b = _ctx.data) == null ? void 0 : _b.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: (_c = _ctx.data) == null ? void 0 : _c.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flow-root mt-8 lg:mt-10"${_scopeId}>`);
            if (_ctx.data.logos && _ctx.data.logos.length > 0) {
              _push2(`<div class="grid gap-4 md:grid-cols-4 md:gap-8"${_scopeId}><!--[-->`);
              ssrRenderList((_d = _ctx.data) == null ? void 0 : _d.logos, (logo, fileIdx) => {
                var _a3;
                var _a2, _b2, _c2;
                _push2(`<div${ssrRenderAttrs(mergeProps({
                  key: logo.id,
                  initial: {
                    opacity: 0,
                    y: 100
                  },
                  visibleOnce: {
                    opacity: 1,
                    y: 0
                  },
                  delay: 250 + 100 * fileIdx,
                  class: "flex items-center justify-center p-8 border rounded-card dark:border-gray-700 dark:bg-gray-200"
                }, ssrGetDirectiveProps(_ctx, _directive_motion)))}${_scopeId}>`);
                if ((_a2 = logo.directus_files_id) == null ? void 0 : _a2.id) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    class: "h-12",
                    src: (_b2 = logo.directus_files_id) == null ? void 0 : _b2.id,
                    alt: (_a3 = (_c2 = logo.directus_files_id) == null ? void 0 : _c2.description) != null ? _a3 : ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              ((_e = _ctx.data) == null ? void 0 : _e.title) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString((_a2 = _ctx.data) == null ? void 0 : _a2.title), 1)
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              ((_f = _ctx.data) == null ? void 0 : _f.headline) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 1,
                content: (_g = _ctx.data) == null ? void 0 : _g.headline,
                size: "lg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("div", { class: "flow-root mt-8 lg:mt-10" }, [
                _ctx.data.logos && _ctx.data.logos.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid gap-4 md:grid-cols-4 md:gap-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_h = _ctx.data) == null ? void 0 : _h.logos, (logo, fileIdx) => {
                    var _a3;
                    var _a2, _b2, _c2;
                    return withDirectives((openBlock(), createBlock("div", {
                      key: logo.id,
                      initial: {
                        opacity: 0,
                        y: 100
                      },
                      visibleOnce: {
                        opacity: 1,
                        y: 0
                      },
                      delay: 250 + 100 * fileIdx,
                      class: "flex items-center justify-center p-8 border rounded-card dark:border-gray-700 dark:bg-gray-200"
                    }, [
                      ((_a2 = logo.directus_files_id) == null ? void 0 : _a2.id) ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 0,
                        class: "h-12",
                        src: (_b2 = logo.directus_files_id) == null ? void 0 : _b2.id,
                        alt: (_a3 = (_c2 = logo.directus_files_id) == null ? void 0 : _c2.description) != null ? _a3 : ""
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ], 8, ["delay"])), [
                      [_directive_motion]
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/LogoCloud.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TeamCard",
  __ssrInlineRender: true,
  props: {
    person: {}
  },
  setup(__props) {
    const flipped = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _component_Motionable = _sfc_main$p;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyTitle = _sfc_main$k;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opacity-0 cursor-pointer select-none animate-fade-in" }, _attrs))}><div class="relative w-full aspect-square overflow-hidden group rounded-card">`);
      if (_ctx.person.image) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          width: "400",
          height: "400",
          class: "object-cover w-full h-full transition duration-300 grayscale group-hover:grayscale-0",
          src: _ctx.person.image,
          alt: (_a = _ctx.person.name) != null ? _a : ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Motionable, mergeProps({
        name: "team",
        show: unref(flipped),
        class: "absolute inset-0 p-2 -m-2 overflow-hidden bg-primary/80 backdrop-blur-sm",
        initial: {
          opacity: 0,
          y: 25,
          x: 200,
          scale: 0.9
        },
        enter: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0
        },
        leave: {
          opacity: 0,
          scale: 0.9,
          x: 200,
          y: 25
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative p-4 space-y-2"${_scopeId}><p class="font-mono tracking-wider uppercase"${_scopeId}>Links</p><!--[-->`);
            ssrRenderList(_ctx.person.social_media, (link) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: link == null ? void 0 : link.service,
                class: "inline-flex w-full border border-gray-900 hover:border-white hover:text-white",
                href: link == null ? void 0 : link.url,
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-center flex-none w-14"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "w-8 h-8",
                      name: `uil:${link == null ? void 0 : link.service}`
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><p class="flex flex-col justify-center py-2 pb-1 pl-3 pr-2 overflow-hidden text-lg font-semibold leading-none tracking-tight capitalize truncate md:py-3 text-bold font-display word-spacing-tight"${_scopeId2}>${ssrInterpolate(link == null ? void 0 : link.service)}</p>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-center flex-none w-14" }, [
                        createVNode(_component_Icon, {
                          class: "w-8 h-8",
                          name: `uil:${link == null ? void 0 : link.service}`
                        }, null, 8, ["name"])
                      ]),
                      createVNode("p", { class: "flex flex-col justify-center py-2 pb-1 pl-3 pr-2 overflow-hidden text-lg font-semibold leading-none tracking-tight capitalize truncate md:py-3 text-bold font-display word-spacing-tight" }, toDisplayString(link == null ? void 0 : link.service), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "relative p-4 space-y-2" }, [
                createVNode("p", { class: "font-mono tracking-wider uppercase" }, "Links"),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.person.social_media, (link) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: link == null ? void 0 : link.service,
                    class: "inline-flex w-full border border-gray-900 hover:border-white hover:text-white",
                    href: link == null ? void 0 : link.url,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-center flex-none w-14" }, [
                        createVNode(_component_Icon, {
                          class: "w-8 h-8",
                          name: `uil:${link == null ? void 0 : link.service}`
                        }, null, 8, ["name"])
                      ]),
                      createVNode("p", { class: "flex flex-col justify-center py-2 pb-1 pl-3 pr-2 overflow-hidden text-lg font-semibold leading-none tracking-tight capitalize truncate md:py-3 text-bold font-display word-spacing-tight" }, toDisplayString(link == null ? void 0 : link.service), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute z-10 bottom-4 left-7 right-7">`);
      if (_ctx.person.name) {
        _push(ssrRenderComponent(_component_TypographyHeadline, {
          content: _ctx.person.name,
          size: "sm",
          class: "text-white drop-shadow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate((_a2 = _ctx.person) == null ? void 0 : _a2.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_b = _ctx.person) == null ? void 0 : _b.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.person.job_title) {
        _push(ssrRenderComponent(_component_TypographyTitle, { class: "text-white/50" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate((_a2 = _ctx.person) == null ? void 0 : _a2.job_title)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_b = _ctx.person) == null ? void 0 : _b.job_title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black h-1/3 opacity-80"></div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Team",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { data: team } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "team",
      () => {
        return useDirectus(readItems("team", {}));
      },
      {
        transform: (data) => data
      }
    )), __temp = await __temp, __restore(), __temp);
    function splitArray(array, numParts = 2) {
      let result = [];
      for (let i2 = 0; i2 < array.length; i2++) {
        let index = i2 % numParts;
        if (!result[index]) {
          result[index] = [];
        }
        result[index].push(array[i2]);
      }
      return result;
    }
    const teamToDisplay = computed(() => {
      const teamMembersSplit = splitArray(unref(team), 2);
      return {
        // Duplicate each array so we can animate the last item to the first position
        left: [...teamMembersSplit[0], ...teamMembersSplit[0]],
        right: [...teamMembersSplit[1], ...teamMembersSplit[1]]
      };
    });
    function animationDelay() {
      let possibleAnimationDelays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
      return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
    }
    const target = ref(null);
    const isVisible = ref(false);
    const leftCol = ref(null);
    const rightCol = ref(null);
    const colHeight = ref(0);
    ref(0);
    ref(0);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        isVisible.value = isIntersecting;
      },
      {
        threshold: 0.25
      }
    );
    useResizeObserver(leftCol, (entries) => {
      if (!entries[0])
        return;
      colHeight.value = entries[0].target.offsetHeight;
    });
    const duration = computed(() => {
      return `${colHeight.value * 15}ms`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyProse = _sfc_main$m;
      const _component_TeamCard = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BlockContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col mx-auto lg:flex-row"${_scopeId}><div class="flex flex-col pr-4 lg:w-3/5"${_scopeId}>`);
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.content) {
              _push2(ssrRenderComponent(_component_TypographyProse, {
                content: _ctx.data.content,
                class: "mt-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-full relative grid h-[49rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0"${_scopeId}><div class="${ssrRenderClass([{ "animate-marquee": unref(isVisible) }, "space-y-10 py-4 -mt-10 md:max-w-[320px] "])}" style="${ssrRenderStyle({
              "--marquee-duration": unref(duration)
            })}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(teamToDisplay).left, (person) => {
              _push2(ssrRenderComponent(_component_TeamCard, {
                key: person.id,
                person
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="${ssrRenderClass([{ "animate-marquee": unref(isVisible) }, "space-y-10 py-4 md:max-w-[320px]"])}" style="${ssrRenderStyle({
              "--marquee-duration": unref(duration)
            })}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(teamToDisplay).right, (person) => {
              _push2(ssrRenderComponent(_component_TeamCard, {
                key: person.id,
                style: {
                  animationDelay: animationDelay()
                },
                person
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col mx-auto lg:flex-row" }, [
                createVNode("div", { class: "flex flex-col pr-4 lg:w-3/5" }, [
                  _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                    key: 1,
                    content: _ctx.data.headline,
                    size: "lg"
                  }, null, 8, ["content"])) : createCommentVNode("", true),
                  _ctx.data.content ? (openBlock(), createBlock(_component_TypographyProse, {
                    key: 2,
                    content: _ctx.data.content,
                    class: "mt-4"
                  }, null, 8, ["content"])) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  ref_key: "target",
                  ref: target,
                  class: "w-full relative grid h-[49rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0"
                }, [
                  createVNode("div", {
                    ref_key: "leftCol",
                    ref: leftCol,
                    class: [{ "animate-marquee": unref(isVisible) }, "space-y-10 py-4 -mt-10 md:max-w-[320px] "],
                    style: {
                      "--marquee-duration": unref(duration)
                    }
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(teamToDisplay).left, (person) => {
                      return openBlock(), createBlock(_component_TeamCard, {
                        key: person.id,
                        person
                      }, null, 8, ["person"]);
                    }), 128))
                  ], 6),
                  createVNode("div", {
                    ref_key: "rightCol",
                    ref: rightCol,
                    class: [{ "animate-marquee": unref(isVisible) }, "space-y-10 py-4 md:max-w-[320px]"],
                    style: {
                      "--marquee-duration": unref(duration)
                    }
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(teamToDisplay).right, (person) => {
                      return openBlock(), createBlock(_component_TeamCard, {
                        key: person.id,
                        style: {
                          animationDelay: animationDelay()
                        },
                        person
                      }, null, 8, ["style", "person"]);
                    }), 128))
                  ], 6)
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Team.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RawHtml",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div${_scopeId}>${(_a = _ctx.data.raw_html) != null ? _a : ""}</div>`);
          } else {
            return [
              createVNode("div", {
                innerHTML: _ctx.data.raw_html
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/RawHtml.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Video",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const { fileUrl } = useFiles();
    const url = computed(() => {
      if (props.data.type === "file" && props.data.video_file) {
        return fileUrl(props.data.video_file);
      }
      if (props.data.type === "url" && props.data.video_url) {
        return props.data.video_url;
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_VVideo = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(url)) {
              _push2(ssrRenderComponent(_component_VVideo, {
                class: "relative mt-6 overflow-hidden border dark:border-gray-700 rounded-card",
                url: unref(url),
                title: (_a = _ctx.data.title) != null ? _a : void 0
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.data.title), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 1,
                content: _ctx.data.headline,
                size: "lg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              unref(url) ? (openBlock(), createBlock(_component_VVideo, {
                key: 2,
                class: "relative mt-6 overflow-hidden border dark:border-gray-700 rounded-card",
                url: unref(url),
                title: (_b = _ctx.data.title) != null ? _b : void 0
              }, null, 8, ["url", "title"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Video.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const galleryItems = computed(() => {
      var _a;
      return (_a = props.data.gallery_items) == null ? void 0 : _a.map((item) => {
        return item.directus_files_id;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_VGallery = _sfc_main$q;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(galleryItems) && unref(galleryItems).length > 0) {
              _push2(ssrRenderComponent(_component_VGallery, { items: unref(galleryItems) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.data.title), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 1,
                content: _ctx.data.headline,
                size: "lg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              unref(galleryItems) && unref(galleryItems).length > 0 ? (openBlock(), createBlock(_component_VGallery, {
                key: 2,
                items: unref(galleryItems)
              }, null, 8, ["items"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Gallery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function isEven(n) {
  return n % 2 === 0;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const steps = computed(() => {
      var _a, _b;
      if (!unref((_a = props.data) == null ? void 0 : _a.steps))
        return [];
      return (_b = unref(props.data)) == null ? void 0 : _b.steps;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _component_TypographyProse = _sfc_main$m;
      const _component_BlocksButtonGroup = _sfc_main$i;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.data.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.data.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.data.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.headline,
                size: "lg"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(steps), (step, stepIdx) => {
              var _a2;
              var _a;
              _push2(`<!--[--><div${ssrRenderAttrs(mergeProps({
                initial: {
                  opacity: 0,
                  scale: 1,
                  x: ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) ? -200 : 200
                },
                visibleOnce: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 300
                  }
                },
                delay: 300,
                class: [
                  {
                    "mr-8 md:mr-24": ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx),
                    "ml-8 md:ml-24": !("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx)
                  },
                  {
                    "md:flex-row": ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) && !_ctx.data.alternate_image_position,
                    "md:flex-row-reverse md:space-x-reverse": !("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) && _ctx.data.alternate_image_position
                  },
                  "relative p-6 md:flex md:space-x-8 ring-primary/50 ring-1 rounded-panel"
                ]
              }, ssrGetDirectiveProps(_ctx, _directive_motion)))}${_scopeId}>`);
              if (step.image) {
                _push2(`<div class="flex-shrink-0 dark:bg-white dark:brightness-90 rounded-panel"${_scopeId}>`);
                if (step.image) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    class: "object-cover w-full h-32 rounded-card md:w-48 md:h-full",
                    src: ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(step.image),
                    alt: (_a2 = (_a = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(step.image)) == null ? void 0 : _a.description) != null ? _a2 : ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="w-full mt-4 text-left md:mt-0"${_scopeId}>`);
              if (_ctx.data.show_step_numbers) {
                _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Step ${ssrInterpolate(stepIdx + 1)}`);
                    } else {
                      return [
                        createTextVNode("Step " + toDisplayString(stepIdx + 1), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (step.title) {
                _push2(ssrRenderComponent(_component_TypographyHeadline, {
                  content: step.title,
                  size: "sm"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (step.content) {
                _push2(ssrRenderComponent(_component_TypographyProse, {
                  content: step.content,
                  class: "mt-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (step.button_group) {
                _push2(ssrRenderComponent(_component_BlocksButtonGroup, {
                  data: step.button_group,
                  class: "mt-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              if (stepIdx !== unref(steps).length - 1) {
                _push2(`<svg class="h-16 m-0 mx-auto stroke-current text-primary md:h-20 steps-animation" viewBox="0 0 60 200"${_scopeId}><line class="path" x1="15" x2="15" y1="0" y2="200" stroke-width="8" stroke-linecap="square"${_scopeId}></line></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              _ctx.data.title ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.data.title), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.data.headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 1,
                content: _ctx.data.headline,
                size: "lg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(steps), (step, stepIdx) => {
                  var _a2;
                  var _a;
                  return openBlock(), createBlock(Fragment, { key: stepIdx }, [
                    withDirectives((openBlock(), createBlock("div", {
                      initial: {
                        opacity: 0,
                        scale: 1,
                        x: ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) ? -200 : 200
                      },
                      visibleOnce: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          duration: 300
                        }
                      },
                      delay: 300,
                      class: [
                        {
                          "mr-8 md:mr-24": ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx),
                          "ml-8 md:ml-24": !("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx)
                        },
                        {
                          "md:flex-row": ("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) && !_ctx.data.alternate_image_position,
                          "md:flex-row-reverse md:space-x-reverse": !("isEven" in _ctx ? _ctx.isEven : unref(isEven))(stepIdx) && _ctx.data.alternate_image_position
                        },
                        "relative p-6 md:flex md:space-x-8 ring-primary/50 ring-1 rounded-panel"
                      ]
                    }, [
                      step.image ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex-shrink-0 dark:bg-white dark:brightness-90 rounded-panel"
                      }, [
                        step.image ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 0,
                          class: "object-cover w-full h-32 rounded-card md:w-48 md:h-full",
                          src: ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(step.image),
                          alt: (_a2 = (_a = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(step.image)) == null ? void 0 : _a.description) != null ? _a2 : ""
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "w-full mt-4 text-left md:mt-0" }, [
                        _ctx.data.show_step_numbers ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("Step " + toDisplayString(stepIdx + 1), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        step.title ? (openBlock(), createBlock(_component_TypographyHeadline, {
                          key: 1,
                          content: step.title,
                          size: "sm"
                        }, null, 8, ["content"])) : createCommentVNode("", true),
                        step.content ? (openBlock(), createBlock(_component_TypographyProse, {
                          key: 2,
                          content: step.content,
                          class: "mt-4"
                        }, null, 8, ["content"])) : createCommentVNode("", true),
                        step.button_group ? (openBlock(), createBlock(_component_BlocksButtonGroup, {
                          key: 3,
                          data: step.button_group,
                          class: "mt-4"
                        }, null, 8, ["data"])) : createCommentVNode("", true)
                      ])
                    ], 10, ["initial"])), [
                      [_directive_motion]
                    ]),
                    stepIdx !== unref(steps).length - 1 ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: "h-16 m-0 mx-auto stroke-current text-primary md:h-20 steps-animation",
                      viewBox: "0 0 60 200"
                    }, [
                      createVNode("line", {
                        class: "path",
                        x1: "15",
                        x2: "15",
                        y1: "0",
                        y2: "200",
                        "stroke-width": "8",
                        "stroke-linecap": "square"
                      })
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Steps.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Columns",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyTitle = _sfc_main$k;
      const _component_TypographyHeadline = _sfc_main$l;
      const _component_TypographyProse = _sfc_main$m;
      const _component_BlocksButtonGroup = _sfc_main$i;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if ((_a = _ctx.data) == null ? void 0 : _a.title) {
              _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate((_a2 = _ctx.data) == null ? void 0 : _a2.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_b2 = _ctx.data) == null ? void 0 : _b2.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_b = _ctx.data) == null ? void 0 : _b.headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: (_c = _ctx.data) == null ? void 0 : _c.headline
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-12 space-y-16"${_scopeId}><!--[-->`);
            ssrRenderList((_d = _ctx.data) == null ? void 0 : _d.rows, (row) => {
              var _a3, _b2;
              var _a2;
              _push2(`<div class="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24"${_scopeId}><div class="my-auto"${_scopeId}>`);
              if (row == null ? void 0 : row.title) {
                _push2(ssrRenderComponent(_component_TypographyTitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row == null ? void 0 : row.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row == null ? void 0 : row.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (row == null ? void 0 : row.headline) {
                _push2(ssrRenderComponent(_component_TypographyHeadline, {
                  content: row == null ? void 0 : row.headline
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (row == null ? void 0 : row.content) {
                _push2(ssrRenderComponent(_component_TypographyProse, {
                  content: row == null ? void 0 : row.content,
                  class: "mt-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (row == null ? void 0 : row.button_group) {
                _push2(ssrRenderComponent(_component_BlocksButtonGroup, {
                  data: row == null ? void 0 : row.button_group,
                  class: "mt-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (row.image) {
                _push2(`<div${ssrRenderAttrs(mergeProps({
                  class: ["order-first block w-full h-full overflow-hidden border dark:border-gray-700 rounded-card", [
                    {
                      "lg:order-last": (row == null ? void 0 : row.image_position) === "right",
                      "lg:order-first": (row == null ? void 0 : row.image_position) === "left"
                    }
                  ]],
                  initial: { opacity: 0, scale: 0.5, y: 0 },
                  visibleOnce: { opacity: 1, scale: 1, y: 0 },
                  duration: 1e3,
                  delay: 250
                }, ssrGetDirectiveProps(_ctx, _directive_motion)))}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  alt: (_a3 = (_a2 = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(row.image)) == null ? void 0 : _a2.description) != null ? _a3 : "",
                  src: (_b2 = ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(row.image)) != null ? _b2 : "",
                  height: "600",
                  width: "600",
                  class: "object-cover object-center w-full h-full bg-gray-100 rounded-card dark:brightness-90"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              ((_e = _ctx.data) == null ? void 0 : _e.title) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString((_a2 = _ctx.data) == null ? void 0 : _a2.title), 1)
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              ((_f = _ctx.data) == null ? void 0 : _f.headline) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 1,
                content: (_g = _ctx.data) == null ? void 0 : _g.headline
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-12 space-y-16" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_h = _ctx.data) == null ? void 0 : _h.rows, (row) => {
                  var _a3, _b2;
                  var _a2;
                  return openBlock(), createBlock("div", {
                    key: row == null ? void 0 : row.id,
                    class: "relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24"
                  }, [
                    createVNode("div", { class: "my-auto" }, [
                      (row == null ? void 0 : row.title) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row == null ? void 0 : row.title), 1)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      (row == null ? void 0 : row.headline) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                        key: 1,
                        content: row == null ? void 0 : row.headline
                      }, null, 8, ["content"])) : createCommentVNode("", true),
                      (row == null ? void 0 : row.content) ? (openBlock(), createBlock(_component_TypographyProse, {
                        key: 2,
                        content: row == null ? void 0 : row.content,
                        class: "mt-4"
                      }, null, 8, ["content"])) : createCommentVNode("", true),
                      (row == null ? void 0 : row.button_group) ? (openBlock(), createBlock(_component_BlocksButtonGroup, {
                        key: 3,
                        data: row == null ? void 0 : row.button_group,
                        class: "mt-4"
                      }, null, 8, ["data"])) : createCommentVNode("", true)
                    ]),
                    row.image ? withDirectives((openBlock(), createBlock("div", {
                      key: 0,
                      class: ["order-first block w-full h-full overflow-hidden border dark:border-gray-700 rounded-card", [
                        {
                          "lg:order-last": (row == null ? void 0 : row.image_position) === "right",
                          "lg:order-first": (row == null ? void 0 : row.image_position) === "left"
                        }
                      ]],
                      initial: { opacity: 0, scale: 0.5, y: 0 },
                      visibleOnce: { opacity: 1, scale: 1, y: 0 },
                      duration: 1e3,
                      delay: 250
                    }, [
                      createVNode(_component_NuxtImg, {
                        alt: (_a3 = (_a2 = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(row.image)) == null ? void 0 : _a2.description) != null ? _a3 : "",
                        src: (_b2 = ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(row.image)) != null ? _b2 : "",
                        height: "600",
                        width: "600",
                        class: "object-cover object-center w-full h-full bg-gray-100 rounded-card dark:brightness-90"
                      }, null, 8, ["alt", "src"])
                    ], 2)), [
                      [_directive_motion]
                    ]) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Columns.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Divider",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$j;
      const _component_TypographyHeadline = _sfc_main$l;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.data.title) {
              _push2(`<div class="flex-shrink-0 mx-auto lg:mx-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.data.title
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full h-px bg-gray-300 dark:bg-gray-700"${_scopeId}></div>`);
          } else {
            return [
              _ctx.data.title ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex-shrink-0 mx-auto lg:mx-0"
              }, [
                createVNode(_component_TypographyHeadline, {
                  content: _ctx.data.title
                }, null, 8, ["content"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "w-full h-px bg-gray-300 dark:bg-gray-700" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageBuilder",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const componentMap = {
      block_hero: _sfc_main$h,
      block_faqs: _sfc_main$f,
      block_richtext: _sfc_main$e,
      block_testimonials: _sfc_main$d,
      block_quote: _sfc_main$c,
      block_cta: _sfc_main$b,
      block_form: _sfc_main$a,
      block_logocloud: _sfc_main$9,
      block_team: _sfc_main$7,
      block_html: _sfc_main$6,
      block_video: _sfc_main$5,
      block_gallery: _sfc_main$4,
      block_steps: _sfc_main$3,
      block_columns: _sfc_main$2,
      block_divider: _sfc_main$1
    };
    const props = __props;
    const blocks = computed(() => {
      var _a;
      const blocks2 = (_a = unref(props.page)) == null ? void 0 : _a.blocks;
      return blocks2 == null ? void 0 : blocks2.filter((block) => {
        return block.hide_block !== true;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "content",
        class: "mx-auto"
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(blocks), (block) => {
        _push(`<!--[-->`);
        if (block && block.collection) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(componentMap[block.collection]), {
            data: block.item
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageBuilder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageBuilder-BLe4xnhO.mjs.map
