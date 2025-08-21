/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice } from './invoice';
export type invoices_resource_from_invoice = {
    /**
     * The relation between this invoice and the cloned invoice
     */
    action: string;
    /**
     * The invoice that was cloned.
     */
    invoice: (string | invoice);
};

