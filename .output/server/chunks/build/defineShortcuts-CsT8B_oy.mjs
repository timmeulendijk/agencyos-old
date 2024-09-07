import { _ as _sfc_main$2 } from './UIcon-CFeTNZEP.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { u as useId } from './id-CsF31SPu.mjs';
import { defineComponent, computed, useSSRContext, toRef, ref, watch, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, Fragment, renderList, createSlots, withDirectives, vShow } from 'vue';
import { r as rt, l as lt, i as it, u as ut } from './combobox-9r9zJfab.mjs';
import { a as l$1 } from './open-closed-Dy9w_Ur1.mjs';
import { useFuse } from '@vueuse/integrations/useFuse';
import { twJoin } from 'tailwind-merge';
import { m as mergeConfig, j as appConfig, v as defu, r as useDebounceFn, O as useEventListener, L as toValue, M as createSharedComposable, N as useActiveElement } from './server.mjs';
import { U as UIcon } from './Icon-BRjp6c2n.mjs';
import { _ as __nuxt_component_1 } from './Avatar-CM8WZfag.mjs';
import { _ as __nuxt_component_0$1 } from './Kbd-CrBwD9Ot.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useUI } from './selectMenu-BQkBDEWS.mjs';

const commandPalette = {
  wrapper: "flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800",
  container: "relative flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800 scroll-py-2",
  input: {
    wrapper: "relative flex items-center",
    base: "w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none",
    padding: "px-4",
    height: "h-12",
    size: "sm:text-sm",
    icon: {
      base: "pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500",
      loading: "animate-spin",
      size: "h-5 w-5",
      padding: "ps-11"
    },
    closeButton: {
      base: "absolute end-4",
      padding: "pe-10"
    }
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    queryLabel: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  group: {
    wrapper: "p-2",
    label: "px-2.5 my-2 text-xs font-semibold text-gray-900 dark:text-white",
    container: "text-sm text-gray-700 dark:text-gray-200",
    command: {
      base: "flex justify-between select-none items-center rounded-md px-2.5 py-1.5 gap-2 relative",
      active: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
      inactive: "",
      label: "flex items-center gap-1.5 min-w-0",
      prefix: "text-gray-400 dark:text-gray-500",
      suffix: "text-gray-400 dark:text-gray-500",
      container: "flex items-center gap-1.5 min-w-0",
      icon: {
        base: "flex-shrink-0 w-5 h-5",
        active: "text-gray-900 dark:text-white",
        inactive: "text-gray-400 dark:text-gray-500"
      },
      selectedIcon: {
        base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
      },
      avatar: {
        base: "flex-shrink-0",
        size: "2xs"
      },
      chip: {
        base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
      },
      disabled: "opacity-50",
      shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5"
    },
    active: "flex-shrink-0 text-gray-500 dark:text-gray-400",
    inactive: "flex-shrink-0 text-gray-500 dark:text-gray-400"
  },
  default: {
    icon: "i-heroicons-magnifying-glass-20-solid",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    emptyState: {
      icon: "i-heroicons-magnifying-glass-20-solid",
      label: "We couldn't find any items.",
      queryLabel: "We couldn't find any items with that term. Please try again."
    },
    closeButton: null,
    selectedIcon: "i-heroicons-check-20-solid"
  }
};
const _sfc_main$1 = defineComponent({
  components: {
    HComboboxOption: rt,
    UIcon,
    UAvatar: __nuxt_component_1,
    UKbd: __nuxt_component_0$1
  },
  props: {
    group: {
      type: Object,
      required: true
    },
    query: {
      type: String,
      default: ""
    },
    groupAttribute: {
      type: String,
      required: true
    },
    commandAttribute: {
      type: String,
      required: true
    },
    selectedIcon: {
      type: String,
      required: true
    },
    ui: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const label = computed(() => {
      const label2 = props.group[props.groupAttribute];
      return typeof label2 === "function" ? label2(props.query) : label2;
    });
    function highlight(text, { indices, value }) {
      if (text === value) {
        return "";
      }
      let content = "";
      let nextUnhighlightedIndiceStartingIndex = 0;
      indices.forEach((indice) => {
        const lastIndiceNextIndex = indice[1] + 1;
        const isMatched = lastIndiceNextIndex - indice[0] >= props.query.length;
        content += [
          value.substring(nextUnhighlightedIndiceStartingIndex, indice[0]),
          isMatched && "<mark>",
          value.substring(indice[0], lastIndiceNextIndex),
          isMatched && "</mark>"
        ].filter(Boolean).join("");
        nextUnhighlightedIndiceStartingIndex = lastIndiceNextIndex;
      });
      content += value.substring(nextUnhighlightedIndiceStartingIndex);
      const index = content.indexOf("<mark>");
      if (index > 60) {
        content = `...${content.substring(index - 60)}`;
      }
      return content;
    }
    l$1(() => useId("$g2gpoPdXk0"));
    return {
      label,
      highlight
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HComboboxOption = resolveComponent("HComboboxOption");
  const _component_UIcon = _sfc_main$2;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UKbd = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.group.wrapper
  }, _attrs))}>`);
  if (_ctx.label) {
    _push(`<h2 class="${ssrRenderClass(_ctx.ui.group.label)}">${ssrInterpolate(_ctx.label)}</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.group.container)}"${ssrRenderAttr("aria-label", _ctx.group[_ctx.groupAttribute])}><!--[-->`);
  ssrRenderList(_ctx.group.commands, (command, index) => {
    _push(ssrRenderComponent(_component_HComboboxOption, {
      key: `${_ctx.group.key}-${index}`,
      value: command,
      disabled: command.disabled,
      as: "template"
    }, {
      default: withCtx(({ active, selected }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"])}"${_scopeId}><div class="${ssrRenderClass(_ctx.ui.group.command.container)}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            if (command.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: command.icon,
                class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else if (command.avatar) {
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                class: _ctx.ui.group.command.avatar.base,
                "aria-hidden": "true"
              }), null, _parent2, _scopeId));
            } else if (command.chip) {
              _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.chip.base)}" style="${ssrRenderStyle({ background: `#${command.chip}` })}"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            var _a2;
            var _a, _b;
            if (command.prefix) {
              _push2(`<span class="${ssrRenderClass([command.prefixClass || _ctx.ui.group.command.prefix, "flex-shrink-0"])}"${_scopeId}>${ssrInterpolate(command.prefix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([{ "flex-none": command.suffix || ((_a = command.matches) == null ? void 0 : _a.length) }, "truncate"])}"${_scopeId}>${ssrInterpolate(command[_ctx.commandAttribute])}</span>`);
            if ((_b = command.matches) == null ? void 0 : _b.length) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${(_a2 = _ctx.highlight(command[_ctx.commandAttribute], command.matches[0])) != null ? _a2 : ""}</span>`);
            } else if (command.suffix) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${ssrInterpolate(command.suffix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`</div></div>`);
          if (selected) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.selectedIcon,
              class: _ctx.ui.group.command.selectedIcon.base,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else if (active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`])) {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              if (_ctx.group.active) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.active)}"${_scopeId}>${ssrInterpolate(_ctx.group.active)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              var _a;
              if ((_a = command.shortcuts) == null ? void 0 : _a.length) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.shortcuts)}"${_scopeId}><!--[-->`);
                ssrRenderList(command.shortcuts, (shortcut) => {
                  _push2(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(shortcut)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(shortcut), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></span>`);
              } else if (!command.disabled && _ctx.group.inactive) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.inactive)}"${_scopeId}>${ssrInterpolate(_ctx.group.inactive)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              class: [_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"]
            }, [
              createVNode("div", {
                class: _ctx.ui.group.command.container
              }, [
                renderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
                  group: _ctx.group,
                  command,
                  active,
                  selected
                }, () => [
                  command.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: command.icon,
                    class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                    "aria-hidden": "true"
                  }, null, 8, ["name", "class"])) : command.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                    key: 1,
                    ref_for: true
                  }, { size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                    class: _ctx.ui.group.command.avatar.base,
                    "aria-hidden": "true"
                  }), null, 16, ["class"])) : command.chip ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: _ctx.ui.group.command.chip.base,
                    style: { background: `#${command.chip}` }
                  }, null, 6)) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: [_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled]
                }, [
                  renderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
                    group: _ctx.group,
                    command,
                    active,
                    selected
                  }, () => {
                    var _a, _b;
                    return [
                      command.prefix ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ["flex-shrink-0", command.prefixClass || _ctx.ui.group.command.prefix]
                      }, toDisplayString(command.prefix), 3)) : createCommentVNode("", true),
                      createVNode("span", {
                        class: ["truncate", { "flex-none": command.suffix || ((_a = command.matches) == null ? void 0 : _a.length) }]
                      }, toDisplayString(command[_ctx.commandAttribute]), 3),
                      ((_b = command.matches) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix],
                        innerHTML: _ctx.highlight(command[_ctx.commandAttribute], command.matches[0])
                      }, null, 10, ["innerHTML"])) : command.suffix ? (openBlock(), createBlock("span", {
                        key: 2,
                        class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix]
                      }, toDisplayString(command.suffix), 3)) : createCommentVNode("", true)
                    ];
                  })
                ], 2)
              ], 2),
              selected ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: _ctx.selectedIcon,
                class: _ctx.ui.group.command.selectedIcon.base,
                "aria-hidden": "true"
              }, null, 8, ["name", "class"])) : active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`]) ? renderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
                key: 1,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => [
                _ctx.group.active ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.ui.group.active
                }, toDisplayString(_ctx.group.active), 3)) : createCommentVNode("", true)
              ]) : renderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
                key: 2,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => {
                var _a;
                return [
                  ((_a = command.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.ui.group.command.shortcuts
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(command.shortcuts, (shortcut) => {
                      return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(shortcut), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ], 2)) : !command.disabled && _ctx.group.inactive ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.ui.group.inactive
                  }, toDisplayString(_ctx.group.inactive), 3)) : createCommentVNode("", true)
                ];
              })
            ], 2)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/navigation/CommandPaletteGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CommandPaletteGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.commandPalette, commandPalette);
const _sfc_main = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxInput: it,
    HComboboxOptions: ut,
    UIcon,
    UButton: __nuxt_component_4,
    CommandPaletteGroup
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: null
    },
    by: {
      type: String,
      default: "id"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    selectedIcon: {
      type: String,
      default: () => config.default.selectedIcon
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    emptyState: {
      type: Object,
      default: () => config.default.emptyState
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    groupAttribute: {
      type: String,
      default: "label"
    },
    commandAttribute: {
      type: String,
      default: "label"
    },
    autoselect: {
      type: Boolean,
      default: true
    },
    autoclear: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 200
    },
    fuse: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit, expose }) {
    const { ui, attrs } = useUI("commandPalette", toRef(props, "ui"), config, toRef(props, "class"));
    const query = ref("");
    const comboboxInput = ref();
    const comboboxApi = ref(null);
    const isLoading = ref(false);
    const options = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        keys: [props.commandAttribute]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const commands = computed(() => {
      var _a;
      const commands2 = [];
      for (const group of props.groups) {
        if (!group.search && !group.static) {
          commands2.push(...((_a = group.commands) == null ? void 0 : _a.map((command) => ({ ...command, group: group.key }))) || []);
        }
      }
      return commands2;
    });
    const searchResults = ref({});
    const { results } = useFuse(query, commands, options);
    function getGroupWithCommands(group, commands2) {
      if (!group) {
        return;
      }
      if (group.filter && typeof group.filter === "function") {
        commands2 = group.filter(query.value, commands2);
      }
      return {
        ...group,
        commands: commands2.slice(0, options.value.resultLimit)
      };
    }
    const groups = computed(() => {
      if (!results.value) {
        return [];
      }
      const groupedCommands = results.value.reduce((acc, command) => {
        var _a;
        const { item, ...data } = command;
        if (!item.group) {
          return acc;
        }
        acc[_a = item.group] || (acc[_a] = []);
        acc[item.group].push({ ...item, ...data });
        return acc;
      }, {});
      const groups2 = Object.entries(groupedCommands).map(([key, commands2]) => {
        const group = props.groups.find((group2) => group2.key === key);
        if (!group) {
          return null;
        }
        return getGroupWithCommands(group, commands2);
      }).filter(Boolean);
      const searchGroups = props.groups.filter((group) => {
        var _a;
        return !!group.search && ((_a = searchResults.value[group.key]) == null ? void 0 : _a.length);
      }).map((group) => {
        const commands2 = searchResults.value[group.key] || [];
        return getGroupWithCommands(group, [...commands2]);
      });
      const staticGroups = props.groups.filter((group) => {
        var _a;
        return group.static && ((_a = group.commands) == null ? void 0 : _a.length);
      }).map((group) => {
        return getGroupWithCommands(group, group.commands);
      });
      return [
        ...groups2,
        ...searchGroups,
        ...staticGroups
      ];
    });
    const debouncedSearch = useDebounceFn(async () => {
      const searchableGroups = props.groups.filter((group) => !!group.search);
      if (!searchableGroups.length) {
        return;
      }
      isLoading.value = true;
      await Promise.all(searchableGroups.map(async (group) => {
        searchResults.value[group.key] = await group.search(query.value);
      }));
      isLoading.value = false;
      activateFirstOption();
    }, props.debounce);
    watch(query, () => {
      debouncedSearch();
      activateFirstOption();
    });
    const iconName = computed(() => {
      if ((props.loading || isLoading.value) && props.loadingIcon) {
        return props.loadingIcon;
      }
      return props.icon;
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.input.icon.base,
        ui.value.input.icon.size,
        (props.loading || isLoading.value) && props.loadingIcon && ui.value.input.icon.loading
      );
    });
    const emptyState = computed(() => {
      if (props.emptyState === null)
        return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    function activateFirstOption() {
      setTimeout(() => {
        var _a;
        (_a = comboboxInput.value) == null ? void 0 : _a.$el.dispatchEvent(new KeyboardEvent("keydown", { key: "PageUp" }));
      }, 0);
    }
    function onSelect(option) {
      emit("update:modelValue", option, { query: query.value });
      if (props.autoclear) {
        setTimeout(() => {
          query.value = "";
        }, 0);
      }
    }
    function onClear() {
      if (query.value) {
        query.value = "";
      } else {
        emit("close");
      }
    }
    expose({
      query,
      updateQuery: (q) => {
        query.value = q;
      },
      comboboxApi,
      results
    });
    l$1(() => useId("$c30TGRqyue"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      groups,
      comboboxInput,
      query,
      iconName,
      iconClass,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      onSelect,
      onClear
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HCombobox = resolveComponent("HCombobox");
  const _component_UIcon = _sfc_main$2;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UButton = __nuxt_component_4;
  const _component_HComboboxOptions = resolveComponent("HComboboxOptions");
  const _component_CommandPaletteGroup = resolveComponent("CommandPaletteGroup");
  _push(ssrRenderComponent(_component_HCombobox, mergeProps({
    by: _ctx.by,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    nullable: _ctx.nullable,
    class: _ctx.ui.wrapper
  }, _ctx.attrs, {
    as: "div",
    "onUpdate:modelValue": _ctx.onSelect
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle(_ctx.searchable ? null : { display: "none" })}" class="${ssrRenderClass(_ctx.ui.input.wrapper)}"${_scopeId}>`);
        if (_ctx.iconName) {
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.iconName,
            class: _ctx.iconClass,
            "aria-hidden": "true"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_HComboboxInput, {
          ref: "comboboxInput",
          value: _ctx.query,
          class: [_ctx.ui.input.base, _ctx.ui.input.size, _ctx.ui.input.height, _ctx.ui.input.padding, _ctx.icon && _ctx.ui.input.icon.padding, _ctx.closeButton && _ctx.ui.input.closeButton.padding],
          placeholder: _ctx.placeholder,
          "aria-label": _ctx.placeholder,
          autocomplete: "off",
          onChange: ($event) => _ctx.query = $event.target.value
        }, null, _parent2, _scopeId));
        if (_ctx.closeButton) {
          _push2(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, {
            class: _ctx.ui.input.closeButton.base,
            onClick: _ctx.onClear
          }), null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (_ctx.groups.length) {
          _push2(ssrRenderComponent(_component_HComboboxOptions, {
            static: "",
            hold: "",
            as: "div",
            "aria-label": "Commands",
            class: _ctx.ui.container
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.groups, (group) => {
                  _push3(ssrRenderComponent(_component_CommandPaletteGroup, {
                    key: group.key,
                    query: _ctx.query,
                    group,
                    "group-attribute": _ctx.groupAttribute,
                    "command-attribute": _ctx.commandAttribute,
                    "selected-icon": _ctx.selectedIcon,
                    ui: _ctx.ui
                  }, createSlots({ _: 2 }, [
                    renderList(_ctx.$slots, (_3, name) => {
                      return {
                        name,
                        fn: withCtx((slotData, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                            ];
                          }
                        })
                      };
                    })
                  ]), _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.groups, (group) => {
                    return openBlock(), createBlock(_component_CommandPaletteGroup, {
                      key: group.key,
                      query: _ctx.query,
                      group,
                      "group-attribute": _ctx.groupAttribute,
                      "command-attribute": _ctx.commandAttribute,
                      "selected-icon": _ctx.selectedIcon,
                      ui: _ctx.ui
                    }, createSlots({ _: 2 }, [
                      renderList(_ctx.$slots, (_3, name) => {
                        return {
                          name,
                          fn: withCtx((slotData) => [
                            renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                          ])
                        };
                      })
                    ]), 1032, ["query", "group", "group-attribute", "command-attribute", "selected-icon", "ui"]);
                  }), 128))
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else if (_ctx.emptyState) {
          ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
            _push2(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}"${_scopeId}>`);
            if (_ctx.emptyState.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: _ctx.emptyState.icon,
                class: _ctx.ui.emptyState.icon,
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="${ssrRenderClass(_ctx.query ? _ctx.ui.emptyState.queryLabel : _ctx.ui.emptyState.label)}"${_scopeId}>${ssrInterpolate(_ctx.query ? _ctx.emptyState.queryLabel : _ctx.emptyState.label)}</p></div>`);
          }, _push2, _parent2, _scopeId);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          withDirectives(createVNode("div", {
            class: _ctx.ui.input.wrapper
          }, [
            _ctx.iconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.iconName,
              class: _ctx.iconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
            createVNode(_component_HComboboxInput, {
              ref: "comboboxInput",
              value: _ctx.query,
              class: [_ctx.ui.input.base, _ctx.ui.input.size, _ctx.ui.input.height, _ctx.ui.input.padding, _ctx.icon && _ctx.ui.input.icon.padding, _ctx.closeButton && _ctx.ui.input.closeButton.padding],
              placeholder: _ctx.placeholder,
              "aria-label": _ctx.placeholder,
              autocomplete: "off",
              onChange: ($event) => _ctx.query = $event.target.value
            }, null, 8, ["value", "class", "placeholder", "aria-label", "onChange"]),
            _ctx.closeButton ? (openBlock(), createBlock(_component_UButton, mergeProps({
              key: 1,
              "aria-label": "Close"
            }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, {
              class: _ctx.ui.input.closeButton.base,
              onClick: _ctx.onClear
            }), null, 16, ["class", "onClick"])) : createCommentVNode("", true)
          ], 2), [
            [vShow, _ctx.searchable]
          ]),
          _ctx.groups.length ? (openBlock(), createBlock(_component_HComboboxOptions, {
            key: 0,
            static: "",
            hold: "",
            as: "div",
            "aria-label": "Commands",
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.groups, (group) => {
                return openBlock(), createBlock(_component_CommandPaletteGroup, {
                  key: group.key,
                  query: _ctx.query,
                  group,
                  "group-attribute": _ctx.groupAttribute,
                  "command-attribute": _ctx.commandAttribute,
                  "selected-icon": _ctx.selectedIcon,
                  ui: _ctx.ui
                }, createSlots({ _: 2 }, [
                  renderList(_ctx.$slots, (_2, name) => {
                    return {
                      name,
                      fn: withCtx((slotData) => [
                        renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                      ])
                    };
                  })
                ]), 1032, ["query", "group", "group-attribute", "command-attribute", "selected-icon", "ui"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : _ctx.emptyState ? renderSlot(_ctx.$slots, "empty-state", { key: 1 }, () => [
            createVNode("div", {
              class: _ctx.ui.emptyState.wrapper
            }, [
              _ctx.emptyState.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: _ctx.emptyState.icon,
                class: _ctx.ui.emptyState.icon,
                "aria-hidden": "true"
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              createVNode("p", {
                class: _ctx.query ? _ctx.ui.emptyState.queryLabel : _ctx.ui.emptyState.label
              }, toDisplayString(_ctx.query ? _ctx.emptyState.queryLabel : _ctx.emptyState.label), 3)
            ], 2)
          ]) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/navigation/CommandPalette.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function logicAnd(...args) {
  return computed(() => args.every((i) => toValue(i)));
}
function logicNot(v) {
  return computed(() => !toValue(v));
}
const _useShortcuts = () => {
  const macOS = computed(() => false);
  const metaSymbol = ref(" ");
  const activeElement = useActiveElement();
  const usingInput = computed(() => {
    var _a, _b, _c;
    const tagName = (_a = activeElement.value) == null ? void 0 : _a.tagName;
    const contentEditable = (_b = activeElement.value) == null ? void 0 : _b.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  return {
    macOS,
    metaSymbol,
    activeElement,
    usingInput
  };
};
const useShortcuts = createSharedComposable(_useShortcuts);
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
const defineShortcuts = (config2, options = {}) => {
  var _a;
  const { macOS, usingInput } = useShortcuts();
  let shortcuts = [];
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, (_a = options.chainDelay) != null ? _a : 800);
  const onKeyDown = (e) => {
    if (!e.key) {
      return;
    }
    const alphabeticalKey = /^[a-z]{1}$/i.test(e.key);
    let chainedKey;
    chainedInputs.value.push(e.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.filter((s) => s.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.condition.value) {
          e.preventDefault();
          shortcut.handler();
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.filter((s) => !s.chained)) {
      if (e.key.toLowerCase() !== shortcut.key) {
        continue;
      }
      if (e.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if (alphabeticalKey && e.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.condition.value) {
        e.preventDefault();
        shortcut.handler();
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  shortcuts = Object.entries(config2).map(([key, shortcutConfig]) => {
    var _a2, _b;
    if (!shortcutConfig) {
      return null;
    }
    let shortcut;
    if (key.includes("-") && key !== "-" && !((_a2 = key.match(chainedShortcutRegex)) == null ? void 0 : _a2.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    if (key.includes("_") && key !== "_" && !((_b = key.match(combinedShortcutRegex)) == null ? void 0 : _b.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    const chained = key.includes("-") && key !== "-";
    if (chained) {
      shortcut = {
        key: key.toLowerCase(),
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      };
    } else {
      const keySplit = key.toLowerCase().split("_").map((k) => k);
      shortcut = {
        key: keySplit.filter((k) => !["meta", "ctrl", "shift", "alt"].includes(k)).join("_"),
        metaKey: keySplit.includes("meta"),
        ctrlKey: keySplit.includes("ctrl"),
        shiftKey: keySplit.includes("shift"),
        altKey: keySplit.includes("alt")
      };
    }
    shortcut.chained = chained;
    if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
      shortcut.metaKey = false;
      shortcut.ctrlKey = true;
    }
    if (typeof shortcutConfig === "function") {
      shortcut.handler = shortcutConfig;
    } else if (typeof shortcutConfig === "object") {
      shortcut = { ...shortcut, handler: shortcutConfig.handler };
    }
    if (!shortcut.handler) {
      console.trace("[Shortcut] Invalid value");
      return null;
    }
    const conditions = [];
    if (!shortcutConfig.usingInput) {
      conditions.push(logicNot(usingInput));
    } else if (typeof shortcutConfig.usingInput === "string") {
      conditions.push(computed(() => usingInput.value === shortcutConfig.usingInput));
    }
    shortcut.condition = logicAnd(...conditions, ...shortcutConfig.whenever || []);
    return shortcut;
  }).filter(Boolean);
  useEventListener("keydown", onKeyDown);
};

export { __nuxt_component_0 as _, defineShortcuts as d };
//# sourceMappingURL=defineShortcuts-CsT8B_oy.mjs.map
