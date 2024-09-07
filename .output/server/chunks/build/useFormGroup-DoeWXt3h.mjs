import { inject, ref, computed } from 'vue';
import { m as mergeConfig, j as appConfig, r as useDebounceFn } from './server.mjs';

const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const formGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const useFormGroup = (inputProps, config) => {
  const formBus = inject("form-events", void 0);
  const formGroup2 = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup2) {
    if (inputProps == null ? void 0 : inputProps.id) {
      formGroup2.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup2.name.value] = formGroup2.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup2 == null ? void 0 : formGroup2.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup2 == null ? void 0 : formGroup2.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup2 == null ? void 0 : formGroup2.eagerValidation.value)) {
      emitFormEvent("input", formGroup2 == null ? void 0 : formGroup2.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup2 == null ? void 0 : formGroup2.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup2 == null ? void 0 : formGroup2.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config.size[formGroup2 == null ? void 0 : formGroup2.size.value] ? formGroup2 == null ? void 0 : formGroup2.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = formGroupConfig == null ? void 0 : formGroupConfig.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup2 == null ? void 0 : formGroup2.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};

export { formGroup as f, useFormGroup as u };
//# sourceMappingURL=useFormGroup-DoeWXt3h.mjs.map
