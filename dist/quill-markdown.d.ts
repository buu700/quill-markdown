import * as Quill from 'quill';
/** Converts a Markdown string into a Quill delta. */
export declare const markdownToQuill: (markdown: string) => any;
/** Converts a Quill delta into a Markdown string. */
export declare const quillToMarkdown: (delta: {
    ops: Quill.DeltaOperation[];
}) => string;
