import { _ as _sfc_main$2 } from './VLabel-D4wsGVsj.mjs';
import __nuxt_component_0 from './index-Dqa-xyfo.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$3 } from './VAlert-B7QIU45Y.mjs';
import { _ as __nuxt_component_4 } from './nuxt-img-BL8_SQyR.mjs';
import { u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { uploadFiles } from '@directus/sdk';
import { c as createError } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VLoading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VUpload",
  __ssrInlineRender: true,
  props: {
    label: {},
    modelValue: { default: () => [] },
    multiple: { type: Boolean, default: false },
    sizeLimitMb: { default: 5 },
    accept: { default: "image/*" },
    folderId: { default: null }
  },
  emits: ["update:modelValue", "error", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { dragging, onDragEnter, onDragLeave, onDrop } = useDragging();
    const { uploading, error, onSelect, processUpload } = useUpload();
    const files = ref(props.modelValue);
    function useDragging() {
      const dragging2 = ref(false);
      let dragCounter = 0;
      return { onDragEnter: onDragEnter2, onDragLeave: onDragLeave2, onDrop: onDrop2, dragging: dragging2 };
      function onDragEnter2() {
        dragCounter++;
        if (dragCounter === 1) {
          dragging2.value = true;
        }
      }
      function onDragLeave2() {
        dragCounter--;
        if (dragCounter === 0) {
          dragging2.value = false;
        }
      }
      function onDrop2(event) {
        dragCounter = 0;
        dragging2.value = false;
        if (!event.dataTransfer) {
          return;
        }
        const fileList = event.dataTransfer.files;
        if (fileList.length > 0) {
          processUpload(fileList);
        }
      }
    }
    function useUpload() {
      const uploading2 = ref(false);
      const error2 = ref(null);
      return {
        uploading: uploading2,
        error: error2,
        processUpload: processUpload2,
        uploadFile,
        checkFileSize,
        onSelect: onSelect2
      };
      async function processUpload2(fileList) {
        error2.value = null;
        uploading2.value = true;
        const filesToProcess = Array.from(fileList);
        try {
          if (filesToProcess.length > 1) {
            const uploadedFiles = await Promise.all(filesToProcess.map((file) => uploadFile(file)));
            files.value.push(...uploadedFiles);
            emit("update:modelValue", files.value);
          } else {
            const fileToUpload = filesToProcess[0];
            checkFileSize(fileToUpload);
            const uploadedFile = await uploadFile(fileToUpload);
            files.value.push(uploadedFile);
            emit("update:modelValue", files.value);
          }
          emit("success", files.value);
        } catch (e) {
          error2.value = e.message;
        } finally {
          uploading2.value = false;
        }
      }
      async function uploadFile(file) {
        try {
          const form = new FormData();
          if (props.folderId) {
            form.append("folder", props.folderId);
          }
          form.append("file", file);
          const uploadedFile = await useDirectus(uploadFiles(form));
          return uploadedFile;
        } catch (e) {
          throw createError({
            statusCode: 500,
            statusMessage: "Error uploading file..."
          });
        }
      }
      function checkFileSize(file) {
        if (props.sizeLimitMb) {
          const fileSize = file.size / 1e6;
          if (fileSize > props.sizeLimitMb) {
            throw new Error(`Oops. Your file size is ${fileSize.toFixed(2)}MB, the max is ${props.sizeLimitMb}MB`);
          }
        }
      }
      function onSelect2(event) {
        const input = event.target;
        const fileList = input.files;
        if (fileList && fileList.length > 0) {
          processUpload2(fileList);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VLabel = _sfc_main$2;
      const _component_Icon = __nuxt_component_0;
      const _component_VLoading = __nuxt_component_2;
      const _component_VAlert = _sfc_main$3;
      const _component_NuxtImg = __nuxt_component_4;
      _push(`<fieldset${ssrRenderAttrs(_attrs)}>`);
      if (_ctx.label) {
        _push(ssrRenderComponent(_component_VLabel, { label: _ctx.label }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.multiple ? true : unref(files).length === 0) {
        _push(`<div class="${ssrRenderClass([
          "dropzone",
          {
            "border-primary bg-primary-50 dark:bg-primary !text-primary  dark:!text-gray-100 dark:border-primary": unref(dragging),
            "hover:border-primary hover:text-primary dark:hover:text-primary dark:hover:border-primary": !unref(dragging) && !unref(uploading),
            "text-gray-500 border-gray-300 dark:text-gray-100 dark:border-gray-700": !unref(uploading),
            "cursor-not-allowed dark:border-gray-700 dark:text-gray-100 text-gray-500 border-gray-300": unref(uploading)
          }
        ])}"><input type="file" class="absolute inset-0 opacity-0 appearance-none cursor-pointer"${ssrIncludeBooleanAttr(_ctx.multiple) ? " multiple" : ""}${ssrRenderAttr("accept", _ctx.accept)}><div class="h-full mx-auto text-sm font-medium text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:cloud-arrow-up",
          class: "w-8 h-8 mx-auto mb-2"
        }, null, _parent));
        if (unref(dragging)) {
          _push(`<p>Drop to upload</p>`);
        } else {
          _push(`<p>Drag and drop files here or click to browse</p>`);
        }
        if (_ctx.sizeLimitMb) {
          _push(`<p class="mt-1 text-xs">Max File Size: ${ssrInterpolate(_ctx.sizeLimitMb)} MB</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(uploading)) {
          _push(`<div class="absolute inset-0 flex items-center justify-center bg-white rounded-md bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-90">`);
          _push(ssrRenderComponent(_component_VLoading, { class: "w-16 h-16 text-primary dark:text-primary" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(ssrRenderComponent(_component_VAlert, {
          type: "error",
          class: "mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(error))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(error)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(unref(files), (file, fileIdx) => {
        _push(`<li><div class="relative flex items-center px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: file.id,
          class: "object-contain w-12 h-12 mr-4 dark:brightness-90"
        }, null, _parent));
        _push(`<span class="sm:text-sm dark:text-gray-200">${ssrInterpolate(file.filename_download)}</span><span class="flex ml-auto cursor-pointer"><button>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:trash",
          class: "w-5 h-5 text-red-500 stroke-current hover:text-red-600 flex-shrink-none"
        }, null, _parent));
        _push(`</button></span></div></li>`);
      });
      _push(`<!--]--></ul></fieldset>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/VUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VUpload-DWTZMVN2.mjs.map
