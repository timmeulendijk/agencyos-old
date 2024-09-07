import { q as useNuxtApp, b as useAppConfig, w as useRuntimeConfig, f as useHead, i as useAsyncData } from './server.mjs';
import { defineComponent, computed, h } from 'vue';
import { Icon, loadIcons, getIcon } from '@iconify/vue';
import { getIconCSS } from '@iconify/utils/lib/css/icon';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
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
import '@directus/sdk';
import 'vue-dompurify-html';
import 'node:crypto';

async function loadIcon(name) {
  await new Promise((resolve) => loadIcons([name], () => resolve(true))).catch(() => null);
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props) {
    var _a;
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => options.cssSelectorPrefix + props.name);
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    {
      const configs = useRuntimeConfig().icon || {};
      if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
        const icon = await loadIcon(props.name);
        if (icon) {
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (!ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
        }
      }
    }
    return () => h("span", { class: ["iconify", cssClass.value, options.class] });
  }
});
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    {
      useAsyncData(
        storeKey,
        () => loadIcon(name.value),
        { deep: false }
      );
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      class: options.class,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize
    }, slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name.value)) || ((props.mode || options.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || options.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || options.customize;
    return () => h(
      component.value,
      {
        ...options.attrs,
        name: name.value,
        class: options.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});

export { __nuxt_component_0 as default };
//# sourceMappingURL=index-Dqa-xyfo.mjs.map
