import { u as useId } from './id-CsF31SPu.mjs';
import { defineComponent, ref, computed, toRaw, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, toRef, useSSRContext, mergeProps, withCtx, unref, isRef, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, renderList, inject, resolveComponent, renderSlot, resolveDynamicComponent, Transition } from 'vue';
import { f, c as c$1, u as u$3, Y as Ye, G as Ge } from './dialog-BKBIAOLx.mjs';
import { S as Se, h as he } from './Kbd-CrBwD9Ot.mjs';
import { u, o, t, i, E, A as A$1, T, I, l, N, a as l$1 } from './open-closed-Dy9w_Ur1.mjs';
import { u as useUI, s as select, b as selectMenu, g as get } from './selectMenu-BQkBDEWS.mjs';
import { m as mergeConfig, j as appConfig, v as defu, r as useDebounceFn, U as computedAsync, c as createError } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderVNode, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as _sfc_main$4 } from './UIcon-CFeTNZEP.mjs';
import { _ as __nuxt_component_1$1 } from './Avatar-CM8WZfag.mjs';
import { d, e, l as lt, n as nt, u as ut, r as rt, i as it } from './combobox-9r9zJfab.mjs';
import { w, e as w$2, h, f as f$1, u as u$1, O } from './portal-DCPL5wBV.mjs';
import { s, o as o$1 } from './keyboard-puKMRDGD.mjs';
import { p, u as usePopper } from './Dropdown-CMDTLEPg.mjs';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { u as useFormGroup } from './useFormGroup-DoeWXt3h.mjs';
import { u as useInjectButtonGroup } from './useButtonGroup-B6Q5lGA8.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as _sfc_main$5 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$6 } from './VLabel-D4wsGVsj.mjs';
import { _ as _sfc_main$7 } from './VAvatar-DZ5-rAwN.mjs';
import { _ as _sfc_main$8 } from './DateDisplay-Dw0odYQk.mjs';
import { _ as _sfc_main$9 } from './FileCard-lKi1YShj.mjs';
import { _ as _sfc_main$a } from './UForm-BXdHEs5F.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem } from '@directus/sdk';
import { t as transformUrlToIframeSrc } from './embed-BNjS_SEV.mjs';

