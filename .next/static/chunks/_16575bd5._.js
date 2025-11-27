(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sanity/env.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-05';
const dataset = ("TURBOPACK compile-time value", "production");
const projectId = ("TURBOPACK compile-time value", "gd0vlhj8");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemaTypes/documents/photos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
        {
            name: "favorite",
            title: "Favorite",
            type: "boolean"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule)=>Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule)=>Rule.required()
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemaTypes/documents/blogPost.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule)=>Rule.required(),
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "date",
            title: "Date",
            type: "date",
            validation: (Rule)=>Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule)=>Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                },
                {
                    type: "image"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemaTypes/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$photos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/photos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$blogPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/blogPost.js [app-client] (ecmascript)");
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$photos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$blogPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/structure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
__turbopack_context__.s([
    "structure",
    ()=>structure
]);
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity.config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.jsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$media$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity-plugin-media/dist/index.mjs [app-client] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/structure.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$media$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["media"])()
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_16575bd5._.js.map