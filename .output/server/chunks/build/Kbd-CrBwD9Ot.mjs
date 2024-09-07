import { defineComponent, ref, h, computed, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, toRef, useSSRContext, inject, mergeProps } from 'vue';
import { N as N$1, s as s2, S, I, u, o as o$1, t as t$1, i, c, A, l as l$1, T } from './open-closed-Dy9w_Ur1.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useUI } from './selectMenu-BQkBDEWS.mjs';
import { m as mergeConfig, j as appConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a = [], s2 = { addEventListener(e, t2, r, i2) {
    return e.addEventListener(t2, r, i2), s2.add(() => e.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t$12 = { current: true };
    return t(() => {
      t$12.current && e[0]();
    }), s2.add(() => {
      t$12.current = false;
    });
  }, style(e, t2, r) {
    let i2 = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: r }), this.add(() => {
      Object.assign(e.style, { [t2]: i2 });
    });
  }, group(e) {
    let t2 = o();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return a.push(e), () => {
      let t2 = a.indexOf(e);
      if (t2 >= 0)
        for (let r of a.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e of a.splice(0))
      e();
  } };
  return s2;
}
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e, t2) {
  let i2 = o();
  if (!e)
    return i2.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [l2, s2] = [n, a].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e, t2, i2, n, a, l$12) {
  let s2 = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a), m(e, ...t2, ...i2), s2.nextFrame(() => {
    d(e, ...i2), m(e, ...n), s2.add(F(e, (u2) => (d(e, ...n, ...t2), m(e, ...a), o$12(u2))));
  }), s2.add(() => d(e, ...t2, ...i2, ...n, ...a)), s2.add(() => o$12("cancelled")), s2.dispose;
}
function g(e = "") {
  return e.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a) => (a.Visible = "visible", a.Hidden = "hidden", a))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a = ref(false);
  onMounted(() => a.value = true), onUnmounted(() => a.value = false);
  function s2(n, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f }) => f === n);
    l2 !== -1 && (u(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a.value && (e == null || e()));
  }
  function h2(n) {
    let r = t2.value.find(({ id: l2 }) => l2 === n);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n, state: "visible" }), () => s2(n, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s$1, expose: h$1 }) {
  let n = ref(0);
  function r() {
    n.value |= i.Opening, t2("beforeEnter");
  }
  function l2() {
    n.value &= ~i.Opening, t2("afterEnter");
  }
  function f() {
    n.value |= i.Closing, t2("beforeLeave");
  }
  function S$1() {
    n.value &= ~i.Closing, t2("afterLeave");
  }
  if (!me() && s2())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f, onAfterLeave: S$1 }, s$1);
  let d2 = ref(null), y = computed(() => e.unmount ? S.Unmount : S.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A$1 } = Te(), { register: D, unregister: H } = ge(), i$1 = ref(v.value ? "visible" : "hidden"), I$1 = { value: true }, c$1 = I(), b = { value: false }, P = Q(() => {
    !b.value && i$1.value !== "hidden" && (i$1.value = "hidden", H(c$1), S$1());
  });
  onMounted(() => {
    let o2 = D(c$1);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y.value === S.Hidden && c$1) {
      if (v.value && i$1.value !== "visible") {
        i$1.value = "visible";
        return;
      }
      u(i$1.value, { ["hidden"]: () => H(c$1), ["visible"]: () => D(c$1) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _ = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i$1.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E = I$1.value && !A$1.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E || (b.value = true, v.value && r(), v.value || f(), o2(v.value ? L$1(p, j, M, X, _, (V) => {
      b.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _, (V) => {
      b.value = false, V === g$1.Finished && (L(P) || (i$1.value = "hidden", H(c$1), S$1()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E, p) => {
      te(p), I$1.value = false;
    }, { immediate: true });
  }), provide(N, P), t$1(computed(() => u(i$1.value, { ["visible"]: i.Open, ["hidden"]: i.Closed }) | n.value)), () => {
    let { appear: o2, show: E, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A$1.value && v.value && c.isServer ? { class: normalizeClass([a.class, U.class, ...j, ...M]) } : {} };
    return A({ theirProps: re, ourProps: ne, slot: {}, slots: s$1, attrs: a, features: W, visible: i$1.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s2 }) {
  let h$1 = l$1(), n = computed(() => e.show === null && h$1 !== null ? (h$1.value & i.Open) === i.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f = ref(true), S2 = { show: n, appear: computed(() => e.appear || !f.value) };
  return onMounted(() => {
    watchEffect(() => {
      f.value = false, n.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y = { unmount: e.unmount };
    return A({ ourProps: { ...y, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a, ...y, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
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
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Se as S, __nuxt_component_0 as _, he as h, o, t };
//# sourceMappingURL=Kbd-CrBwD9Ot.mjs.map
