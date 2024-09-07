import { _ as _sfc_main$4 } from './VAlert-B7QIU45Y.mjs';
import { defineComponent, ref, provide, useSSRContext, h as h$1, reactive, watch, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, withDirectives, openBlock, createBlock, computed } from 'vue';
import { u as useId } from './id-CsF31SPu.mjs';
import { C as useEventBus, a as useRoute, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1$1 } from './FormGroup-D6qWgF-G.mjs';
import { _ as __nuxt_component_0 } from './Input-CfIqCvke.mjs';
import { _ as __nuxt_component_2 } from './Textarea-NEFeg-lL.mjs';
import { _ as __nuxt_component_0$1 } from './Checkbox-Cj7fi5iD.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as _sfc_main$3 } from './VUpload-DWTZMVN2.mjs';
import { u as useColorMode } from './composables-BxS0fVn-.mjs';
import * as PerfectFreehand from 'perfect-freehand';
import { u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { createItem } from '@directus/sdk';

class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$2 = defineComponent({
  props: {
    schema: {
      type: [Object, Function],
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId("$iLCvx8H2TP");
    const bus = useEventBus(`form-${formId}`);
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent)
          return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        const submitEvent = {
          ...event,
          data: props.state
        };
        emit("submit", submitEvent);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return "_parse" in schema || "_run" in schema || typeof schema === "function" && "schema" in schema;
}
async function getValibotError(state, schema) {
  var _a;
  const result = await ("_parse" in schema ? schema._parse(state) : "_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  return ((_a = result.issues) == null ? void 0 : _a.map((issue) => {
    var _a2;
    return {
      // We know that the key for a form schema is always a string or a number
      path: ((_a2 = issue.path) == null ? void 0 : _a2.map((item) => item.key).join(".")) || "",
      message: issue.message
    };
  })) || [];
}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.18.2_magicast@0.3.4_rollup@4.19.1_vite@5.3.5_@types+node@22.0.0_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
function adaptOnsV3(ons) {
  if (!ons)
    return null;
  return Object.entries(ons).reduce((ret, [key, handler]) => {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    key = `on${key}`;
    return { ...ret, [key]: handler };
  }, {});
}
function h(type, options = {}, children) {
  const { props, domProps, on, ...extraOptions } = options;
  const ons = adaptOnsV3(on);
  const params = { ...extraOptions, ...props, ...domProps, ...ons };
  return h$1(type, params, children);
}
var h_demi_default = h;
function getSvgPathFromStroke(stroke) {
  if (!stroke.length)
    return "";
  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"]
  );
  d.push("Z");
  return d.join(" ");
}
var DEFAULT_BACKGROUND_COLOR = "rgba(0,0,0,0)";
var DEFAULT_PEN_COLOR = "#000";
var DEFAULT_WIDTH = "100%";
var DEFAULT_HEIGHT = "100%";
var IMAGE_TYPES = ["image/png", "image/jpeg", "image/svg+xml"];
var { getStroke } = PerfectFreehand;
var VPerfectSignature_default = defineComponent({
  props: {
    width: {
      type: String,
      required: false,
      default: DEFAULT_WIDTH
    },
    height: {
      type: String,
      required: false,
      default: DEFAULT_HEIGHT
    },
    backgroundColor: {
      type: String,
      required: false,
      default: DEFAULT_BACKGROUND_COLOR
    },
    penColor: {
      type: String,
      required: false,
      default: DEFAULT_PEN_COLOR
    },
    strokeOptions: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["onBegin", "onEnd"],
  data: () => ({
    allInputPoints: [],
    currentInputPoints: null,
    isDrawing: false,
    isLocked: false,
    cachedImages: [],
    ctx: null
  }),
  watch: {
    backgroundColor() {
      this.setBackgroundAndPenColor();
    },
    penColor(color) {
      const ctx = this.getCanvasContext();
      if (ctx)
        ctx.fillStyle = color;
    },
    allInputPoints: {
      deep: true,
      handler() {
        this.inputPointsHandler();
      }
    },
    currentInputPoints: {
      deep: true,
      handler() {
        this.inputPointsHandler();
      }
    }
  },
  mounted() {
    this.resizeCanvas();
  },
  methods: {
    _drawImage(image) {
      const canvas = this.getCanvasElement();
      const ctx = this.getCanvasContext();
      const dpr = (void 0).devicePixelRatio || 1;
      ctx == null ? void 0 : ctx.scale(1 / dpr, 1 / dpr);
      ctx == null ? void 0 : ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx == null ? void 0 : ctx.scale(dpr, dpr);
    },
    handlePointerDown(e) {
      if (this.isLocked)
        return;
      e.preventDefault();
      const canvas = e.composedPath()[0];
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.currentInputPoints = [[x, y, e.pressure]];
      this.isDrawing = true;
      this.$emit("onBegin", e);
    },
    handlePointerMove(e) {
      var _a;
      if (this.isLocked)
        return;
      if (!this.isDrawing)
        return;
      if (e.buttons === 1) {
        e.preventDefault();
        const canvas = e.composedPath()[0];
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.currentInputPoints = [
          ...(_a = this.currentInputPoints) != null ? _a : [],
          [x, y, e.pressure]
        ];
      }
    },
    handlePointerUp(e) {
      if (this.isLocked)
        return;
      e.preventDefault();
      this.isDrawing = false;
      if (!this.currentInputPoints)
        return;
      this.allInputPoints = [...this.allInputPoints, this.currentInputPoints];
      this.currentInputPoints = null;
      this.$emit("onEnd", e);
    },
    handlePointerEnter(e) {
      if (this.isLocked)
        return;
      if (e.buttons === 1)
        this.handlePointerDown(e);
    },
    handlePointerLeave(e) {
      if (this.isLocked)
        return;
      if (!this.isDrawing)
        return;
      this.handlePointerUp(e);
    },
    isEmpty() {
      return !this.allInputPoints.length && !this.cachedImages.length;
    },
    clear() {
      this.cachedImages = [];
      this.allInputPoints = [];
      this.currentInputPoints = null;
    },
    fromData(data) {
      this.allInputPoints = [...this.allInputPoints, ...data];
    },
    lock() {
      this.isLocked = true;
    },
    unlock() {
      this.isLocked = false;
    },
    toData() {
      return this.allInputPoints;
    },
    fromDataURL(data) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          this._drawImage(image);
          this.cachedImages.push(image);
          resolve(true);
        };
        image.onerror = () => {
          reject(new Error("Incorrect data uri provided"));
        };
        image.crossOrigin = "anonymous";
        image.src = data;
      });
    },
    toDataURL(type) {
      if (type && !IMAGE_TYPES.includes(type)) {
        throw new Error(
          `Incorrect image type. Must be one of ${IMAGE_TYPES.join(", ")}.`
        );
      }
      if (this.isEmpty())
        return;
      const canvas = this.getCanvasElement();
      return canvas.toDataURL(type != null ? type : "image/png");
    },
    getCanvasElement() {
      return this.$refs.signaturePad;
    },
    getCanvasContext() {
      if (!this.ctx) {
        const canvas = this.getCanvasElement();
        this.ctx = canvas.getContext("2d");
      }
      return this.ctx;
    },
    setBackgroundAndPenColor() {
      const canvas = this.getCanvasElement();
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = this.backgroundColor;
      ctx == null ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = this.penColor;
    },
    resizeCanvas(clearCanvas = true) {
      const canvas = this.getCanvasElement();
      const rect = canvas.getBoundingClientRect();
      const dpr = (void 0).devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = this.getCanvasContext();
      ctx == null ? void 0 : ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      if (clearCanvas) {
        ctx == null ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.clear();
      }
      this.setBackgroundAndPenColor();
    },
    inputPointsHandler() {
      const canvas = this.getCanvasElement();
      const ctx = this.getCanvasContext();
      ctx == null ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.cachedImages.forEach((image) => this._drawImage(image));
      this.setBackgroundAndPenColor();
      this.allInputPoints.forEach((point) => {
        const pathData2 = getSvgPathFromStroke(
          getStroke(point, this.strokeOptions)
        );
        const myPath2 = new Path2D(pathData2);
        ctx == null ? void 0 : ctx.fill(myPath2);
      });
      if (!this.currentInputPoints)
        return;
      const pathData = getSvgPathFromStroke(
        getStroke(this.currentInputPoints, this.strokeOptions)
      );
      const myPath = new Path2D(pathData);
      ctx == null ? void 0 : ctx.fill(myPath);
    }
  },
  render() {
    const { width, height } = this;
    const handlers = {
      pointerdown: this.handlePointerDown,
      pointerup: this.handlePointerUp,
      pointermove: this.handlePointerMove,
      pointerenter: this.handlePointerEnter,
      pointerleave: this.handlePointerLeave
    };
    return h_demi_default("canvas", {
      ref: "signaturePad",
      style: {
        height,
        width,
        touchAction: "none"
      },
      on: handlers
    });
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VSignature",
  __ssrInlineRender: true,
  props: {
    context: Object
  },
  setup(__props) {
    var _a2, _b2;
    var _a, _b;
    const colorMode = useColorMode();
    const props = __props;
    const options = (_a2 = (_a = props.context) == null ? void 0 : _a.options) != null ? _a2 : ["type", "draw", "upload"];
    const signatureData = ref(
      (_b2 = (_b = props.context) == null ? void 0 : _b.value) != null ? _b2 : {
        type: "draw",
        text: void 0,
        image: void 0
      }
    );
    const signaturePad = ref(null);
    const strokeOptions = {
      size: 8,
      thinning: 0.75,
      smoothing: 0.5,
      streamline: 0.5
    };
    const isDrawing = ref(false);
    const signatureColor = computed(() => {
      return colorMode.value === "dark" ? "#ffffff" : "#0f172a";
    });
    function startDrawing() {
      isDrawing.value = true;
    }
    function endDrawing() {
      var _a22;
      isDrawing.value = false;
      const file = dataURLtoFile((_a22 = signaturePad.value) == null ? void 0 : _a22.toDataURL(), "signature.png");
      signatureData.value.image = file;
    }
    function dataURLtoFile(dataURL, filename) {
      const mimeType = dataURL.split(",")[0].split(":")[1].split(";")[0];
      const bytes = atob(dataURL.split(",")[1]);
      const array = new Uint8Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
      }
      return new File([new Blob([array], { type: mimeType })], filename, { type: mimeType });
    }
    watch(
      signatureData.value,
      (oldVal, newVal) => {
        var _a22;
        (_a22 = props.context) == null ? void 0 : _a22.node.input(newVal);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full p-4 overflow-hidden bg-white border dark:bg-gray-800 dark:border-gray-700" }, _attrs))}><div class="flex justify-between border-b dark:border-gray-700"><div class="flex gap-x-4"><!--[-->`);
      ssrRenderList(unref(options), (item) => {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(signatureData).type === item ? " border-primary" : "border-transparent",
          "border-b-4 pb-2  px-2 capitalize dark:text-white transition duration-150 ease-in-out"
        ])}">${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div><div><button type="button" class="px-2 pb-2 dark:text-white">Clear</button></div></div><div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
      if (unref(signatureData).type === "type") {
        _push(`<input${ssrRenderAttr("value", unref(signatureData).text)} type="text" class="w-full px-4 py-3 text-3xl text-gray-900 border-0 border-b border-gray-300 dark:bg-gray-800 dark:text-white focus:ring-0 focus:border-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 font-signature" placeholder="Type your signature">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(signatureData).type === "draw") {
        _push(`<!--[--><div class="absolute w-full h-px bg-gray-300 dark:bg-gray-700 bottom-8"></div>`);
        if (!unref(isDrawing) && unref(signatureData).image === void 0) {
          _push(`<div class="absolute inset-0 flex items-center justify-center w-full pointer-events-none"><p class="text-5xl text-gray-300 dark:text-gray-600 font-signature">Draw Signature Here</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="z-10">`);
        _push(ssrRenderComponent(unref(VPerfectSignature_default), {
          ref_key: "signaturePad",
          ref: signaturePad,
          "stroke-options": strokeOptions,
          height: "200px",
          "pen-color": unref(signatureColor),
          onOnBegin: startDrawing,
          onOnEnd: endDrawing
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(signatureData).type === "upload") {
        _push(`<div class="p-4"><input class="block w-full text-sm text-gray-900 cursor-pointer dark:text-gray-400 focus:ring-1 focus:ring-primary focus:outline-none" type="file" accept="image/*"><p id="file_input_help" class="mt-1 text-sm text-gray-500 dark:text-gray-300"> Accepted: SVG, PNG, JPG or GIF </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VSignature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const widthClassMap = {
  "33": "md:col-span-2",
  "50": "md:col-span-3",
  "67": "md:col-span-4",
  "100": "md:col-span-6"
};
function renderInput(item, name, state) {
  const commonProps = {
    modelValue: state[name],
    "onUpdate:modelValue": (value) => state[name] = value
  };
  switch (item.type) {
    case "textarea":
      return h$1(__nuxt_component_2, { ...commonProps, placeholder: item.placeholder });
    case "file":
      return h$1(_sfc_main$3, { ...commonProps, placeholder: item.placeholder });
    case "signature":
      return h$1(_sfc_main$1, { ...commonProps, placeholder: item.placeholder });
    case "checkbox":
      return h$1(__nuxt_component_0$1, commonProps);
    default:
      return h$1(__nuxt_component_0, { ...commonProps, placeholder: item.placeholder, type: item.type });
  }
}
const __nuxt_component_1 = defineComponent({
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    state: {
      type: Object,
      default: () => ({})
    },
    validate: {
      type: Function
    },
    onSubmit: {
      type: Function
    }
  },
  setup(props) {
    var _a;
    const groups = (_a = props == null ? void 0 : props.schema) == null ? void 0 : _a.map((item) => {
      const { name, label, placeholder, width, description } = item;
      const cssClass = widthClassMap[item.width] || "md:col-span-6";
      return h$1(__nuxt_component_1$1, { name, label, description, class: cssClass, size: "lg" }, () => [
        // @ts-ignore
        renderInput(item, name, props.state)
      ]);
    });
    if (!groups) {
      return;
    }
    groups.push(
      h$1(
        "div",
        { class: "md:col-span-6" },
        h$1(__nuxt_component_4, {
          type: "submit",
          size: "lg",
          label: "Submit",
          onClick: (event) => {
            event.preventDefault();
            props.onSubmit();
          }
        })
      )
    );
    return () => h$1(Form, { state: props.state, validate: props.validate }, () => groups);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  emits: ["submit", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { query } = useRoute();
    const formData = reactive({ ...query });
    const loading = ref(false);
    const error = ref(null);
    const success = ref(false);
    const validate = (state) => {
      const errors = [];
      if (!state.email)
        errors.push({ path: "email", message: "Required" });
      return errors;
    };
    async function submitForm() {
      loading.value = true;
      try {
        await useDirectus(
          createItem("inbox", {
            data: formData,
            form: props.form.id
          })
        );
        success.value = true;
        if (props.form.on_success === "redirect") {
          return navigateTo(props.form.redirect_url);
        }
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    }
    watch(
      formData,
      () => {
        emit("update:modelValue", formData);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VAlert = _sfc_main$4;
      const _component_FormCustom = __nuxt_component_1;
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><div class="mb-4">`);
      if (unref(error)) {
        _push(ssrRenderComponent(_component_VAlert, { type: "error" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Oops! ${ssrInterpolate(unref(error))}`);
            } else {
              return [
                createTextVNode("Oops! " + toDisplayString(unref(error)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.form.on_success === "message" && unref(success)) {
        _push(ssrRenderComponent(_component_VAlert, { type: "success" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.form.success_message) {
                _push2(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_dompurify_html, _ctx.form.success_message))}${_scopeId}></div>`);
              } else {
                _push2(`<p${_scopeId}>Success! Your form has been submitted.</p>`);
              }
            } else {
              return [
                _ctx.form.success_message ? withDirectives((openBlock(), createBlock("div", { key: 0 }, null, 512)), [
                  [_directive_dompurify_html, _ctx.form.success_message]
                ]) : (openBlock(), createBlock("p", { key: 1 }, "Success! Your form has been submitted."))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      if (!unref(success)) {
        _push(ssrRenderComponent(_component_FormCustom, {
          schema: props.form.schema,
          state: unref(formData),
          validate,
          class: "grid gap-6 md:grid-cols-6",
          "on-submit": submitForm
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/UForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UForm-BXdHEs5F.mjs.map
