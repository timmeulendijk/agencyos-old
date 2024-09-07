import { _ as __nuxt_component_1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$3 } from './Prose-C5ZYWjWj.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, ref, reactive, createTextVNode, toDisplayString } from 'vue';
import { a as useRoute, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './id-CsF31SPu.mjs';
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
import './nuxt-link-Dix5D_y-.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MessageList",
  __ssrInlineRender: true,
  props: {
    projectId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const {
      data: conversations,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`${props.projectId}-conversations`, () => {
      return useDirectus(
        readItems("conversations", {
          filter: {
            _and: [
              {
                item: {
                  _eq: props.projectId
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
        label: "Name"
      },
      {
        key: "status",
        label: "Status"
      },
      {
        key: "date_created",
        label: "Date Created"
      }
    ];
    const selectedConversationId = ref(null);
    async function fetchConversationMessages(conversationId) {
      const data = await useDirectus(
        readItems("messages", {
          sort: ["date_created"],
          fields: [
            "*",
            {
              user_created: ["id", "first_name", "last_name", "email", "avatar"]
            }
          ],
          filter: {
            _and: [
              {
                conversation: {
                  _eq: conversationId
                }
              }
            ]
          }
        })
      );
      messages.value = data;
    }
    function openConversation(conversationId) {
      selectedConversationId.value = conversationId;
      fetchConversationMessages(conversationId);
    }
    const messages = ref([]);
    reactive({
      text: ""
    });
    ref("open");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      const _component_UBadge = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="w-full"><div class="flex items-center justify-between gap-3 py-3 border-b dark:border-gray-700"></div>`);
      _push(ssrRenderComponent(_component_UTable, {
        columns,
        rows: unref(conversations),
        "column-attribute": "label"
      }, {
        "name-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass({
              "bg-primary-50 dark:bg-primary-900": unref(selectedConversationId) === row.id
            })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "link",
              onClick: ($event) => openConversation(row.id)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: {
                  "bg-primary-50 dark:bg-primary-900": unref(selectedConversationId) === row.id
                }
              }, [
                createVNode(_component_UButton, {
                  variant: "link",
                  onClick: ($event) => openConversation(row.id)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.title), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ], 2)
            ];
          }
        }),
        "status-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "capitalize",
              variant: "subtle"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.status), 1)
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
                  createTextVNode(toDisplayString(row.status), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/MessageList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "conversations",
  __ssrInlineRender: true,
  setup(__props) {
    const { params } = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_TypographyHeadline = _sfc_main$2;
      const _component_TypographyProse = _sfc_main$3;
      const _component_PortalMessageList = _sfc_main$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mt-6" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: "Conversations",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              content: "Let's talk about it. Here you'll find all the conversations with our team regarding your project.",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TypographyHeadline, {
                content: "Conversations",
                size: "xs"
              }),
              createVNode(_component_TypographyProse, {
                content: "Let's talk about it. Here you'll find all the conversations with our team regarding your project.",
                size: "sm"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PortalMessageList, {
              "project-id": unref(params).id
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PortalMessageList, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/projects/[id]/conversations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=conversations-BDrlFXZl.mjs.map
