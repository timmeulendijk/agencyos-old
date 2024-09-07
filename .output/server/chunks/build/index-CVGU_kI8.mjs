import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$2 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as __nuxt_component_4$1 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as __nuxt_component_0 } from './Input-CfIqCvke.mjs';
import { _ as _sfc_main$6 } from './UIcon-CFeTNZEP.mjs';
import { defineComponent, toRef, computed, useSSRContext, ref, watch, resolveDirective, withCtx, unref, createTextVNode, createVNode, isRef, toDisplayString, mergeProps, openBlock, createBlock, createCommentVNode, withDirectives } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { s as select, u as useUI, g as get } from './selectMenu-BQkBDEWS.mjs';
import { u as useFormGroup } from './useFormGroup-DoeWXt3h.mjs';
import { m as mergeConfig, j as appConfig, a as useRoute, E as useRouter, S as refDebounced, i as useAsyncData } from './server.mjs';
import { u as useInjectButtonGroup } from './useButtonGroup-B6Q5lGA8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './UserBadge-DzE2kIn7.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { _ as _sfc_main$5 } from './VText-D0MQff2t.mjs';
import { _ as __nuxt_component_2$1 } from './Pagination-Bm_Srs8s.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { u as useStripe } from './useStripe-M4UNwPVt.mjs';
import { f as formatCurrency } from './currency-qkGe5pRp.mjs';
import { g as getFriendlyDate, d as getRelativeTime } from './time-C5trUN3I.mjs';
import 'node:async_hooks';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-Dix5D_y-.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@formkit/auto-animate/vue';
import '@unhead/addons';
import 'vue-dompurify-html';
import 'node:crypto';
import './Checkbox-Cj7fi5iD.mjs';
import './id-CsF31SPu.mjs';
import './Avatar-CM8WZfag.mjs';
import './user-name-hNaZlTuZ.mjs';
import './useToast-BMHYguAT.mjs';
import '@stripe/stripe-js';

const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
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
    padded: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
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
      default: "value"
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
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => {
      var _a;
      return (_a = sizeButtonGroup.value) != null ? _a : sizeFormGroup.value;
    });
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emit("change", event.target.value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, "");
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, "");
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.size[size.value],
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
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      normalizedOptionsWithPlaceholder,
      normalizedValue,
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
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = _sfc_main$6;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))} data-v-53971a23><select${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled,
    class: _ctx.selectClass
  }, _ctx.attrs))} data-v-53971a23><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])} data-v-53971a23><!--[-->`);
      ssrRenderList(option.children, (childOption, index2) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""} data-v-53971a23>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""} data-v-53971a23>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}" data-v-53971a23>`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}" data-v-53971a23>`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-53971a23"]]);
