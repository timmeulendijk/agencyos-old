import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_0 } from './Kbd-CrBwD9Ot.mjs';
import { _ as __nuxt_component_1 } from './Modal-B8yYdas2.mjs';
import { d as defineShortcuts, _ as __nuxt_component_0$1 } from './defineShortcuts-CsT8B_oy.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, unref, isRef, useSSRContext } from 'vue';
import { h as useFiles, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlobalSearch",
  __ssrInlineRender: true,
  props: {
    collections: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((collection) => {
          return ["posts", "pages", "categories", "projects"].includes(collection);
        });
      }
    },
    placeholder: {
      type: String,
      default: "Search items"
    }
  },
  setup(__props) {
    const props = __props;
    defineShortcuts({
      meta_k: {
        usingInput: true,
        handler: () => {
          isOpen.value = !isOpen.value;
        }
      }
    });
    const isOpen = ref(false);
    const { fileUrl } = useFiles();
    const groups = computed(() => {
      return [
        {
          key: "search",
          label: (q) => q && `Results matching \u201C${q}\u201D...`,
          search: async (q) => {
            loading.value = true;
            if (!q || q.length < 3) {
              loading.value = false;
              return [];
            }
            try {
              const { data } = await $fetch("/api/search", {
                params: {
                  search: q,
                  collections: props.collections
                  // Use the collections prop to filter the search
                }
              });
              return data.map((hit) => {
                return {
                  id: hit.id,
                  label: hit.title,
                  href: hit.url,
                  avatar: { src: fileUrl(hit.image) },
                  suffix: hit.type
                };
              });
            } catch (error) {
            } finally {
              loading.value = false;
            }
          }
        }
      ];
    });
    function onSelect(option) {
      if (option.click) {
        option.click();
      } else if (option.to) {
        navigateTo(option.to);
      } else if (option.href) {
        navigateTo(option.href);
      }
    }
    ref("");
    ref([]);
    ref(null);
    const loading = ref(false);
    const ui = {
      wrapper: "flex flex-col flex-1 min-h-0 bg-gray-50 dark:bg-gray-800",
      input: {
        wrapper: "relative flex items-center mx-3 py-3",
        base: "w-full rounded border-2 border-primary-500 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-0 bg-white dark:bg-gray-900",
        padding: "px-4",
        height: "h-14",
        size: "text-lg",
        icon: {
          base: "pointer-events-none absolute left-3 text-primary-500 dark:text-primary-400",
          size: "h-6 w-6"
        }
      },
      group: {
        wrapper: "p-3 relative",
        label: "-mx-3 px-3 -mt-4 mb-2 py-1 text-sm font-semibold text-primary-500 dark:text-primary-400 font-semibold sticky top-0 bg-gray-50 dark:bg-gray-800 z-10",
        container: "space-y-1",
        command: {
          base: "flex justify-between select-none items-center rounded px-2 py-4 gap-2 relative font-medium text-sm group shadow",
          active: "bg-primary-500 dark:bg-primary-400 text-white",
          inactive: "bg-white dark:bg-gray-900",
          label: "flex min-w-0 justify-between",
          suffix: "text-xs",
          icon: {
            base: "flex-shrink-0 w-6 h-6",
            active: "text-white",
            inactive: "text-gray-400 dark:text-gray-500"
          }
        }
      },
      emptyState: {
        wrapper: "flex flex-col items-center justify-center flex-1 py-9",
        label: "text-sm text-center text-gray-500 dark:text-gray-400",
        queryLabel: "text-lg text-center text-gray-900 dark:text-white",
        icon: "w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_4;
      const _component_UKbd = __nuxt_component_0;
      const _component_UModal = __nuxt_component_1;
      const _component_UCommandPalette = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "material-symbols:search-rounded",
        color: "white",
        size: "lg",
        onClick: ($event) => isOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Search <div class="flex items-center gap-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u2318`);
                } else {
                  return [
                    createTextVNode("\u2318")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`K`);
                } else {
                  return [
                    createTextVNode("K")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(" Search "),
              createVNode("div", { class: "flex items-center gap-0.5" }, [
                createVNode(_component_UKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("\u2318")
                  ]),
                  _: 1
                }),
                createVNode(_component_UKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("K")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCommandPalette, {
              loading: unref(loading),
              groups: unref(groups),
              ui,
              "onUpdate:modelValue": onSelect
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCommandPalette, {
                loading: unref(loading),
                groups: unref(groups),
                ui,
                "onUpdate:modelValue": onSelect
              }, null, 8, ["loading", "groups"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GlobalSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GlobalSearch-DmC-IZ7s.mjs.map
