import { _ as __nuxt_component_7 } from './nuxt-error-boundary-Blecufsi.mjs';
import { _ as _sfc_main$1 } from './PageBuilder-BLe4xnhO.mjs';
import { _ as _sfc_main$2 } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$3 } from './VAlert-B7QIU45Y.mjs';
import { a as useRoute, b as useAppConfig, c as createError, d as useSchemaOrg, e as defineWebPage, f as useHead, g as useServerHead, u as useRequestEvent, h as useFiles, i as useAsyncData } from './server.mjs';
import { a7 as getRequestURL } from '../runtime.mjs';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { d as defineOgImageComponent } from './defineOgImageComponent-CwZMxPWI.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './Title-0MDj5cmN.mjs';
import './Headline-OuodUiss.mjs';
import './Prose-C5ZYWjWj.mjs';
import './Button-CwvMvtUt.mjs';
import './nuxt-link-Dix5D_y-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './UIcon-CFeTNZEP.mjs';
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-merge';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './id-CsF31SPu.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './keyboard-puKMRDGD.mjs';
import './UForm-BXdHEs5F.mjs';
import './FormGroup-D6qWgF-G.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './Input-CfIqCvke.mjs';
import './Textarea-NEFeg-lL.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './VUpload-DWTZMVN2.mjs';
import './VLabel-D4wsGVsj.mjs';
import './composables-BxS0fVn-.mjs';
import 'perfect-freehand';
import './Motionable-BeRKE-n3.mjs';
import './VGallery-BIzCeV7M.mjs';
import './embed-BNjS_SEV.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './relations-DIdeUpYC.mjs';
import '../routes/renderer.mjs';
import 'node:async_hooks';
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
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...permalink]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const { path } = useRoute();
    const url = useRequestURL();
    const { fileUrl } = useFiles();
    const { globals } = useAppConfig();
    const pageFilter = computed(() => {
      let finalPath;
      if (path === "/") {
        finalPath = "/";
      } else if (path.endsWith("/")) {
        finalPath = path.slice(0, -1);
      } else {
        finalPath = path;
      }
      return { permalink: { _eq: finalPath } };
    });
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItems("pages", {
            filter: unref(pageFilter),
            fields: [
              "*",
              {
                seo: ["*"],
                blocks: [
                  "id",
                  "collection",
                  "hide_block",
                  {
                    item: {
                      block_hero: [
                        "id",
                        "title",
                        "headline",
                        "content",
                        "image",
                        "image_position",
                        { button_group: ["*", { buttons: ["*", { page: ["permalink"], post: ["slug"] }] }] }
                      ],
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
                      block_cta: [
                        "id",
                        "title",
                        "headline",
                        "content",
                        {
                          button_group: [
                            "*",
                            {
                              buttons: ["*", { page: ["permalink"], post: ["slug"] }]
                            }
                          ]
                        }
                      ],
                      block_form: ["id", "title", "headline", { form: ["*"] }],
                      block_logocloud: [
                        "id",
                        "title",
                        "headline",
                        {
                          logos: [
                            "id",
                            {
                              directus_files_id: ["id", "title", "description"]
                            }
                          ]
                        }
                      ],
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
                          steps: [
                            "id",
                            "title",
                            "content",
                            "image",
                            {
                              button_group: [
                                "*",
                                {
                                  buttons: ["*", { page: ["permalink"], post: ["slug"] }]
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      block_columns: [
                        "id",
                        "title",
                        "headline",
                        {
                          rows: [
                            "title",
                            "headline",
                            "content",
                            "image_position",
                            { image: ["id", "title", "description"] },
                            {
                              button_group: [
                                "*",
                                {
                                  buttons: ["*", { page: ["permalink"], post: ["slug"] }]
                                }
                              ]
                            }
                          ]
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
            ],
            limit: 1
          })
        );
      },
      {
        transform: (data) => {
          return data[0];
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    if (!unref(page)) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    const metadata = computed(() => {
      var _a3, _b3, _c3, _d2, _e2;
      var _a2, _b2, _c2;
      const pageData = unref(page);
      return {
        title: (_b3 = (_a3 = (_a2 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _a2.title) != null ? _a3 : pageData == null ? void 0 : pageData.title) != null ? _b3 : void 0,
        description: (_d2 = (_c3 = (_b2 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _b2.meta_description) != null ? _c3 : pageData == null ? void 0 : pageData.summary) != null ? _d2 : void 0,
        image: (globals == null ? void 0 : globals.og_image) ? fileUrl(globals.og_image) : void 0,
        canonical: (_e2 = (_c2 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _c2.canonical_url) != null ? _e2 : url
      };
    });
    defineOgImageComponent("OgImageTemplate", {
      title: (_a = unref(metadata)) == null ? void 0 : _a.title,
      summary: (_b = unref(metadata)) == null ? void 0 : _b.description,
      imageUrl: (_c = unref(metadata)) == null ? void 0 : _c.image
    });
    useSchemaOrg([
      defineWebPage({
        name: (_d = unref(metadata)) == null ? void 0 : _d.title,
        description: (_e = unref(metadata)) == null ? void 0 : _e.description
      })
    ]);
    useHead({
      title: () => {
        var _a2;
        return (_a2 = unref(metadata)) == null ? void 0 : _a2.title;
      },
      link: [
        {
          rel: "canonical",
          href: () => {
            var _a2;
            return (_a2 = unref(metadata)) == null ? void 0 : _a2.canonical;
          }
        }
      ]
    });
    useHead({
      title: () => {
        var _a2;
        return (_a2 = unref(metadata)) == null ? void 0 : _a2.title;
      }
    });
    useServerHead({
      meta: [
        { name: "description", content: () => {
          var _a2;
          return (_a2 = unref(metadata)) == null ? void 0 : _a2.description;
        } },
        { property: "og:title", content: () => {
          var _a2;
          return (_a2 = unref(metadata)) == null ? void 0 : _a2.title;
        } },
        { property: "og:description", content: () => {
          var _a2;
          return (_a2 = unref(metadata)) == null ? void 0 : _a2.description;
        } }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtErrorBoundary = __nuxt_component_7;
      const _component_PageBuilder = _sfc_main$1;
      const _component_BlockContainer = _sfc_main$2;
      const _component_VAlert = _sfc_main$3;
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, _attrs, {
        error: withCtx(({ error }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BlockContainer, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VAlert, { type: "error" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(error)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(error), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VAlert, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(error), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BlockContainer, null, {
                default: withCtx(() => [
                  createVNode(_component_VAlert, { type: "error" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(error), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_PageBuilder, {
                page: unref(page)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_PageBuilder, {
                key: 0,
                page: unref(page)
              }, null, 8, ["page"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...permalink].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...permalink_-g9rMsOzY.mjs.map
