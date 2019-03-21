"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownIt = require("markdown-it");
var node_quill_converter_1 = require("node-quill-converter");
var toMarkdown = require("to-markdown");
var markdownIt = MarkdownIt();
/** Converts a Markdown string into a Quill delta. */
exports.markdownToQuill = function (markdown) {
    return node_quill_converter_1.convertHtmlToDelta(markdownIt.render(markdown));
};
/** Converts a Quill delta into a Markdown string. */
exports.quillToMarkdown = function (delta) {
    return toMarkdown(node_quill_converter_1.convertDeltaToHtml(delta));
};
//# sourceMappingURL=quill-markdown.js.map