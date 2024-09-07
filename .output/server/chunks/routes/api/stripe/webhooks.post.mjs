import { d as defineEventHandler, e as getHeader, u as useRuntimeConfig, f as readRawBody, c as createError } from '../../../runtime.mjs';
import { d as directusServer } from '../../../_/directus-server.mjs';
import Stripe from 'stripe';
import { c as centsToDollars } from '../../../_/currency.mjs';
import { createItem } from '@directus/sdk';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vue';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'module';

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion: "2023-08-16"
});
const relevantEvents = [
  "checkout.session.async_payment_failed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.completed"
];
const webhooks_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const sig = await getHeader(event, "stripe-signature");
  const { stripeWebhookSecret } = useRuntimeConfig();
  const webhookSecret = stripeWebhookSecret;
  let stripeEvent;
  try {
    if (!sig || !webhookSecret)
      return;
    const rawBody = await readRawBody(event);
    if (!rawBody)
      return;
    stripeEvent = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (error) {
    createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  if (stripeEvent && relevantEvents.includes(stripeEvent.type)) {
    try {
      switch (stripeEvent.type) {
        case "checkout.session.completed": {
          const checkoutSession = stripeEvent.data.object;
          const paymentIntentResponse = await stripe.paymentIntents.retrieve(checkoutSession.payment_intent, {
            expand: ["charges"]
          });
          const metadata = checkoutSession.metadata;
          const contact_id = metadata == null ? void 0 : metadata.contact_id;
          const organization_id = metadata == null ? void 0 : metadata.organization_id;
          const invoice_id = metadata == null ? void 0 : metadata.invoice_id;
          const payment = await directusServer.request(
            createItem("os_payments", {
              organization: organization_id,
              contact: contact_id,
              invoice: invoice_id,
              // Use the charge date from the payment intent but convert to ISO string format
              // @ts-ignore
              payment_date: new Date((_c = (_b = (_a = paymentIntentResponse == null ? void 0 : paymentIntentResponse.charges) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.created) != null ? _c : 0 * 1e3).toISOString(),
              stripe_payment_id: checkoutSession == null ? void 0 : checkoutSession.payment_intent,
              amount: centsToDollars((_d = checkoutSession.amount_total) != null ? _d : 0),
              metadata: { checkoutSession, paymentIntent: paymentIntentResponse },
              // @ts-ignore
              receipt_url: (_g = (_f = (_e = paymentIntentResponse.charges) == null ? void 0 : _e.data[0]) == null ? void 0 : _f.receipt_url) != null ? _g : null
            })
          );
          break;
        }
        case "checkout.session.async_payment_failed": {
          break;
        }
        case "checkout.session.async_payment_succeeded": {
          break;
        }
        default:
          throw new Error("Unhandled relevant event!");
      }
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: err.message
      });
    }
  }
  return {
    received: true
  };
});

export { webhooks_post as default };
//# sourceMappingURL=webhooks.post.mjs.map
