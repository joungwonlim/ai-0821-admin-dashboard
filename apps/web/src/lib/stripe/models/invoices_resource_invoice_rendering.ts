/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_rendering_pdf } from './invoice_rendering_pdf';
export type invoices_resource_invoice_rendering = {
    /**
     * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
     */
    amount_tax_display?: string | null;
    /**
     * Invoice pdf rendering options
     */
    pdf?: invoice_rendering_pdf | null;
    /**
     * ID of the rendering template that the invoice is formatted by.
     */
    template?: string | null;
    /**
     * Version of the rendering template that the invoice is using.
     */
    template_version?: number | null;
};

