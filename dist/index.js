"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quillToMarkdown = exports.markdownToQuill = exports.markdownToHTML = exports.htmlToMarkdown = void 0;
var MarkdownIt = require("markdown-it");
var quill_converter_1 = require("quill-converter");
var TurndownService = require("turndown");
/* Node + web compatibility workaround */
if (TurndownService.default) {
    TurndownService = TurndownService.default;
}
var markdownIt = MarkdownIt();
var turndownService = new TurndownService();
/** Converts an HTML string into a Markdown string. */
var htmlToMarkdown = function (html) {
    return turndownService.turndown(html);
};
exports.htmlToMarkdown = htmlToMarkdown;
/** Converts a Markdown string into a Quill delta. */
var markdownToHTML = function (markdown) {
    return markdownIt.render(markdown);
};
exports.markdownToHTML = markdownToHTML;
/** Converts a Markdown string into a Quill delta. */
var markdownToQuill = function (markdown) {
    return (0, quill_converter_1.convertHtmlToDelta)((0, exports.markdownToHTML)(markdown));
};
exports.markdownToQuill = markdownToQuill;
/** Converts a Quill delta into a Markdown string. */
var quillToMarkdown = function (delta) {
    return (0, exports.htmlToMarkdown)((0, quill_converter_1.convertDeltaToHtml)(delta));
};
exports.quillToMarkdown = quillToMarkdown;
//# sourceMappingURL=index.js.map