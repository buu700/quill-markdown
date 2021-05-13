"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quillToMarkdown = exports.markdownToQuill = exports.markdownToHTML = exports.htmlToMarkdown = void 0;
var MarkdownIt = require("markdown-it");
var node_quill_converter_1 = require("node-quill-converter");
var toMarkdown = require("to-markdown");
var markdownIt = MarkdownIt();
/** Converts an HTML string into a Markdown string. */
var htmlToMarkdown = function (html) {
    return toMarkdown(html);
};
exports.htmlToMarkdown = htmlToMarkdown;
/** Converts a Markdown string into a Quill delta. */
var markdownToHTML = function (markdown) {
    return markdownIt.render(markdown);
};
exports.markdownToHTML = markdownToHTML;
/** Converts a Markdown string into a Quill delta. */
var markdownToQuill = function (markdown) {
    return node_quill_converter_1.convertHtmlToDelta(exports.markdownToHTML(markdown));
};
exports.markdownToQuill = markdownToQuill;
/** Converts a Quill delta into a Markdown string. */
var quillToMarkdown = function (delta) {
    return exports.htmlToMarkdown(node_quill_converter_1.convertDeltaToHtml(delta));
};
exports.quillToMarkdown = quillToMarkdown;
//# sourceMappingURL=quill-markdown.js.map