import { _ as __nuxt_component_0$1 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$4 } from './Logo-Dz7nGNoc.mjs';
import { _ as _sfc_main$5 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$6 } from './DarkModeToggle-Dqz9Fta5.mjs';
import { _ as __nuxt_component_2 } from './Dropdown-CMDTLEPg.mjs';
import { _ as __nuxt_component_1 } from './Avatar-CM8WZfag.mjs';
import __nuxt_component_0$2 from './index-Dqa-xyfo.mjs';
import { _ as __nuxt_component_7 } from './nuxt-error-boundary-Blecufsi.mjs';
import { _ as _sfc_main$7 } from './VAlert-B7QIU45Y.mjs';
import { m as mergeConfig, j as appConfig, p as useState, k as useDirectusAuth, l as useRequestHeaders, n as navigateTo, _ as __nuxt_component_4$1, o as useTimestamp } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Modal-B8yYdas2.mjs';
import { d as defineShortcuts, _ as __nuxt_component_0$3 } from './defineShortcuts-CsT8B_oy.mjs';
import { useSSRContext, defineComponent, toRef, ref, computed, watch, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, watchEffect, createSlots, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { u as useUI } from './selectMenu-BQkBDEWS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useToast } from './useToast-BMHYguAT.mjs';
import { u as userName } from './user-name-hNaZlTuZ.mjs';
import { S as Se, h as he } from './Kbd-CrBwD9Ot.mjs';
import { Y as Ye, G as Ge } from './dialog-BKBIAOLx.mjs';
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
import './composables-BxS0fVn-.mjs';
import './id-CsF31SPu.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './portal-DCPL5wBV.mjs';
import './keyboard-puKMRDGD.mjs';
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
import '@directus/sdk';
import 'vue-dompurify-html';
import 'node:crypto';
import './combobox-9r9zJfab.mjs';
import '@tanstack/vue-virtual';
import '@vueuse/integrations/useFuse';
import './useButtonGroup-B6Q5lGA8.mjs';

const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
const notifications = {
  wrapper: "fixed flex flex-col justify-end z-[55]",
  position: "bottom-0 end-0",
  width: "w-full sm:w-96",
  container: "px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PortalSearch",
  __ssrInlineRender: true,
  props: {
    placeholder: {
      type: String,
      default: "Search items"
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const headers = useRequestHeaders(["cookie"]);
    const actions = [
      {
        id: "projects",
        label: "Go to Projects",
        click: () => navigateTo("/portal/projects")
      },
      {
        id: "files",
        label: "Go to Files",
        click: () => navigateTo("/portal/files")
      },
      {
        id: "invoices",
        label: "Go to Invoices",
        click: () => navigateTo("/portal/billing/invoices")
      },
      {
        id: "acccount",
        label: "Go to My Account",
        click: () => navigateTo("/portal/account")
      }
    ];
    const groups = computed(() => {
      return [
        {
          key: "search",
          label: (q) => q && `Results matching \u201C${q}\u201D...`,
          search: async (q) => {
            loading.value = true;
            if (!q || q.length < 3) {
              loading.value = false;
              return [];
            }
            try {
              const { data } = await $fetch("/api/portal/search", {
                params: {
                  search: q,
                  collections: ["os_projects", "os_tasks", "os_invoices", "help_articles"]
                },
                headers
              });
              return data.map((hit) => {
                return {
                  id: hit.id,
                  label: hit.title,
                  href: hit.url,
                  suffix: hit.type
                };
              });
            } catch (error) {
            } finally {
              loading.value = false;
            }
          }
        },
        {
          key: "actions",
          commands: actions
        }
      ].filter(Boolean);
    });
    function onSelect(option) {
      if (option.click) {
        option.click();
      } else if (option.to) {
        navigateTo(option.to);
      } else if (option.href) {
        navigateTo(option.href);
      }
      emit("close");
    }
    const commandPaletteRef = ref(null);
    ref("");
    ref([]);
    ref(null);
    const loading = ref(false);
    const ui = {
      wrapper: "flex flex-col flex-1 min-h-0 bg-gray-50 dark:bg-gray-800",
      input: {
        wrapper: "relative flex items-center mx-3 py-3",
        base: "w-full rounded border-2 border-primary-500 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-0 bg-white dark:bg-gray-900",
        padding: "px-4",
        height: "h-14",
        size: "text-lg",
        icon: {
          base: "pointer-events-none absolute left-3 text-primary-500 dark:text-primary-400",
          size: "h-6 w-6"
        }
      },
      group: {
        wrapper: "p-3 relative",
        label: "-mx-3 px-3 -mt-4 mb-2 py-1 text-sm font-semibold text-primary-500 dark:text-primary-400 font-semibold sticky top-0 bg-gray-50 dark:bg-gray-800 z-10",
        container: "space-y-1",
        command: {
          base: "flex justify-between select-none items-center rounded px-2 py-4 gap-2 relative font-medium text-sm group shadow",
          active: "bg-primary-500 dark:bg-primary-400 text-white",
          inactive: "bg-white dark:bg-gray-900",
          label: "flex min-w-0 justify-between",
          suffix: "text-xs",
          icon: {
            base: "flex-shrink-0 w-6 h-6",
            active: "text-white",
            inactive: "text-gray-400 dark:text-gray-500"
          }
        }
      },
      emptyState: {
        wrapper: "flex flex-col items-center justify-center flex-1 py-9",
        label: "text-sm text-center text-gray-500 dark:text-gray-400",
        queryLabel: "text-lg text-center text-gray-900 dark:text-white",
        icon: "w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCommandPalette = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UCommandPalette, {
        ref_key: "commandPaletteRef",
        ref: commandPaletteRef,
        loading: unref(loading),
        groups: unref(groups),
        ui,
        "onUpdate:modelValue": onSelect
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/PortalSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useTimer(cb, interval, options) {
  let timer = null;
  const { pause: tPause, resume: tResume, timestamp } = useTimestamp({ ...{}, controls: true });
  const startTime = ref(null);
  const remaining = computed(() => {
    if (!startTime.value) {
      return 0;
    }
    return interval - (timestamp.value - startTime.value);
  });
  function set(...args) {
    timer = setTimeout(() => {
      timer = null;
      startTime.value = null;
      cb(...args);
    }, remaining.value);
  }
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function start() {
    startTime.value = Date.now();
    set();
  }
  function stop() {
    clear();
    tPause();
  }
  function pause() {
    clear();
    tPause();
  }
  function resume() {
    set();
    tResume();
    startTime.value = (startTime.value || 0) + (Date.now() - timestamp.value);
  }
  start();
  return {
    start,
    stop,
    pause,
    resume,
    remaining
  };
}
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$1.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config$1.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
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
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config$1);
    let timer = null;
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      var _a, _b;
      return twMerge(twJoin(
        ui.value.wrapper,
        (_a = ui.value.background) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow,
        (_b = ui.value.ring) == null ? void 0 : _b.replaceAll("{color}", props.color)
      ), props.class);
    });
    const progressClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.progress.base,
        (_a = ui.value.progress.background) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.icon.base,
        (_a = ui.value.icon.color) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
      if (timer) {
        timer.pause();
      }
    }
    function onMouseleave() {
      if (timer) {
        timer.resume();
      }
    }
    function onClose() {
      if (timer) {
        timer.stop();
      }
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (timer) {
        timer.stop();
      }
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    function initTimer() {
      if (timer) {
        timer.stop();
      }
      if (!props.timeout) {
        return;
      }
      timer = useTimer(() => {
        onClose();
      }, props.timeout);
      watchEffect(() => {
        remaining.value = timer.remaining.value;
      });
    }
    watch(() => props.timeout, initTimer);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = _sfc_main$5;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_4;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !_ctx.title && !_ctx.$slots.title && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({
          key: index,
          ref_for: true
        }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.notifications, notifications);
const _sfc_main$1 = defineComponent({
  components: {
    UNotification: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
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
    const { ui, attrs } = useUI("notifications", toRef(props, "ui"), config);
    const toast = useToast();
    const notifications2 = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toast,
      notifications: notifications2,
      wrapperClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0;
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.wrapperClass,
      role: "region"
    }, _ctx.attrs))}>`);
    if (_ctx.notifications.length) {
      _push2(`<div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
      ssrRenderList(_ctx.notifications, (notification2) => {
        _push2(`<div>`);
        _push2(ssrRenderComponent(_component_UNotification, mergeProps({ ref_for: true }, notification2, {
          class: notification2.click && "cursor-pointer",
          onClick: ($event) => notification2.click && notification2.click(notification2),
          onClose: ($event) => _ctx.toast.remove(notification2.id)
        }), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_, name) => {
            return {
              name,
              fn: withCtx((slotData, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push3, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                  ];
                }
              })
            };
          })
        ]), _parent));
        _push2(`</div>`);
      });
      _push2(`<!--]--></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div>`);
  }, "body", false, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "portal",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout, user } = useDirectusAuth();
    const NuxtLink = __nuxt_component_0$1;
    function useCommandPalette() {
      const showCommandPalette2 = ref(false);
      defineShortcuts({
        meta_k: {
          usingInput: true,
          handler: () => {
            showCommandPalette2.value = !showCommandPalette2.value;
          }
        }
      });
      return {
        showCommandPalette: showCommandPalette2
      };
    }
    const sidebarNavigation = {
      top: [
        { name: "Search", click: () => showCommandPalette.value = true, icon: "material-symbols:search-rounded" },
        { name: "Dashboard", href: "/portal", icon: "material-symbols:home-outline-rounded" },
        { name: "Projects", href: "/portal/projects", icon: "material-symbols:tab-group-outline-rounded" },
        { name: "Files", href: "/portal/files", icon: "material-symbols:folder-outline-rounded" },
        { name: "Billing", href: "/portal/billing", icon: "material-symbols:attach-money-rounded" },
        { name: "Account", href: "/portal/account", icon: "material-symbols:account-circle-outline" }
      ],
      bottom: [{ name: "Help", href: "/portal/help", icon: "material-symbols:help-outline-rounded" }]
    };
    const userNavigation = [
      [
        {
          label: "Your Profile",
          icon: "i-heroicons-user-circle",
          click: () => {
            navigateTo("/portal/account#profile");
          }
        },
        { label: "Sign out", icon: "i-heroicons-arrow-left-on-rectangle", click: () => logout() }
      ]
    ];
    const { showCommandPalette } = useCommandPalette();
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$4;
      const _component_UIcon = _sfc_main$5;
      const _component_DarkModeToggle = _sfc_main$6;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UAvatar = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_NuxtErrorBoundary = __nuxt_component_7;
      const _component_VAlert = _sfc_main$7;
      const _component_NuxtPage = __nuxt_component_4$1;
      const _component_UModal = __nuxt_component_1$1;
      const _component_PortalSearch = _sfc_main$3;
      const _component_UNotifications = __nuxt_component_12;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full transition duration-150 bg-gray-100 dark:bg-gray-950" }, _attrs))}><div class="hidden p-3 md:block"><div class="w-24 h-full bg-gray-900 rounded-panel"><div class="flex flex-col items-center w-full h-full py-6"><div class="flex items-center flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Logo, {
        class: "w-20 text-white",
        alt: "Your Company"
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-between flex-1 h-full gap-y-4"><div class="w-full px-2 mt-6 space-y-1"><!--[-->`);
      ssrRenderList(sidebarNavigation.top, (item) => {
        var _a;
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.href ? unref(NuxtLink) : "button"), {
          key: item.name,
          href: (_a = item.href) != null ? _a : void 0,
          class: [
            item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
            "group flex w-full flex-col items-center rounded-card py-3 px-2 text-xs font-bold "
          ],
          "aria-current": item.current ? "page" : void 0,
          onClick: ($event) => item.click ? item.click() : void 0
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "h-6 w-6"],
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span class="mt-2"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "h-6 w-6"],
                  "aria-hidden": "true"
                }, null, 8, ["name", "class"]),
                createVNode("span", { class: "mt-2" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div><div class="flex flex-col items-center justify-center w-full px-2 space-y-2"><!--[-->`);
      ssrRenderList(sidebarNavigation.bottom, (item) => {
        _push(ssrRenderComponent(unref(NuxtLink), {
          key: item.name,
          href: item.href,
          class: [
            item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
            "group flex w-full flex-col items-center rounded-card py-3 px-2 text-xs font-bold "
          ],
          "aria-current": item.current ? "page" : void 0
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "h-6 w-6"],
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span class="mt-2"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "h-6 w-6"],
                  "aria-hidden": "true"
                }, null, 8, ["name", "class"]),
                createVNode("span", { class: "mt-2" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_DarkModeToggle, {
        bg: "dark",
        class: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UDropdown, {
        class: "relative",
        items: userNavigation
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}><span class="sr-only"${_scopeId}>Open user menu</span>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              class: "w-12 h-12 mx-auto",
              src: unref(user).avatar,
              alt: ("userName" in _ctx ? _ctx.userName : unref(userName))(unref(user))
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", null, [
                createVNode("span", { class: "sr-only" }, "Open user menu"),
                createVNode(_component_UAvatar, {
                  class: "w-12 h-12 mx-auto",
                  src: unref(user).avatar,
                  alt: ("userName" in _ctx ? _ctx.userName : unref(userName))(unref(user))
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(unref(Se), {
        as: "template",
        show: unref(mobileMenuOpen)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ye), {
              as: "div",
              class: "relative z-20 md:hidden",
              onClose: ($event) => mobileMenuOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "transition-opacity ease-linear duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-gray-600 bg-opacity-75"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 z-40 flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "transition ease-in-out duration-300 transform",
                    "enter-from": "-translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transition ease-in-out duration-300 transform",
                    "leave-from": "translate-x-0",
                    "leave-to": "-translate-x-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Ge), { class: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(he), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="absolute right-0 p-1 top-1 -mr-14"${_scopeId5}><button type="button" class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "heroicons:x-mark",
                                      class: "w-6 h-6 text-white",
                                      "aria-hidden": "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="sr-only"${_scopeId5}>Close sidebar</span></button></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "absolute right-0 p-1 top-1 -mr-14" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                          onClick: ($event) => mobileMenuOpen.value = false
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "heroicons:x-mark",
                                            class: "w-6 h-6 text-white",
                                            "aria-hidden": "true"
                                          }),
                                          createVNode("span", { class: "sr-only" }, "Close sidebar")
                                        ], 8, ["onClick"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex items-center flex-shrink-0 px-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Logo, {
                                class: "w-auto h-8",
                                alt: "Your Company"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex-1 h-0 px-2 mt-5 overflow-y-auto"${_scopeId4}><nav class="flex flex-col h-full"${_scopeId4}><div class="space-y-1"${_scopeId4}><!--[-->`);
                              ssrRenderList(sidebarNavigation.top, (item) => {
                                _push5(ssrRenderComponent(unref(NuxtLink), {
                                  key: item.name,
                                  href: item.href,
                                  class: [
                                    item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
                                    "group flex items-center rounded-md py-2 px-3 text-sm font-medium "
                                  ],
                                  "aria-current": item.current ? "page" : void 0
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UIcon, {
                                        name: item.icon,
                                        class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                        "aria-hidden": "true"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(item.name)}</span>`);
                                    } else {
                                      return [
                                        createVNode(_component_UIcon, {
                                          name: item.icon,
                                          class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                          "aria-hidden": "true"
                                        }, null, 8, ["name", "class"]),
                                        createVNode("span", null, toDisplayString(item.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></div></nav></div>`);
                            } else {
                              return [
                                createVNode(unref(he), {
                                  as: "template",
                                  enter: "ease-in-out duration-300",
                                  "enter-from": "opacity-0",
                                  "enter-to": "opacity-100",
                                  leave: "ease-in-out duration-300",
                                  "leave-from": "opacity-100",
                                  "leave-to": "opacity-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "absolute right-0 p-1 top-1 -mr-14" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                        onClick: ($event) => mobileMenuOpen.value = false
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "heroicons:x-mark",
                                          class: "w-6 h-6 text-white",
                                          "aria-hidden": "true"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Close sidebar")
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center flex-shrink-0 px-4" }, [
                                  createVNode(_component_Logo, {
                                    class: "w-auto h-8",
                                    alt: "Your Company"
                                  })
                                ]),
                                createVNode("div", { class: "flex-1 h-0 px-2 mt-5 overflow-y-auto" }, [
                                  createVNode("nav", { class: "flex flex-col h-full" }, [
                                    createVNode("div", { class: "space-y-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(sidebarNavigation.top, (item) => {
                                        return openBlock(), createBlock(unref(NuxtLink), {
                                          key: item.name,
                                          href: item.href,
                                          class: [
                                            item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
                                            "group flex items-center rounded-md py-2 px-3 text-sm font-medium "
                                          ],
                                          "aria-current": item.current ? "page" : void 0
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UIcon, {
                                              name: item.icon,
                                              class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                              "aria-hidden": "true"
                                            }, null, 8, ["name", "class"]),
                                            createVNode("span", null, toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href", "class", "aria-current"]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Ge), { class: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700" }, {
                            default: withCtx(() => [
                              createVNode(unref(he), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute right-0 p-1 top-1 -mr-14" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                      onClick: ($event) => mobileMenuOpen.value = false
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "heroicons:x-mark",
                                        class: "w-6 h-6 text-white",
                                        "aria-hidden": "true"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Close sidebar")
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center flex-shrink-0 px-4" }, [
                                createVNode(_component_Logo, {
                                  class: "w-auto h-8",
                                  alt: "Your Company"
                                })
                              ]),
                              createVNode("div", { class: "flex-1 h-0 px-2 mt-5 overflow-y-auto" }, [
                                createVNode("nav", { class: "flex flex-col h-full" }, [
                                  createVNode("div", { class: "space-y-1" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(sidebarNavigation.top, (item) => {
                                      return openBlock(), createBlock(unref(NuxtLink), {
                                        key: item.name,
                                        href: item.href,
                                        class: [
                                          item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
                                          "group flex items-center rounded-md py-2 px-3 text-sm font-medium "
                                        ],
                                        "aria-current": item.current ? "page" : void 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UIcon, {
                                            name: item.icon,
                                            class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                            "aria-hidden": "true"
                                          }, null, 8, ["name", "class"]),
                                          createVNode("span", null, toDisplayString(item.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href", "class", "aria-current"]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex-shrink-0 w-14" aria-hidden="true"${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode(unref(he), {
                      as: "template",
                      enter: "transition-opacity ease-linear duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "transition-opacity ease-linear duration-300",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                      createVNode(unref(he), {
                        as: "template",
                        enter: "transition ease-in-out duration-300 transform",
                        "enter-from": "-translate-x-full",
                        "enter-to": "translate-x-0",
                        leave: "transition ease-in-out duration-300 transform",
                        "leave-from": "translate-x-0",
                        "leave-to": "-translate-x-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Ge), { class: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700" }, {
                            default: withCtx(() => [
                              createVNode(unref(he), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute right-0 p-1 top-1 -mr-14" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                      onClick: ($event) => mobileMenuOpen.value = false
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "heroicons:x-mark",
                                        class: "w-6 h-6 text-white",
                                        "aria-hidden": "true"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Close sidebar")
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center flex-shrink-0 px-4" }, [
                                createVNode(_component_Logo, {
                                  class: "w-auto h-8",
                                  alt: "Your Company"
                                })
                              ]),
                              createVNode("div", { class: "flex-1 h-0 px-2 mt-5 overflow-y-auto" }, [
                                createVNode("nav", { class: "flex flex-col h-full" }, [
                                  createVNode("div", { class: "space-y-1" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(sidebarNavigation.top, (item) => {
                                      return openBlock(), createBlock(unref(NuxtLink), {
                                        key: item.name,
                                        href: item.href,
                                        class: [
                                          item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
                                          "group flex items-center rounded-md py-2 px-3 text-sm font-medium "
                                        ],
                                        "aria-current": item.current ? "page" : void 0
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UIcon, {
                                            name: item.icon,
                                            class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                            "aria-hidden": "true"
                                          }, null, 8, ["name", "class"]),
                                          createVNode("span", null, toDisplayString(item.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href", "class", "aria-current"]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "flex-shrink-0 w-14",
                        "aria-hidden": "true"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ye), {
                as: "div",
                class: "relative z-20 md:hidden",
                onClose: ($event) => mobileMenuOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(he), {
                    as: "template",
                    enter: "transition-opacity ease-linear duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                    createVNode(unref(he), {
                      as: "template",
                      enter: "transition ease-in-out duration-300 transform",
                      "enter-from": "-translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      "leave-from": "translate-x-0",
                      "leave-to": "-translate-x-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Ge), { class: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700" }, {
                          default: withCtx(() => [
                            createVNode(unref(he), {
                              as: "template",
                              enter: "ease-in-out duration-300",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "ease-in-out duration-300",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "absolute right-0 p-1 top-1 -mr-14" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white",
                                    onClick: ($event) => mobileMenuOpen.value = false
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "heroicons:x-mark",
                                      class: "w-6 h-6 text-white",
                                      "aria-hidden": "true"
                                    }),
                                    createVNode("span", { class: "sr-only" }, "Close sidebar")
                                  ], 8, ["onClick"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center flex-shrink-0 px-4" }, [
                              createVNode(_component_Logo, {
                                class: "w-auto h-8",
                                alt: "Your Company"
                              })
                            ]),
                            createVNode("div", { class: "flex-1 h-0 px-2 mt-5 overflow-y-auto" }, [
                              createVNode("nav", { class: "flex flex-col h-full" }, [
                                createVNode("div", { class: "space-y-1" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(sidebarNavigation.top, (item) => {
                                    return openBlock(), createBlock(unref(NuxtLink), {
                                      key: item.name,
                                      href: item.href,
                                      class: [
                                        item.current ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-800 hover:text-white",
                                        "group flex items-center rounded-md py-2 px-3 text-sm font-medium "
                                      ],
                                      "aria-current": item.current ? "page" : void 0
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UIcon, {
                                          name: item.icon,
                                          class: [item.current ? "text-white" : "text-gray-300 group-hover:text-white", "mr-3 h-6 w-6"],
                                          "aria-hidden": "true"
                                        }, null, 8, ["name", "class"]),
                                        createVNode("span", null, toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "class", "aria-current"]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "flex-shrink-0 w-14",
                      "aria-hidden": "true"
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col flex-1 overflow-y-auto">`);
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, null, {
        error: withCtx(({ error, clearError }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VAlert, { type: "error" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(error)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(error), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button class="mt-4 text-sm text-gray-500 underline"${_scopeId}>Try again</button><p${_scopeId}>An error occurred: ${ssrInterpolate(error)}</p>`);
          } else {
            return [
              createVNode(_component_VAlert, { type: "error" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(error), 1)
                ]),
                _: 2
              }, 1024),
              createVNode("button", {
                class: "mt-4 text-sm text-gray-500 underline",
                onClick: clearError
              }, "Try again", 8, ["onClick"]),
              createVNode("p", null, "An error occurred: " + toDisplayString(error), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full max-w-5xl p-4 mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full max-w-5xl p-4 mx-auto" }, [
                createVNode(_component_NuxtPage)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showCommandPalette),
        "onUpdate:modelValue": ($event) => isRef(showCommandPalette) ? showCommandPalette.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PortalSearch, {
              onClose: ($event) => showCommandPalette.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PortalSearch, {
                onClose: ($event) => showCommandPalette.value = false
              }, null, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portal-CanFmTOD.mjs.map
