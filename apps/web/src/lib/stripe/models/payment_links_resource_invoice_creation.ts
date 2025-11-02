/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_invoice_settings } from './payment_links_resource_invoice_settings';
export type payment_links_resource_invoice_creation = {
    /**
     * Enable creating an invoice on successful payment.
     */
    enabled: boolean;
    /**
     * Configuration for the invoice. Default invoice values will be used if unspecified.
     */
    invoice_data?: payment_links_resource_invoice_settings | null;
};

