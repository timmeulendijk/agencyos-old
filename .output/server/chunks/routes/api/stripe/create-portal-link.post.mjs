import { d as defineEventHandler, r as readBody, b as getRequestHeaders, c as createError, u as useRuntimeConfig } from '../../../runtime.mjs';
import Stripe from 'stripe';
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
const createPortalLink_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const headers = getRequestHeaders(event);
  try {
    const { url } = await stripe.billingPortal.sessions.create({
      customer: body.customerId,
      return_url: headers.referer
    });
    return {
      url
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (_a = error.message) != null ? _a : "An unexpected error occurred"
    });
  }
});

export { createPortalLink_post as default };
//# sourceMappingURL=create-portal-link.post.mjs.map
