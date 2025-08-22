/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice } from './invoice';
export type billing_credit_grants_resource_balance_credits_applied = {
    /**
     * The invoice to which the billing credits were applied.
     */
    invoice: (string | invoice);
    /**
     * The invoice line item to which the billing credits were applied.
     */
    invoice_line_item: string;
};

