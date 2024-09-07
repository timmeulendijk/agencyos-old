import { _ as _sfc_main$1 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as _sfc_main$2 } from './VText-D0MQff2t.mjs';
import { _ as _sfc_main$3 } from './UIcon-CFeTNZEP.mjs';
import { a as useRoute, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { defineComponent, computed, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { g as getFriendlyDate, d as getRelativeTime } from './time-C5trUN3I.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import './index-Dqa-xyfo.mjs';
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
import './Headline-OuodUiss.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './id-CsF31SPu.mjs';
import './Icon-BRjp6c2n.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: projects, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItems("os_projects", {
            fields: [
              "id",
              "name",
              "due_date",
              {
                tasks: ["id", "name", "status", "due_date"]
              }
            ],
            deep: {
              // @ts-ignore
              tasks: {
                _sort: ["due_date"],
                _filter: {
                  type: {
                    _eq: "milestone"
                  }
                }
              }
            }
          })
        );
      },
      {}
    )), __temp = await __temp, __restore(), __temp);
    const taskStatuses = {
      pending: {
        label: "Pending",
        icon: "i-heroicons-clock-20-solid",
        color: "gray"
      },
      active: {
        label: "Active",
        icon: "i-heroicons-play-20-solid",
        color: "blue"
      },
      in_progress: {
        label: "In Progress",
        icon: "i-heroicons-wrench-screwdriver-20-solid",
        color: "amber"
      },
      in_review: {
        label: "In Review",
        icon: "i-heroicons-exclamation-circle-20-solid",
        color: "orange"
      },
      completed: {
        label: "Completed",
        icon: "i-heroicons-check-20-solid",
        color: "green"
      }
    };
    const columns = [
      {
        key: "name",
        label: "Name"
      },
      {
        key: "milestones",
        label: "Status"
      },
      {
        key: "due_date",
        label: "Target Date"
      },
      {
        key: "actions"
      }
    ];
    const projectsShown = computed(() => {
      var _a;
      if (!projects.value) {
        return [];
      }
      return (_a = projects.value) == null ? void 0 : _a.map((project) => {
        const tasks = project.tasks;
        return {
          id: project.id,
          name: project.name,
          due_date: project.due_date,
          tasks: tasks.map((task) => {
            var _a2;
            return {
              isComplete: task.status === "completed",
              isCurrent: task.status === "active" || task.status === "in_progress" || task.status === "in_review",
              icon: "i-heroicons-calendar",
              name: task.name,
              status: taskStatuses[(_a2 = task.status) != null ? _a2 : "pending"].label
            };
          })
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalPageHeader = _sfc_main$1;
      const _component_UCard = __nuxt_component_1;
      const _component_UTable = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      const _component_VText = _sfc_main$2;
      const _component_UIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: "Projects",
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Projects"
          }
        ]
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "mt-6" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              columns,
              rows: unref(projectsShown),
              "column-attribute": "label"
            }, {
              "name-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "link",
                    to: `/portal/projects/${row.id}`,
                    size: "xl",
                    padded: false
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      variant: "link",
                      to: `/portal/projects/${row.id}`,
                      size: "xl",
                      padded: false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              "due_date-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VText, { size: "xs" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date)), 1)
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
                        createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date)), 1)
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
              "milestones-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="flex items-center"${_scopeId2}><!--[-->`);
                  ssrRenderList(row.tasks, ({ isComplete, isCurrent, icon }, i) => {
                    _push3(`<!--[--><li class="${ssrRenderClass([i !== row.tasks.length - 1 ? "" : "", "relative"])}"${_scopeId2}><div class="${ssrRenderClass([{
                      "border-primary border-dashed h-10 w-10 border-2": isCurrent && !isComplete,
                      "bg-primary w-5 h-5": isComplete,
                      "dark:border-gray-700 border-gray-300 border-2 w-5 h-5": !isCurrent && !isComplete
                    }, "relative flex items-center justify-center flex-shrink-0 rounded-card"])}"${_scopeId2}>`);
                    if (isComplete) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons-check",
                        class: "w-4 text-white"
                      }, null, _parent3, _scopeId2));
                    } else if (icon && isCurrent) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: icon,
                        class: ["fill-current", {
                          "text-primary w-5 h-5": isCurrent
                        }]
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></li>`);
                    if (i !== row.tasks.length - 1) {
                      _push3(`<li class="w-3" aria-hidden="true"${_scopeId2}><div class="${ssrRenderClass([[isComplete ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"], "h-0.5 w-full"])}"${_scopeId2}></div></li>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "flex items-center" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(row.tasks, ({ isComplete, isCurrent, icon }, i) => {
                        return openBlock(), createBlock(Fragment, { key: i }, [
                          createVNode("li", {
                            class: [i !== row.tasks.length - 1 ? "" : "", "relative"]
                          }, [
                            createVNode("div", {
                              class: [{
                                "border-primary border-dashed h-10 w-10 border-2": isCurrent && !isComplete,
                                "bg-primary w-5 h-5": isComplete,
                                "dark:border-gray-700 border-gray-300 border-2 w-5 h-5": !isCurrent && !isComplete
                              }, "relative flex items-center justify-center flex-shrink-0 rounded-card"]
                            }, [
                              isComplete ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: "i-heroicons-check",
                                class: "w-4 text-white"
                              })) : icon && isCurrent ? (openBlock(), createBlock(_component_UIcon, {
                                key: 1,
                                name: icon,
                                class: ["fill-current", {
                                  "text-primary w-5 h-5": isCurrent
                                }]
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ], 2)
                          ], 2),
                          i !== row.tasks.length - 1 ? (openBlock(), createBlock("li", {
                            key: 0,
                            class: "w-3",
                            "aria-hidden": "true"
                          }, [
                            createVNode("div", {
                              class: ["h-0.5 w-full", [isComplete ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"]]
                            }, null, 2)
                          ])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])
                  ];
                }
              }),
              "actions-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    to: `/portal/projects/${row.id}`,
                    color: "primary",
                    variant: "outline",
                    icon: "i-heroicons-arrow-right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      to: `/portal/projects/${row.id}`,
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
              createVNode(_component_UTable, {
                columns,
                rows: unref(projectsShown),
                "column-attribute": "label"
              }, {
                "name-data": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    variant: "link",
                    to: `/portal/projects/${row.id}`,
                    size: "xl",
                    padded: false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                "due_date-data": withCtx(({ row }) => [
                  createVNode(_component_VText, { size: "xs" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))(row.due_date)), 1)
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
                "milestones-data": withCtx(({ row }) => [
                  createVNode("ul", { class: "flex items-center" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(row.tasks, ({ isComplete, isCurrent, icon }, i) => {
                      return openBlock(), createBlock(Fragment, { key: i }, [
                        createVNode("li", {
                          class: [i !== row.tasks.length - 1 ? "" : "", "relative"]
                        }, [
                          createVNode("div", {
                            class: [{
                              "border-primary border-dashed h-10 w-10 border-2": isCurrent && !isComplete,
                              "bg-primary w-5 h-5": isComplete,
                              "dark:border-gray-700 border-gray-300 border-2 w-5 h-5": !isCurrent && !isComplete
                            }, "relative flex items-center justify-center flex-shrink-0 rounded-card"]
                          }, [
                            isComplete ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: "i-heroicons-check",
                              class: "w-4 text-white"
                            })) : icon && isCurrent ? (openBlock(), createBlock(_component_UIcon, {
                              key: 1,
                              name: icon,
                              class: ["fill-current", {
                                "text-primary w-5 h-5": isCurrent
                              }]
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 2)
                        ], 2),
                        i !== row.tasks.length - 1 ? (openBlock(), createBlock("li", {
                          key: 0,
                          class: "w-3",
                          "aria-hidden": "true"
                        }, [
                          createVNode("div", {
                            class: ["h-0.5 w-full", [isComplete ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"]]
                          }, null, 2)
                        ])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ])
                ]),
                "actions-data": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    to: `/portal/projects/${row.id}`,
                    color: "primary",
                    variant: "outline",
                    icon: "i-heroicons-arrow-right"
                  }, null, 8, ["to"])
                ]),
                _: 1
              }, 8, ["rows"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-xqtBI5IF.mjs.map
