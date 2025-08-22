/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type invoice_rendering_pdf = {
    /**
     * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
     */
    page_size?: invoice_rendering_pdf.page_size | null;
};
export namespace invoice_rendering_pdf {
    /**
     * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
     */
    export enum page_size {
        A4 = 'a4',
        AUTO = 'auto',
        LETTER = 'letter',
    }
}

