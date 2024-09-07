import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$4 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$c } from './UIcon-CFeTNZEP.mjs';
import { useSSRContext, defineComponent, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import __nuxt_component_0$1 from './index-Dqa-xyfo.mjs';
import { _ as _sfc_main$5 } from './Prose-C5ZYWjWj.mjs';
import { _ as _sfc_main$6 } from './Logo-Dz7nGNoc.mjs';
import { _ as _sfc_main$7 } from './VLabel-D4wsGVsj.mjs';
import { _ as _sfc_main$8 } from './VAvatar-DZ5-rAwN.mjs';
import { _ as _sfc_main$9 } from './UserBadge-DzE2kIn7.mjs';
import { _ as _sfc_main$a } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$b } from './VDivider-CoLvA21X.mjs';
import { d as getRelativeTime } from './time-C5trUN3I.mjs';
import { a as useRoute, i as useAsyncData, h as useFiles } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem } from '@directus/sdk';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
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
import './nuxt-img-BL8_SQyR.mjs';
import './user-name-hNaZlTuZ.mjs';
import './Avatar-CM8WZfag.mjs';
import './Icon-BRjp6c2n.mjs';

const _sfc_main$3 = {
  props: {
    name: { type: String, default: "" },
    small: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    isCurrent: { type: Boolean, default: false },
    isComplete: { type: Boolean, default: false },
    status: { type: String, default: "" }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = _sfc_main$c;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center w-24 md:w-full" }, _attrs))}><div class="flex flex-col items-center px-1 py-3 text-sm font-medium md:px-2 md:py-4"><span class="${ssrRenderClass([{
    "bg-primary": $props.isComplete,
    "border-primary border-dashed border-2": $props.isCurrent,
    "border-2 border-dashed dark:border-gray-700": !$props.isCurrent && !$props.isComplete
  }, "flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-button"])}">`);
  if ($props.isComplete) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: "heroicons:check",
      class: "w-8 h-8 text-white fill-current",
      solid: ""
    }, null, _parent));
  } else if ($props.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: $props.icon,
      class: ["w-6 h-6 fill-current", {
        "text-primary": $props.isCurrent,
        "text-gray-500 ": !$props.isCurrent
      }],
      outline: ""
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</span><div class="${ssrRenderClass([{
    "line-through text-gray-900 dark:text-white": $props.isComplete,
    "text-primary": $props.isCurrent,
    "text-gray-500 dark:text-gray-300": !$props.isCurrent && !$props.isComplete
  }, "mt-1 text-xs font-medium text-center md:text-sm md:mt-2"])}"><span class="whitespace-nowrap">${ssrInterpolate($props.name)}</span></div>`);
  if ($props.status) {
    _push(`<div class="mt-1 text-xs font-medium text-center text-gray-500 dark:text-gray-300">${ssrInterpolate($props.status)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/ProjectMilestone.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectMilestones",
  __ssrInlineRender: true,
  props: {
    steps: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalProjectMilestone = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Progress" }, _attrs))}><ol class="flex items-start w-full overflow-x-auto"><!--[-->`);
      ssrRenderList(_ctx.steps, (step, index) => {
        _push(`<li class="flex flex-1">`);
        _push(ssrRenderComponent(_component_PortalProjectMilestone, {
          name: step.name,
          icon: step.icon,
          "is-complete": step.isComplete,
          "is-current": step.isCurrent,
          status: step.status,
          date: step.date
        }, null, _parent));
        if (index !== _ctx.steps.length - 1) {
          _push(`<div class="mt-6 md:mt-8">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-arrow-long-right",
            class: [step.isComplete ? "text-primary-700 dark:text-primary" : "text-gray-700 dark:text-gray-500", "w-8 h-8 fill-current"],
            solid: ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/ProjectMilestones.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectActivity",
  __ssrInlineRender: true,
  props: {
    item: {
      type: String,
      default: null
    },
    collection: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const activities = ref([
      {
        type: "milestone",
        item: {
          id: "1",
          name: "Milestone 1"
        },
        action: "completed",
        timestamp: "2023-09-02T00:00:00.000Z"
      },
      {
        type: "update",
        item: {
          id: "1",
          message: `<p>I am pleased to announce the successful completion of Sprint 3. Kudos to all for the hard work and dedication that was poured into achieving our goals. Below is a brief update on the key accomplishments, upcoming priorities, and identified challenges:</p>
<h3>Key Accomplishments:</h3>
<ol>
<li>
<p><strong>Feature Development</strong>:</p>
<ul>
<li>Completed the User Authentication module which now supports OAuth 2.0.</li>
<li>Implemented real-time notifications, enhancing user engagement.</li>
<li>Optimized the website's load time by 30%, ensuring a smoother user experience.</li>
</ul>
</li>
<li>
<p><strong>Bug Fixes</strong>:</p>
<ul>
<li>Addressed 25 reported bugs, with a significant one being the payment gateway error.</li>
</ul>
</li>
<li>
<p><strong>Testing and Quality Assurance</strong>:</p>
<ul>
<li>Achieved 95% code coverage with automated testing.</li>
<li>Conducted usability testing with a selected user group, feedback has been overwhelmingly positive.</li>
</ul>
</li>
<li>
<p><strong>Collaborations</strong>:</p>
<ul>
<li>Coordinated with the Design team to finalize the UI/UX for the new dashboard.</li>
<li>Established a weekly sync with the Marketing team to align on product messaging.</li>
</ul>
</li>
</ol>`
        },
        action: "update",
        timestamp: "2023-09-01T00:00:00.000Z"
      },
      {
        type: "milestone",
        item: {
          id: "1",
          name: "Milestone 1"
        },
        action: "started",
        timestamp: "2023-09-01T00:00:00.000Z"
      }
    ]);
    const groupedActivity = computed(() => {
      const grouped = activities.value.reduce((acc, currentActivity) => {
        const date = new Date(currentActivity.timestamp).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        const existing = acc.find((a) => a.date === date);
        if (existing) {
          existing.activity.push(currentActivity);
        } else {
          acc.push({
            date,
            activity: [currentActivity]
          });
        }
        return acc;
      }, []).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return grouped;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TypographyTitle = _sfc_main$a;
      const _component_VDivider = _sfc_main$b;
      const _component_Icon = __nuxt_component_0$1;
      const _component_TypographyProse = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flow-root mt-6 space-y-4"><!--[-->`);
      ssrRenderList(unref(groupedActivity), (date, dateIdx) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_TypographyTitle, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(date.date)}`);
            } else {
              return [
                createTextVNode(toDisplayString(date.date), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
        _push(`<ul role="list" class="mt-4"><!--[-->`);
        ssrRenderList(date.activity, (item, itemIdx) => {
          _push(`<li><div class="relative pb-8">`);
          if (itemIdx !== date.activity.length - 1) {
            _push(`<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-300 dark:bg-gray-700" aria-hidden="true"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="relative flex space-x-3"><div><span class="${ssrRenderClass(["h-8 w-8 rounded-full flex items-center justify-center bg-gray-500 "])}">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.type === "milestone" ? "heroicons:flag" : item.type === "update" ? "heroicons:document-text" : "heroicons:document",
            class: "w-5 h-5 text-white",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`</span></div><div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"><div>`);
          if (item.type === "update") {
            _push(`<!--[--><div class="font-bold">User posted a project update</div>`);
            if (item.item && item.item.message) {
              _push(ssrRenderComponent(_component_TypographyProse, {
                content: item.item.message,
                size: "sm"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else if (item.type === "milestone") {
            _push(`<!--[--> Milestone - ${ssrInterpolate(item.item.name)} - ${ssrInterpolate(item.action)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="text-sm text-right text-gray-500 whitespace-nowrap">${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))(item.timestamp))}</div></div></div></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/ProjectActivity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path, params } = useRoute();
    const {
      data: project,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`/portal/projects/${params.id}-index`, () => {
      return useDirectus(
        readItem("os_projects", params.id, {
          fields: [
            "*",
            {
              organization: ["id", "name", "logo"],
              owner: ["id", "first_name", "last_name", "email", "avatar"],
              contacts: ["*"],
              tasks: ["id", "name", "type", "status", "due_date", "date_completed"],
              updates: ["id", "message", "user_created", "date_created", "date_updated", "user_updated"]
            }
          ],
          deep: {
            tasks: {
              _filter: {
                _or: [
                  {
                    is_visible_to_client: {
                      _eq: true
                    }
                  },
                  {
                    type: {
                      _eq: "milestone"
                    }
                  }
                ]
              }
            }
          }
        })
      );
    })), __temp = await __temp, __restore(), __temp);
    const { fileUrl } = useFiles();
    const milestones = computed(() => {
      var _a;
      const projectData = unref(project);
      if (!projectData || !(projectData == null ? void 0 : projectData.tasks))
        return [];
      const items = (_a = projectData == null ? void 0 : projectData.tasks) == null ? void 0 : _a.filter((task) => typeof task !== "string" && task.type === "milestone").sort((a, b) => {
        return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
      });
      return items.map((task) => {
        return {
          isComplete: task.status === "completed",
          isCurrent: task.status !== "completed" && task.status !== "pending",
          icon: "heroicons:calendar",
          name: task.name,
          status: task.status === "completed" ? task.date_completed && getRelativeTime(task.date_completed) : "",
          date: task.due_date
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UCard = __nuxt_component_1;
      const _component_TypographyHeadline = _sfc_main$4;
      const _component_PortalProjectMilestones = _sfc_main$2;
      const _component_TypographyProse = _sfc_main$5;
      const _component_Logo = _sfc_main$6;
      const _component_VLabel = _sfc_main$7;
      const _component_VAvatar = _sfc_main$8;
      const _component_UserBadge = _sfc_main$9;
      const _component_PortalProjectActivity = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "overview",
        class: "grid lg:grid-cols-2"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mt-6 space-y-4 lg:col-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Milestones",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PortalProjectMilestones, {
              steps: unref(milestones)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TypographyHeadline, {
                content: "Milestones",
                size: "xs"
              }),
              createVNode(_component_PortalProjectMilestones, {
                steps: unref(milestones)
              }, null, 8, ["steps"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="px-4 py-3 mt-8 space-y-4">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: "Description",
        size: "xs"
      }, null, _parent));
      if ((_a = unref(project)) == null ? void 0 : _a.description) {
        _push(ssrRenderComponent(_component_TypographyProse, {
          content: (_b = unref(project)) == null ? void 0 : _b.description
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Team",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid divide-y-2 md:divide-y-0 md:divide-x-2 md:grid-cols-2 dark:divide-gray-700"${_scopeId}><div class="p-4 space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Logo, { class: "h-6" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm font-bold"${_scopeId}>${ssrInterpolate(
              /* @TODO */
              "Company Name"
            )}</p>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Project Owner" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VAvatar, {
              author: (_a2 = unref(project)) == null ? void 0 : _a2.owner,
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 space-y-4"${_scopeId}>`);
            if ((_c = (_b2 = unref(project)) == null ? void 0 : _b2.organization) == null ? void 0 : _c.logo) {
              _push2(`<img${ssrRenderAttr("src", unref(fileUrl)((_e = (_d = unref(project)) == null ? void 0 : _d.organization) == null ? void 0 : _e.logo))} class="h-6"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="text-sm font-bold"${_scopeId}>${ssrInterpolate((_g = (_f = unref(project)) == null ? void 0 : _f.organization) == null ? void 0 : _g.name)}</p>`);
            _push2(ssrRenderComponent(_component_VLabel, { label: "Contacts" }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList((_h = unref(project)) == null ? void 0 : _h.contacts, (contact) => {
              var _a3;
              _push2(ssrRenderComponent(_component_UserBadge, {
                key: (_a3 = contact.contacts_id) == null ? void 0 : _a3.id,
                user: contact.contacts_id,
                size: "sm"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode(_component_TypographyHeadline, {
                content: "Team",
                size: "xs"
              }),
              createVNode("div", { class: "grid divide-y-2 md:divide-y-0 md:divide-x-2 md:grid-cols-2 dark:divide-gray-700" }, [
                createVNode("div", { class: "p-4 space-y-4" }, [
                  createVNode(_component_Logo, { class: "h-6" }),
                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString(
                    /* @TODO */
                    "Company Name"
                  )),
                  createVNode(_component_VLabel, { label: "Project Owner" }),
                  createVNode(_component_VAvatar, {
                    author: (_i = unref(project)) == null ? void 0 : _i.owner,
                    size: "sm"
                  }, null, 8, ["author"])
                ]),
                createVNode("div", { class: "p-4 space-y-4" }, [
                  ((_k = (_j = unref(project)) == null ? void 0 : _j.organization) == null ? void 0 : _k.logo) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(fileUrl)((_m = (_l = unref(project)) == null ? void 0 : _l.organization) == null ? void 0 : _m.logo),
                    class: "h-6"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString((_o = (_n = unref(project)) == null ? void 0 : _n.organization) == null ? void 0 : _o.name), 1),
                  createVNode(_component_VLabel, { label: "Contacts" }),
                  (openBlock(true), createBlock(Fragment, null, renderList((_p = unref(project)) == null ? void 0 : _p.contacts, (contact) => {
                    var _a3;
                    return openBlock(), createBlock(_component_UserBadge, {
                      key: (_a3 = contact.contacts_id) == null ? void 0 : _a3.id,
                      user: contact.contacts_id,
                      size: "sm"
                    }, null, 8, ["user"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="px-4 py-3 mt-12 lg:col-span-2">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: "Updates",
        size: "xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortalProjectActivity, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fe5g6gcs.mjs.map
