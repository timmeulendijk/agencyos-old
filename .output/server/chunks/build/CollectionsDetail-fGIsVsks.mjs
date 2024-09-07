import __nuxt_component_0 from './index-Dqa-xyfo.mjs';
import { _ as _sfc_main$1 } from './Headline-OuodUiss.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Dix5D_y-.mjs';
import { a as useRoute, i as useAsyncData, P as convertIconName } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CollectionsDetail",
  __ssrInlineRender: true,
  props: {
    baseUrl: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { params, path } = useRoute();
    const {
      data: collection,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItems("help_collections", {
            filter: {
              slug: {
                _eq: params.slug
              }
            },
            fields: ["*", "articles.slug", "articles.title", "articles.id", "articles.summary"]
          })
        );
      },
      {
        transform: (data) => data[0]
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Icon = __nuxt_component_0;
      const _component_TypographyHeadline = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-full mt-8" }, _attrs))}><div class="flex flex-col gap-10 pt-4 max-sm:gap-8 max-sm:pt-2"><div><div class="mb-5">`);
      if ((_a = unref(collection)) == null ? void 0 : _a.icon) {
        _push(ssrRenderComponent(_component_Icon, {
          name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))((_b = unref(collection)) == null ? void 0 : _b.icon),
          class: "h-9 w-9 sm:h-10 sm:w-10 text-primary"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: (_c = unref(collection)) == null ? void 0 : _c.title
      }, null, _parent));
      _push(`<div class="text-gray-500 text-md"><p>${ssrInterpolate((_d = unref(collection)) == null ? void 0 : _d.description)}</p></div></div><div class="mt-5 text-gray-500">${ssrInterpolate((_e = unref(collection)) == null ? void 0 : _e.articles.length)} articles</div></div><div class="flex flex-col gap-5 p-2 border-2 dark:border-gray-600 rounded-card"><!--[-->`);
      ssrRenderList((_f = unref(collection)) == null ? void 0 : _f.articles, (article) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: article.id,
          to: `${_ctx.baseUrl}/help/articles/${article.slug}`,
          class: "flex flex-col p-3 transition duration-150 rounded-card hover:bg-primary/10 dark:hover:bg-gray-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: article.title,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(article.summary)}</p></div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:arrow-right",
                class: "w-6 h-6 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode(_component_TypographyHeadline, {
                      content: article.title,
                      size: "sm"
                    }, null, 8, ["content"]),
                    createVNode("p", { class: "mt-2 text-sm text-gray-500" }, toDisplayString(article.summary), 1)
                  ]),
                  createVNode(_component_Icon, {
                    name: "heroicons:arrow-right",
                    class: "w-6 h-6 dark:text-gray-300"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help/CollectionsDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CollectionsDetail-fGIsVsks.mjs.map
