import { _ as _sfc_main$1 } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$2 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './GlobalSearch-DmC-IZ7s.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './PostCard-BhSpdgeU.mjs';
import { a as useRoute, b as useAppConfig, X as stripHTML, d as useSchemaOrg, e as defineWebPage, f as useHead, g as useServerHead, h as useFiles, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems, readSingleton } from '@directus/sdk';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const { path } = useRoute();
    const { globals } = useAppConfig();
    const { fileUrl } = useFiles();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        const postPromise = useDirectus(
          readItems("posts", {
            sort: ["date_published"],
            fields: [
              "*",
              {
                category: ["title", "slug", "color"],
                author: ["name", "job_title", "image"]
              }
            ]
          })
        );
        const pagePromise = useDirectus(
          readSingleton("pages_blog", {
            fields: [
              "*",
              {
                seo: ["*"],
                featured_post: [
                  "id",
                  "slug",
                  "title",
                  "summary",
                  "type",
                  { image: ["id", "title", "description"], author: ["name", "image", "job_title"] }
                ]
              }
            ]
          })
        );
        return Promise.all([postPromise, pagePromise]);
      },
      {
        transform: ([posts2, page2]) => {
          return {
            posts: posts2,
            page: page2
          };
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const page = computed(() => {
      var _a2;
      return (_a2 = unref(data)) == null ? void 0 : _a2.page;
    });
    const posts = computed(() => {
      var _a2;
      const posts2 = (_a2 = unref(data)) == null ? void 0 : _a2.posts.filter((post) => {
        var _a3, _b2;
        return post.id !== ((_b2 = (_a3 = unref(page)) == null ? void 0 : _a3.featured_post) == null ? void 0 : _b2.id);
      });
      return posts2;
    });
    const metadata = computed(() => {
      var _a3, _b3, _c2, _d2;
      var _a2, _b2;
      const pageData = unref(page);
      return {
        title: (_b3 = (_a3 = (_a2 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _a2.title) != null ? _a3 : pageData == null ? void 0 : pageData.title) != null ? _b3 : void 0,
        description: (_d2 = (_c2 = (_b2 = pageData == null ? void 0 : pageData.seo) == null ? void 0 : _b2.meta_description) != null ? _c2 : stripHTML(pageData == null ? void 0 : pageData.headline)) != null ? _d2 : void 0,
        image: (globals == null ? void 0 : globals.og_image) ? fileUrl(globals == null ? void 0 : globals.og_image) : void 0
      };
    });
    defineOgImageComponent("OgImageTemplate", {
      title: (_a = unref(metadata)) == null ? void 0 : _a.title,
      summary: (_b = unref(metadata)) == null ? void 0 : _b.description,
      imageUrl: (_c = unref(metadata)) == null ? void 0 : _c.image
    });
    useSchemaOrg([
      defineWebPage({
        "@type": "CollectionPage",
        name: (_d = unref(metadata)) == null ? void 0 : _d.title,
        description: (_e = unref(metadata)) == null ? void 0 : _e.description
      })
    ]);
    useHead({
      title: () => {
        var _a2;
        return (_a2 = unref(metadata)) == null ? void 0 : _a2.title;
      }
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
      const _component_BlockContainer = _sfc_main$1;
      const _component_TypographyTitle = _sfc_main$2;
      const _component_TypographyHeadline = _sfc_main$3;
      const _component_GlobalSearch = _sfc_main$4;
      const _component_Categories = _sfc_main$1$1;
      const _component_PostCard = _sfc_main$5;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<header class="pb-6 border-b border-gray-300 dark:border-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a3 = unref(page)) == null ? void 0 : _a3.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b3 = unref(page)) == null ? void 0 : _b3.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: (_a2 = unref(page)) == null ? void 0 : _a2.headline
            }, null, _parent2, _scopeId));
            _push2(`</header><section class="relative w-full py-12 space-y-12"${_scopeId}><div class="relative grid w-full gap-12 pb-12 border-b-2 border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, { class: "text-gray-700 dark:text-gray-400" }, {
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
            _push2(ssrRenderComponent(_component_TypographyTitle, { class: "mt-8 text-gray-700 dark:text-gray-400" }, {
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
            _push2(ssrRenderComponent(_component_Categories, { class: "" }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4 lg:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Featured Article`);
                } else {
                  return [
                    createTextVNode("Featured Article")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PostCard, {
              post: (_b2 = unref(page)) == null ? void 0 : _b2.featured_post,
              direction: "horizontal"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Latest &amp; Greatest`);
                } else {
                  return [
                    createTextVNode("Latest & Greatest")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative grid gap-8 md:gap-12 md:grid-cols-3 lg:grid-cols-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(posts), (post, postIdx) => {
              _push2(ssrRenderComponent(_component_PostCard, {
                key: post.id,
                post,
                class: [
                  "border-b border-gray-300 pb-6 dark:border-gray-700",
                  // Make the first two posts span two columns
                  postIdx < 2 ? "md:col-span-3" : "md:col-span-2"
                ]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></section>`);
          } else {
            return [
              createVNode("header", { class: "pb-6 border-b border-gray-300 dark:border-gray-700" }, [
                createVNode(_component_TypographyTitle, null, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createTextVNode(toDisplayString((_a3 = unref(page)) == null ? void 0 : _a3.title), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_TypographyHeadline, {
                  content: (_c2 = unref(page)) == null ? void 0 : _c2.headline
                }, null, 8, ["content"])
              ]),
              createVNode("section", { class: "relative w-full py-12 space-y-12" }, [
                createVNode("div", { class: "relative grid w-full gap-12 pb-12 border-b-2 border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700" }, [
                  createVNode("div", null, [
                    createVNode(_component_TypographyTitle, { class: "text-gray-700 dark:text-gray-400" }, {
                      default: withCtx(() => [
                        createTextVNode("Search")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_GlobalSearch, {
                      collections: ["posts"],
                      class: "flex"
                    }),
                    createVNode(_component_TypographyTitle, { class: "mt-8 text-gray-700 dark:text-gray-400" }, {
                      default: withCtx(() => [
                        createTextVNode("Categories")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Categories, { class: "" })
                  ]),
                  createVNode("div", { class: "space-y-4 lg:col-span-3" }, [
                    createVNode(_component_TypographyTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Featured Article")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PostCard, {
                      post: (_d2 = unref(page)) == null ? void 0 : _d2.featured_post,
                      direction: "horizontal"
                    }, null, 8, ["post"])
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(_component_TypographyTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Latest & Greatest")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative grid gap-8 md:gap-12 md:grid-cols-3 lg:grid-cols-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post, postIdx) => {
                      return openBlock(), createBlock(_component_PostCard, {
                        key: post.id,
                        post,
                        class: [
                          "border-b border-gray-300 pb-6 dark:border-gray-700",
                          // Make the first two posts span two columns
                          postIdx < 2 ? "md:col-span-3" : "md:col-span-2"
                        ]
                      }, null, 8, ["post", "class"]);
                    }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DJ7ohgK-.mjs.map
