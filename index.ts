import * as MarkdownIt from 'markdown-it';
import type {Delta, Op} from 'quill';
import {convertDeltaToHtml, convertHtmlToDelta, IQuillDelta} from 'quill-converter';
import * as TurndownService from 'turndown';

/* Node + web compatibility workaround */
if ((<any> TurndownService).default) {
	(<any> TurndownService) = (<any> TurndownService).default;
}

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
export const quillToMarkdown = (delta: IQuillDelta | Delta | Op[]) : string =>
	htmlToMarkdown(convertDeltaToHtml(delta))
;

export {IQuillDelta} from 'quill-converter';
