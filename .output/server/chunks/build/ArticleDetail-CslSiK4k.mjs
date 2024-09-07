import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$3 } from './UserBadge-DzE2kIn7.mjs';
import { _ as _sfc_main$4 } from './Prose-C5ZYWjWj.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_2 } from './Textarea-NEFeg-lL.mjs';
import { a as useRoute, i as useAsyncData, K as useCookie, I as fetchDefaults, J as useRequestFetch } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, reactive, withCtx, createVNode, toDisplayString, createTextVNode, computed, toValue } from 'vue';
import { q as hash } from '../runtime.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItems } from '@directus/sdk';
import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelpFeedback",
  __ssrInlineRender: true,
  props: {
    title: {},
    url: {}
  },
  setup(__props) {
    const session = useCookie("session");
    const props = __props;
    const loading = ref(false);
    const error = ref(null);
    const success = ref(false);
    const feedback = reactive({
      id: void 0,
      rating: null,
      comments: null
    });
    const ratingOptions = [
      {
        label: "The Worst \u{1F62D}",
        value: 1,
        message: "Sorry about that. How do we fix it?"
      },
      {
        label: "Not Helpful \u{1F621}",
        value: 2,
        message: "How can we improve this article?"
      },
      {
        label: "Helpful \u{1F603}",
        value: 3,
        message: "Nice! \u{1F44D} Anything we can improve upon?"
      },
      {
        label: "Amazing \u{1F929}",
        value: 4,
        message: `Awesome! \u{1F973}\u{1F389}\u{1F38A} Anything you'd like to add?`
      }
    ];
    function getRatingOption(rating) {
      return ratingOptions.find((option) => option.value === rating);
    }
    async function handleSubmission(rating) {
      var _a2;
      var _a;
      loading.value = true;
      if (rating)
        feedback.rating = rating;
      const body = {
        id: feedback.id,
        rating: feedback.rating,
        comments: feedback.comments,
        title: props.title,
        url: props.url,
        visitor_id: (_a2 = (_a = session == null ? void 0 : session.value) == null ? void 0 : _a.id) != null ? _a2 : void 0
      };
      try {
        const { data } = await useFetch("/api/feedback", {
          method: "POST",
          body: JSON.stringify(body)
        }, "$ovC6Dl4lso");
        if (data.value.id) {
          feedback.id = data.value.id;
        }
        if (data.value.comments) {
          success.value = true;
        }
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_TypographyHeadline = _sfc_main$2;
      const _component_UButton = __nuxt_component_4;
      const _component_UTextarea = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      if (!feedback.rating) {
        _push(`<div class="step">`);
        _push(ssrRenderComponent(_component_TypographyHeadline, {
          content: "How <em>helpful</em> was this article?",
          size: "xs"
        }, null, _parent));
        _push(`<div class="flex flex-col gap-3 mt-4 md:flex-row"><!--[-->`);
        ssrRenderList(ratingOptions, (item) => {
          _push(ssrRenderComponent(_component_UButton, {
            key: item.value,
            size: "lg",
            color: "white",
            onClick: ($event) => handleSubmission(item.value)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else if ((feedback == null ? void 0 : feedback.rating) && !success.value) {
        _push(`<div class="space-y-4"><p class="dark:text-gray-200">You chose:</p><div class="space-x-4"><span class="text-xl font-bold dark:text-white">${ssrInterpolate((_a = getRatingOption(feedback.rating)) == null ? void 0 : _a.label)}</span>`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "outline",
          size: "xs",
          icon: "heroicons:x-mark",
          onClick: ($event) => feedback.rating = void 0
        }, null, _parent));
        _push(`</div>`);
        if (feedback == null ? void 0 : feedback.rating) {
          _push(ssrRenderComponent(_component_TypographyHeadline, {
            content: (_b = getRatingOption(feedback.rating)) == null ? void 0 : _b.message,
            size: "sm"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UTextarea, {
          modelValue: feedback.comments,
          "onUpdate:modelValue": ($event) => feedback.comments = $event,
          autofocus: "",
          class: "max-w-lg",
          autoresize: ""
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          disabled: !feedback.comments,
          size: "lg",
          onClick: ($event) => handleSubmission()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Send Us Your Feedback`);
            } else {
              return [
                createTextVNode("Send Us Your Feedback")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_TypographyHeadline, {
          content: "Thanks for your feedback!",
          size: "sm"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help/HelpFeedback.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function markdownToHtml(markdown) {
  return micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleDetail",
  __ssrInlineRender: true,
  props: {
    baseUrl: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { path, params } = useRoute();
    const {
      data: article,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItems("help_articles", {
            // @ts-ignore
            filter: {
              slug: {
                _eq: params.slug
              }
            },
            fields: [
              "*",
              {
                help_collection: ["slug", "title", "id"],
                owner: ["first_name", "last_name", "avatar"]
              }
            ]
          })
        );
      },
      {
        transform: (data) => data[0]
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_TypographyHeadline = _sfc_main$2;
      const _component_UserBadge = _sfc_main$3;
      const _component_TypographyProse = _sfc_main$4;
      const _component_HelpFeedback = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex flex-col">`);
      if ((_a = unref(article)) == null ? void 0 : _a.title) {
        _push(ssrRenderComponent(_component_TypographyHeadline, {
          content: (_b = unref(article)) == null ? void 0 : _b.title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_c = unref(article)) == null ? void 0 : _c.summary) {
        _push(`<p class="">${ssrInterpolate((_d = unref(article)) == null ? void 0 : _d.summary)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_e = unref(article)) == null ? void 0 : _e.owner) {
        _push(ssrRenderComponent(_component_UserBadge, {
          user: (_f = unref(article)) == null ? void 0 : _f.owner
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-col"><article>`);
      if ((_g = unref(article)) == null ? void 0 : _g.content) {
        _push(ssrRenderComponent(_component_TypographyProse, {
          content: unref(markdownToHtml)((_h = unref(article)) == null ? void 0 : _h.content)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article></div><hr class="mt-12 dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_HelpFeedback, {
        class: "mt-4",
        title: (_i = unref(article)) == null ? void 0 : _i.title,
        url: `/help/articles/${(_j = unref(article)) == null ? void 0 : _j.slug}`
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help/ArticleDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ArticleDetail-CslSiK4k.mjs.map
