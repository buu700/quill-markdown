import * as Quill from 'quill';
/** Quill delta. */
export interface IQuillDelta {
    /** @see Quill.DeltaOperation */
    ops: Quill.DeltaOperation[];
}
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToQuill: (markdown: string) => IQuillDelta;
/** Converts a Quill delta into a Markdown string. */
export declare const quillToMarkdown: (delta: IQuillDelta) => string;
