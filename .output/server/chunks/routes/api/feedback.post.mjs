import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { d as directusServer } from '../../_/directus-server.mjs';
import { updateItem, createItem } from '@directus/sdk';
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

const feedback_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { id, title, url, rating, visitor_id, comments } = body;
    let response;
    if (id) {
      response = await directusServer.request(
        updateItem("help_feedback", id, {
          title,
          url,
          rating,
          visitor_id,
          comments
        })
      );
    } else {
      response = await directusServer.request(
        createItem("help_feedback", {
          title,
          url,
          rating,
          visitor_id,
          comments
        })
      );
    }
    return response;
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: err.message
    });
  }
});

export { feedback_post as default };
//# sourceMappingURL=feedback.post.mjs.map
