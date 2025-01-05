import type { Delta, Op } from 'quill';
import { IQuillDelta } from 'quill-converter';
/** Converts an HTML string into a Markdown string. */
export declare const htmlToMarkdown: (html: string) => string;
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToHTML: (markdown: string) => string;
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToQuill: (markdown: string) => IQuillDelta;
/** Converts a Quill delta into a Markdown string. */
export declare const quillToMarkdown: (delta: IQuillDelta | Delta | Op[]) => string;
export { IQuillDelta } from 'quill-converter';
