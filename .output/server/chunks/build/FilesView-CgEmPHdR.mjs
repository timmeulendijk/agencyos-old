import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as __nuxt_component_1 } from './Modal-B8yYdas2.mjs';
import { _ as __nuxt_component_1$1 } from './Card-Bnf4_qmP.mjs';
import { _ as _sfc_main$2 } from './Headline-OuodUiss.mjs';
import { _ as _sfc_main$3 } from './VUpload-DWTZMVN2.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, isRef, createVNode, useSSRContext, computed, mergeProps, toDisplayString } from 'vue';
import { T as refreshNuxtData } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-Dix5D_y-.mjs';
import { _ as _sfc_main$4 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$5 } from './FileCard-lKi1YShj.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readFolders, readFiles } from '@directus/sdk';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FileUploadModal",
  __ssrInlineRender: true,
  props: {
    folderId: {}
  },
  setup(__props) {
    const showUploadModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_4;
      const _component_UModal = __nuxt_component_1;
      const _component_UCard = __nuxt_component_1$1;
      const _component_TypographyHeadline = _sfc_main$2;
      const _component_VUpload = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "material-symbols:upload-file-outline",
        size: "lg",
        onClick: ($event) => showUploadModal.value = !unref(showUploadModal)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Upload Files `);
          } else {
            return [
              createTextVNode(" Upload Files ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showUploadModal),
        "onUpdate:modelValue": ($event) => isRef(showUploadModal) ? showUploadModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TypographyHeadline, {
                    content: "Upload File",
                    size: "xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TypographyHeadline, {
                      content: "Upload File",
                      size: "xs"
                    })
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-x-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    onClick: ($event) => showUploadModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Done`);
                      } else {
                        return [
                          createTextVNode("Done")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-x-4" }, [
                      createVNode(_component_UButton, {
                        color: "primary",
                        onClick: ($event) => showUploadModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Done")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VUpload, {
                    "folder-id": _ctx.folderId,
                    multiple: "",
                    onSuccess: () => {
                      showUploadModal.value = false;
                      ("refreshNuxtData" in _ctx ? _ctx.refreshNuxtData : unref(refreshNuxtData))("folder-detail-" + _ctx.folderId);
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VUpload, {
                      "folder-id": _ctx.folderId,
                      multiple: "",
                      onSuccess: () => {
                        showUploadModal.value = false;
                        ("refreshNuxtData" in _ctx ? _ctx.refreshNuxtData : unref(refreshNuxtData))("folder-detail-" + _ctx.folderId);
                      }
                    }, null, 8, ["folder-id", "onSuccess"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode(_component_TypographyHeadline, {
                    content: "Upload File",
                    size: "xs"
                  })
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-x-4" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      onClick: ($event) => showUploadModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Done")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_VUpload, {
                    "folder-id": _ctx.folderId,
                    multiple: "",
                    onSuccess: () => {
                      showUploadModal.value = false;
                      ("refreshNuxtData" in _ctx ? _ctx.refreshNuxtData : unref(refreshNuxtData))("folder-detail-" + _ctx.folderId);
                    }
                  }, null, 8, ["folder-id", "onSuccess"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/FileUploadModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FilesView",
  __ssrInlineRender: true,
  props: {
    folderId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    async function fetchData(props2 = {}) {
      try {
        const folderReq = useDirectus(
          readFolders({
            fields: ["*"],
            // @ts-ignore
            filter: {
              // parent: {
              // 	_eq: props.folderId ?? null,
              // },
            }
          })
        );
        const fileReq = useDirectus(
          readFiles({
            fields: ["*"],
            // @ts-ignore
            filter: {
              folder: {
                _eq: props2.folderId
              }
            }
          })
        );
        const [folders2, files2] = await Promise.all([folderReq, fileReq]);
        return {
          folders: folders2,
          files: files2
        };
      } catch (error) {
        return null;
      }
    }
    const data = ([__temp, __restore] = withAsyncContext(() => fetchData(props)), __temp = await __temp, __restore(), __temp);
    const folders = computed(() => {
      var _a;
      return (_a = unref(data)) == null ? void 0 : _a.folders;
    });
    const files = computed(() => {
      var _a;
      return (_a = unref(data)) == null ? void 0 : _a.files;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UIcon = _sfc_main$4;
      const _component_PortalFileCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6" }, _attrs))}>`);
      if (unref(folders) && unref(folders).length > 0) {
        _push(`<section><div class="grid gap-6 md:grid-cols-4"><!--[-->`);
        ssrRenderList(unref(folders), (folder) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: folder.id,
            href: `/portal/files/folders/${folder.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UCard, {
                  class: "h-full",
                  ui: {
                    strategy: "merge",
                    ring: "hover:ring-primary dark:hover:ring-primary",
                    body: {
                      base: "h-full flex flex-col",
                      padding: "p-4 md:p-4"
                    }
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "material-symbols:folder",
                        class: "w-6 h-6 text-gray-500"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-sm truncate"${_scopeId2}>${ssrInterpolate(folder.name)}</p></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "material-symbols:folder",
                            class: "w-6 h-6 text-gray-500"
                          }),
                          createVNode("p", { class: "text-sm truncate" }, toDisplayString(folder.name), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UCard, {
                    class: "h-full",
                    ui: {
                      strategy: "merge",
                      ring: "hover:ring-primary dark:hover:ring-primary",
                      body: {
                        base: "h-full flex flex-col",
                        padding: "p-4 md:p-4"
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "material-symbols:folder",
                          class: "w-6 h-6 text-gray-500"
                        }),
                        createVNode("p", { class: "text-sm truncate" }, toDisplayString(folder.name), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class=""><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(files), (file) => {
        _push(ssrRenderComponent(_component_PortalFileCard, {
          key: file.id,
          file
        }, null, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/components/FilesView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=FilesView-CgEmPHdR.mjs.map