const _imports_0 = "" + buildAssetsURL("tokyo-attention-sign.CwvjNYnN.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a2, _b2;
    var _a, _b;
    let __temp, __restore;
    const { path, query } = useRoute();
    const router = useRouter();
    const search = ref((_a2 = (_a = query == null ? void 0 : query.search) == null ? void 0 : _a.toString()) != null ? _a2 : void 0);
    const debouncedSearch = refDebounced(search, 500);
    const status = ref((_b2 = (_b = query.status) == null ? void 0 : _b.toString()) != null ? _b2 : void 0);
    const page = ref(1);
    const rowsPerPage = ref(25);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        const params = Object.assign(
          {},
          unref(search) && {
            search: unref(search)
          },
          unref(status) && {
            filter: {
              status: {
                _eq: unref(status)
              }
            }
          },
          {
            limit: unref(rowsPerPage),
            page: unref(page)
          }
        );
        const invoices2 = useDirectus(
          readItems("os_invoices", {
            fields: [
              "*",
              {
                contact: ["id", "first_name", "last_name", "email"]
              }
            ],
            ...params
          })
        );
        const count = useDirectus(
          readItems("os_invoices", {
            aggregate: {
              count: ["*"]
            },
            filter: {
              ...unref(status) && {
                status: {
                  _eq: unref(status)
                }
              }
            }
          })
        );
        return Promise.all([invoices2, count]);
      },
      {
        transform: ([data2, count]) => {
          return {
            invoices: data2,
            count: parseInt(count[0].count)
          };
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const invoices = computed(() => {
      var _a3;
      var _a22;
      return (_a3 = (_a22 = data.value) == null ? void 0 : _a22.invoices) != null ? _a3 : [];
    });
    const totalCount = computed(() => {
      var _a3;
      var _a22;
      return (_a3 = (_a22 = data.value) == null ? void 0 : _a22.count) != null ? _a3 : 0;
    });
    const pageFrom = computed(() => (page.value - 1) * rowsPerPage.value + (invoices.value.length ? 1 : 0));
    const pageTo = computed(() => Math.min(page.value * rowsPerPage.value, totalCount.value));
    const statusOptions = [
      {
        label: "Open",
        value: "unpaid"
      },
      {
        label: "Paid",
        value: "paid"
      },
      {
        label: "All",
        value: ""
      }
    ];
    const columns = [
      {
        key: "invoice_number",
        label: "#",
        sortable: true
      },
      {
        key: "status",
        label: "Status"
      },
      {
        key: "due_date",
        label: "Due Date",
        sortable: true
      },
      {
        key: "contact",
        label: "Contact"
      },
      {
        key: "total",
        label: "Total",
        sortable: true
      },
      {
        key: "amount_due",
        label: "Amount Due",
        sortable: true
      },
      {
        key: "actions"
      }
    ];
    const { getPortalLink, loading: stripeLoading } = useStripe();
    watch([debouncedSearch, status, page], ([search2, status2, page2]) => {
      router.push({
        path,
        query: {
          search: search2 == null ? void 0 : search2.toString(),
          status: status2 == null ? void 0 : status2.toString(),
          page: page2 == null ? void 0 : page2.toString()
        }
      });
      refresh();
    });
    function clearFilters() {
      search.value = void 0;
      status.value = void 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalPageHeader = _sfc_main$2;
      const _component_UButton = __nuxt_component_4$1;
      const _component_UCard = __nuxt_component_1;
      const _component_UInput = __nuxt_component_0;
      const _component_USelect = __nuxt_component_4;
      const _component_UTable = __nuxt_component_2;
      const _component_TypographyHeadline = _sfc_main$3;
      const _component_UserBadge = _sfc_main$4;
      const _component_UBadge = __nuxt_component_5;
      const _component_VText = _sfc_main$5;
      const _component_UPagination = __nuxt_component_2$1;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: "Invoices",
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Billing"
          }
        ]
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "outline",
              size: "xl",
              loading: unref(stripeLoading),
              onClick: ($event) => unref(getPortalLink)("cus_OlTbJKVanSb1zN")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update Payment Settings `);
                } else {
                  return [
                    createTextVNode(" Update Payment Settings ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "primary",
                variant: "outline",
                size: "xl",
                loading: unref(stripeLoading),
                onClick: ($event) => unref(getPortalLink)("cus_OlTbJKVanSb1zN")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Update Payment Settings ")
                ]),
                _: 1
              }, 8, ["loading", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "mt-6" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              icon: "i-heroicons-magnifying-glass-20-solid",
              placeholder: "Search...",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(status),
              "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
              options: statusOptions,
              placeholder: "Invoice Status"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              size: "xs",
              disabled: !unref(search) && !unref(status),
              icon: "material-symbols:filter-alt-off-outline-rounded",
              onClick: clearFilters
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset `);
                } else {
                  return [
                    createTextVNode(" Reset ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                createVNode(_component_UInput, {
                  modelValue: unref(search),
                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                  icon: "i-heroicons-magnifying-glass-20-solid",
                  placeholder: "Search...",
                  type: "text"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode(_component_USelect, {
                    modelValue: unref(status),
                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                    options: statusOptions,
                    placeholder: "Invoice Status"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UButton, {
                    color: "white",
                    size: "xs",
                    disabled: !unref(search) && !unref(status),
                    icon: "material-symbols:filter-alt-off-outline-rounded",
                    onClick: clearFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm leading-5"${_scopeId2}> Showing <span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(pageFrom))}</span> to <span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(pageTo))}</span> of <span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(totalCount))}</span> results </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm leading-5" }, [
                      createTextVNode(" Showing "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(pageFrom)), 1),
                      createTextVNode(" to "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(pageTo)), 1),
                      createTextVNode(" of "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(totalCount)), 1),
                      createTextVNode(" results ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: unref(page),
              "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
              "page-count": unref(rowsPerPage),
              total: unref(totalCount)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center justify-between" }, [
                createVNode(_component_VText, null, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-sm leading-5" }, [
                      createTextVNode(" Showing "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(pageFrom)), 1),
                      createTextVNode(" to "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(pageTo)), 1),
                      createTextVNode(" of "),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(totalCount)), 1),
                      createTextVNode(" results ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UPagination, {
                  modelValue: unref(page),
                  "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                  "page-count": unref(rowsPerPage),
                  total: unref(totalCount)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "page-count", "total"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, mergeProps({
              columns,
              rows: unref(invoices),
              "column-attribute": "label",
              loading: unref(pending)
            }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)), {
              "empty-state": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-1/4 mx-auto text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="Empty State"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TypographyHeadline, {
                    content: "Looks like there's nothing here.",
                    size: "xs"
                  }, null, _parent3, _scopeId2));
                  if (unref(search) || unref(status)) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "white",
                      size: "xs",
                      icon: "material-symbols:filter-alt-off-outline-rounded",
                      class: "mt-4",
                      onClick: clearFilters
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Reset Filters `);
                        } else {
                          return [
                            createTextVNode(" Reset Filters ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-1/4 mx-auto text-center" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Empty State"
                      }),
                      createVNode(_component_TypographyHeadline, {
                        content: "Looks like there's nothing here.",
                        size: "xs"
                      }),
                      unref(search) || unref(status) ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "white",
                        size: "xs",
                        icon: "material-symbols:filter-alt-off-outline-rounded",
                        class: "mt-4",
                        onClick: clearFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filters ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              "invoice_number-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "outline",
                    to: `/portal/billing/invoices/${row.id}`,
                    padding: false
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.invoice_number)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.invoice_number), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      variant: "outline",
                      to: `/portal/billing/invoices/${row.id}`,
                      padding: false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.invoice_number), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              "amount_due-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.amount_due))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.amount_due)), 1)
                  ];
                }
              }),
              "total-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.total))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.total)), 1)
                  ];
                }
              }),
              "contact-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UserBadge, {
                    user: row.contact,
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UserBadge, {
                      user: row.contact,
                      size: "sm"
                    }, null, 8, ["user"])
                  ];
                }
              }),
              "status-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    label: row.status,
                    color: row.status === "unpaid" ? "rose" : "primary",
                    size: "xs",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      label: row.status,
                      color: row.status === "unpaid" ? "rose" : "primary",
                      size: "xs",
                      class: "capitalize"
                    }, null, 8, ["label", "color"])
                  ];
                }
              }),
              "due_date-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VText, { size: "xs" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
                          monthAbbr: true
                        }))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
                            monthAbbr: true
                          })), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VText, {
                    size: "xs",
                    "text-color": "light"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VText, { size: "xs" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
                          monthAbbr: true
                        })), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_VText, {
                      size: "xs",
                      "text-color": "light"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date)), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "actions-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    to: `/portal/billing/invoices/${row.id}`,
                    color: "primary",
                    variant: "outline",
                    icon: "i-heroicons-arrow-right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      to: `/portal/billing/invoices/${row.id}`,
                      color: "primary",
                      variant: "outline",
                      icon: "i-heroicons-arrow-right"
                    }, null, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives((openBlock(), createBlock(_component_UTable, {
                columns,
                rows: unref(invoices),
                "column-attribute": "label",
                loading: unref(pending)
              }, {
                "empty-state": withCtx(() => [
                  createVNode("div", { class: "w-1/4 mx-auto text-center" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Empty State"
                    }),
                    createVNode(_component_TypographyHeadline, {
                      content: "Looks like there's nothing here.",
                      size: "xs"
                    }),
                    unref(search) || unref(status) ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "white",
                      size: "xs",
                      icon: "material-symbols:filter-alt-off-outline-rounded",
                      class: "mt-4",
                      onClick: clearFilters
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset Filters ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                "invoice_number-data": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    variant: "outline",
                    to: `/portal/billing/invoices/${row.id}`,
                    padding: false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.invoice_number), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                "amount_due-data": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.amount_due)), 1)
                ]),
                "total-data": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.total)), 1)
                ]),
                "contact-data": withCtx(({ row }) => [
                  createVNode(_component_UserBadge, {
                    user: row.contact,
                    size: "sm"
                  }, null, 8, ["user"])
                ]),
                "status-data": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    label: row.status,
                    color: row.status === "unpaid" ? "rose" : "primary",
                    size: "xs",
                    class: "capitalize"
                  }, null, 8, ["label", "color"])
                ]),
                "due_date-data": withCtx(({ row }) => [
                  createVNode(_component_VText, { size: "xs" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
                        monthAbbr: true
                      })), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_VText, {
                    size: "xs",
                    "text-color": "light"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date)), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "actions-data": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    to: `/portal/billing/invoices/${row.id}`,
                    color: "primary",
                    variant: "outline",
                    icon: "i-heroicons-arrow-right"
                  }, null, 8, ["to"])
                ]),
                _: 1
              }, 8, ["rows", "loading"])), [
                [_directive_auto_animate]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/billing/invoices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVGU_kI8.mjs.map
