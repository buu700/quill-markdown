import * as Quill from 'quill';
/** Quill delta. */
export interface IQuillDelta {
    /** @see Quill.DeltaOperation */
    ops: Quill.DeltaOperation[];
}
/** Converts an HTML string into a Markdown string. */
export declare const htmlToMarkdown: (html: string) => string;
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToHTML: (markdown: string) => string;
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToQuill: (markdown: string) => IQuillDelta;
/** Converts a Quill delta into a Markdown string. */
export declare const quillToMarkdown: (delta: IQuillDelta) => string;
