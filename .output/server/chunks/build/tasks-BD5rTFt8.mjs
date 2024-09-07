import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$3 } from './Prose-C5ZYWjWj.mjs';
import { _ as __nuxt_component_0 } from './Input-CfIqCvke.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { _ as _sfc_main$4 } from './UserBadge-DzE2kIn7.mjs';
import { _ as __nuxt_component_5$1, a as _sfc_main$5 } from './Task-D0RCxG5P.mjs';
import { a as useRoute, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, ref, computed, isRef, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { g as getFriendlyDate, d as getRelativeTime } from './time-C5trUN3I.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './UIcon-CFeTNZEP.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import 'vue-dompurify-html';
import 'node:crypto';
import './Icon-BRjp6c2n.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './id-CsF31SPu.mjs';
import './nuxt-link-Dix5D_y-.mjs';
import './Avatar-CM8WZfag.mjs';
import './user-name-hNaZlTuZ.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './keyboard-puKMRDGD.mjs';
import './combobox-9r9zJfab.mjs';
import '@tanstack/vue-virtual';
import './Dropdown-CMDTLEPg.mjs';
import './VLabel-D4wsGVsj.mjs';
import './VAvatar-DZ5-rAwN.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './DateDisplay-Dw0odYQk.mjs';
import './FileCard-lKi1YShj.mjs';
import './useToast-BMHYguAT.mjs';
import './UForm-BXdHEs5F.mjs';
import './VAlert-B7QIU45Y.mjs';
import './FormGroup-D6qWgF-G.mjs';
import './Textarea-NEFeg-lL.mjs';
import './VUpload-DWTZMVN2.mjs';
import './composables-BxS0fVn-.mjs';
import 'perfect-freehand';
import './embed-BNjS_SEV.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskList",
  __ssrInlineRender: true,
  props: {
    projectId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const {
      data: tasks,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`${props.projectId}-tasks`, () => {
      return useDirectus(
        readItems("os_tasks", {
          fields: [
            "*",
            {
              assigned_to: ["id", "first_name", "last_name", "email", "avatar"]
            }
          ],
          filter: {
            _and: [
              {
                project: {
                  _eq: props.projectId
                }
              },
              {
                is_visible_to_client: {
                  _eq: true
                }
              },
              {
                type: {
                  _neq: "milestone"
                }
              }
            ]
          }
        })
      );
    })), __temp = await __temp, __restore(), __temp);
    const columns = [
      {
        key: "name",
        label: "Name",
        sortable: true
      },
      {
        key: "due_date",
        label: "Due Date",
        sortable: true
      },
      {
        key: "status",
        label: "Status",
        sortable: true
      },
      {
        key: "type",
        label: "Type",
        sortable: true
      },
      {
        key: "assigned_to",
        label: "Assigned To",
        sortable: true
      },
      {
        key: "actions"
      }
    ];
    const showTask = ref(false);
    const selectedTaskId = ref(null);
    async function openTask(id) {
      selectedTaskId.value = id;
      showTask.value = true;
    }
    const searchQuery = ref();
    const tasksShown = computed(() => {
      var _a;
      const items = (_a = unref(tasks)) == null ? void 0 : _a.filter((task) => task.type !== "milestone").filter((task) => {
        var _a2;
        if (!searchQuery.value)
          return true;
        return task.name.toLowerCase().includes((_a2 = searchQuery == null ? void 0 : searchQuery.value) == null ? void 0 : _a2.toLowerCase());
      });
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_0;
      const _component_UTable = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      const _component_UBadge = __nuxt_component_5;
      const _component_UserBadge = _sfc_main$4;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_PortalTask = _sfc_main$5;
      _push(`<!--[--><div class="flex items-center justify-between gap-3 pb-3 border-b dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        type: "text",
        icon: "i-heroicons-magnifying-glass-20-solid",
        placeholder: "Search..."
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        columns,
        rows: unref(tasksShown),
        "column-attribute": "label"
      }, {
        "name-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "link",
              padded: false,
              onClick: ($event) => openTask(row.id)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "link",
                padded: false,
                onClick: ($event) => openTask(row.id)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.name), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        "due_date-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium text-gray-900"${_scopeId}>${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
              monthAbbr: true
            }))}</p><p class="text-xs capitalize"${_scopeId}>${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date))}</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium text-gray-900" }, toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date, {
                monthAbbr: true
              })), 1),
              createVNode("p", { class: "text-xs capitalize" }, toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(row.due_date)), 1)
            ];
          }
        }),
        "type-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "capitalize",
              variant: "subtle"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.type)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.type), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                class: "capitalize",
                variant: "subtle"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.type), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "assigned_to-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (row.assigned_to) {
              _push2(ssrRenderComponent(_component_UserBadge, {
                user: row.assigned_to,
                size: "sm"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              row.assigned_to ? (openBlock(), createBlock(_component_UserBadge, {
                key: 0,
                user: row.assigned_to,
                size: "sm"
              }, null, 8, ["user"])) : createCommentVNode("", true)
            ];
          }
        }),
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-arrow-right",
              color: "primary",
              size: "sm",
              variant: "outline",
              onClick: ($event) => openTask(row.id)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons-arrow-right",
                color: "primary",
                size: "sm",
                variant: "outline",
                onClick: ($event) => openTask(row.id)
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(showTask),
        "onUpdate:modelValue": ($event) => isRef(showTask) ? showTask.value = $event : null,
        ui: {
          width: "max-w-xl"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedTaskId)) {
              _push2(ssrRenderComponent(_component_PortalTask, {
                "task-id": unref(selectedTaskId),
                class: "overflow-y-auto",
                onClose: ($event) => showTask.value = false
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedTaskId) ? (openBlock(), createBlock(_component_PortalTask, {
                key: 0,
                "task-id": unref(selectedTaskId),
                class: "overflow-y-auto",
                onClose: ($event) => showTask.value = false
              }, null, 8, ["task-id", "onClose"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/TaskList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tasks",
  __ssrInlineRender: true,
  setup(__props) {
    const { params } = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_TypographyHeadline = _sfc_main$2;
      const _component_TypographyProse = _sfc_main$3;
      const _component_PortalTaskList = _sfc_main$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mt-6" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Tasks",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              size: "sm",
              content: "Teamwork makes the dreamwork. These are the open tasks you'll need to complete for a successful project."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TypographyHeadline, {
                content: "Tasks",
                size: "xs"
              }),
              createVNode(_component_TypographyProse, {
                size: "sm",
                content: "Teamwork makes the dreamwork. These are the open tasks you'll need to complete for a successful project."
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PortalTaskList, {
              "project-id": unref(params).id
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PortalTaskList, {
                "project-id": unref(params).id
              }, null, 8, ["project-id"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id]/tasks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tasks-BD5rTFt8.mjs.map
