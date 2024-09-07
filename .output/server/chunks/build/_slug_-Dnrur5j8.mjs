import { _ as _sfc_main$4 } from './BlockContainer-DswPIote.mjs';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Author-qysfQUeu.mjs';
import { _ as _sfc_main$6 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$7 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$8 } from './Prose-C5ZYWjWj.mjs';
import { a as useRoute, d as useSchemaOrg, W as defineArticle, f as useHead, g as useServerHead, V as calculateReadTime, h as useFiles, i as useAsyncData } from './server.mjs';
import { d as getRelativeTime } from './time-C5trUN3I.mjs';
import { useSSRContext, defineComponent, computed, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _sfc_main$9, _ as _sfc_main$1$2 } from './VGallery-BIzCeV7M.mjs';
import { _ as _sfc_main$a } from './Title-0MDj5cmN.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { d as defineOgImageComponent } from './defineOgImageComponent-CwZMxPWI.mjs';
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
import './embed-BNjS_SEV.mjs';
import './Button-CwvMvtUt.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './Kbd-CrBwD9Ot.mjs';
import './open-closed-Dy9w_Ur1.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PostBlog",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlockContainer = _sfc_main$4;
      const _component_NuxtImg = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Category = _sfc_main$1$1;
      const _component_Author = _sfc_main$5;
      const _component_UIcon = _sfc_main$6;
      const _component_TypographyHeadline = _sfc_main$7;
      const _component_TypographyProse = _sfc_main$8;
      _push(ssrRenderComponent(_component_BlockContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<header${_scopeId}><div class="md:flex"${_scopeId}><div class="relative w-full max-w-3xl"${_scopeId}><div class="relative w-full mx-auto rounded-card overflow-hidden bg-cover h-[300px] md:h-[450px] dark:outline-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: (_a = _ctx.page) == null ? void 0 : _a.image,
              class: "object-cover w-full h-full saturate-0 dark:brightness-90",
              alt: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-gray-100 to-gray-900"${_scopeId}></div></div></div><div class="hidden p-8 mt-12 space-y-6 md:block"${_scopeId}>`);
            if ((_b = _ctx.page) == null ? void 0 : _b.category) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                href: `/posts/categories/${(_c = _ctx.page) == null ? void 0 : _c.category.slug}`,
                class: "inline-block hover:opacity-90"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Category, {
                      size: "lg",
                      color: (_a2 = _ctx.page) == null ? void 0 : _a2.category.color
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b3;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a3 = _ctx.page) == null ? void 0 : _a3.category.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b3 = _ctx.page) == null ? void 0 : _b3.category.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Category, {
                        size: "lg",
                        color: (_b2 = _ctx.page) == null ? void 0 : _b2.category.color
                      }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createTextVNode(toDisplayString((_a3 = _ctx.page) == null ? void 0 : _a3.category.title), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["color"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_d = _ctx.page) == null ? void 0 : _d.author) {
              _push2(ssrRenderComponent(_component_Author, {
                author: _ctx.page.author
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-2"${_scopeId}><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:timer-outline-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_e = _ctx.page) == null ? void 0 : _e.content))}</p><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:calendar-today-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_f = _ctx.page) == null ? void 0 : _f.date_published))}</p></div></div></div><div class="relative w-full max-w-4xl p-2 px-8 py-8 mx-auto -mt-12 overflow-hidden text-gray-900 border md:-mt-32 rounded-card border-primary md:px-16 md:py-12"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary/50"${_scopeId}></div><div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10"${_scopeId}></div><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: (_g = _ctx.page) == null ? void 0 : _g.title,
              as: "h1",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              content: (_h = _ctx.page) == null ? void 0 : _h.summary,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="block px-6 mt-6 md:hidden"${_scopeId}>`);
            if ((_i = _ctx.page) == null ? void 0 : _i.author) {
              _push2(ssrRenderComponent(_component_Author, {
                author: _ctx.page.author
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-between pb-4 mt-4 border-b dark:border-gray-700"${_scopeId}><div class="space-y-2"${_scopeId}><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:timer-outline-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_j = _ctx.page) == null ? void 0 : _j.content))}</p><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:calendar-today-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_k = _ctx.page) == null ? void 0 : _k.date_published))}</p></div>`);
            if ((_l = _ctx.page) == null ? void 0 : _l.category) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                href: `/posts/categories/${(_m = _ctx.page) == null ? void 0 : _m.category.slug}`,
                class: "inline-block hover:opacity-90"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Category, {
                      size: "lg",
                      color: (_a2 = _ctx.page) == null ? void 0 : _a2.category.color
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b3;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a3 = _ctx.page) == null ? void 0 : _a3.category.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b3 = _ctx.page) == null ? void 0 : _b3.category.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Category, {
                        size: "lg",
                        color: (_b2 = _ctx.page) == null ? void 0 : _b2.category.color
                      }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createTextVNode(toDisplayString((_a3 = _ctx.page) == null ? void 0 : _a3.category.title), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["color"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></header><main class="w-full max-w-4xl mx-auto mt-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyProse, {
              ref: "article",
              content: (_n = _ctx.page) == null ? void 0 : _n.content
            }, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("header", null, [
                createVNode("div", { class: "md:flex" }, [
                  createVNode("div", { class: "relative w-full max-w-3xl" }, [
                    createVNode("div", { class: "relative w-full mx-auto rounded-card overflow-hidden bg-cover h-[300px] md:h-[450px] dark:outline-gray-800" }, [
                      createVNode(_component_NuxtImg, {
                        src: (_o = _ctx.page) == null ? void 0 : _o.image,
                        class: "object-cover w-full h-full saturate-0 dark:brightness-90",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "absolute inset-0 mix-blend-multiply bg-gradient-to-b from-gray-100 to-gray-900" })
                    ])
                  ]),
                  createVNode("div", { class: "hidden p-8 mt-12 space-y-6 md:block" }, [
                    ((_p = _ctx.page) == null ? void 0 : _p.category) ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      href: `/posts/categories/${(_q = _ctx.page) == null ? void 0 : _q.category.slug}`,
                      class: "inline-block hover:opacity-90"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(_component_Category, {
                            size: "lg",
                            color: (_a2 = _ctx.page) == null ? void 0 : _a2.category.color
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = _ctx.page) == null ? void 0 : _a3.category.title), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ];
                      }),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    ((_r = _ctx.page) == null ? void 0 : _r.author) ? (openBlock(), createBlock(_component_Author, {
                      key: 1,
                      author: _ctx.page.author
                    }, null, 8, ["author"])) : createCommentVNode("", true),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                        createVNode(_component_UIcon, {
                          name: "material-symbols:timer-outline-rounded",
                          class: "w-6 h-6 mr-2"
                        }),
                        createTextVNode(" " + toDisplayString(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_s = _ctx.page) == null ? void 0 : _s.content)), 1)
                      ]),
                      createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                        createVNode(_component_UIcon, {
                          name: "material-symbols:calendar-today-rounded",
                          class: "w-6 h-6 mr-2"
                        }),
                        createTextVNode(" " + toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_t = _ctx.page) == null ? void 0 : _t.date_published)), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative w-full max-w-4xl p-2 px-8 py-8 mx-auto -mt-12 overflow-hidden text-gray-900 border md:-mt-32 rounded-card border-primary md:px-16 md:py-12" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary/50" }),
                  createVNode("div", { class: "absolute inset-0 opacity-50 grain-bg dark:opacity-10" }),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_TypographyHeadline, {
                      content: (_u = _ctx.page) == null ? void 0 : _u.title,
                      as: "h1",
                      size: "lg"
                    }, null, 8, ["content"]),
                    createVNode(_component_TypographyProse, {
                      content: (_v = _ctx.page) == null ? void 0 : _v.summary,
                      class: "mt-2"
                    }, null, 8, ["content"])
                  ])
                ]),
                createVNode("div", { class: "block px-6 mt-6 md:hidden" }, [
                  ((_w = _ctx.page) == null ? void 0 : _w.author) ? (openBlock(), createBlock(_component_Author, {
                    key: 0,
                    author: _ctx.page.author
                  }, null, 8, ["author"])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex justify-between pb-4 mt-4 border-b dark:border-gray-700" }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                        createVNode(_component_UIcon, {
                          name: "material-symbols:timer-outline-rounded",
                          class: "w-6 h-6 mr-2"
                        }),
                        createTextVNode(" " + toDisplayString(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_x = _ctx.page) == null ? void 0 : _x.content)), 1)
                      ]),
                      createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                        createVNode(_component_UIcon, {
                          name: "material-symbols:calendar-today-rounded",
                          class: "w-6 h-6 mr-2"
                        }),
                        createTextVNode(" " + toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_y = _ctx.page) == null ? void 0 : _y.date_published)), 1)
                      ])
                    ]),
                    ((_z = _ctx.page) == null ? void 0 : _z.category) ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      href: `/posts/categories/${(_A = _ctx.page) == null ? void 0 : _A.category.slug}`,
                      class: "inline-block hover:opacity-90"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(_component_Category, {
                            size: "lg",
                            color: (_a2 = _ctx.page) == null ? void 0 : _a2.category.color
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = _ctx.page) == null ? void 0 : _a3.category.title), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ];
                      }),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("main", { class: "w-full max-w-4xl mx-auto mt-12" }, [
                createVNode(_component_TypographyProse, {
                  ref: "article",
                  content: (_B = _ctx.page) == null ? void 0 : _B.content
                }, null, 8, ["content"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post/PostBlog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostProject",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const props = __props;
    const galleryItems = computed(() => {
      var _a;
      if (!props.page)
        return;
      return (_a = unref(props.page)) == null ? void 0 : _a.gallery.map((item) => {
        return item.directus_files_id;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtImg = __nuxt_component_4;
      const _component_TypographyHeadline = _sfc_main$7;
      const _component_TypographyProse = _sfc_main$8;
      const _component_BlockContainer = _sfc_main$4;
      const _component_VGallery = _sfc_main$9;
      const _component_TypographyTitle = _sfc_main$a;
      const _component_UBadge = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><header class="relative h-[400px] overflow-hidden flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "absolute inset-0 object-cover w-full h-full",
        src: (_a = _ctx.page) == null ? void 0 : _a.image
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gray-900 opacity-75"></div><div class="relative max-w-3xl p-8 mx-auto overflow-hidden bg-gray-900 bg-opacity-50 rounded-card">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: (_b = _ctx.page) == null ? void 0 : _b.title,
        class: "text-white",
        size: "xl"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TypographyProse, {
        content: (_c = _ctx.page) == null ? void 0 : _c.summary,
        class: "text-white mt-4"
      }, null, _parent));
      _push(`</div></header>`);
      _push(ssrRenderComponent(_component_BlockContainer, { class: "md:flex gap-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<main class="p-4"${_scopeId}><article class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyProse, {
              ref: "article",
              content: (_a2 = _ctx.page) == null ? void 0 : _a2.content
            }, null, _parent2, _scopeId));
            _push2(`</article>`);
            if (unref(galleryItems) && unref(galleryItems).length > 0) {
              _push2(ssrRenderComponent(_component_VGallery, { items: unref(galleryItems) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</main><aside class="md:w-[300px] flex-shrink-0"${_scopeId}><div class="p-4 space-y-8 border-2 dark:border-gray-700 rounded-card"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Client`);
                } else {
                  return [
                    createTextVNode("Client")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="font-bold dark:text-white"${_scopeId}>${ssrInterpolate((_b2 = _ctx.page) == null ? void 0 : _b2.client)}</p></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Built With`);
                } else {
                  return [
                    createTextVNode("Built With")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList((_c2 = _ctx.page) == null ? void 0 : _c2.built_with, (item, itemIdx) => {
              _push2(`<div class="mt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                size: "lg",
                color: "black"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cost`);
                } else {
                  return [
                    createTextVNode("Cost")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="font-bold dark:text-white"${_scopeId}>${ssrInterpolate((_d = _ctx.page) == null ? void 0 : _d.cost)}</p></div></div></aside>`);
          } else {
            return [
              createVNode("main", { class: "p-4" }, [
                createVNode("article", { class: "w-full" }, [
                  createVNode(_component_TypographyProse, {
                    ref: "article",
                    content: (_e = _ctx.page) == null ? void 0 : _e.content
                  }, null, 8, ["content"])
                ]),
                unref(galleryItems) && unref(galleryItems).length > 0 ? (openBlock(), createBlock(_component_VGallery, {
                  key: 0,
                  items: unref(galleryItems)
                }, null, 8, ["items"])) : createCommentVNode("", true)
              ]),
              createVNode("aside", { class: "md:w-[300px] flex-shrink-0" }, [
                createVNode("div", { class: "p-4 space-y-8 border-2 dark:border-gray-700 rounded-card" }, [
                  createVNode("div", null, [
                    createVNode(_component_TypographyTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Client")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "font-bold dark:text-white" }, toDisplayString((_f = _ctx.page) == null ? void 0 : _f.client), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_TypographyTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Built With")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList((_g = _ctx.page) == null ? void 0 : _g.built_with, (item, itemIdx) => {
                      return openBlock(), createBlock("div", {
                        key: itemIdx,
                        class: "mt-2"
                      }, [
                        createVNode(_component_UBadge, {
                          size: "lg",
                          color: "black"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_TypographyTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Cost")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "font-bold dark:text-white" }, toDisplayString((_h = _ctx.page) == null ? void 0 : _h.cost), 1)
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post/PostProject.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostVideo",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_VVideo = _sfc_main$1$2;
      const _component_BlockContainer = _sfc_main$4;
      const _component_TypographyHeadline = _sfc_main$7;
      const _component_TypographyProse = _sfc_main$8;
      const _component_Author = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Category = _sfc_main$1$1;
      const _component_UIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="relative flex items-center justify-center w-full overflow-hidden bg-gray-900 dark:bg-gray-900 border-t-2 border-b-2 border-primary/50">`);
      _push(ssrRenderComponent(_component_VVideo, {
        url: (_a = _ctx.page) == null ? void 0 : _a.video_url,
        class: "max-w-5xl"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BlockContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<main class="flex flex-col gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyHeadline, {
              content: (_a2 = _ctx.page) == null ? void 0 : _a2.title,
              as: "h1",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TypographyProse, {
              content: (_b = _ctx.page) == null ? void 0 : _b.summary
            }, null, _parent2, _scopeId));
            _push2(`<div class="pb-4 space-y-4 border-b md:space-y-0 md:flex md:justify-between md:items-center dark:border-gray-700"${_scopeId}>`);
            if ((_c = _ctx.page) == null ? void 0 : _c.author) {
              _push2(ssrRenderComponent(_component_Author, {
                author: (_d = _ctx.page) == null ? void 0 : _d.author
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_e = _ctx.page) == null ? void 0 : _e.category) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                href: `/posts/categories/${(_f = _ctx.page) == null ? void 0 : _f.category.slug}`,
                class: "inline-block hover:opacity-90"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Category, {
                      size: "lg",
                      color: (_a3 = _ctx.page) == null ? void 0 : _a3.category.color
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a4 = _ctx.page) == null ? void 0 : _a4.category.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b3 = _ctx.page) == null ? void 0 : _b3.category.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Category, {
                        size: "lg",
                        color: (_b2 = _ctx.page) == null ? void 0 : _b2.category.color
                      }, {
                        default: withCtx(() => {
                          var _a4;
                          return [
                            createTextVNode(toDisplayString((_a4 = _ctx.page) == null ? void 0 : _a4.category.title), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["color"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="inline-flex gap-4"${_scopeId}><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:timer-outline-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_g = _ctx.page) == null ? void 0 : _g.content))}</p><p class="flex text-gray-500 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "material-symbols:calendar-today-rounded",
              class: "w-6 h-6 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_h = _ctx.page) == null ? void 0 : _h.date_published))}</p></div></div><article${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TypographyProse, {
              ref: "article",
              content: (_i = _ctx.page) == null ? void 0 : _i.content
            }, null, _parent2, _scopeId));
            _push2(`</article></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-4" }, [
                createVNode(_component_TypographyHeadline, {
                  content: (_j = _ctx.page) == null ? void 0 : _j.title,
                  as: "h1",
                  size: "lg"
                }, null, 8, ["content"]),
                createVNode(_component_TypographyProse, {
                  content: (_k = _ctx.page) == null ? void 0 : _k.summary
                }, null, 8, ["content"]),
                createVNode("div", { class: "pb-4 space-y-4 border-b md:space-y-0 md:flex md:justify-between md:items-center dark:border-gray-700" }, [
                  ((_l = _ctx.page) == null ? void 0 : _l.author) ? (openBlock(), createBlock(_component_Author, {
                    key: 0,
                    author: (_m = _ctx.page) == null ? void 0 : _m.author
                  }, null, 8, ["author"])) : createCommentVNode("", true),
                  ((_n = _ctx.page) == null ? void 0 : _n.category) ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 1,
                    href: `/posts/categories/${(_o = _ctx.page) == null ? void 0 : _o.category.slug}`,
                    class: "inline-block hover:opacity-90"
                  }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        createVNode(_component_Category, {
                          size: "lg",
                          color: (_a3 = _ctx.page) == null ? void 0 : _a3.category.color
                        }, {
                          default: withCtx(() => {
                            var _a4;
                            return [
                              createTextVNode(toDisplayString((_a4 = _ctx.page) == null ? void 0 : _a4.category.title), 1)
                            ];
                          }),
                          _: 1
                        }, 8, ["color"])
                      ];
                    }),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode("div", { class: "inline-flex gap-4" }, [
                    createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                      createVNode(_component_UIcon, {
                        name: "material-symbols:timer-outline-rounded",
                        class: "w-6 h-6 mr-2"
                      }),
                      createTextVNode(" " + toDisplayString(("calculateReadTime" in _ctx ? _ctx.calculateReadTime : unref(calculateReadTime))((_p = _ctx.page) == null ? void 0 : _p.content)), 1)
                    ]),
                    createVNode("p", { class: "flex text-gray-500 dark:text-gray-300" }, [
                      createVNode(_component_UIcon, {
                        name: "material-symbols:calendar-today-rounded",
                        class: "w-6 h-6 mr-2"
                      }),
                      createTextVNode(" " + toDisplayString(("getRelativeTime" in _ctx ? _ctx.getRelativeTime : unref(getRelativeTime))((_q = _ctx.page) == null ? void 0 : _q.date_published)), 1)
                    ])
                  ])
                ]),
                createVNode("article", null, [
                  createVNode(_component_TypographyProse, {
                    ref: "article",
                    content: (_r = _ctx.page) == null ? void 0 : _r.content
                  }, null, 8, ["content"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post/PostVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a2, _b2, _c2;
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    let __temp, __restore;
    const { fileUrl } = useFiles();
    const { params, path } = useRoute();
    const componentMap = {
      blog: _sfc_main$3,
      project: _sfc_main$2,
      video: _sfc_main$1
    };
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItems("posts", {
            // @ts-ignore
            filter: { slug: { _eq: params.slug } },
            limit: 1,
            fields: [
              "title",
              "summary",
              "slug",
              "content",
              "date_published",
              "image",
              "type",
              "client",
              "cost",
              "built_with",
              "video_url",
              {
                gallery: [{ directus_files_id: ["id", "title", "description"] }],
                author: ["name", "job_title", "image"],
                category: ["title", "slug", "color"],
                seo: ["title", "meta_description"]
              }
            ]
          })
        );
      },
      {
        transform: (data) => data[0]
      }
    )), __temp = await __temp, __restore(), __temp);
    const metadata = computed(() => {
      var _a3, _b3, _c3, _d2, _e2, _f2;
      const pageData = unref(page);
      const seo = pageData == null ? void 0 : pageData.seo;
      const author = pageData == null ? void 0 : pageData.author;
      return {
        title: (_b3 = (_a3 = seo == null ? void 0 : seo.title) != null ? _a3 : pageData == null ? void 0 : pageData.title) != null ? _b3 : void 0,
        description: (_d2 = (_c3 = seo == null ? void 0 : seo.meta_description) != null ? _c3 : pageData == null ? void 0 : pageData.summary) != null ? _d2 : void 0,
        image: (pageData == null ? void 0 : pageData.image) ? fileUrl(pageData == null ? void 0 : pageData.image) : void 0,
        authorImage: (author == null ? void 0 : author.image) ? fileUrl(author.image) : void 0,
        authorName: (_e2 = author == null ? void 0 : author.name) != null ? _e2 : void 0,
        category: (_f2 = pageData == null ? void 0 : pageData.category) != null ? _f2 : void 0
      };
    });
    defineOgImageComponent("OgImageTemplate", {
      title: (_a = unref(metadata)) == null ? void 0 : _a.title,
      summary: (_b = unref(metadata)) == null ? void 0 : _b.description,
      imageUrl: (_c = unref(metadata)) == null ? void 0 : _c.image,
      authorName: (_d = unref(metadata)) == null ? void 0 : _d.authorName,
      authorImage: (_e = unref(metadata)) == null ? void 0 : _e.authorImage,
      badgeColor: (_a2 = (_g = (_f = unref(metadata)) == null ? void 0 : _f.category) == null ? void 0 : _g.color) != null ? _a2 : void 0,
      badgeLabel: (_b2 = (_i = (_h = unref(metadata)) == null ? void 0 : _h.category) == null ? void 0 : _i.title) != null ? _b2 : void 0
    });
    useSchemaOrg([
      defineArticle({
        headline: (_j = unref(metadata)) == null ? void 0 : _j.title,
        description: (_k = unref(metadata)) == null ? void 0 : _k.description,
        image: (_l = unref(metadata)) == null ? void 0 : _l.image,
        datePublished: (_c2 = (_m = unref(page)) == null ? void 0 : _m.date_published) != null ? _c2 : void 0,
        author: [
          {
            name: (_n = unref(metadata)) == null ? void 0 : _n.authorName,
            image: (_o = unref(metadata)) == null ? void 0 : _o.authorImage
          }
        ]
      })
    ]);
    useHead({
      title: (_p = unref(metadata)) == null ? void 0 : _p.title
    });
    useHead({
      title: (_q = unref(metadata)) == null ? void 0 : _q.title
    });
    useServerHead({
      meta: [
        { name: "description", content: (_r = unref(metadata)) == null ? void 0 : _r.description },
        { property: "og:title", content: (_s = unref(metadata)) == null ? void 0 : _s.title },
        { property: "og:description", content: (_t = unref(metadata)) == null ? void 0 : _t.description }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(page) && unref(page).type) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(componentMap[unref(page).type]), { page: unref(page) }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Dnrur5j8.mjs.map
