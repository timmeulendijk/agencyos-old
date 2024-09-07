import { defineComponent, ref, computed, onMounted, onUnmounted, h, Fragment, watchEffect, watch, unref, inject, provide, nextTick, shallowRef } from 'vue';
import { i as i$1$1, n, f as f$1, u as u$1$1, S, E as E$1, q, N as N$1, w as w$2, a as u$5, $ as $$1, z as z$1, d as d$1, P, b as N$1$1, T as T$1, t as t$3 } from './portal-DCPL5wBV.mjs';
import { A as A$2, o, I, l as l$1, i as i$2, u as u$4, N as N$2 } from './open-closed-Dy9w_Ur1.mjs';
import { t as t$2, o as o$2 } from './Kbd-CrBwD9Ot.mjs';
import { o as o$1 } from './keyboard-puKMRDGD.mjs';

function r(e) {
  return [e.screenX, e.screenY];
}
function u$3() {
  let e = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e.value[0] === t2[0] && e.value[1] === t2[1] ? false : (e.value = t2, true);
  }, update(n2) {
    e.value = r(n2);
  } };
}
function i$1({ container: e, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$1$1(e);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
let t$1 = [];
function u$2(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e = 0; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e = s2 - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 2: {
      for (let e = s2 + 1; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 3: {
      for (let e = t2.length - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t2.length; ++e)
        if (n2.resolveId(t2[e], e, t2) === l2.id)
          return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u$2(l2);
  }
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$1, slots: r2, expose: l2 }) {
  let o$12 = ref(null);
  l2({ el: o$12, $el: o$12 });
  let i2 = computed(() => i$1$1(o$12)), e = ref(false);
  onMounted(() => e.value = true), onUnmounted(() => e.value = false), $({ ownerDocument: i2 }, computed(() => e.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o$12, initialFocus: computed(() => t2.initialFocus) }, computed(() => e.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o$12, containers: t2.containers, previousActiveElement: m2 }, computed(() => e.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o(o$12);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$4(f2.value, { [d$1.Forwards]: () => {
        P(T2, N$1$1.First, { skipElements: [u2.relatedTarget] });
      }, [d$1.Backwards]: () => {
        P(T2, N$1$1.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function F(u2) {
    u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function H2(u2) {
    if (!e.value)
      return;
    let T2 = B(t2.containers);
    o(o$12) instanceof HTMLElement && T2.add(o(o$12));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N(T2, d2) || (s2.value ? P(o(o$12), u$4(f2.value, { [d$1.Forwards]: () => N$1$1.Next, [d$1.Backwards]: () => N$1$1.Previous }) | N$1$1.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o$12, onKeydown: F, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q, ...O } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$1$1.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$1, ...O }, slot: u2, attrs: n$1, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$1$1.Focusable })]);
  };
} }), { features: A$1 });
function W(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$2(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r2 = W(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S(r2());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o$12 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e, m2) => {
      if (e.every((a2, s2) => (m2 == null ? void 0 : m2[s2]) === a2) || !l2.value)
        return;
      let f2 = o(n2);
      f2 && t$2(() => {
        var F, H2;
        if (!i2.value)
          return;
        let a2 = o(r2), s2 = (F = t2.value) == null ? void 0 : F.activeElement;
        if (a2) {
          if (a2 === s2) {
            o$12.value = s2;
            return;
          }
        } else if (f2.contains(s2)) {
          o$12.value = s2;
          return;
        }
        a2 ? S(a2) : P(f2, N$1$1.First | N$1$1.NoScroll) === T$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o$12.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o$12;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o$12) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e) => {
    if (!o$12.value)
      return;
    let m2 = B(r2);
    o(n2) instanceof HTMLElement && m2.add(o(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e.target;
    a2 && a2 instanceof HTMLElement ? N(m2, a2) ? (l2.value = a2, S(a2)) : (e.preventDefault(), e.stopPropagation(), S(f2)) : S(l2.value);
  }, true);
}
function N(t2, n2) {
  for (let r2 of t2)
    if (r2.contains(n2))
      return true;
  return false;
}
function m$1(t2) {
  let e = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e.value = t2.getSnapshot();
  })), e;
}
function a$1(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e) {
    return n2.add(e), () => n2.delete(e);
  }, dispatch(e, ...s2) {
    let i2 = r2[e].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e }) {
    var l2;
    let n2 = e.documentElement;
    o2 = ((l2 = e.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e, d: n2 }) {
    let t2 = e.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$2();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e = t2.target.closest("a");
            if (!e)
              return;
            let { hash: f2 } = new URL(e.href), i2 = r2.querySelector(f2);
            i2 && !a2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (a2(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && a2(e.parentElement); )
              e = e.parentElement;
            n2.style(e, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT")
            return;
          if (a2(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && e.dataset.headlessuiPortal !== "" && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth); )
              e = e.parentElement;
            e.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e;
        let t2 = (e = (void 0).scrollY) != null ? e : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l() {
  return { before({ doc: e, d: o2 }) {
    o2.style(e.documentElement, "overflow", "hidden");
  } };
}
function m(e) {
  let n2 = {};
  for (let t2 of e)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e, n2) {
  var o2;
  let t2 = (o2 = this.get(e)) != null ? o2 : { doc: e, count: 0, d: o$2(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e, t2), this;
}, POP(e, n2) {
  let t2 = this.get(e);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e, d: n2, meta: t2 }) {
  let o2 = { doc: e, d: n2, meta: m(t2) }, c$12 = [w$1(), c(), l()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
a.subscribe(() => {
  let e = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d(t2, a$12, n2) {
  let i2 = m$1(a), l2 = computed(() => {
    let e = t2.value ? i2.value.get(t2.value) : void 0;
    return e ? e.count > 0 : false;
  });
  return watch([t2, a$12], ([e, m2], [r2], o2) => {
    if (!e || !m2)
      return;
    a.dispatch("PUSH", e, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r2 != null ? r2 : e, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o$12) => {
    var a2;
    if (!f2.value)
      return;
    let e = o(d2);
    if (!e)
      return;
    o$12(function() {
      var u2;
      if (!e)
        return;
      let r2 = (u2 = t.get(e)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e) : t.set(e, r2 - 1), r2 !== 1)
        return;
      let n2 = i.get(e);
      n2 && (n2["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n2["aria-hidden"]), e.inert = n2.inert, i.delete(e));
    });
    let l2 = (a2 = t.get(e)) != null ? a2 : 0;
    t.set(e, l2 + 1), l2 === 0 && (i.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = true);
  });
}
let u$1 = Symbol("StackContext");
var s = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(s || {});
function y() {
  return inject(u$1, () => {
  });
}
function R({ type: o2, enabled: r2, element: e, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e) : d2 === true && t2(1, o2, e);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e = ref([]);
  function r2(n2) {
    return e.value.push(n2), () => {
      let i2 = e.value.indexOf(n2);
      i2 !== -1 && e.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s2 }) {
  var n2;
  let e = (n2 = t2.id) != null ? n2 : `headlessui-description-${I()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g, m2]) => Object.assign(a2, { [g]: unref(m2) }), {}), id: e };
    return A$2({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s2, name: i2 });
  };
} });
var Te = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p, expose: s$1 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${I()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$1(), R$1 = computed(() => t2.open === A && S2 !== null ? (S2.value & i$2.Open) === i$2.Open : t2.open), m2 = ref(null), E$2 = computed(() => i$1$1(m2));
  if (s$1({ el: m2, $el: m2 }), !(t2.open !== A || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R$1.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R$1.value === A ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R$1.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1({ portals: Q, defaultContainers: [computed(() => {
    var e;
    return (e = h$1.panelRef.value) != null ? e : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U = computed(() => S2 !== null ? (S2.value & i$2.Closing) === i$2.Closing : false), te = computed(() => N2 || U.value ? false : k$1.value), le = computed(() => {
    var e, a2, d2;
    return (d2 = Array.from((a2 = (e = E$2.value) == null ? void 0 : e.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e, a2, d2;
    return (d2 = Array.from((a2 = (e = E$2.value) == null ? void 0 : e.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e, a2) => {
    if (a2 === "Dialog")
      return u$4(e, { [s.Add]: () => D.value += 1, [s.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R$1.value })) }), M = ref(null), h$1 = { titleId: M, panelRef: ref(null), dialogState: c2, setTitleId(e) {
    M.value !== e && (M.value = e);
  }, close() {
    i2("close", false);
  } };
  provide(H, h$1);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e, a2) => {
    e.preventDefault(), h$1.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$2.value) == null ? void 0 : W2.defaultView, "keydown", (e) => {
    ie.value && (e.defaultPrevented || e.key === o$1.Escape && (e.preventDefault(), e.stopPropagation(), h$1.close()));
  });
  let ue$1 = computed(() => !(U.value || c2.value !== 0 || N2));
  return d(E$2, ue$1, (e) => {
    var a2;
    return { containers: [...(a2 = e.containers) != null ? a2 : [], B2] };
  }), watchEffect((e) => {
    if (c2.value !== 0)
      return;
    let a2 = o(m2);
    if (!a2)
      return;
    let d2 = new ResizeObserver((f2) => {
      for (let L of f2) {
        let x = L.target.getBoundingClientRect();
        x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && h$1.close();
      }
    });
    d2.observe(a2), e(() => d2.disconnect());
  }), () => {
    let { open: e, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": re.value }, L = { open: c2.value === 0 };
    return h(u$5, { force: true }, () => [h($$1, () => h(z$1, { target: m2.value }, () => h(u$5, { force: false }, () => h(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$4(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(X, {}, () => A$2({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L, attrs: l2, slots: p, visible: c2.value === 0, features: N$2.RenderStrategy | N$2.Static, name: "Dialog" })))))), h(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${I()}`, s2 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s2.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$2({ ourProps: { id: p, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s2 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${I()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g } = t2, D = { id: s2, ref: u2, "aria-hidden": true };
    return h(u$5, { force: true }, () => h($$1, () => A$2({ ourProps: D, theirProps: { ...i2, ...g }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s2 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${I()}`, n2 = T("DialogPanel");
  p({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g) {
    g.stopPropagation();
  }
  return () => {
    let { ...g } = t2, D = { id: s2, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${I()}`, s2 = T("DialogTitle");
  return onMounted(() => {
    s2.setTitleId(p), onUnmounted(() => s2.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$2({ ourProps: { id: p }, theirProps: u2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });

export { Ge as G, Ye as Y, c$1 as c, f, i$1 as i, t$1 as t, u$3 as u };
//# sourceMappingURL=dialog-BKBIAOLx.mjs.map
