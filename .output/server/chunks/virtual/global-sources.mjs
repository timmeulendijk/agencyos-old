const sources = [
    {
        "context": {
            "name": "dynamicUrlsApiEndpoint",
            "description": "Generated from your dynamicUrlsApiEndpoint config.",
            "tips": [
                "The `dynamicUrlsApiEndpoint` config is deprecated.",
                "Consider renaming the `api/_sitemap-urls` file and add it the `sitemap.sources` config instead. This provides more explicit sitemap generation."
            ]
        },
        "fetch": "/api/_sitemap-urls",
        "sourceType": "user"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/auth"
            },
            {
                "loc": "/auth/logout"
            },
            {
                "loc": "/auth/signin"
            },
            {
                "loc": "/help"
            },
            {
                "loc": "/portal/account"
            },
            {
                "loc": "/portal/billing"
            },
            {
                "loc": "/portal/billing/invoices"
            },
            {
                "loc": "/portal/files"
            },
            {
                "loc": "/portal/help"
            },
            {
                "loc": "/portal"
            },
            {
                "loc": "/portal/projects"
            },
            {
                "loc": "/posts"
            },
            {
                "loc": "/projects"
            },
            {
                "loc": "/sitemap.xml"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
