import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$9 } from './Logo-Dz7nGNoc.mjs';
import __nuxt_component_0$1 from './index-Dqa-xyfo.mjs';
import { a as useRoute, P as convertIconName, b as useAppConfig, i as useAsyncData } from './server.mjs';
import { defineComponent, ref, computed, provide, watchEffect, h as h$1, Fragment, onMounted, onUnmounted, shallowRef, useSSRContext, inject, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, renderList, Transition, resolveDirective } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { i as i$1, g as E$1, q, N, E, w, e as w$2, h, n, f as f$1, u as u$1, P, b as N$1$1, j as v, d as d$1, T } from './portal-DCPL5wBV.mjs';
import { o, u, t, i, A, I, l, N as N$1 } from './open-closed-Dy9w_Ur1.mjs';
import { s, o as o$1 } from './keyboard-puKMRDGD.mjs';
import { _ as _sfc_main$a } from './DarkModeToggle-Dqz9Fta5.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as _sfc_main$6 } from './Motionable-BeRKE-n3.mjs';
import { _ as _sfc_main$8 } from './VText-D0MQff2t.mjs';
import { _ as _sfc_main$7 } from './Title-0MDj5cmN.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem, readItems } from '@directus/sdk';
import { _ as _sfc_main$b } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$c } from './UForm-BXdHEs5F.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';
import './nuxt-img-BL8_SQyR.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@formkit/auto-animate/vue';
import '@unhead/addons';
import 'tailwind-merge';
import 'vue-dompurify-html';
import 'node:crypto';
import './composables-BxS0fVn-.mjs';
import './UIcon-CFeTNZEP.mjs';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './VAlert-B7QIU45Y.mjs';
import './id-CsF31SPu.mjs';
import './FormGroup-D6qWgF-G.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './Input-CfIqCvke.mjs';
import './Textarea-NEFeg-lL.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './VUpload-DWTZMVN2.mjs';
import './VLabel-D4wsGVsj.mjs';
import 'perfect-freehand';

