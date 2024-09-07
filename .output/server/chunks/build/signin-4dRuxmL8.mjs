import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './UIcon-CFeTNZEP.mjs';
import { _ as __nuxt_component_1 } from './Avatar-CM8WZfag.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { defineComponent, toRef, computed, useSSRContext, mergeProps, ref, reactive, resolveDirective, unref, withCtx, createVNode } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { u as useUI } from './selectMenu-BQkBDEWS.mjs';
import { m as mergeConfig, j as appConfig, k as useDirectusAuth } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1$1 } from './FormGroup-D6qWgF-G.mjs';
import { _ as __nuxt_component_0$1 } from './Input-CfIqCvke.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-Dix5D_y-.mjs';
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
import './useButtonGroup-B6Q5lGA8.mjs';
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
import './id-CsF31SPu.mjs';
import './useFormGroup-DoeWXt3h.mjs';

const alert = {
  wrapper: "w-full relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium",
  description: "mt-1 text-sm leading-4 opacity-90",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  shadow: "",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  color: {
    white: {
      solid: "text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    color: "white",
    variant: "solid",
    icon: null,
    closeButton: null,
    actionButton: {
      size: "xs",
      color: "primary",
      variant: "link"
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.alert, alert);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
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
      default: () => config.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
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
  setup(props) {
    const { ui, attrs } = useUI("alert", toRef(props, "ui"), config);
    const alertClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    function onAction(action) {
      if (action.click) {
        action.click();
      }
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      alertClass,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = _sfc_main$4;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.alertClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([[_ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  ssrRenderSlot(_ctx.$slots, "icon", { icon: _ctx.icon }, () => {
    if (_ctx.icon) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.icon,
        class: _ctx.ui.icon.base
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "avatar", { avatar: _ctx.avatar }, () => {
    if (_ctx.avatar) {
      _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
        class: _ctx.ui.avatar.base
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
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
  if ((_ctx.description || _ctx.$slots.description) && (_ctx.actions.length || _ctx.$slots.actions)) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
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
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && (_ctx.actions.length || _ctx.$slots.actions)) {
      ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
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
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, {
        onClick: ($event) => _ctx.$emit("close")
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/elements/Alert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    useDirectusAuth();
    const loading = ref(false);
    const error = ref(null);
    const credentials = reactive({
      email: "ashley@example.com",
      password: "password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_4;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
      if (unref(error)) {
        _push(ssrRenderComponent(_component_UAlert, {
          type: "error",
          class: "mb-4",
          title: "Oops! Something went wrong.",
          description: unref(error),
          color: "rose",
          variant: "outline",
          icon: "material-symbols:warning-rounded"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="grid gap-4">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Email",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(credentials).email,
              "onUpdate:modelValue": ($event) => unref(credentials).email = $event,
              type: "email",
              disabled: unref(loading),
              size: "lg",
              name: "email",
              label: "Work Email",
              placeholder: "john@example.com"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(credentials).email,
                "onUpdate:modelValue": ($event) => unref(credentials).email = $event,
                type: "email",
                disabled: unref(loading),
                size: "lg",
                name: "email",
                label: "Work Email",
                placeholder: "john@example.com"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Password",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(credentials).password,
              "onUpdate:modelValue": ($event) => unref(credentials).password = $event,
              type: "password",
              disabled: unref(loading),
              size: "lg",
              name: "password",
              label: "Password",
              placeholder: "Your Password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(credentials).password,
                "onUpdate:modelValue": ($event) => unref(credentials).password = $event,
                type: "password",
                disabled: unref(loading),
                size: "lg",
                name: "password",
                label: "Password",
                placeholder: "Your Password"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        loading: unref(loading),
        disabled: !unref(credentials).email,
        size: "lg",
        label: "Sign In",
        "trailing-icon": "material-symbols:arrow-forward",
        block: ""
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TypographyHeadline = _sfc_main$3;
  const _component_LoginForm = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TypographyHeadline, { content: "<em>Sign in</em> to your portal" }, null, _parent));
  _push(ssrRenderComponent(_component_LoginForm, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { signin as default };
//# sourceMappingURL=signin-4dRuxmL8.mjs.map
