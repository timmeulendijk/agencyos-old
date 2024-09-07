import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Author-qysfQUeu.mjs';
import { i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, computed, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { _ as _sfc_main$2 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$3 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$4 } from './VText-D0MQff2t.mjs';
import { s as safeRelationId, a as safeRelation } from './relations-DIdeUpYC.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Categories",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("categories", () => {
      return useDirectus(
        readItems("categories", {
          fields: ["*"]
        })
      );
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Category = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 space-y-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: `/posts/categories/${category.slug}`,
          class: "dark:text-gray-200 hover:opacity-80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Category, {
                color: category.color,
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(category.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Category, {
                  color: category.color,
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(category.title), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Categories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostCard",
  __ssrInlineRender: true,
  props: {
    post: {},
    direction: { default: "vertical" }
  },
  setup(__props) {
    const props = __props;
    const iconMap = {
      blog: "material-symbols:article-outline-rounded",
      video: "material-symbols:video-library-outline-rounded",
      project: "material-symbols:trophy-outline-rounded"
    };
    const postCategory = computed(() => {
      var _a;
      return (_a = unref(props.post.category)) != null ? _a : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_4;
      const _component_Category = _sfc_main$1$1;
      const _component_UIcon = _sfc_main$2;
      const _component_TypographyHeadline = _sfc_main$3;
      const _component_VText = _sfc_main$4;
      const _component_Author = _sfc_main$5;
      _push(`<figure${ssrRenderAttrs(mergeProps({
        class: [
          {
            "flex-col": _ctx.direction === "vertical",
            "flex-col md:flex-row": _ctx.direction === "horizontal"
          },
          "flex group gap-6"
        ]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: [
          {
            "w-full h-56": _ctx.direction === "vertical",
            "w-full h-56 md:w-72 md:h-72": _ctx.direction === "horizontal"
          },
          "relative block overflow-hidden border dark:border-gray-700 group rounded-card flex-shrink-0"
        ],
        href: `/posts/${_ctx.post.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f;
          var _a, _b;
          if (_push2) {
            if (_ctx.post.image) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                class: "relative flex-shrink-0 object-cover w-full h-full transition duration-300 saturate-0 group-hover:opacity-75",
                src: ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(_ctx.post.image),
                alt: (_a2 = (_a = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(_ctx.post.image)) == null ? void 0 : _a.alt) != null ? _a2 : ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-transparent via-transparent to-primary group-hover:opacity-100"${_scopeId}></div>`);
            if (unref(postCategory)) {
              _push2(ssrRenderComponent(_component_Category, {
                size: "lg",
                color: unref(postCategory).color,
                class: "absolute bottom-0 left-0 mb-4 ml-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(postCategory).title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(postCategory).title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.post.type) {
              _push2(`<div class="absolute top-0 right-0 p-1.5 mt-4 mr-4 rounded-button bg-gray-900/50"${_scopeId}>`);
              if (_ctx.post.type) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: (_c = iconMap[(_b2 = _ctx.post.type) != null ? _b2 : "blog"]) != null ? _c : "material-symbols:article-outline-rounded",
                  class: "w-6 h-6 text-white"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.post.image ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                class: "relative flex-shrink-0 object-cover w-full h-full transition duration-300 saturate-0 group-hover:opacity-75",
                src: ("safeRelationId" in _ctx ? _ctx.safeRelationId : unref(safeRelationId))(_ctx.post.image),
                alt: (_d = (_b = ("safeRelation" in _ctx ? _ctx.safeRelation : unref(safeRelation))(_ctx.post.image)) == null ? void 0 : _b.alt) != null ? _d : ""
              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
              createVNode("div", { class: "absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-transparent via-transparent to-primary group-hover:opacity-100" }),
              unref(postCategory) ? (openBlock(), createBlock(_component_Category, {
                key: 1,
                size: "lg",
                color: unref(postCategory).color,
                class: "absolute bottom-0 left-0 mb-4 ml-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(postCategory).title), 1)
                ]),
                _: 1
              }, 8, ["color"])) : createCommentVNode("", true),
              _ctx.post.type ? (openBlock(), createBlock("div", {
                key: 2,
                class: "absolute top-0 right-0 p-1.5 mt-4 mr-4 rounded-button bg-gray-900/50"
              }, [
                _ctx.post.type ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: (_f = iconMap[(_e = _ctx.post.type) != null ? _e : "blog"]) != null ? _f : "material-symbols:article-outline-rounded",
                  class: "w-6 h-6 text-white"
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col justify-between h-full gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "space-y-4",
        href: `/posts/${_ctx.post.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.post.title) {
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: _ctx.post.title,
                class: "group-hover:text-primary",
                size: "xs",
                as: "h3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_VText, {
              "text-color": "light",
              class: "line-clamp-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a = _ctx.post) == null ? void 0 : _a.summary)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b = _ctx.post) == null ? void 0 : _b.summary), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.post.title ? (openBlock(), createBlock(_component_TypographyHeadline, {
                key: 0,
                content: _ctx.post.title,
                class: "group-hover:text-primary",
                size: "xs",
                as: "h3"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_VText, {
                "text-color": "light",
                class: "line-clamp-2"
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString((_a = _ctx.post) == null ? void 0 : _a.summary), 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.post.author) {
        _push(ssrRenderComponent(_component_Author, {
          size: "sm",
          author: _ctx.post.author
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></figure>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post/PostCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=PostCard-BhSpdgeU.mjs.map
