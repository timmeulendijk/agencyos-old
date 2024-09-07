import { d as defineEventHandler, r as readBody, b as getRequestHeaders, c as createError, u as useRuntimeConfig } from '../../../runtime.mjs';
import { d as directusServer } from '../../../_/directus-server.mjs';
import Stripe from 'stripe';
import { d as dollarsToCents } from '../../../_/currency.mjs';
import { readItem, updateItem } from '@directus/sdk';
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
const createCheckoutSession_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const body = await readBody(event);
  const headers = getRequestHeaders(event);
  try {
    const { invoiceId } = body;
    const invoice = await directusServer.request(
      readItem("os_invoices", invoiceId, {
        fields: [
          "*",
          {
            organization: ["id", "stripe_customer_id", "email", "name", "phone", "email"],
            contact: ["id", "first_name", "last_name", "email"],
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
            payments: ["*"]
          }
        ]
      })
    );
    if (!invoice) {
      throw new Error("Invoice not found");
    }
    const organization = invoice == null ? void 0 : invoice.organization;
    const contact = invoice == null ? void 0 : invoice.contact;
    if (!organization || !contact) {
      throw new Error("Missing organization or contact");
    }
    if (invoice.status === "paid" || invoice.status === "void" || invoice.amount_due === 0) {
      throw new Error("Invoice is already paid");
    }
    let stripeCustomerId;
    if (organization == null ? void 0 : organization.stripe_customer_id) {
      stripeCustomerId = organization.stripe_customer_id;
    } else {
      const customer = await stripe.customers.create({
        // @ts-ignore Not sure why this is throwing an no overload error
        email: organization.email,
        name: organization.name,
        phone: organization.phone,
        metadata: {
          contact_id: contact.id,
          organization_id: organization.id
        }
      });
      stripeCustomerId = customer.id;
      if (!stripeCustomerId || !organization.id) {
        throw new Error("Stripe customer could not be created");
      }
      await directusServer.request(
        updateItem("organizations", organization == null ? void 0 : organization.id, {
          stripe_customer_id: stripeCustomerId
        })
      );
    }
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: `Payment for INV# ${invoice.invoice_number}`,
              description: `Reference: ${invoice.reference}`
            },
            unit_amount: dollarsToCents((_a = invoice.amount_due) != null ? _a : 0)
          }
        }
      ],
      mode: "payment",
      success_url: `${headers.referer}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers.referer}?session_id=cancelled`,
      metadata: {
        invoice_id: (_b = invoice.id) != null ? _b : null,
        contact_id: (_c = contact.id) != null ? _c : null,
        organization_id: (_d = organization.id) != null ? _d : null
      }
    });
    return session;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (_e = error.message) != null ? _e : "An unexpected error occurred"
    });
  }
});

export { createCheckoutSession_post as default };
//# sourceMappingURL=create-checkout-session.post.mjs.map
