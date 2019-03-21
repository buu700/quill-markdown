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

/** Converts a Markdown string into a Quill delta. */
export const markdownToQuill = (markdown: string) : IQuillDelta =>
	convertHtmlToDelta(markdownIt.render(markdown))
;

/** Converts a Quill delta into a Markdown string. */
export const quillToMarkdown = (delta: IQuillDelta) : string =>
	toMarkdown(convertDeltaToHtml(delta))
;
