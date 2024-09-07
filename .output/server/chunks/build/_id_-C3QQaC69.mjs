import { _ as _sfc_main$5 } from './Logo-Dz7nGNoc.mjs';
import { _ as _sfc_main$6 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$7 } from './DarkModeToggle-Dqz9Fta5.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, reactive, resolveDirective, toDisplayString, isRef, withDirectives, openBlock, createBlock, createCommentVNode } from 'vue';
import { a as useRoute, c as createError, n as navigateTo, i as useAsyncData } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$9 } from './VDivider-CoLvA21X.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$4 } from './PageBuilder-BLe4xnhO.mjs';
import { _ as _sfc_main$a } from './BlockContainer-DswPIote.mjs';
import __nuxt_component_0$1 from './index-Dqa-xyfo.mjs';
import { _ as _sfc_main$b } from './VAlert-B7QIU45Y.mjs';
import { _ as _sfc_main$c } from './UForm-BXdHEs5F.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem, createItem, uploadFiles } from '@directus/sdk';
import './nuxt-img-BL8_SQyR.mjs';
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
import './composables-BxS0fVn-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './UIcon-CFeTNZEP.mjs';
import 'tailwind-merge';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
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
import '@iconify/vue';
import 'vue-dompurify-html';
import 'node:crypto';
import './Prose-C5ZYWjWj.mjs';
import './id-CsF31SPu.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './keyboard-puKMRDGD.mjs';
import './Motionable-BeRKE-n3.mjs';
import './VGallery-BIzCeV7M.mjs';
import './embed-BNjS_SEV.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './relations-DIdeUpYC.mjs';
import '@iconify/utils/lib/css/icon';
import './FormGroup-D6qWgF-G.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './Input-CfIqCvke.mjs';
import './Textarea-NEFeg-lL.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './VUpload-DWTZMVN2.mjs';
import './VLabel-D4wsGVsj.mjs';
import 'perfect-freehand';

