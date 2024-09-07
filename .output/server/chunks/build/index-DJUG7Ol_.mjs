import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, computed, mergeProps, ref, watch, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$4 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$5 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$6 } from './VDivider-CoLvA21X.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { k as useDirectusAuth, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { f as formatCurrency } from './currency-qkGe5pRp.mjs';
import { e as greetUser, g as getFriendlyDate, d as getRelativeTime } from './time-C5trUN3I.mjs';
import { _ as __nuxt_component_2$1 } from './Pagination-Bm_Srs8s.mjs';
import { _ as __nuxt_component_5, a as _sfc_main$7 } from './Task-D0RCxG5P.mjs';
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
import './Checkbox-Cj7fi5iD.mjs';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './id-CsF31SPu.mjs';
import './UIcon-CFeTNZEP.mjs';
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
import './Icon-BRjp6c2n.mjs';
import './nuxt-link-Dix5D_y-.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './keyboard-puKMRDGD.mjs';
import './Avatar-CM8WZfag.mjs';
import './combobox-9r9zJfab.mjs';
import '@tanstack/vue-virtual';
import './Dropdown-CMDTLEPg.mjs';
import './VLabel-D4wsGVsj.mjs';
import './VAvatar-DZ5-rAwN.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './user-name-hNaZlTuZ.mjs';
import './DateDisplay-Dw0odYQk.mjs';
import './FileCard-lKi1YShj.mjs';
import './Card-Bnf4_qmP.mjs';
import './useToast-BMHYguAT.mjs';
import './UForm-BXdHEs5F.mjs';
import './VAlert-B7QIU45Y.mjs';
import './FormGroup-D6qWgF-G.mjs';
import './Input-CfIqCvke.mjs';
import './Textarea-NEFeg-lL.mjs';
import './VUpload-DWTZMVN2.mjs';
import './composables-BxS0fVn-.mjs';
import 'perfect-freehand';
import './embed-BNjS_SEV.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 mx-auto max-w-7xl md:py-24 lg:py-12 lg:px-8" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageContainer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InvoiceWidget",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: invoices,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "organization-open-invoices",
      () => {
        return useDirectus(
          readItems("os_invoices", {
            fields: ["*"],
            filter: {
              _and: [
                {
                  status: {
                    _neq: "open"
                  }
                }
              ]
            }
          })
        );
      },
      {}
    )), __temp = await __temp, __restore(), __temp);
    const totalAmountDue = computed(() => {
      var _a;
      return (_a = invoices.value) == null ? void 0 : _a.reduce((acc, invoice) => {
        return acc + invoice.amount_due;
      }, 0);
    });
    const columns = [
      {
        key: "invoice_number",
        label: "#"
      },
      {
        key: "due_date",
        label: "Due Date"
      },
      {
        key: "amount_due",
        label: "Amount Due"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full px-4 py-10 bg-white border rounded-panel dark:border-gray-700 dark:bg-gray-900" }, _attrs))}><div><dt class="font-medium leading-6 text-gray-500 font-display dark:text-gray-300">Open Invoices</dt><dd class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(totalAmountDue) ? ("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(unref(totalAmountDue)) : "N/A")}</dd></div>`);
      _push(ssrRenderComponent(_component_UTable, {
        columns,
        rows: unref(invoices)
      }, {
        "invoice_number-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "outline",
              to: `/portal/billing/invoices/${row.id}`
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.invoice_number)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.invoice_number), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "outline",
                to: `/portal/billing/invoices/${row.id}`
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.invoice_number), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        "due_date-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="capitalize"${_scopeId}>${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date))}</p>`);
          } else {
            return [
              createVNode("p", { class: "capitalize" }, toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date)), 1)
            ];
          }
        }),
        "amount_due-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="capitalize"${_scopeId}>${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.amount_due))}</p>`);
          } else {
            return [
              createVNode("p", { class: "capitalize" }, toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.amount_due)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/InvoiceWidget.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskWidget",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const page = ref(1);
    const rowsPerPage = ref(5);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "user-open-tasks",
      () => {
        const filter = {
          _and: [
            {
              status: {
                _neq: "open"
              }
            },
            {
              is_visible_to_client: {
                _eq: true
              }
            }
          ]
        };
        const tasks2 = useDirectus(
          readItems("os_tasks", {
            fields: ["id", "name", "due_date"],
            sort: ["due_date"],
            filter,
            limit: unref(rowsPerPage),
            offset: (unref(page) - 1) * 5
          })
        );
        const count2 = useDirectus(
          readItems("os_tasks", {
            filter,
            aggregate: { count: ["*"] }
          })
        );
        return Promise.all([tasks2, count2]);
      },
      {
        transform: ([data2, count2]) => {
          var _a;
          return {
            tasks: data2,
            count: (_a = parseInt(count2[0].count)) != null ? _a : 0
          };
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const columns = [
      {
        key: "name",
        label: "Name"
      },
      {
        key: "due_date",
        label: "Due Date"
      }
    ];
    const tasks = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = data.value) == null ? void 0 : _a.tasks) != null ? _a2 : [];
    });
    const count = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = data.value) == null ? void 0 : _a.count) != null ? _a2 : 0;
    });
    watch(page, () => {
      refresh();
    });
    const showTask = ref(false);
    const selectedTaskId = ref(null);
    async function openTask(id) {
      selectedTaskId.value = id;
      showTask.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      const _component_UPagination = __nuxt_component_2$1;
      const _component_USlideover = __nuxt_component_5;
      const _component_PortalTask = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-10 bg-white border border-gray-300 rounded-panel dark:border-gray-700 dark:bg-gray-900" }, _attrs))}><div><dt class="font-medium leading-6 text-gray-500 font-display dark:text-gray-300">Open Tasks</dt><dd class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(count))} tasks </dd></div>`);
      _push(ssrRenderComponent(_component_UTable, {
        columns,
        rows: unref(tasks)
      }, {
        "name-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "link",
              class: "max-w-[250px]",
              padded: false,
              onClick: ($event) => openTask(row.id)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span class="truncate"${_scopeId2}>${ssrInterpolate((_a = row.name) != null ? _a : "Task with no name")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "truncate" }, toDisplayString((_b = row.name) != null ? _b : "Task with no name"), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "link",
                class: "max-w-[250px]",
                padded: false,
                onClick: ($event) => openTask(row.id)
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("span", { class: "truncate" }, toDisplayString((_a = row.name) != null ? _a : "Task with no name"), 1)
                  ];
                }),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        "due_date-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="capitalize"${_scopeId}>${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date))}</p>`);
          } else {
            return [
              createVNode("p", { class: "capitalize" }, toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        max: 5,
        "page-count": unref(rowsPerPage),
        total: unref(count)
      }, null, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(showTask),
        "onUpdate:modelValue": ($event) => isRef(showTask) ? showTask.value = $event : null,
        ui: {
          width: "max-w-xl"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_PortalTask, {
              "task-id": (_a = unref(selectedTaskId)) != null ? _a : "",
              class: "overflow-y-auto",
              onClose: ($event) => showTask.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PortalTask, {
                "task-id": (_b = unref(selectedTaskId)) != null ? _b : "",
                class: "overflow-y-auto",
                onClose: ($event) => showTask.value = false
              }, null, 8, ["task-id", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/TaskWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("tokyo-luminous-table-lamp-on-boxes.nnYb2oAs.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    function useGreetings() {
      const messages = [
        "Remember, <em>every challenge</em> is easier together.",
        "Your vision is our mission. Together, we'll create <em>something outstanding</em>.",
        "The best projects are <em>fueled by partnership</em>. Here's to another successful day working together!",
        "Every detail, every idea, every feedback. <em>It all matters</em>. Thank you for entrusting us with your vision.",
        "Project management isn't just about the destination, it's about <em>enjoying and learning from the journey</em>. We're thrilled to be on this adventure with you.",
        "With every challenge, we <em>grow stronger</em>. Thanks for pushing us to be our best!",
        "From concept to completion, your aspirations are in <em>dedicated hands</em>. Let's keep moving forward, together.",
        "Like a symphony, <em>every note counts</em>. We're harmonizing perfectly with your vision, creating a masterpiece in progress.",
        "As we tackle today's tasks, know that our <em>commitment</em> to your success is unwavering.",
        "Every step with you is a step towards <em>brilliance</em>. Thanks for making this journey shine brighter."
      ];
      function getTodaysMessage2() {
        const now = /* @__PURE__ */ new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const difference = now.getTime() - start.getTime();
        const oneDay = 1e3 * 60 * 60 * 24;
        const dayOfYear = Math.floor(difference / oneDay);
        const messageIndex = dayOfYear % messages.length;
        return messages[messageIndex];
      }
      return {
        getTodaysMessage: getTodaysMessage2
      };
    }
    const { getTodaysMessage } = useGreetings();
    const { user } = useDirectusAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageContainer = __nuxt_component_0;
      const _component_TypographyTitle = _sfc_main$4;
      const _component_TypographyHeadline = _sfc_main$5;
      const _component_VDivider = _sfc_main$6;
      const _component_PortalInvoiceWidget = _sfc_main$2;
      const _component_PortalTaskWidget = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-48 ml-auto mr-0"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, { class: "normal-case" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(("greetUser" in _ctx ? _ctx.greetUser : unref(greetUser))())} ${ssrInterpolate((_a2 = (_a = unref(user)) == null ? void 0 : _a.first_name) != null ? _a2 : "friend")},`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("greetUser" in _ctx ? _ctx.greetUser : unref(greetUser))()) + " " + toDisplayString((_b2 = (_b = unref(user)) == null ? void 0 : _b.first_name) != null ? _b2 : "friend") + ",", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: unref(getTodaysMessage)(),
              size: "xl"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VDivider, { class: "my-8" }, null, _parent2, _scopeId));
            _push2(`<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PortalInvoiceWidget, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PortalTaskWidget, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                class: "w-48 ml-auto mr-0",
                src: _imports_0
              }),
              createVNode(_component_TypographyTitle, { class: "normal-case" }, {
                default: withCtx(() => {
                  var _a2;
                  var _a;
                  return [
                    createTextVNode(toDisplayString(("greetUser" in _ctx ? _ctx.greetUser : unref(greetUser))()) + " " + toDisplayString((_a2 = (_a = unref(user)) == null ? void 0 : _a.first_name) != null ? _a2 : "friend") + ",", 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_TypographyHeadline, {
                content: unref(getTodaysMessage)(),
                size: "xl"
              }, null, 8, ["content"]),
              createVNode(_component_VDivider, { class: "my-8" }),
              createVNode("div", { class: "grid w-full grid-cols-1 gap-6 md:grid-cols-2" }, [
                createVNode(_component_PortalInvoiceWidget),
                createVNode(_component_PortalTaskWidget)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DJUG7Ol_.mjs.map
