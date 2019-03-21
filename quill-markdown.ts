import * as MarkdownIt from 'markdown-it';
import {convertDeltaToHtml, convertHtmlToDelta} from 'node-quill-converter';
import * as Quill from 'quill';
import * as toMarkdown from 'to-markdown';


const markdownIt = MarkdownIt();

/** Converts a Markdown string into a Quill delta. */
export const markdownToQuill = (markdown: string) =>
	convertHtmlToDelta(markdownIt.render(markdown))
;

/** Converts a Quill delta into a Markdown string. */
export const quillToMarkdown = (delta: {ops: Quill.DeltaOperation[]}) =>
	toMarkdown(convertDeltaToHtml(delta))
;
