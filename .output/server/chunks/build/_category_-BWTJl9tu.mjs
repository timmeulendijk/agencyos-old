import { _ as _sfc_main$1 } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$2 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './GlobalSearch-DmC-IZ7s.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './PostCard-BhSpdgeU.mjs';
import { a as useRoute, b as useAppConfig, X as stripHTML, d as useSchemaOrg, e as defineWebPage, f as useHead, g as useServerHead, Y as deslugify, h as useFiles, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { d as defineOgImageComponent } from './defineOgImageComponent-CwZMxPWI.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import './Button-CwvMvtUt.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './UIcon-CFeTNZEP.mjs';
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
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './open-closed-Dy9w_Ur1.mjs';
import './Modal-B8yYdas2.mjs';
import './id-CsF31SPu.mjs';
import './dialog-BKBIAOLx.mjs';
import './portal-DCPL5wBV.mjs';
import './keyboard-puKMRDGD.mjs';
import './defineShortcuts-CsT8B_oy.mjs';
import './combobox-9r9zJfab.mjs';
import '@tanstack/vue-virtual';
import '@vueuse/integrations/useFuse';
import './Avatar-CM8WZfag.mjs';
import './Author-qysfQUeu.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './VText-D0MQff2t.mjs';
import './relations-DIdeUpYC.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[category]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a2, _b2;
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const { params, path } = useRoute();
    const { globals } = useAppConfig();
    const { fileUrl } = useFiles();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        const categoryPromise = useDirectus(
          readItems("categories", {
            filter: {
              slug: {
                _eq: params.category
              }
            },
            fields: [
              "title",
              "slug",
              "color",
              "headline",
              {
                seo: ["*"]
              }
            ],
            limit: 1
          })
        );
        const postsPromise = useDirectus(
          readItems("posts", {
            filter: {
              category: {
                slug: {
                  _eq: params.category
                }
              }
            },
            sort: ["date_published"],
            fields: [
              "title",
              "slug",
              "summary",
              "date_published",
              "image",
              "type",
              {
                category: ["title", "slug", "color"],
                author: ["image", "name", "job_title"]
              }
            ]
          })
        );
        return Promise.all([categoryPromise, postsPromise]);
      },
      {
        transform: ([category2, posts2]) => {
          return {
            category: category2[0],
            posts: posts2
          };
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const category = computed(() => {
      var _a3;
      var _a22;
      return (_a3 = (_a22 = unref(data)) == null ? void 0 : _a22.category) != null ? _a3 : {};
    });
    const posts = computed(() => {
      var _a3;
      var _a22;
      return (_a3 = (_a22 = unref(data)) == null ? void 0 : _a22.posts) != null ? _a3 : [];
    });
    const metadata = computed(() => {
      var _a3, _b3, _c2, _d2;
      var _a22, _b22;
      const pageData = unref(category);
      return {
        title: (_b3 = (_a3 = (_a22 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _a22.title) != null ? _a3 : pageData == null ? void 0 : pageData.title) != null ? _b3 : void 0,
        description: (_d2 = (_c2 = (_b22 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _b22.meta_description) != null ? _c2 : stripHTML(pageData == null ? void 0 : pageData.headline)) != null ? _d2 : void 0,
        image: (globals == null ? void 0 : globals.og_image) ? fileUrl(globals == null ? void 0 : globals.og_image) : void 0
      };
    });
    defineOgImageComponent("OgImageTemplate", {
      title: (_a = unref(metadata)) == null ? void 0 : _a.title,
      summary: (_b = unref(metadata)) == null ? void 0 : _b.description,
      imageUrl: (_c = unref(metadata)) == null ? void 0 : _c.image,
      badgeColor: (_a2 = (_d = unref(category)) == null ? void 0 : _d.color) != null ? _a2 : void 0,
      badgeLabel: (_b2 = (_e = unref(category)) == null ? void 0 : _e.title) != null ? _b2 : void 0
    });
    useSchemaOrg([
      defineWebPage({
        "@type": "CollectionPage",
        name: (_f = unref(metadata)) == null ? void 0 : _f.title,
        description: (_g = unref(metadata)) == null ? void 0 : _g.description
      })
    ]);
    useHead({
      title: () => {
        var _a22;
        return (_a22 = unref(metadata)) == null ? void 0 : _a22.title;
      }
    });
    useHead({
      title: () => {
        var _a22;
        return (_a22 = unref(metadata)) == null ? void 0 : _a22.title;
      }
    });
    useServerHead({
      meta: [
        { name: "description", content: () => {
          var _a22;
          return (_a22 = unref(metadata)) == null ? void 0 : _a22.description;
        } },
        { property: "og:title", content: () => {
          var _a22;
          return (_a22 = unref(metadata)) == null ? void 0 : _a22.title;
        } },
        { property: "og:description", content: () => {
          var _a22;
          return (_a22 = unref(metadata)) == null ? void 0 : _a22.description;
        } }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$1;
      const _component_TypographyTitle = _sfc_main$2;
      const _component_TypographyHeadline = _sfc_main$3;
      const _component_GlobalSearch = _sfc_main$4;
      const _component_Categories = _sfc_main$1$1;
      const _component_PostCard = _sfc_main$5;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="pb-6 border-b-2 border-gray-300 dark:border-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(category).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(category).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: unref(category).headline
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}></div></header><section class="relative items-center w-full py-12 space-y-12"${_scopeId}><div class="relative grid gap-12 pb-12 border-b-2 border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, {
              as: "p",
              class: "text-gray-700 dark:text-gray-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search`);
                } else {
                  return [
                    createTextVNode("Search")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GlobalSearch, {
              collections: ["posts"],
              class: "flex"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyTitle, {
              as: "p",
              class: "mt-8 text-gray-700 dark:text-gray-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Categories`);
                } else {
                  return [
                    createTextVNode("Categories")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Categories, null, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4 lg:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, { as: "p" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Items for Category: ${ssrInterpolate(("deslugify" in _ctx ? _ctx.deslugify : unref(deslugify))(unref(params).category))}`);
                } else {
                  return [
                    createTextVNode("Items for Category: " + toDisplayString(("deslugify" in _ctx ? _ctx.deslugify : unref(deslugify))(unref(params).category)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(posts), (post) => {
              _push2(ssrRenderComponent(_component_PostCard, {
                key: post.id,
                post,
                class: "col-span-2 pb-6 border-b border-gray-300 dark:border-gray-700"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></section>`);
          } else {
            return [
              createVNode("header", { class: "pb-6 border-b-2 border-gray-300 dark:border-gray-700" }, [
                createVNode(_component_TypographyTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(category).title), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_TypographyHeadline, {
                  content: unref(category).headline
                }, null, 8, ["content"]),
                createVNode("div")
              ]),
              createVNode("section", { class: "relative items-center w-full py-12 space-y-12" }, [
                createVNode("div", { class: "relative grid gap-12 pb-12 border-b-2 border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700" }, [
                  createVNode("div", null, [
                    createVNode(_component_TypographyTitle, {
                      as: "p",
                      class: "text-gray-700 dark:text-gray-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Search")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_GlobalSearch, {
                      collections: ["posts"],
                      class: "flex"
                    }),
                    createVNode(_component_TypographyTitle, {
                      as: "p",
                      class: "mt-8 text-gray-700 dark:text-gray-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Categories")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Categories)
                  ]),
                  createVNode("div", { class: "space-y-4 lg:col-span-3" }, [
                    createVNode(_component_TypographyTitle, { as: "p" }, {
                      default: withCtx(() => [
                        createTextVNode("Items for Category: " + toDisplayString(("deslugify" in _ctx ? _ctx.deslugify : unref(deslugify))(unref(params).category)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post) => {
                        return openBlock(), createBlock(_component_PostCard, {
                          key: post.id,
                          post,
                          class: "col-span-2 pb-6 border-b border-gray-300 dark:border-gray-700"
                        }, null, 8, ["post"]);
                      }), 128))
                    ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-BWTJl9tu.mjs.map
