/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_lines_parents_invoice_line_item_invoice_item_parent } from './billing_bill_resource_invoicing_lines_parents_invoice_line_item_invoice_item_parent';
import type { billing_bill_resource_invoicing_lines_parents_invoice_line_item_subscription_item_parent } from './billing_bill_resource_invoicing_lines_parents_invoice_line_item_subscription_item_parent';
export type billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent = {
    /**
     * Details about the invoice item that generated this line item
     */
    invoice_item_details?: billing_bill_resource_invoicing_lines_parents_invoice_line_item_invoice_item_parent | null;
    /**
     * Details about the subscription item that generated this line item
     */
    subscription_item_details?: billing_bill_resource_invoicing_lines_parents_invoice_line_item_subscription_item_parent | null;
    /**
     * The type of parent that generated this line item
     */
    type: billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent.type;
};
export namespace billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent {
    /**
     * The type of parent that generated this line item
     */
    export enum type {
        INVOICE_ITEM_DETAILS = 'invoice_item_details',
        SUBSCRIPTION_ITEM_DETAILS = 'subscription_item_details',
    }
}

