import { defineComponent, ref, onErrorCaptured } from 'vue';
import { q as useNuxtApp } from './server.mjs';

const __nuxt_component_7 = defineComponent({
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    onErrorCaptured((err, target, info) => {
    });
    function clearError() {
      error.value = null;
    }
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error, clearError }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});

export { __nuxt_component_7 as _ };
//# sourceMappingURL=nuxt-error-boundary-Blecufsi.mjs.map
