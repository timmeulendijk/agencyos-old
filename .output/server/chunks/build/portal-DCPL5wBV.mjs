import { ref, computed, defineComponent, watchEffect, h as h$1, provide, inject, onMounted, getCurrentInstance, watch, onUnmounted, Teleport, reactive, nextTick } from 'vue';
import { c as c$1, o, u as u$3, A } from './open-closed-Dy9w_Ur1.mjs';

function i$1(r) {
  if (c$1.isServer)
    return null;
  if (r instanceof Node)
    return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let n2 = o(r);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$1 || {}), T = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E$1(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r, t2) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$2(e2, r = 0) {
  var t2;
  return e2 === ((t2 = i$1(e2)) == null ? void 0 : t2.body) ? false : u$3(r, { [0]() {
    return e2.matches(c);
  }, [1]() {
    let l = e2;
    for (; l !== null; ) {
      if (l.matches(c))
        return true;
      l = l.parentElement;
    }
    return false;
  } });
}
function _(e2) {
  let r = i$1(e2);
  nextTick(() => {
    r && !w$2(r.activeElement, 0) && S(e2);
  });
}
var y = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y || {});
function S(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$1 = ["textarea", "input"].join(",");
function I(e2) {
  var r, t2;
  return (t2 = (r = e2 == null ? void 0 : e2.matches) == null ? void 0 : r.call(e2, H$1)) != null ? t2 : false;
}
function O(e2, r = (t2) => t2) {
  return e2.slice().sort((t2, l) => {
    let o2 = r(t2), i2 = r(l);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$1(e2, r) {
  return P(E$1(), r, { relativeTo: e2 });
}
function P(e2, r, { sorted: t2 = true, relativeTo: l = null, skipElements: o2 = [] } = {}) {
  var m;
  let i2 = (m = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$1(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o2.includes(s2))), l = l != null ? l : i2.activeElement;
  let x2 = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, n2.indexOf(l)) - 1;
    if (r & 4)
      return Math.max(0, n2.indexOf(l)) + 1;
    if (r & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r & 32 ? { preventScroll: true } : {}, a = 0, d2 = n2.length, u2;
  do {
    if (a >= d2 || a + d2 <= 0)
      return 0;
    let s2 = p + a;
    if (r & 16)
      s2 = (s2 + d2) % d2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= d2)
        return 1;
    }
    u2 = n2[s2], u2 == null || u2.focus(L), a += x2;
  } while (u2 !== i2.activeElement);
  return r & 6 && I(u2) && u2.select(), 2;
}
function t() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$1() {
  return t() || i();
}
function u$2(e2, t2, n2) {
  c$1.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$1(e2, n2, t2) {
  c$1.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w(f2, m, l = computed(() => true)) {
  function a(e2, r) {
    if (!l.value || e2.defaultPrevented)
      return;
    let t2 = r(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o$1 of c2) {
      if (o$1 === null)
        continue;
      let n2 = o$1 instanceof HTMLElement ? o$1 : o(o$1);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m(e2, t2);
  }
  let u2 = ref(null);
  u$2("pointerdown", (e2) => {
    var r, t2;
    l.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("mousedown", (e2) => {
    var r, t2;
    l.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("click", (e2) => {
    n$1() || u2.value && (a(e2, () => u2.value), u2.value = null);
  }, true), u$2("touchend", (e2) => a(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$1("blur", (e2) => a(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var u$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$1 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r = d2["aria-hidden"]) != null ? r : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
function E(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$1 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$1 || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function N({ defaultContainers: o$1 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r = i$1(t2);
  function u2() {
    var l, f2, a;
    let n2 = [];
    for (let e2 of o$1)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o(t2)) || e2.contains((a = (f2 = o(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l) => l.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$1, { features: u$1.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h$1(f$1, { features: u$1.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s() {
  return inject(e, false);
}
let u = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
function x(e2) {
  let t2 = i$1(e2);
  if (!t2) {
    if (e2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l = t2.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let r = t2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l = t2(U(e2));
  return l <= 0 ? f.delete(e2) : f.set(e2, l), l;
}
let $ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l }) {
  let r = ref(null), i2 = computed(() => i$1(r)), o$1 = s(), u2 = inject(H, null), n2 = ref(o$1 === true || u2 == null ? x(r.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a) => a + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o$1 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d, null), g = false, b = getCurrentInstance();
  return watch(r, () => {
    if (g || !v2)
      return;
    let a = o(r);
    a && (onUnmounted(v2.register(a), b), g = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a || n2.value !== a || M(n2.value, (L) => L - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null)
      return null;
    let a = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A({ ourProps: a, theirProps: e2, slot: {}, attrs: l, slots: t2, name: "Portal" }));
  };
} }), d = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d, null), t2 = ref([]);
  function l(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r(o2);
  }
  function r(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l, unregister: r, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l }) {
  let r = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H, r), () => {
    let { target: i2, ...o2 } = e2;
    return A({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l, name: "PortalGroup" });
  };
} });

export { $, E, N, O, P, S, T, _, u as a, N$1 as b, n$1 as c, d$1 as d, w$2 as e, f$1 as f, E$1 as g, h, i$1 as i, v as j, n, q, t, u$1 as u, v$1 as v, w, z };
//# sourceMappingURL=portal-DCPL5wBV.mjs.map
