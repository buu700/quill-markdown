import * as MarkdownIt from 'markdown-it';
import {convertDeltaToHtml, convertHtmlToDelta} from 'node-quill-converter';
import * as Quill from 'quill';
import * as toMarkdown from 'to-markdown';


const markdownIt = MarkdownIt();

/** Quill delta. */
export interface IQuillDelta {
	/** @see Quill.DeltaOperation */
	ops: Quill.DeltaOperation[];
}

/** Converts an HTML string into a Markdown string. */
export const htmlToMarkdown = (html: string) : string =>
	toMarkdown(html)
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
