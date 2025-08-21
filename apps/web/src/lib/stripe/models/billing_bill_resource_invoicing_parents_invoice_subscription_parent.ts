/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscription } from './subscription';
export type billing_bill_resource_invoicing_parents_invoice_subscription_parent = {
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) defined as subscription metadata when an invoice is created. Becomes an immutable snapshot of the subscription metadata at the time of invoice finalization.
     * *Note: This attribute is populated only for invoices created on or after June 29, 2023.*
     */
    metadata?: Record<string, string> | null;
    /**
     * The subscription that generated this invoice
     */
    subscription: (string | subscription);
    /**
     * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
     */
    subscription_proration_date?: number;
};