const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  height: "h-screen max-h-96",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
function pe(o2, b) {
  return o2 === b;
}
var ce = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ce || {}), ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(ve || {}), be = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(be || {});
function me(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, A), r;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o$12, { slots: b, attrs: r, emit: w$2$1 }) {
  let n = ref(1), e$1 = ref(null), f$2 = ref(null), v = ref(null), s2 = ref([]), m = ref(""), p2 = ref(null), a = ref(1);
  function u$22(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s2.value[p2.value] : null, l2 = O(t2(s2.value.slice()), (O2) => o(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o$12.multiple ? 1 : 0), [y, L] = d(computed(() => o$12.modelValue), (t2) => w$2$1("update:modelValue", t2), computed(() => o$12.defaultValue)), M = computed(() => y.value === void 0 ? u(D.value, { [1]: [], [0]: void 0 }) : y.value), k = { listboxState: n, value: M, mode: D, compare(t2, i2) {
    if (typeof o$12.by == "string") {
      let l2 = o$12.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o$12.by(t2, i2);
  }, orientation: computed(() => o$12.horizontal ? "horizontal" : "vertical"), labelRef: e$1, buttonRef: f$2, optionsRef: v, disabled: computed(() => o$12.disabled), options: s2, searchQuery: m, activeOptionIndex: p2, activationTrigger: a, closeListbox() {
    o$12.disabled || n.value !== 1 && (n.value = 1, p2.value = null);
  }, openListbox() {
    o$12.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o$12.disabled || n.value === 1)
      return;
    let d2 = u$22(), O2 = f(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m.value = "", p2.value = O2, a.value = l2 != null ? l2 : 1, s2.value = d2.options;
  }, search(t2) {
    if (o$12.disabled || n.value === 1)
      return;
    let l2 = m.value !== "" ? 0 : 1;
    m.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s2.value.slice(p2.value + l2).concat(s2.value.slice(0, p2.value + l2)) : s2.value).find((I2) => I2.dataRef.textValue.startsWith(m.value) && !I2.dataRef.disabled), h2 = O2 ? s2.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a.value = 1);
  }, clearSearch() {
    o$12.disabled || n.value !== 1 && m.value !== "" && (m.value = "");
  }, registerOption(t2, i2) {
    let l2 = u$22((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s2.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u$22((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s2.value = i2.options, p2.value = i2.activeOptionIndex, a.value = 1;
  }, theirOnChange(t2) {
    o$12.disabled || L(t2);
  }, select(t2) {
    o$12.disabled || L(u(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w([f$2, v], (t2, i2) => {
    var l2;
    k.closeListbox(), w$2(i2, h.Loose) || (t2.preventDefault(), (l2 = o(f$2)) == null || l2.focus());
  }, computed(() => n.value === 0)), provide($, k), t(computed(() => u(n.value, { [0]: i.Open, [1]: i.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o(f$2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o$12.defaultValue === void 0)
        return;
      function t2() {
        k.theirOnChange(o$12.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o$12, h2 = { open: n.value === 0, disabled: l2, value: M.value };
    return h$1(Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I2, Q]) => h$1(f$1, E({ features: u$1.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I2, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...r, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b, attrs: r, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o$12, { attrs: b, slots: r }) {
  var f2;
  let w2 = (f2 = o$12.id) != null ? f2 : `headlessui-listbox-label-${I()}`, n = A("ListboxLabel");
  function e2() {
    var v;
    (v = o(n.buttonRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: n.listboxState.value === 0, disabled: n.disabled.value }, { ...s2 } = o$12, m = { id: w2, ref: n.labelRef, onClick: e2 };
    return A$1({ ourProps: m, theirProps: s2, slot: v, attrs: b, slots: r, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o$2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n = (p2 = o$2.id) != null ? p2 : `headlessui-listbox-button-${I()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a) {
    switch (a.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        a.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$1.ArrowUp:
        a.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v(a) {
    switch (a.key) {
      case o$1.Space:
        a.preventDefault();
        break;
    }
  }
  function s$1(a) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a.preventDefault(), e2.openListbox(), me(() => {
      var u2;
      return (u2 = o(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m = s(computed(() => ({ as: o$2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y, L;
    let a = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o$2, D = { ref: e2.buttonRef, id: n, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y = o(e2.optionsRef)) == null ? void 0 : y.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o(e2.labelRef)) == null ? void 0 : L.id, n].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v, onClick: s$1 };
    return A$1({ ourProps: D, theirProps: u2, slot: a, attrs: b, slots: r, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o$2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n = (p2 = o$2.id) != null ? p2 : `headlessui-listbox-options-${I()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(a) {
    switch (f2.value && clearTimeout(f2.value), a.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "")
          return a.preventDefault(), a.stopPropagation(), e2.search(a.key);
      case o$1.Enter:
        if (a.preventDefault(), a.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u(e2.orientation.value, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Next);
      case u(e2.orientation.value, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.First);
      case o$1.End:
      case o$1.PageDown:
        return a.preventDefault(), a.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1.Escape:
        a.preventDefault(), a.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (e2.search(a.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l(), m = computed(() => s2 !== null ? (s2.value & i.Open) === i.Open : e2.listboxState.value === 0);
  return () => {
    var y, L;
    let a = { open: e2.listboxState.value === 0 }, { ...u2 } = o$2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L = o(e2.buttonRef)) == null ? void 0 : L.id, "aria-orientation": e2.orientation.value, id: n, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: u2, slot: a, attrs: b, slots: r, features: N.RenderStrategy | N.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o$12, { slots: b, attrs: r, expose: w2 }) {
  var C;
  let n = (C = o$12.id) != null ? C : `headlessui-listbox-option-${I()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n : false), s2 = computed(() => u(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o$12.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o$12.value))) })), m = computed(() => u(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n;
  }, [0]: () => s2.value })), p$1 = p(f2), a = computed(() => ({ disabled: o$12.disabled, value: o$12.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n, a)), onUnmounted(() => e2.unregisterOption(n)), onMounted(() => {
    watch([e2.listboxState, s2], () => {
      e2.listboxState.value === 0 && s2.value && u(e2.mode.value, { [1]: () => {
        m.value && e2.goToOption(c$1.Specific, n);
      }, [0]: () => {
        e2.goToOption(c$1.Specific, n);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u$12(t2) {
    if (o$12.disabled)
      return t2.preventDefault();
    e2.select(o$12.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o$12.disabled)
      return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n);
  }
  let y = u$3();
  function L(t2) {
    y.update(t2);
  }
  function M(t2) {
    y.wasMoved(t2) && (o$12.disabled || v.value || e2.goToOption(c$1.Specific, n, 0));
  }
  function k(t2) {
    y.wasMoved(t2) && (o$12.disabled || v.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o$12, i2 = { active: v.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o$12, h2 = { id: n, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: u$12, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k, onMouseleave: k };
    return A$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r, slots: b, name: "ListboxOption" });
  };
} });
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$3 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right", "top", "bottom"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
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
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      let enterFrom, leaveTo;
      switch (props.side) {
        case "left":
          enterFrom = ui.value.translate.left;
          leaveTo = ui.value.translate.left;
          break;
        case "right":
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
          break;
        case "top":
          enterFrom = ui.value.translate.top;
          leaveTo = ui.value.translate.top;
          break;
        case "bottom":
          enterFrom = ui.value.translate.bottom;
          leaveTo = ui.value.translate.bottom;
          break;
        default:
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
      }
      return {
        ...ui.value.transition,
        enterFrom,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo
      };
    });
    const sideType = computed(() => {
      switch (props.side) {
        case "left":
          return "horizontal";
        case "right":
          return "horizontal";
        case "top":
          return "vertical";
        case "bottom":
          return "vertical";
        default:
          return "right";
      }
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    l$1(() => useId("$UHIgTiARN2"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      sideType,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen,
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config$1);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$1 = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    searchableLazy: {
      type: Boolean,
      default: false
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: [String, Function],
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container2] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => {
      var _a;
      return (_a = sizeButtonGroup.value) != null ? _a : sizeFormGroup.value;
    });
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selected = computed(() => {
      if (props.multiple) {
        if (!Array.isArray(props.modelValue) || !props.modelValue.length) {
          return [];
        }
        if (props.valueAttribute) {
          return options.value.filter((option) => props.modelValue.includes(option[props.valueAttribute]));
        }
        return options.value.filter((option) => props.modelValue.includes(option));
      }
      if (props.valueAttribute) {
        return options.value.find((option) => option[props.valueAttribute] === props.modelValue);
      }
      return options.value.find((option) => option === props.modelValue);
    });
    const label = computed(() => {
      var _a2;
      var _a;
      if (props.multiple) {
        if (Array.isArray(props.modelValue) && props.modelValue.length) {
          return `${selected.value.length} selected`;
        } else {
          return null;
        }
      } else if (props.modelValue !== void 0 && props.modelValue !== null) {
        if (props.valueAttribute) {
          return (_a2 = (_a = selected.value) == null ? void 0 : _a[props.optionAttribute]) != null ? _a2 : null;
        } else {
          return ["string", "number"].includes(typeof props.modelValue) ? props.modelValue : props.modelValue[props.optionAttribute];
        }
      }
      return null;
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = props.searchable && typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const options = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      return props.options || [];
    }, [], {
      lazy: props.searchableLazy
    });
    const filteredOptions = computed(() => {
      if (!query.value || debouncedSearch) {
        return options.value;
      }
      return options.value.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : option[props.optionAttribute] === query.value);
        if (existingOption) {
          return null;
        }
      }
      if (typeof props.showCreateOptionWhen === "function") {
        if (!props.showCreateOptionWhen(query.value, filteredOptions.value)) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container2, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    l$1(() => useId("$TRWDFq0Heu"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container: container2,
      selected,
      label,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = _sfc_main$4;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1$1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.multiple ? Array.isArray(_ctx.modelValue) ? _ctx.modelValue : [] : _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected: optionSelected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (optionSelected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected: optionSelected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            optionSelected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected: optionSelected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.createOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected: optionSelected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!((_b = _ctx.filteredOptions) == null ? void 0 : _b.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected: optionSelected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          optionSelected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected: optionSelected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_c = _ctx.filteredOptions) == null ? void 0 : _c.length) ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !((_d = _ctx.filteredOptions) == null ? void 0 : _d.length) ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                          key: 0,
                          "display-value": () => _ctx.query,
                          name: "q",
                          placeholder: _ctx.searchablePlaceholder,
                          autofocus: "",
                          autocomplete: "off",
                          class: _ctx.uiMenu.input,
                          onChange: _ctx.onQueryChange
                        }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                            key: index,
                            as: "template",
                            value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                            disabled: option.disabled
                          }, {
                            default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                              createVNode("li", {
                                class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                              }, [
                                createVNode("div", {
                                  class: _ctx.uiMenu.option.container
                                }, [
                                  renderSlot(_ctx.$slots, "option", {
                                    option,
                                    active,
                                    selected: optionSelected
                                  }, () => [
                                    option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: option.icon,
                                      class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                      "aria-hidden": "true"
                                    }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                      class: _ctx.uiMenu.option.avatar.base,
                                      "aria-hidden": "true"
                                    }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.uiMenu.option.chip.base,
                                      style: { background: `#${option.chip}` }
                                    }, null, 6)) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                  ])
                                ], 2),
                                optionSelected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: _ctx.selectedIcon,
                                    class: _ctx.uiMenu.option.selectedIcon.base,
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 128)),
                        _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: 1,
                          value: _ctx.createOption,
                          as: "template"
                        }, {
                          default: withCtx(({ active, selected: optionSelected }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option-create", {
                                  option: _ctx.createOption,
                                  active,
                                  selected: optionSelected
                                }, () => [
                                  createVNode("span", {
                                    class: _ctx.uiMenu.option.create
                                  }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                                ])
                              ], 2)
                            ], 2)
                          ]),
                          _: 3
                        }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length) ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: _ctx.uiMenu.option.empty
                        }, [
                          renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                            createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                          ])
                        ], 2)) : !((_b = _ctx.filteredOptions) == null ? void 0 : _b.length) ? (openBlock(), createBlock("p", {
                          key: 3,
                          class: _ctx.uiMenu.empty
                        }, [
                          renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                            createTextVNode(" No options. ")
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Task",
  __ssrInlineRender: true,
  props: {
    taskId: {},
    isModal: { type: Boolean, default: true }
  },
  emits: ["close"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const task = ref(null);
    async function fetchTask(id) {
      try {
        const data = await useDirectus(
          readItem("os_tasks", id, {
            fields: [
              "*",
              {
                form: ["*"],
                files: [{ directus_files_id: ["*"] }],
                assigned_to: ["id", "first_name", "last_name", "email", "avatar"]
              }
            ]
          })
        );
        task.value = data;
      } catch (err) {
        throw createError({
          statusCode: 404,
          message: "Task not found"
        });
      }
    }
    [__temp, __restore] = withAsyncContext(() => fetchTask(props.taskId)), await __temp, __restore();
    const taskStatus = computed(() => {
      var _a;
      const status = (_a = task.value) == null ? void 0 : _a.status;
      if (status) {
        return taskStatuses[status];
      }
      return void 0;
    });
    computed(() => {
      var _a, _b;
      if (((_a = task.value) == null ? void 0 : _a.status) === "completed" || ((_b = task.value) == null ? void 0 : _b.form)) {
        return false;
      } else {
        return true;
      }
    });
    const taskStatuses = {
      pending: {
        label: "Pending",
        icon: "i-heroicons-clock-20-solid",
        color: "gray",
        sort: 1
      },
      active: {
        label: "Up Next",
        icon: "i-heroicons-play-20-solid",
        color: "blue",
        sort: 2
      },
      in_progress: {
        label: "In Progress",
        icon: "i-heroicons-wrench-screwdriver-20-solid",
        color: "amber",
        sort: 3
      },
      in_review: {
        label: "In Review",
        icon: "i-heroicons-exclamation-circle-20-solid",
        color: "orange",
        sort: 4
      },
      completed: {
        label: "Completed",
        icon: "i-heroicons-check-20-solid",
        color: "green",
        sort: 5
      }
    };
    const availableStatuses = computed(() => {
      const statuses = Object.entries(taskStatuses).filter(([key, value]) => {
        var _a;
        if (key === ((_a = task.value) == null ? void 0 : _a.status)) {
          return false;
        } else {
          return true;
        }
      });
      return statuses.map(([key, value]) => {
        var _a;
        return {
          label: "Mark as " + value.label,
          value: key,
          icon: value.icon,
          // If the task has a form, then we need to check for the form submission first
          disabled: key === "completed" && ((_a = task.value) == null ? void 0 : _a.form)
        };
      });
    });
    const selected = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_USelectMenu = __nuxt_component_1;
      const _component_UButton = __nuxt_component_4;
      const _component_UIcon = _sfc_main$4;
      const _component_TypographyHeadline = _sfc_main$5;
      const _component_VLabel = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      const _component_DateDisplay = _sfc_main$8;
      const _component_PortalFileCard = _sfc_main$9;
      const _component_UForm = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "sticky top-0 z-20 py-4 space-y-4 bg-white shadow-lg shadow-white dark:bg-gray-900 backdrop-blur-md dark:shadow-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-between pb-4 border-b dark:border-gray-700"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: unref(selected),
              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
              options: unref(availableStatuses)
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    "leading-icon": (_a2 = unref(taskStatus)) == null ? void 0 : _a2.icon,
                    color: (_b2 = unref(taskStatus)) == null ? void 0 : _b2.color
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a3 = unref(taskStatus)) == null ? void 0 : _a3.label)} `);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-heroicons-chevron-right-20-solid",
                          class: ["w-5 h-5 transition-transform", [open && "transform rotate-90"]]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b3 = unref(taskStatus)) == null ? void 0 : _b3.label) + " ", 1),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-chevron-right-20-solid",
                            class: ["w-5 h-5 transition-transform", [open && "transform rotate-90"]]
                          }, null, 8, ["class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      "leading-icon": (_c = unref(taskStatus)) == null ? void 0 : _c.icon,
                      color: (_d = unref(taskStatus)) == null ? void 0 : _d.color
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(taskStatus)) == null ? void 0 : _a3.label) + " ", 1),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-chevron-right-20-solid",
                            class: ["w-5 h-5 transition-transform", [open && "transform rotate-90"]]
                          }, null, 8, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["leading-icon", "color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            if (props.isModal) {
              _push2(ssrRenderComponent(_component_UButton, {
                variant: "ghost",
                color: "primary",
                "leading-icon": "i-heroicons-x-mark",
                onClick: ($event) => _ctx.$emit("close")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Close `);
                  } else {
                    return [
                      createTextVNode(" Close ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if ((_a = unref(task)) == null ? void 0 : _a.name) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: unref(task).name,
                size: "xs"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between pb-4 border-b dark:border-gray-700" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_USelectMenu, {
                    modelValue: unref(selected),
                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                    options: unref(availableStatuses)
                  }, {
                    default: withCtx(({ open }) => {
                      var _a2, _b2;
                      return [
                        createVNode(_component_UButton, {
                          "leading-icon": (_a2 = unref(taskStatus)) == null ? void 0 : _a2.icon,
                          color: (_b2 = unref(taskStatus)) == null ? void 0 : _b2.color
                        }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(taskStatus)) == null ? void 0 : _a3.label) + " ", 1),
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-chevron-right-20-solid",
                                class: ["w-5 h-5 transition-transform", [open && "transform rotate-90"]]
                              }, null, 8, ["class"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["leading-icon", "color"])
                      ];
                    }),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                createVNode("div", null, [
                  props.isModal ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    variant: "ghost",
                    color: "primary",
                    "leading-icon": "i-heroicons-x-mark",
                    onClick: ($event) => _ctx.$emit("close")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Close ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              ((_b = unref(task)) == null ? void 0 : _b.name) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 0,
                content: unref(task).name,
                size: "xs"
              }, null, 8, ["content"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "pb-12 mt-8 space-y-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2;
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<div class="grid gap-8 md:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Assigned To" }, null, _parent2, _scopeId));
            if ((_a = unref(task)) == null ? void 0 : _a.assigned_to) {
              _push2(ssrRenderComponent(_component_VAvatar, {
                author: (_b = unref(task)) == null ? void 0 : _b.assigned_to
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Due Date" }, null, _parent2, _scopeId));
            _push2(`<div class="flex space-x-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DateDisplay, {
              date: (_c = unref(task)) == null ? void 0 : _c.due_date,
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Description" }, null, _parent2, _scopeId));
            _push2(`<div class="prose dark:prose-invert"${_scopeId}>${(_a2 = (_d = unref(task)) == null ? void 0 : _d.description) != null ? _a2 : ""}</div></div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Files" }, null, _parent2, _scopeId));
            if (((_e = unref(task)) == null ? void 0 : _e.files) && ((_g = (_f = unref(task)) == null ? void 0 : _f.files) == null ? void 0 : _g.length) > 0) {
              _push2(`<div class="grid gap-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(task).files, (file) => {
                var _a22;
                _push2(ssrRenderComponent(_component_PortalFileCard, {
                  key: (_a22 = file.directus_files_id) == null ? void 0 : _a22.id,
                  file: file.directus_files_id
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if ((_h = unref(task)) == null ? void 0 : _h.form) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VLabel, { label: "Form" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UForm, {
                form: unref(task).form
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_i = unref(task)) == null ? void 0 : _i.embed_url) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VLabel, { label: "Embed" }, null, _parent2, _scopeId));
              _push2(`<iframe${ssrRenderAttr("src", ("transformUrlToIframeSrc" in _ctx ? _ctx.transformUrlToIframeSrc : unref(transformUrlToIframeSrc))(unref(task).embed_url))} class="w-full h-[550px] overflow-hidden border border-gray-300 dark:border-gray-700 rounded-panel"${_scopeId}></iframe></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "grid gap-8 md:grid-cols-2" }, [
                createVNode("div", null, [
                  createVNode(_component_VLabel, { label: "Assigned To" }),
                  ((_j = unref(task)) == null ? void 0 : _j.assigned_to) ? (openBlock(), createBlock(_component_VAvatar, {
                    key: 0,
                    author: (_k = unref(task)) == null ? void 0 : _k.assigned_to
                  }, null, 8, ["author"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "" }, [
                  createVNode(_component_VLabel, { label: "Due Date" }),
                  createVNode("div", { class: "flex space-x-1.5" }, [
                    createVNode(_component_DateDisplay, {
                      date: (_l = unref(task)) == null ? void 0 : _l.due_date,
                      size: "sm"
                    }, null, 8, ["date"])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_VLabel, { label: "Description" }),
                createVNode("div", {
                  class: "prose dark:prose-invert",
                  innerHTML: (_m = unref(task)) == null ? void 0 : _m.description
                }, null, 8, ["innerHTML"])
              ]),
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_VLabel, { label: "Files" }),
                ((_n = unref(task)) == null ? void 0 : _n.files) && ((_p = (_o = unref(task)) == null ? void 0 : _o.files) == null ? void 0 : _p.length) > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid gap-4 sm:grid-cols-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(task).files, (file) => {
                    var _a22;
                    return openBlock(), createBlock(_component_PortalFileCard, {
                      key: (_a22 = file.directus_files_id) == null ? void 0 : _a22.id,
                      file: file.directus_files_id
                    }, null, 8, ["file"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ]),
              ((_q = unref(task)) == null ? void 0 : _q.form) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_VLabel, { label: "Form" }),
                createVNode(_component_UForm, {
                  form: unref(task).form
                }, null, 8, ["form"])
              ])) : createCommentVNode("", true),
              ((_r = unref(task)) == null ? void 0 : _r.embed_url) ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_VLabel, { label: "Embed" }),
                createVNode("iframe", {
                  src: ("transformUrlToIframeSrc" in _ctx ? _ctx.transformUrlToIframeSrc : unref(transformUrlToIframeSrc))(unref(task).embed_url),
                  class: "w-full h-[550px] overflow-hidden border border-gray-300 dark:border-gray-700 rounded-panel"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/Task.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_5 as _, _sfc_main as a };
//# sourceMappingURL=Task-D0RCxG5P.mjs.map
