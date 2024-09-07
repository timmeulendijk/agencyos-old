import { createDirectus, rest, staticToken } from '@directus/sdk';

const directusUrl = process.env.DIRECTUS_URL;
const directusServer = createDirectus(directusUrl).with(rest()).with(staticToken(process.env.DIRECTUS_SERVER_TOKEN));

export { directusServer as d };
//# sourceMappingURL=directus-server.mjs.map
