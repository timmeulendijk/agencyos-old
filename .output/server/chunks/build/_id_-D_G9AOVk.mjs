import { _ as _sfc_main$1 } from './PageHeader-BXMJ16Z0.mjs';
import { _ as _sfc_main$2 } from './VText-D0MQff2t.mjs';
import { _ as _sfc_main$3 } from './DateDisplay-Dw0odYQk.mjs';
import { _ as __nuxt_component_4 } from './Button-CwvMvtUt.mjs';
import { _ as _sfc_main$4 } from './UIcon-CFeTNZEP.mjs';
import { _ as _sfc_main$5 } from './Headline-OuodUiss.mjs';
import { _ as __nuxt_component_5 } from './Badge-C80SNhge.mjs';
import { _ as _sfc_main$6 } from './VDivider-CoLvA21X.mjs';
import { _ as _sfc_main$7 } from './Logo-Dz7nGNoc.mjs';
import { _ as _sfc_main$8 } from './UserBadge-DzE2kIn7.mjs';
import { _ as __nuxt_component_2 } from './Table-C-rzx9UI.mjs';
import { u as useStripe } from './useStripe-M4UNwPVt.mjs';
import { a as useRoute, b as useAppConfig, i as useAsyncData } from './server.mjs';
import { w as withAsyncContext, u as useDirectus } from './asyncContext-DyyyRmEv.mjs';
import { readItem } from '@directus/sdk';
import { defineComponent, computed, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { g as getFriendlyDate } from './time-C5trUN3I.mjs';
import { f as formatCurrency } from './currency-qkGe5pRp.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-Dix5D_y-.mjs';
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
import './index-Dqa-xyfo.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
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
import 'vue-dompurify-html';
import 'node:crypto';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Icon-BRjp6c2n.mjs';
import './selectMenu-BQkBDEWS.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import './nuxt-img-BL8_SQyR.mjs';
import './Avatar-CM8WZfag.mjs';
import './user-name-hNaZlTuZ.mjs';
import './Checkbox-Cj7fi5iD.mjs';
import './useFormGroup-DoeWXt3h.mjs';
import './id-CsF31SPu.mjs';
import './useToast-BMHYguAT.mjs';
import '@stripe/stripe-js';

function getPrimaryBillingAddress(organization) {
  if (!organization || !organization.addresses || !Array.isArray(organization.addresses)) {
    return null;
  }
  if (organization.addresses.length === 1) {
    const address = organization.addresses[0];
    return typeof address === "string" ? null : address;
  }
  for (const address of organization.addresses) {
    if (typeof address === "string") {
      continue;
    }
    if (address.is_primary_billing) {
      return address;
    }
  }
  return null;
}
function createMailto(to, { subject, body, cc, bcc } = {}) {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
    cc && `cc=${encodeURIComponent(cc)}`,
    bcc && `bcc=${encodeURIComponent(bcc)}`
  ].filter(Boolean).join("&");
  return `mailto:${to}?${params}`;
}
function createTel(phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/\D+/g, "");
  if (cleanedNumber.length > 10 && cleanedNumber.startsWith("1")) {
    return `tel:+${cleanedNumber}`;
  }
  return `tel:${cleanedNumber}`;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { handleCheckout, loading: stripeLoading } = useStripe();
    const { path, params } = useRoute();
    const { globals } = useAppConfig();
    const {
      data: invoice,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      path,
      () => {
        return useDirectus(
          readItem("os_invoices", params.id, {
            fields: [
              "*",
              {
                contact: ["id", "first_name", "last_name", "email", "phone"],
                line_items: [
                  "id",
                  "line_item_number",
                  "item_name",
                  "quantity",
                  "unit_price",
                  "description",
                  "line_amount",
                  "tax_amount",
                  { item: ["id", "name", "description"] },
                  { tax_rate: ["id", "name", "rate"] }
                ],
                organization: ["id", "name", "logo", { addresses: ["*"] }],
                payments: ["*"]
              }
            ]
          })
        );
      },
      {}
    )), __temp = await __temp, __restore(), __temp);
    const lineItemColumns = [
      {
        key: "line_item_number",
        label: "Line #"
      },
      {
        key: "item_name",
        label: "Item"
      },
      {
        key: "quantity",
        label: "Quantity"
      },
      {
        key: "unit_price",
        label: "Unit Price"
      },
      {
        key: "line_amount",
        label: "Line Amount"
      },
      {
        key: "tax_amount",
        label: "Tax Amount"
      }
    ];
    const isPaid = computed(() => {
      var _a;
      return ((_a = unref(invoice)) == null ? void 0 : _a.status) === "paid";
    });
    const billingAddress = computed(() => {
      var _a;
      return getPrimaryBillingAddress((_a = unref(invoice)) == null ? void 0 : _a.organization);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const _component_PortalPageHeader = _sfc_main$1;
      const _component_VText = _sfc_main$2;
      const _component_DateDisplay = _sfc_main$3;
      const _component_UButton = __nuxt_component_4;
      const _component_UIcon = _sfc_main$4;
      const _component_TypographyHeadline = _sfc_main$5;
      const _component_UBadge = __nuxt_component_5;
      const _component_VDivider = _sfc_main$6;
      const _component_Logo = _sfc_main$7;
      const _component_UserBadge = _sfc_main$8;
      const _component_UTable = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PortalPageHeader, {
        title: `Invoice #${(_a = unref(invoice)) == null ? void 0 : _a.invoice_number}`,
        breadcrumbs: [
          {
            title: "Portal",
            href: "/portal"
          },
          {
            title: "Billing",
            href: "/portal/billing"
          },
          {
            title: "Invoices",
            href: "/portal/billing/invoices"
          }
        ]
      }, {
        center: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            if (!unref(isPaid)) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VText, { class: "font-semibold" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Due Date`);
                  } else {
                    return [
                      createTextVNode("Due Date")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DateDisplay, {
                date: (_a2 = unref(invoice)) == null ? void 0 : _a2.due_date,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(isPaid) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center gap-2"
              }, [
                createVNode(_component_VText, { class: "font-semibold" }, {
                  default: withCtx(() => [
                    createTextVNode("Due Date")
                  ]),
                  _: 1
                }),
                createVNode(_component_DateDisplay, {
                  date: (_b2 = unref(invoice)) == null ? void 0 : _b2.due_date,
                  size: "xs"
                }, null, 8, ["date"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isPaid)) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xl",
                loading: unref(stripeLoading),
                onClick: ($event) => {
                  var _a2;
                  return unref(handleCheckout)((_a2 = unref(invoice)) == null ? void 0 : _a2.id);
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Pay Invoice `);
                  } else {
                    return [
                      createTextVNode(" Pay Invoice ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isPaid)) {
              _push2(`<div class="inline-flex items-center gap-2 px-4 py-2 border rounded-button border-primary"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "material-symbols:price-check-rounded",
                class: "w-8 h-8 text-primary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VText, {
                size: "lg",
                class: "font-bold uppercase font-display"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Paid`);
                  } else {
                    return [
                      createTextVNode("Paid")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(isPaid) ? (openBlock(), createBlock(_component_UButton, {
                key: 0,
                color: "primary",
                size: "xl",
                loading: unref(stripeLoading),
                onClick: ($event) => {
                  var _a2;
                  return unref(handleCheckout)((_a2 = unref(invoice)) == null ? void 0 : _a2.id);
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(" Pay Invoice ")
                ]),
                _: 1
              }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
              unref(isPaid) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "inline-flex items-center gap-2 px-4 py-2 border rounded-button border-primary"
              }, [
                createVNode(_component_UIcon, {
                  name: "material-symbols:price-check-rounded",
                  class: "w-8 h-8 text-primary"
                }),
                createVNode(_component_VText, {
                  size: "lg",
                  class: "font-bold uppercase font-display"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Paid")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="relative flex flex-col p-8 mt-8 space-y-8 bg-white border rounded-panel dark:bg-gray-900 dark:border-gray-700"><section class="relative flex flex-col gap-8 md:justify-between md:flex-row"><div id="invoice-details" class="space-y-1"><div class="inline-flex">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: `Invoice #${(_b = unref(invoice)) == null ? void 0 : _b.invoice_number}`,
        size: "xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UBadge, {
        color: unref(isPaid) ? "primary" : "rose",
        class: "ml-2 capitalize"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a2 = unref(invoice)) == null ? void 0 : _a2.status)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = unref(invoice)) == null ? void 0 : _b2.status), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`Reference: ${ssrInterpolate((_a2 = unref(invoice)) == null ? void 0 : _a2.reference)}`);
          } else {
            return [
              createTextVNode("Reference: " + toDisplayString((_b2 = unref(invoice)) == null ? void 0 : _b2.reference), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
      _push(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`Issued on ${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))((_a2 = unref(invoice)) == null ? void 0 : _a2.issue_date))}`);
          } else {
            return [
              createTextVNode("Issued on " + toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))((_b2 = unref(invoice)) == null ? void 0 : _b2.issue_date)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VText, { class: "font-bold" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`Due on ${ssrInterpolate(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))((_a2 = unref(invoice)) == null ? void 0 : _a2.due_date))}`);
          } else {
            return [
              createTextVNode("Due on " + toDisplayString(("getFriendlyDate" in _ctx ? _ctx.getFriendlyDate : unref(getFriendlyDate))((_b2 = unref(invoice)) == null ? void 0 : _b2.due_date)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div id="company-branding" class="space-y-1.5">`);
      _push(ssrRenderComponent(_component_Logo, { class: "w-32" }, null, _parent));
      if ((_c = unref(globals)) == null ? void 0 : _c.street_address) {
        _push(`<p>${ssrInterpolate(unref(globals).street_address)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = unref(globals)) == null ? void 0 : _d.address_locality) || ((_e = unref(globals)) == null ? void 0 : _e.address_region) || ((_f = unref(globals)) == null ? void 0 : _f.postal_code)) {
        _push(`<p>${ssrInterpolate(unref(globals).address_locality)}, ${ssrInterpolate(unref(globals).address_region)} ${ssrInterpolate(unref(globals).postal_code)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = unref(globals)) == null ? void 0 : _g.phone) {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: ("createTel" in _ctx ? _ctx.createTel : unref(createTel))(unref(globals).phone),
          color: "gray",
          variant: "link",
          padded: false,
          icon: "material-symbols:phone-android-outline-rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(globals).phone)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(globals).phone), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = unref(globals)) == null ? void 0 : _h.email) {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: ("createMailto" in _ctx ? _ctx.createMailto : unref(createMailto))(unref(globals).email, { subject: `Invoice #${(_i = unref(invoice)) == null ? void 0 : _i.invoice_number}` }),
          color: "gray",
          variant: "link",
          padded: false,
          icon: "material-symbols:alternate-email-rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(globals).email)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(globals).email), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section id="bill-to">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: "Bill To",
        size: "xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
      _push(`<div class="flex flex-col gap-8 mt-4 md:flex-row"><div><p class="font-bold">${ssrInterpolate((_k = (_j = unref(invoice)) == null ? void 0 : _j.organization) == null ? void 0 : _k.name)}</p>`);
      if ((_l = unref(billingAddress)) == null ? void 0 : _l.street_address) {
        _push(`<p>${ssrInterpolate(unref(billingAddress).street_address)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (((_m = unref(billingAddress)) == null ? void 0 : _m.address_locality) || ((_n = unref(billingAddress)) == null ? void 0 : _n.address_region) || ((_o = unref(billingAddress)) == null ? void 0 : _o.postal_code)) {
        _push(`<p>${ssrInterpolate(unref(billingAddress).address_locality)}, ${ssrInterpolate(unref(billingAddress).address_region)} ${ssrInterpolate(unref(billingAddress).postal_code)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UserBadge, {
        user: (_p = unref(invoice)) == null ? void 0 : _p.contact,
        size: "sm"
      }, null, _parent));
      _push(`<p>${ssrInterpolate((_q = unref(invoice)) == null ? void 0 : _q.contact.email)}</p><p>${ssrInterpolate((_r = unref(invoice)) == null ? void 0 : _r.contact.phone)}</p></div></div></section><section id="line-items">`);
      _push(ssrRenderComponent(_component_TypographyHeadline, {
        content: "Line Items",
        size: "xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        columns: lineItemColumns,
        rows: (_s = unref(invoice)) == null ? void 0 : _s.line_items
      }, {
        "unit_price-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.unit_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.unit_price)), 1)
            ];
          }
        }),
        "line_amount-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.line_amount))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.line_amount)), 1)
            ];
          }
        }),
        "tax_amount-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.tax_amount))}</p><p class="text-xs"${_scopeId}>${ssrInterpolate(row.tax_rate.name)}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))(row.tax_amount)), 1),
              createVNode("p", { class: "text-xs" }, toDisplayString(row.tax_rate.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section id="totals" class="md:flex md:justify-end"><div class="w-full px-3 py-3 mt-8 border rounded-panel dark:border-gray-700 lg:mt-0 md:max-w-[300px]"><div class="flex items-baseline justify-between py-1">`);
      _push(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Subtotal`);
          } else {
            return [
              createTextVNode("Subtotal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VText, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_a2 = unref(invoice)) == null ? void 0 : _a2.subtotal))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_b2 = unref(invoice)) == null ? void 0 : _b2.subtotal)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-baseline justify-between py-1">`);
      _push(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Taxes`);
          } else {
            return [
              createTextVNode("Taxes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VText, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_a2 = unref(invoice)) == null ? void 0 : _a2.total_tax))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_b2 = unref(invoice)) == null ? void 0 : _b2.total_tax)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_VDivider, null, null, _parent));
      _push(`<div class="flex items-baseline justify-between py-2">`);
      _push(ssrRenderComponent(_component_VText, { class: "font-bold" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Total`);
          } else {
            return [
              createTextVNode("Total")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VText, { class: "text-xl font-bold text-primary-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_a2 = unref(invoice)) == null ? void 0 : _a2.total))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_b2 = unref(invoice)) == null ? void 0 : _b2.total)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-baseline justify-between py-1">`);
      _push(ssrRenderComponent(_component_VText, { "text-color": "light" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Amount Due`);
          } else {
            return [
              createTextVNode("Amount Due")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VText, { class: "font-medium text-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_a2 = unref(invoice)) == null ? void 0 : _a2.amount_due))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("formatCurrency" in _ctx ? _ctx.formatCurrency : unref(formatCurrency))((_b2 = unref(invoice)) == null ? void 0 : _b2.amount_due)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/portal/pages/portal/billing/invoices/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-D_G9AOVk.mjs.map