var Se = ((s2) => (s2[s2.Open = 0] = "Open", s2[s2.Closed = 1] = "Closed", s2))(Se || {});
let re = Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s2 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, U), s2;
  }
  return P2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s2, expose: h$2 }) {
  var u$12;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t$1 = ref(1), o$12 = ref(null), y = ref(null), v2 = ref(null), m = ref(null), b = computed(() => i$1(f2)), E$2 = computed(() => {
    var L, $;
    if (!o(o$12) || !o(m))
      return false;
    for (let x of (void 0).querySelectorAll("body > *"))
      if (Number(x == null ? void 0 : x.contains(o(o$12))) ^ Number(x == null ? void 0 : x.contains(o(m))))
        return true;
    let e = E$1(), r = e.indexOf(o(o$12)), l2 = (r + e.length - 1) % e.length, g = (r + 1) % e.length, G = e[l2], C = e[g];
    return !((L = o(m)) != null && L.contains(G)) && !(($ = o(m)) != null && $.contains(C));
  }), a = { popoverState: t$1, buttonId: ref(null), panelId: ref(null), panel: m, button: o$12, isPortalled: E$2, beforePanelSentinel: y, afterPanelSentinel: v2, togglePopover() {
    t$1.value = u(t$1.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t$1.value !== 1 && (t$1.value = 1);
  }, close(e) {
    a.closePopover();
    let r = (() => e ? e instanceof HTMLElement ? e : e.value instanceof HTMLElement ? o(e) : o(a.button) : o(a.button))();
    r == null || r.focus();
  } };
  provide(re, a), t(computed(() => u(t$1.value, { [0]: i.Open, [1]: i.Closed })));
  let S = { buttonId: a.buttonId, panelId: a.panelId, close() {
    a.closePopover();
  } }, c = ae(), I2 = c == null ? void 0 : c.registerPopover, [F, w$2$1] = q(), i$2 = N({ mainTreeNodeRef: c == null ? void 0 : c.mainTreeNodeRef, portals: F, defaultContainers: [o$12, m] });
  function p() {
    var e, r, l2, g;
    return (g = c == null ? void 0 : c.isFocusWithinPopoverGroup()) != null ? g : ((e = b.value) == null ? void 0 : e.activeElement) && (((r = o(o$12)) == null ? void 0 : r.contains(b.value.activeElement)) || ((l2 = o(m)) == null ? void 0 : l2.contains(b.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S)), E((u$12 = b.value) == null ? void 0 : u$12.defaultView, "focus", (e) => {
    var r, l2;
    e.target !== void 0 && e.target instanceof HTMLElement && t$1.value === 0 && (p() || o$12 && m && (i$2.contains(e.target) || (r = o(a.beforePanelSentinel)) != null && r.contains(e.target) || (l2 = o(a.afterPanelSentinel)) != null && l2.contains(e.target) || a.closePopover()));
  }, true), w(i$2.resolveContainers, (e, r) => {
    var l2;
    a.closePopover(), w$2(r, h.Loose) || (e.preventDefault(), (l2 = o(o$12)) == null || l2.focus());
  }, computed(() => t$1.value === 0)), () => {
    let e = { open: t$1.value === 0, close: a.close };
    return h$1(Fragment, [h$1(w$2$1, {}, () => A({ theirProps: { ...d2, ...s2 }, ourProps: { ref: f2 }, slot: e, slots: P2, attrs: s2, name: "Popover" })), h$1(i$2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1$1, { attrs: P$1, slots: s$1, expose: h2 }) {
  var u$2;
  let f$1$1 = (u$2 = d$1$1.id) != null ? u$2 : `headlessui-popover-button-${I()}`, t2 = U("PopoverButton"), o$2 = computed(() => i$1(t2.button));
  h2({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = f$1$1;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let y = ae(), v2 = y == null ? void 0 : y.closeOthers, m = ge(), b = computed(() => m === null ? false : m.value === t2.panelId.value), E$12 = ref(null), a = `headlessui-focus-sentinel-${I()}`;
  b.value || watchEffect(() => {
    t2.button.value = o(E$12);
  });
  let S = s(computed(() => ({ as: d$1$1.as, type: P$1.type })), E$12);
  function c(e) {
    var r, l2, g, G, C;
    if (b.value) {
      if (t2.popoverState.value === 1)
        return;
      switch (e.key) {
        case o$1.Space:
        case o$1.Enter:
          e.preventDefault(), (l2 = (r = e.target).click) == null || l2.call(r), t2.closePopover(), (g = o(t2.button)) == null || g.focus();
          break;
      }
    } else
      switch (e.key) {
        case o$1.Space:
        case o$1.Enter:
          e.preventDefault(), e.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
          break;
        case o$1.Escape:
          if (t2.popoverState.value !== 0)
            return v2 == null ? void 0 : v2(t2.buttonId.value);
          if (!o(t2.button) || (G = o$2.value) != null && G.activeElement && !((C = o(t2.button)) != null && C.contains(o$2.value.activeElement)))
            return;
          e.preventDefault(), e.stopPropagation(), t2.closePopover();
          break;
      }
  }
  function I$1(e) {
    b.value || e.key === o$1.Space && e.preventDefault();
  }
  function F(e) {
    var r, l2;
    d$1$1.disabled || (b.value ? (t2.closePopover(), (r = o(t2.button)) == null || r.focus()) : (e.preventDefault(), e.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o(t2.button)) == null || l2.focus()));
  }
  function w2(e) {
    e.preventDefault(), e.stopPropagation();
  }
  let i$12 = n();
  function p() {
    let e = o(t2.panel);
    if (!e)
      return;
    function r() {
      u(i$12.value, { [d$1.Forwards]: () => P(e, N$1$1.First), [d$1.Backwards]: () => P(e, N$1$1.Last) }) === T.Error && P(E$1().filter((g) => g.dataset.headlessuiFocusGuard !== "true"), u(i$12.value, { [d$1.Forwards]: N$1$1.Next, [d$1.Backwards]: N$1$1.Previous }), { relativeTo: o(t2.button) });
    }
    r();
  }
  return () => {
    let e = t2.popoverState.value === 0, r = { open: e }, { ...l2 } = d$1$1, g = b.value ? { ref: E$12, type: S.value, onKeydown: c, onClick: F } : { ref: E$12, id: f$1$1, type: S.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o(t2.panel) ? t2.panelId.value : void 0, disabled: d$1$1.disabled ? true : void 0, onKeydown: c, onKeyup: I$1, onClick: F, onMousedown: w2 };
    return h$1(Fragment, [A({ ourProps: g, theirProps: { ...P$1, ...l2 }, slot: r, attrs: P$1, slots: s$1, name: "PopoverButton" }), e && !b.value && t2.isPortalled.value && h$1(f$1, { id: a, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s2 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${I()}`, t2 = l(), o2 = computed(() => t2 !== null ? (t2.value & i.Open) === i.Open : h2.popoverState.value === 0);
  function y() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A({ ourProps: { id: f2, "aria-hidden": true, onClick: y }, theirProps: d2, slot: v2, attrs: P2, slots: s2, features: N$1.RenderStrategy | N$1.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1$1, { attrs: P$1, slots: s2, expose: h2 }) {
  var w2;
  let f$1$1 = (w2 = d$1$1.id) != null ? w2 : `headlessui-popover-panel-${I()}`, { focus: t2 } = d$1$1, o$2 = U("PopoverPanel"), y = computed(() => i$1(o$2.panel)), v2 = `headlessui-focus-sentinel-before-${I()}`, m = `headlessui-focus-sentinel-after-${I()}`;
  h2({ el: o$2.panel, $el: o$2.panel }), onMounted(() => {
    o$2.panelId.value = f$1$1;
  }), onUnmounted(() => {
    o$2.panelId.value = null;
  }), provide(ue, o$2.panelId), watchEffect(() => {
    var p, u2;
    if (!t2 || o$2.popoverState.value !== 0 || !o$2.panel)
      return;
    let i2 = (p = y.value) == null ? void 0 : p.activeElement;
    (u2 = o(o$2.panel)) != null && u2.contains(i2) || P(o(o$2.panel), N$1$1.First);
  });
  let b = l(), E$12 = computed(() => b !== null ? (b.value & i.Open) === i.Open : o$2.popoverState.value === 0);
  function a(i2) {
    var p, u2;
    switch (i2.key) {
      case o$1.Escape:
        if (o$2.popoverState.value !== 0 || !o(o$2.panel) || y.value && !((p = o(o$2.panel)) != null && p.contains(y.value.activeElement)))
          return;
        i2.preventDefault(), i2.stopPropagation(), o$2.closePopover(), (u2 = o(o$2.button)) == null || u2.focus();
        break;
    }
  }
  function S(i2) {
    var u2, e, r, l2, g;
    let p = i2.relatedTarget;
    p && o(o$2.panel) && ((u2 = o(o$2.panel)) != null && u2.contains(p) || (o$2.closePopover(), ((r = (e = o(o$2.beforePanelSentinel)) == null ? void 0 : e.contains) != null && r.call(e, p) || (g = (l2 = o(o$2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g.call(l2, p)) && p.focus({ preventScroll: true })));
  }
  let c = n();
  function I$1() {
    let i2 = o(o$2.panel);
    if (!i2)
      return;
    function p() {
      u(c.value, { [d$1.Forwards]: () => {
        var e;
        P(i2, N$1$1.First) === T.Error && ((e = o(o$2.afterPanelSentinel)) == null || e.focus());
      }, [d$1.Backwards]: () => {
        var u2;
        (u2 = o(o$2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p();
  }
  function F() {
    let i2 = o(o$2.panel);
    if (!i2)
      return;
    function p() {
      u(c.value, { [d$1.Forwards]: () => {
        let u2 = o(o$2.button), e = o(o$2.panel);
        if (!u2)
          return;
        let r = E$1(), l2 = r.indexOf(u2), g = r.slice(0, l2 + 1), C = [...r.slice(l2 + 1), ...g];
        for (let L of C.slice())
          if (L.dataset.headlessuiFocusGuard === "true" || e != null && e.contains(L)) {
            let $ = C.indexOf(L);
            $ !== -1 && C.splice($, 1);
          }
        P(C, N$1$1.First, { sorted: false });
      }, [d$1.Backwards]: () => {
        var e;
        P(i2, N$1$1.Previous) === T.Error && ((e = o(o$2.button)) == null || e.focus());
      } });
    }
    p();
  }
  return () => {
    let i2 = { open: o$2.popoverState.value === 0, close: o$2.close }, { focus: p, ...u2 } = d$1$1, e = { ref: o$2.panel, id: f$1$1, onKeydown: a, onFocusout: t2 && o$2.popoverState.value === 0 ? S : void 0, tabIndex: -1 };
    return A({ ourProps: e, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s2, default: (...r) => {
      var l2;
      return [h$1(Fragment, [E$12.value && o$2.isPortalled.value && h$1(f$1, { id: v2, ref: o$2.beforePanelSentinel, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I$1 }), (l2 = s2.default) == null ? void 0 : l2.call(s2, ...r), E$12.value && o$2.isPortalled.value && h$1(f$1, { id: m, ref: o$2.afterPanelSentinel, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F })])];
    } }, features: N$1.RenderStrategy | N$1.Static, visible: E$12.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s2, expose: h2 }) {
  let f2 = ref(null), t2 = shallowRef([]), o$12 = computed(() => i$1(f2)), y = v();
  h2({ el: f2, $el: f2 });
  function v$1(a) {
    let S = t2.value.indexOf(a);
    S !== -1 && t2.value.splice(S, 1);
  }
  function m(a) {
    return t2.value.push(a), () => {
      v$1(a);
    };
  }
  function b() {
    var c;
    let a = o$12.value;
    if (!a)
      return false;
    let S = a.activeElement;
    return (c = o(f2)) != null && c.contains(S) ? true : t2.value.some((I2) => {
      var F, w2;
      return ((F = a.getElementById(I2.buttonId.value)) == null ? void 0 : F.contains(S)) || ((w2 = a.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S));
    });
  }
  function E2(a) {
    for (let S of t2.value)
      S.buttonId.value !== a && S.close();
  }
  return provide(le, { registerPopover: m, unregisterPopover: v$1, isFocusWithinPopoverGroup: b, closeOthers: E2, mainTreeNodeRef: y.mainTreeNodeRef }), () => h$1(Fragment, [A({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s2, name: "PopoverGroup" }), h$1(y.MainTreeNode)]);
} });
function getNavItemUrl(item) {
  var _a;
  if (item.type === "page" && item.page) {
    return (_a = item.page) == null ? void 0 : _a.permalink;
  } else if (item.type === "url" && item.url) {
    return item.url;
  }
  return null;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const route = useRoute();
    const popover = ref(null);
    watch(
      () => route.path,
      () => {
        var _a;
        return (_a = popover.value) == null ? void 0 : _a.call(popover);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      if (!_ctx.item.has_children) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          href: ("getNavItemUrl" in _ctx ? _ctx.getNavItemUrl : unref(getNavItemUrl))(_ctx.item),
          class: "menu-link",
          "exact-active-class": "bg-gray-700",
          target: _ctx.item.open_in_new_tab ? "_blank" : "_self"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.item.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(ye), mergeProps({
          class: "relative",
          as: "div"
        }, _attrs), {
          default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Ge), {
                ref: () => {
                  popover.value = close;
                },
                class: "menu-link"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "heroicons:chevron-down",
                      class: "flex-none w-5 ml-1 text-gray-400",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "heroicons:chevron-down",
                        class: "flex-none w-5 ml-1 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              _push2(ssrRenderComponent(unref(je), { class: "absolute z-10 w-screen max-w-md mt-4 overflow-hidden bg-gray-800 shadow-lg rounded-panel top-full" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(_ctx.item.children, (childItem) => {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        key: childItem.id,
                        href: ("getNavItemUrl" in _ctx ? _ctx.getNavItemUrl : unref(getNavItemUrl))(childItem),
                        class: "relative flex p-4 leading-6 transition duration-150 rounded-panel group gap-x-6 hover:bg-gray-900"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center flex-none p-2 mt-1 border rounded-button h-11 w-11 border-primary"${_scopeId3}>`);
                            if (childItem.icon) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(childItem.icon),
                                class: "w-10 h-10 text-primary"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><div class=""${_scopeId3}><p class="block font-medium text-white font-display"${_scopeId3}>${ssrInterpolate(childItem.title)}</p>`);
                            if (childItem.label) {
                              _push4(`<p class="mt-1 text-sm leading-tight text-gray-400"${_scopeId3}>${ssrInterpolate(childItem.label)}</p>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center justify-center flex-none p-2 mt-1 border rounded-button h-11 w-11 border-primary" }, [
                                childItem.icon ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(childItem.icon),
                                  class: "w-10 h-10 text-primary"
                                }, null, 8, ["name"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "" }, [
                                createVNode("p", { class: "block font-medium text-white font-display" }, toDisplayString(childItem.title), 1),
                                childItem.label ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "mt-1 text-sm leading-tight text-gray-400"
                                }, toDisplayString(childItem.label), 1)) : createCommentVNode("", true)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (childItem) => {
                          return openBlock(), createBlock(_component_NuxtLink, {
                            key: childItem.id,
                            href: ("getNavItemUrl" in _ctx ? _ctx.getNavItemUrl : unref(getNavItemUrl))(childItem),
                            class: "relative flex p-4 leading-6 transition duration-150 rounded-panel group gap-x-6 hover:bg-gray-900"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-center flex-none p-2 mt-1 border rounded-button h-11 w-11 border-primary" }, [
                                childItem.icon ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(childItem.icon),
                                  class: "w-10 h-10 text-primary"
                                }, null, 8, ["name"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "" }, [
                                createVNode("p", { class: "block font-medium text-white font-display" }, toDisplayString(childItem.title), 1),
                                childItem.label ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "mt-1 text-sm leading-tight text-gray-400"
                                }, toDisplayString(childItem.label), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Ge), {
                  ref: () => {
                    popover.value = close;
                  },
                  class: "menu-link"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.title) + " ", 1),
                    createVNode(_component_Icon, {
                      name: "heroicons:chevron-down",
                      class: "flex-none w-5 ml-1 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 2
                }, 1536),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(je), { class: "absolute z-10 w-screen max-w-md mt-4 overflow-hidden bg-gray-800 shadow-lg rounded-panel top-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (childItem) => {
                            return openBlock(), createBlock(_component_NuxtLink, {
                              key: childItem.id,
                              href: ("getNavItemUrl" in _ctx ? _ctx.getNavItemUrl : unref(getNavItemUrl))(childItem),
                              class: "relative flex p-4 leading-6 transition duration-150 rounded-panel group gap-x-6 hover:bg-gray-900"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-center flex-none p-2 mt-1 border rounded-button h-11 w-11 border-primary" }, [
                                  childItem.icon ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(childItem.icon),
                                    class: "w-10 h-10 text-primary"
                                  }, null, 8, ["name"])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "" }, [
                                  createVNode("p", { class: "block font-medium text-white font-display" }, toDisplayString(childItem.title), 1),
                                  childItem.label ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-1 text-sm leading-tight text-gray-400"
                                  }, toDisplayString(childItem.label), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/MenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MobileMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const subMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_Motionable = _sfc_main$6;
      const _component_TypographyTitle = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_VText = _sfc_main$8;
      const _component_UButton = __nuxt_component_4;
      const _directive_motion = resolveDirective("motion");
      if (__props.item.children.length > 0) {
        _push(`<div${ssrRenderAttrs(_attrs)}><button class="flex items-center rounded-md"><span class="text-2xl mr-2 font-medium dark:text-white font-display">${ssrInterpolate(__props.item.title)}</span>`);
        if (__props.item.children.length > 0) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:plus",
            class: "w-6 h-6 text-primary"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        _push(ssrRenderComponent(_component_Motionable, mergeProps({
          as: "div",
          name: "submenu",
          show: unref(subMenuOpen),
          initial: { opacity: 0, x: 400, scale: 0.9 },
          enter: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              duration: 300
            }
          },
          leave: {
            opacity: 0,
            x: 400,
            scale: 0.9,
            transition: {
              duration: 300
            }
          },
          class: "fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full bg-gray-50 dark:bg-gray-800"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full px-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TypographyTitle, { class: "pb-2 border-b border-b-primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(__props.item.children, (child) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: child.id,
                  href: child.url,
                  class: "px-3 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_VText, {
                        size: "2xl",
                        class: "font-medium font-display"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(child.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(child.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(child.label)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(child.label), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_VText, {
                          size: "2xl",
                          class: "font-medium font-display"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(child.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VText, { "text-color": "light" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(child.label), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="absolute bottom-4 left-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "material-symbols:arrow-back-rounded",
                label: "Back",
                size: "xl",
                onClick: ($event) => subMenuOpen.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-full px-6" }, [
                  createVNode(_component_TypographyTitle, { class: "pb-2 border-b border-b-primary" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (child) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: child.id,
                      href: child.url,
                      class: "px-3 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VText, {
                          size: "2xl",
                          class: "font-medium font-display"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(child.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VText, { "text-color": "light" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(child.label), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["href"]);
                  }), 128))
                ]),
                createVNode("div", { class: "absolute bottom-4 left-4" }, [
                  createVNode(_component_UButton, {
                    icon: "material-symbols:arrow-back-rounded",
                    label: "Back",
                    size: "xl",
                    onClick: ($event) => subMenuOpen.value = false
                  }, null, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          href: __props.item.url,
          class: "flex items-center rounded-md dark:text-white"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-2xl font-medium font-display"${_scopeId}>${ssrInterpolate(__props.item.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-2xl font-medium font-display" }, toDisplayString(__props.item.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/MobileMenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MobileMenu",
  __ssrInlineRender: true,
  props: {
    navigation: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const route = useRoute();
    const { globals } = useAppConfig();
    const isOpen = ref(false);
    const subMenuOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
      subMenuOpen.value = false;
    };
    watch(
      () => route.path,
      (newVal, oldVal) => {
        isOpen.value = false;
      }
    );
    watch(
      () => isOpen.value,
      (newVal, oldVal) => {
        if (newVal) {
          (void 0).body.style.overflow = "hidden";
        } else {
          (void 0).body.style.overflow = "auto";
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Motionable = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = _sfc_main$9;
      const _component_VText = _sfc_main$8;
      const _component_DarkModeToggle = _sfc_main$a;
      const _component_NavigationMobileMenuItem = _sfc_main$4;
      const _component_UButton = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Motionable, mergeProps({
        as: "div",
        name: "menu",
        show: unref(isOpen),
        initial: { opacity: 0, y: 400, scale: 0.9 },
        enter: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 300
          }
        },
        leave: {
          opacity: 0,
          y: 400,
          scale: 0.9,
          transition: {
            duration: 300
          }
        },
        class: "fixed inset-0 z-50 flex flex-col w-full h-full bg-gray-50 dark:bg-gray-800"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="relative w-full px-6 pt-6 flex justify-between border-b dark:border-gray-700 items-start"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Logo, { class: "h-6 dark:text-white" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Logo, { class: "h-6 dark:text-white" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if ((_a = unref(globals)) == null ? void 0 : _a.tagline) {
              _push2(ssrRenderComponent(_component_VText, { class: "pb-4 mt-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(globals).tagline)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(globals).tagline), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DarkModeToggle, { class: "flex-shrink-0" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col justify-center h-full px-6 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.navigation.items, (item) => {
              _push2(ssrRenderComponent(_component_NavigationMobileMenuItem, {
                key: item.id,
                item,
                onClose: toggle
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_UButton, {
              href: "/contact-us",
              variant: "solid",
              size: "xl",
              class: "font-display"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Let&#39;s Talk`);
                } else {
                  return [
                    createTextVNode("Let's Talk")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full px-6 pt-6 flex justify-between border-b dark:border-gray-700 items-start" }, [
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, { href: "/" }, {
                    default: withCtx(() => [
                      createVNode(_component_Logo, { class: "h-6 dark:text-white" })
                    ]),
                    _: 1
                  }),
                  ((_b = unref(globals)) == null ? void 0 : _b.tagline) ? (openBlock(), createBlock(_component_VText, {
                    key: 0,
                    class: "pb-4 mt-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(globals).tagline), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode(_component_DarkModeToggle, { class: "flex-shrink-0" })
              ]),
              createVNode("div", { class: "flex flex-col justify-center h-full px-6 space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.navigation.items, (item) => {
                  return openBlock(), createBlock(_component_NavigationMobileMenuItem, {
                    key: item.id,
                    item,
                    onClose: toggle
                  }, null, 8, ["item"]);
                }), 128)),
                createVNode(_component_UButton, {
                  href: "/contact-us",
                  variant: "solid",
                  size: "xl",
                  class: "font-display"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Let's Talk")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([{
        "bg-primary": unref(isOpen) || !unref(isOpen)
      }, "fixed z-50 p-4 text-white transition duration-300 shadow-md md:hidden bottom-4 right-4 bg-primary hover:bg-opacity-75 rounded-button"])}"><div><span class="sr-only">Close</span>`);
      if (!unref(isOpen)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:bars-3",
          class: "w-6 h-6"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:x-mark",
          class: "w-6 h-6"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/MobileMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { theme, globals } = useAppConfig();
    const {
      data: navigation,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "mainNavigation",
      () => {
        return useDirectus(
          readItem("navigation", "main", {
            fields: [
              {
                items: [
                  "id",
                  "has_children",
                  "title",
                  "icon",
                  "label",
                  "type",
                  "url",
                  {
                    page: ["permalink", "title"],
                    children: [
                      "id",
                      "title",
                      "has_children",
                      "icon",
                      "label",
                      "type",
                      "url",
                      {
                        page: ["permalink", "title"]
                      }
                    ]
                  }
                ]
              }
            ]
          })
        );
      },
      {
        transform: (data) => data
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = _sfc_main$9;
      const _component_NavigationMenuItem = _sfc_main$5;
      const _component_DarkModeToggle = _sfc_main$a;
      const _component_UButton = __nuxt_component_4;
      const _component_NavigationMobileMenu = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative w-full mx-auto space-y-4 md:flex md:items-center md:space-y-0 md:gap-x-4" }, _attrs))}><div class="flex items-center bg-gray-900 justify-between py-2 px-6 md:flex-1 rounded-card">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/",
        class: "py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, { class: "h-6 text-white" }, null, _parent2, _scopeId));
            if ((_a2 = unref(globals)) == null ? void 0 : _a2.title) {
              _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref(globals).title)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_Logo, { class: "h-6 text-white" }),
              ((_b = unref(globals)) == null ? void 0 : _b.title) ? (openBlock(), createBlock("span", {
                key: 0,
                class: "sr-only"
              }, toDisplayString(unref(globals).title), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex md:space-x-4 lg:space-x-6" aria-label="Global"><!--[-->`);
      ssrRenderList((_a = unref(navigation)) == null ? void 0 : _a.items, (item) => {
        _push(ssrRenderComponent(_component_NavigationMenuItem, {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center justify-end flex-shrink-0 space-x-2">`);
      _push(ssrRenderComponent(_component_DarkModeToggle, {
        class: "hidden text-gray-200 md:block hover:text-gray-400",
        bg: "dark"
      }, null, _parent));
      _push(`</div></div><div class="hidden h-full gap-4 md:flex">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/contact-us",
        color: "primary",
        size: "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let&#39;s Talk`);
          } else {
            return [
              createTextVNode("Let's Talk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "/portal",
        color: "primary",
        variant: "ghost",
        size: "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(navigation)) {
        _push(ssrRenderComponent(_component_NavigationMobileMenu, { navigation: unref(navigation) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { globals } = useAppConfig();
    const { data: navigation } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("footerNav", () => {
      return useDirectus(
        readItem("navigation", "footer", {
          fields: [
            {
              items: [
                "id",
                "title",
                "icon",
                "label",
                "type",
                "url",
                "has_children",
                {
                  page: ["permalink", "title"],
                  children: [
                    "id",
                    "title",
                    "icon",
                    "label",
                    "type",
                    "url",
                    {
                      page: ["permalink", "title"]
                    }
                  ]
                }
              ]
            }
          ]
        })
      );
    })), __temp = await __temp, __restore(), __temp);
    const { data: form } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "newsletterForm",
      () => {
        return useDirectus(
          readItems("forms", {
            filter: {
              key: {
                _eq: "newsletter"
              }
            }
          })
        );
      },
      {
        transform: (data) => data[0]
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = _sfc_main$9;
      const _component_VText = _sfc_main$8;
      const _component_DarkModeToggle = _sfc_main$a;
      const _component_TypographyTitle = _sfc_main$7;
      const _component_TypographyHeadline = _sfc_main$b;
      const _component_UForm = _sfc_main$c;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "relative px-8 py-8 bg-white md:px-12 md:py-10 dark:bg-gray-900 rounded-panel",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><div class="mx-auto"><div class="flex justify-between items-start"><div class="w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, { class: "h-8 dark:text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo, { class: "h-8 dark:text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if ((_a = unref(globals)) == null ? void 0 : _a.tagline) {
        _push(ssrRenderComponent(_component_VText, {
          "text-color": "light",
          class: "mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(globals).tagline)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(globals).tagline), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_DarkModeToggle, { class: "hidden text-gray-600 md:block hover:text-gray-400" }, null, _parent));
      _push(`</div></div><nav class="grid gap-8 mt-8 md:grid-cols-2 xl:mt-0 xl:col-span-2"><div class="mt-4">`);
      _push(ssrRenderComponent(_component_TypographyTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Menu`);
          } else {
            return [
              createTextVNode("Menu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul role="list" class="grid gap-2 mt-2 md:grid-cols-2"><!--[-->`);
      ssrRenderList((_b = unref(navigation)) == null ? void 0 : _b.items, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: ("getNavItemUrl" in _ctx ? _ctx.getNavItemUrl : unref(getNavItemUrl))(item),
          class: "font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (unref(form)) {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_TypographyHeadline, {
          content: `<p>Subscribe to our <em>newsletter</em></p>`,
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Subscribe to our newsletter `);
            } else {
              return [
                createTextVNode(" Subscribe to our newsletter ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UForm, {
          class: "mt-4 mb-8",
          form: unref(form)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div><div class="pt-6 mx-auto border-t dark:border-t-gray-700 max-w-7xl md:flex md:items-center md:justify-between"><div class="flex items-center justify-center space-x-6 md:order-last md:mb-0"><!--[-->`);
      ssrRenderList((_c = unref(globals)) == null ? void 0 : _c.social_links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.url,
          href: link.url,
          class: "w-6 h-6 text-white",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(link.service)}</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "w-8 h-8 text-gray-700 dark:text-white hover:opacity-75",
                name: `mdi:${link.service}`
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "sr-only" }, toDisplayString(link.service), 1),
                createVNode(_component_Icon, {
                  class: "w-8 h-8 text-gray-700 dark:text-white hover:opacity-75",
                  name: `mdi:${link.service}`
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="mt-8 md:mt-0 md:order-1"><span class="mt-2 text-gray-600 dark:text-gray-400"> Copyright \xA9 1988 - ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} `);
      if ((_d = unref(globals)) == null ? void 0 : _d.title) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: "/",
          class: "mx-2 hover:text-primary",
          rel: "noopener noreferrer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(globals).title)}. `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(globals).title) + ". ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` All rights reserved. </span><span class="block mt-2 text-gray-600 dark:text-gray-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:bolt",
        class: "w-4 h-4 text-primary"
      }, null, _parent));
      _push(` Site powered by `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "https://www.directus.io?ref=agencyos_footer",
        target: "_blank",
        rel: "noopener noreferrer",
        class: "border-b dark:border-b-gray-700 hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Directus `);
          } else {
            return [
              createTextVNode(" Directus ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "https://www.nuxt.com?ref=agencyos_footer",
        target: "_blank",
        rel: "noopener noreferrer",
        class: "border-b dark:border-b-gray-700 hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nuxt `);
          } else {
            return [
              createTextVNode(" Nuxt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` . </span></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavigationTheHeader = _sfc_main$2;
  const _component_NavigationTheFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-h-screen overflow-hidden antialiased transition duration-150 bg-white visual-effects bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-700" }, _attrs))}><div class="relative w-full max-w-6xl px-6 pt-6 mx-auto lg:px-16">`);
  _push(ssrRenderComponent(_component_NavigationTheHeader, null, null, _parent));
  _push(`</div><div class="relative text-gray-900">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="relative w-full max-w-6xl px-2 pt-6 pb-12 mx-auto lg:px-16">`);
  _push(ssrRenderComponent(_component_NavigationTheFooter, null, null, _parent));
  _push(`</div><div class="fixed z-10 bottom-4 left-4"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DxEvzb1Q.mjs.map
