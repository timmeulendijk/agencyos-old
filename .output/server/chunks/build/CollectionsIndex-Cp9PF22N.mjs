import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$1 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';
import { i as useAsyncData, P as convertIconName } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CollectionsIndex",
  __ssrInlineRender: true,
  props: {
    baseUrl: { default: "" }
  },
  async setup(__props) {
    let __temp, __restore;
    const {
      data: collections,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "help-collections-index",
      () => {
        return useDirectus(
          readItems("help_collections", {
            filter: {
              articles: {
                _nnull: true
              }
            }
          })
        );
      },
      {
        transform: (data) => data
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      const _component_TypographyHeadline = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid mt-8 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(collections), (collection) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: collection.id,
          href: `${_ctx.baseUrl}/help/collections/${collection.slug}`,
          class: "flex overflow-hidden no-underline transition duration-200 bg-white border dark:bg-gray-800 hover:border-primary dark:border-gray-700 rounded-card dark:hover:border-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col p-5 sm:p-6"${_scopeId}><div class="flex items-center"${_scopeId}>`);
              if (collection.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(collection.icon),
                  class: "w-10 h-10 text-primary"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TypographyHeadline, {
                content: collection.title,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-gray-500 dark:text-gray-300 line-clamp-3 text-md sm:line-clamp-3"${_scopeId}>${ssrInterpolate(collection.description)}</p></div><div class="mt-4 text-sm text-gray-500 dark:text-gray-300"${_scopeId}>${ssrInterpolate(collection.articles.length)} articles</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col p-5 sm:p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    collection.icon ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: ("convertIconName" in _ctx ? _ctx.convertIconName : unref(convertIconName))(collection.icon),
                      class: "w-10 h-10 text-primary"
                    }, null, 8, ["name"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_TypographyHeadline, {
                      content: collection.title,
                      size: "sm"
                    }, null, 8, ["content"]),
                    createVNode("p", { class: "text-gray-500 dark:text-gray-300 line-clamp-3 text-md sm:line-clamp-3" }, toDisplayString(collection.description), 1)
                  ]),
                  createVNode("div", { class: "mt-4 text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(collection.articles.length) + " articles", 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help/CollectionsIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CollectionsIndex-Cp9PF22N.mjs.map
