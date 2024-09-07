import { _ as _sfc_main$1 } from './BlockContainer-DswPIote.mjs';
import { _ as _sfc_main$2 } from './Title-0MDj5cmN.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { b as useAppConfig, X as stripHTML, d as useSchemaOrg, e as defineWebPage, f as useHead, g as useServerHead, h as useFiles, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems, readSingleton } from '@directus/sdk';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { d as defineOgImageComponent } from './defineOgImageComponent-CwZMxPWI.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import 'tailwind-merge';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    let __temp, __restore;
    const { globals } = useAppConfig();
    const { fileUrl } = useFiles();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `projects-index`,
      () => {
        const postPromise = useDirectus(
          readItems("posts", {
            filter: {
              type: { _eq: "project" }
            }
          })
        );
        const pagePromise = useDirectus(
          readSingleton("pages_projects", {
            fields: ["*", { seo: ["*"] }]
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
    const posts = computed(() => {
      var _a2;
      return (_a2 = unref(data)) == null ? void 0 : _a2.posts;
    });
    const page = computed(() => {
      var _a2;
      return (_a2 = unref(data)) == null ? void 0 : _a2.page;
    });
    const metadata = computed(() => {
      var _a2, _b2, _c2;
      const pageData = unref(page);
      const seo = pageData == null ? void 0 : pageData.seo;
      return {
        title: (_b2 = (_a2 = seo == null ? void 0 : seo.title) != null ? _a2 : pageData == null ? void 0 : pageData.title) != null ? _b2 : void 0,
        description: ((_c2 = seo == null ? void 0 : seo.meta_description) != null ? _c2 : pageData.headline) ? stripHTML(pageData == null ? void 0 : pageData.headline) : void 0,
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
      title: (_f = unref(metadata)) == null ? void 0 : _f.title
    });
    useHead({
      title: (_g = unref(metadata)) == null ? void 0 : _g.title
    });
    useServerHead({
      meta: [
        { name: "description", content: (_h = unref(metadata)) == null ? void 0 : _h.description },
        { property: "og:title", content: (_i = unref(metadata)) == null ? void 0 : _i.title },
        { property: "og:description", content: (_j = unref(metadata)) == null ? void 0 : _j.description }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$1;
      const _component_TypographyTitle = _sfc_main$2;
      const _component_TypographyHeadline = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_4;
      const _component_UBadge = __nuxt_component_5;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<header class="pb-6 border-b-2 dark:border-gray-700"${_scopeId}>`);
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
            if (unref(page).headline) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: (_a2 = unref(page)) == null ? void 0 : _a2.headline
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</header><section class="relative items-center w-full py-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Latest Projects`);
                } else {
                  return [
                    createTextVNode("Latest Projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid gap-6 mt-4 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(posts), (project) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: project.id,
                href: `/posts/${project.slug}`,
                class: `relative block w-full mb-6 overflow-hidden transition duration-300 border rounded-card dark:border-gray-700`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative h-56 overflow-hidden rounded-card group"${_scopeId2}>`);
                    if (project.image) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        src: project.image,
                        class: "object-cover transition duration-300 group-hover:scale-110"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75"${_scopeId2}><div class="p-8"${_scopeId2}>`);
                    if (project == null ? void 0 : project.client) {
                      _push3(ssrRenderComponent(_component_TypographyTitle, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(project == null ? void 0 : project.client)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(project == null ? void 0 : project.client), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (project == null ? void 0 : project.title) {
                      _push3(ssrRenderComponent(_component_TypographyHeadline, {
                        content: project.title
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (project == null ? void 0 : project.built_with) {
                      _push3(`<div class="flex flex-wrap gap-2 mt-2"${_scopeId2}><!--[-->`);
                      ssrRenderList(project == null ? void 0 : project.built_with, (item, itemIdx) => {
                        _push3(ssrRenderComponent(_component_UBadge, {
                          key: itemIdx,
                          size: "md",
                          color: "black"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative h-56 overflow-hidden rounded-card group" }, [
                        project.image ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 0,
                          src: project.image,
                          class: "object-cover transition duration-300 group-hover:scale-110"
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        createVNode("div", { class: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75" }, [
                          createVNode("div", { class: "p-8" }, [
                            (project == null ? void 0 : project.client) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(project == null ? void 0 : project.client), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            (project == null ? void 0 : project.title) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                              key: 1,
                              content: project.title
                            }, null, 8, ["content"])) : createCommentVNode("", true),
                            (project == null ? void 0 : project.built_with) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "flex flex-wrap gap-2 mt-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(project == null ? void 0 : project.built_with, (item, itemIdx) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: itemIdx,
                                  size: "md",
                                  color: "black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></section>`);
          } else {
            return [
              createVNode("header", { class: "pb-6 border-b-2 dark:border-gray-700" }, [
                createVNode(_component_TypographyTitle, null, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createTextVNode(toDisplayString((_a3 = unref(page)) == null ? void 0 : _a3.title), 1)
                    ];
                  }),
                  _: 1
                }),
                unref(page).headline ? (openBlock(), createBlock(_component_TypographyHeadline, {
                  key: 0,
                  content: (_b2 = unref(page)) == null ? void 0 : _b2.headline
                }, null, 8, ["content"])) : createCommentVNode("", true)
              ]),
              createVNode("section", { class: "relative items-center w-full py-12" }, [
                createVNode(_component_TypographyTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Latest Projects")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid gap-6 mt-4 md:grid-cols-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (project) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: project.id,
                      href: `/posts/${project.slug}`,
                      class: `relative block w-full mb-6 overflow-hidden transition duration-300 border rounded-card dark:border-gray-700`
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative h-56 overflow-hidden rounded-card group" }, [
                          project.image ? (openBlock(), createBlock(_component_NuxtImg, {
                            key: 0,
                            src: project.image,
                            class: "object-cover transition duration-300 group-hover:scale-110"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("div", { class: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75" }, [
                            createVNode("div", { class: "p-8" }, [
                              (project == null ? void 0 : project.client) ? (openBlock(), createBlock(_component_TypographyTitle, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(project == null ? void 0 : project.client), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              (project == null ? void 0 : project.title) ? (openBlock(), createBlock(_component_TypographyHeadline, {
                                key: 1,
                                content: project.title
                              }, null, 8, ["content"])) : createCommentVNode("", true),
                              (project == null ? void 0 : project.built_with) ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex flex-wrap gap-2 mt-2"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(project == null ? void 0 : project.built_with, (item, itemIdx) => {
                                  return openBlock(), createBlock(_component_UBadge, {
                                    key: itemIdx,
                                    size: "md",
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-D2Emg2h8.mjs.map
