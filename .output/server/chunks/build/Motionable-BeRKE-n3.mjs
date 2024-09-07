import { defineComponent, ref, watch, resolveDirective, unref, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { D as useMotions } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Motionable",
  __ssrInlineRender: true,
  props: {
    as: { default: "div" },
    name: {},
    show: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const motions = useMotions();
    const leaved = ref(!props.show);
    watch(
      () => props.show,
      async (newShow) => {
        const motion = motions[props.name];
        if (motion && motion.isAnimating.value) {
          motion.stop("leave");
          if (newShow) {
            motion.apply("enter");
          }
        }
        if (!newShow) {
          leaved.value = false;
          motion.leave(() => {
            leaved.value = true;
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      if (_ctx.show || !unref(leaved)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_motion, _ctx.name)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Motionable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Motionable-BeRKE-n3.mjs.map