const showSidebar = ref(false);
function useProposals() {
  const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
  };
  return {
    showSidebar,
    toggleSidebar
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: {},
    organization: {}
  },
  setup(__props) {
    const { showSidebar: showSidebar2, toggleSidebar } = useProposals();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$5;
      const _component_TypographyHeadline = _sfc_main$6;
      const _component_DarkModeToggle = _sfc_main$7;
      const _component_UButton = __nuxt_component_4;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full space-y-4 md:flex md:items-center md:space-x-6 md:space-y-0" }, _attrs))}><div class="flex items-center bg-gray-800 rounded-lg md:justify-between md:flex-1"><div class="px-4 py-3">`);
      _push(ssrRenderComponent(_component_Logo, { class: "h-6 text-white" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        size: "xs",
        content: `Proposal for ${_ctx.organization}`,
        class: "text-white"
      }, null, _parent));
      _push(`<div class="flex items-center justify-end flex-shrink-0 p-2 space-x-2">`);
      _push(ssrRenderComponent(_component_DarkModeToggle, { class: "hidden text-gray-200 md:block hover:text-gray-400" }, null, _parent));
      _push(`</div></div><div class="hidden gap-2 md:flex">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        size: "lg",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("#accept")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accept Proposal`);
          } else {
            return [
              createTextVNode("Accept Proposal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        variant: "outline",
        class: "uppercase",
        icon: "i-heroicons-chat-bubble-bottom-center-text",
        onClick: unref(toggleSidebar)
      }, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/proposals/components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    name: {},
    organization: {},
    owner: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$5;
      const _component_TypographyHeadline = _sfc_main$6;
      const _component_TypographyTitle = _sfc_main$8;
      const _component_VDivider = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center w-full h-screen border-b-2 border-primary" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary/70 dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"></div><div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10"></div><div class="relative flex flex-col justify-center">`);
      _push(ssrRenderComponent(_component_Logo, { class: "h-6 mx-auto dark:text-white text-gray" }, null, _parent));
      _push(`<div class="mt-12 space-y-6 text-center">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: _ctx.name,
        size: "title"
      }, null, _parent));
      _push(`<div class="flex flex-col items-center justify-center space-y-2">`);
      _push(ssrRenderComponent(_component_TypographyTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`For:`);
          } else {
            return [
              createTextVNode("For:")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TypographyHeadline, { content: _ctx.organization }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
      _push(`<div class="flex flex-col items-center justify-center space-y-2">`);
      _push(ssrRenderComponent(_component_TypographyTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prepared by:`);
          } else {
            return [
              createTextVNode("Prepared by:")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#content",
        class: "mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "material-symbols:arrow-downward-rounded",
              class: "mt-12 animate-bounce",
              size: "xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "material-symbols:arrow-downward-rounded",
                class: "mt-12 animate-bounce",
                size: "xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/proposals/components/blocks/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Acceptance",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { query, params } = useRoute();
    if (query && query.approver) {
      const approver = ([__temp, __restore] = withAsyncContext(() => useDirectus(
        readItem("contacts", query.approver, { fields: ["first_name", "last_name", "email"] })
      )), __temp = await __temp, __restore(), __temp);
      query.first_name = approver.first_name;
      query.last_name = approver.last_name;
      query.email = approver.email;
    }
    function getPrefillData(query2) {
      const prefillData = {};
      Object.keys(query2).forEach((key) => {
        if (key.startsWith("prefill_")) {
          const fieldName = key.replace("prefill_", "");
          prefillData[fieldName] = query2[key];
        }
      });
      return prefillData;
    }
    const formData = reactive({ ...getPrefillData(query) });
    const error = ref(null);
    const success = ref(false);
    const form = {
      submit_label: "Accept Proposal",
      success_message: "Success! Your form has been submitted.",
      size: "lg",
      schema: [
        {
          name: "first_name",
          type: "text",
          label: "First Name",
          placeholder: "John",
          description: null,
          validation: "required",
          width: "50"
        },
        {
          name: "last_name",
          type: "text",
          label: "Last Name",
          validation: "required",
          width: "50"
        },
        {
          name: "email",
          type: "text",
          label: "Email",
          placeholder: "john@example.com",
          validation: "required",
          width: "100"
        },
        {
          name: "organization",
          type: "text",
          label: "Company",
          description: `What's the name of your company / organization?`,
          width: "100"
        },
        {
          name: "signature",
          type: "signature",
          label: "Signature",
          description: `Please sign your name.`,
          width: "100",
          validation: "required",
          options: ["type", "draw", "upload"]
        },
        {
          name: "esignature_agreement",
          type: "checkbox",
          label: "I agree that my electronic signature is as valid and legally binding as a handwritten signature.",
          validation: "required",
          width: "100"
        }
      ]
    };
    function uploadTheFiles(files) {
      const formData2 = new FormData();
      files.forEach((file, idx) => {
        formData2.append("file", file);
      });
      return useDirectus(uploadFiles(formData2));
    }
    async function submitForm() {
      var _a2, _b2;
      var _a, _b, _c;
      try {
        const { signature, ...data } = formData;
        let approval = {};
        const signatureImage = (_a = formData.signature) == null ? void 0 : _a.image;
        if (signatureImage) {
          const signatureFile = await uploadTheFiles([signatureImage]);
          approval.signature_image = signatureFile.id;
        }
        approval.signature_type = (_b = formData.signature) == null ? void 0 : _b.type;
        approval.signature_text = (_c = formData.signature) == null ? void 0 : _c.text;
        approval = {
          ...approval,
          ...data,
          contact: (_a2 = query == null ? void 0 : query.approver) != null ? _a2 : void 0,
          proposal: (_b2 = params.id) != null ? _b2 : void 0
        };
        await useDirectus(createItem("os_proposal_approvals", approval));
        success.value = true;
      } catch (err) {
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$a;
      const _component_Icon = __nuxt_component_0$1;
      const _component_TypographyHeadline = _sfc_main$6;
      const _component_VAlert = _sfc_main$b;
      const _component_UForm = _sfc_main$c;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative max-w-3xl p-8 mx-auto overflow-hidden text-gray-900 bg-transparent bg-gray-100 border-2 dark:bg-gray-800 border-primary rounded-xl"${_scopeId}><div class="space-y-2 text-center"${_scopeId}><span class="px-3 py-4 rounded-lg bg-primary"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:check-read-outline",
              class: "w-12 h-12 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(_component_TypographyHeadline, { content: "Accept Proposal" }, null, _parent2, _scopeId));
            _push2(`<p class="dark:text-gray-200"${_scopeId}>To accept this document, fill out the form and click the button below.</p></div><div class="mt-8"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_auto_animate))}${_scopeId}><div class="mb-4"${_scopeId}>`);
            if (unref(error)) {
              _push2(ssrRenderComponent(_component_VAlert, { type: "error" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Oops! ${ssrInterpolate(unref(error))}`);
                  } else {
                    return [
                      createTextVNode("Oops! " + toDisplayString(unref(error)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(success)) {
              _push2(ssrRenderComponent(_component_VAlert, { type: "success" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.success_message)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.success_message), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!unref(success)) {
              _push2(ssrRenderComponent(_component_UForm, {
                modelValue: unref(formData),
                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
                form: {
                  schema: form.schema
                },
                type: "form",
                "on-submit": submitForm,
                "submit-label": form.submit_label
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative max-w-3xl p-8 mx-auto overflow-hidden text-gray-900 bg-transparent bg-gray-100 border-2 dark:bg-gray-800 border-primary rounded-xl" }, [
                createVNode("div", { class: "space-y-2 text-center" }, [
                  createVNode("span", { class: "px-3 py-4 rounded-lg bg-primary" }, [
                    createVNode(_component_Icon, {
                      name: "solar:check-read-outline",
                      class: "w-12 h-12 text-white"
                    })
                  ]),
                  createVNode(_component_TypographyHeadline, { content: "Accept Proposal" }),
                  createVNode("p", { class: "dark:text-gray-200" }, "To accept this document, fill out the form and click the button below.")
                ]),
                createVNode("div", { class: "mt-8" }, [
                  withDirectives((openBlock(), createBlock("div", null, [
                    createVNode("div", { class: "mb-4" }, [
                      unref(error) ? (openBlock(), createBlock(_component_VAlert, {
                        key: 0,
                        type: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Oops! " + toDisplayString(unref(error)), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(success) ? (openBlock(), createBlock(_component_VAlert, {
                        key: 1,
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.success_message), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    !unref(success) ? (openBlock(), createBlock(_component_UForm, {
                      key: 0,
                      modelValue: unref(formData),
                      "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
                      form: {
                        schema: form.schema
                      },
                      type: "form",
                      "on-submit": submitForm,
                      "submit-label": form.submit_label
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "form", "submit-label"])) : createCommentVNode("", true)
                  ])), [
                    [_directive_auto_animate]
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/proposals/components/blocks/Acceptance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { params, path } = useRoute();
    const {
      data: proposal,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(path, () => {
      return useDirectus(
        readItem("os_proposals", params.id, {
          fields: [
            "name",
            {
              organization: ["name", "logo", "brand_color"],
              owner: ["first_name", "last_name", "avatar", "title"],
              blocks: [
                "collection",
                {
                  item: {
                    block_hero: ["id", "title", "headline", "content", "image", "buttons", "image_position"],
                    block_faqs: ["id", "title", "faqs", "headline", "alignment"],
                    block_richtext: ["id", "title", "headline", "content", "alignment"],
                    block_testimonials: [
                      "id",
                      "title",
                      "headline",
                      {
                        testimonials: [
                          {
                            testimonials_id: [
                              "id",
                              "title",
                              "subtitle",
                              "content",
                              "company",
                              "company_logo",
                              { image: ["id", "title", "description"] }
                            ]
                          }
                        ]
                      }
                    ],
                    block_quote: ["id", "title", "subtitle", "content"],
                    block_cta: ["id", "title", "headline", "content", "buttons"],
                    block_form: ["id", "title", "headline", { form: ["*"] }],
                    block_logocloud: ["id", "title", "headline", { logos: ["*"] }],
                    block_gallery: [
                      "id",
                      "title",
                      "headline",
                      {
                        gallery_items: [
                          {
                            directus_files_id: ["id", "title", "description"]
                          }
                        ]
                      }
                    ],
                    block_steps: [
                      "id",
                      "title",
                      "headline",
                      "show_step_numbers",
                      "alternate_image_position",
                      {
                        steps: ["id", "title", "content", "image"]
                      }
                    ],
                    block_columns: [
                      "id",
                      "title",
                      "headline",
                      {
                        rows: ["title", "headline", "content", "image_position", { image: ["id", "title", "description"] }]
                      }
                    ],
                    block_divider: ["id", "title"],
                    block_team: ["*"],
                    block_html: ["*"],
                    block_video: ["*"],
                    block_cardgroup: ["*"]
                  }
                }
              ]
            }
          ]
        })
      );
    }, "$DpEuXZy61k")), __temp = await __temp, __restore(), __temp);
    if (!proposal.value) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_ProposalsHeader = _sfc_main$3;
      const _component_ProposalsBlocksHero = _sfc_main$2;
      const _component_PageBuilder = _sfc_main$4;
      const _component_ProposalsBlocksAcceptance = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProposalsHeader, {
        title: (_a = unref(proposal)) == null ? void 0 : _a.name,
        class: "fixed top-0 z-20 flex justify-center w-full p-2",
        name: (_b = unref(proposal)) == null ? void 0 : _b.name,
        organization: (_d = (_c = unref(proposal)) == null ? void 0 : _c.organization) == null ? void 0 : _d.name
      }, null, _parent));
      _push(`<div class="overflow-y-auto">`);
      _push(ssrRenderComponent(_component_ProposalsBlocksHero, {
        class: "pt-36",
        name: (_e = unref(proposal)) == null ? void 0 : _e.name,
        owner: (_f = unref(proposal)) == null ? void 0 : _f.owner,
        organization: (_h = (_g = unref(proposal)) == null ? void 0 : _g.organization) == null ? void 0 : _h.name
      }, null, _parent));
      if (unref(proposal)) {
        _push(ssrRenderComponent(_component_PageBuilder, {
          id: "content",
          page: unref(proposal)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ProposalsBlocksAcceptance, {
        id: "accept",
        class: "max-w-3xl mx-auto"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/proposals/pages/proposals/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C3QQaC69.mjs.map
