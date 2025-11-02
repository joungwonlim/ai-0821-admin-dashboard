/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_parents_invoice_quote_parent } from './billing_bill_resource_invoicing_parents_invoice_quote_parent';
import type { billing_bill_resource_invoicing_parents_invoice_subscription_parent } from './billing_bill_resource_invoicing_parents_invoice_subscription_parent';
export type billing_bill_resource_invoicing_parents_invoice_parent = {
    /**
     * Details about the quote that generated this invoice
     */
    quote_details?: billing_bill_resource_invoicing_parents_invoice_quote_parent | null;
    /**
     * Details about the subscription that generated this invoice
     */
    subscription_details?: billing_bill_resource_invoicing_parents_invoice_subscription_parent | null;
    /**
     * The type of parent that generated this invoice
     */
    type: billing_bill_resource_invoicing_parents_invoice_parent.type;
};
export namespace billing_bill_resource_invoicing_parents_invoice_parent {
    /**
     * The type of parent that generated this invoice
     */
    export enum type {
        QUOTE_DETAILS = 'quote_details',
        SUBSCRIPTION_DETAILS = 'subscription_details',
    }
}

