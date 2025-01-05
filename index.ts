import * as MarkdownIt from 'markdown-it';
import {convertDeltaToHtml, convertHtmlToDelta, IQuillDelta} from 'quill-converter';
import * as TurndownService from 'turndown';

const markdownIt = MarkdownIt();
const turndownService = new TurndownService();

/** Converts an HTML string into a Markdown string. */
export const htmlToMarkdown = (html: string) : string =>
	turndownService.turndown(html)
;

/** Converts a Markdown string into a Quill delta. */
export const markdownToHTML = (markdown: string) : string =>
	markdownIt.render(markdown)
;

/** Converts a Markdown string into a Quill delta. */
export const markdownToQuill = (markdown: string) : IQuillDelta =>
	convertHtmlToDelta(markdownToHTML(markdown))
;

/** Converts a Quill delta into a Markdown string. */
export const quillToMarkdown = (delta: IQuillDelta) : string =>
	htmlToMarkdown(convertDeltaToHtml(delta))
;

export {IQuillDelta} from 'quill-converter';
