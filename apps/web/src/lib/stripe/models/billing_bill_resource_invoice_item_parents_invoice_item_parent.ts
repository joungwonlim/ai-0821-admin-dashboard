/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoice_item_parents_invoice_item_subscription_parent } from './billing_bill_resource_invoice_item_parents_invoice_item_subscription_parent';
export type billing_bill_resource_invoice_item_parents_invoice_item_parent = {
    /**
     * Details about the subscription that generated this invoice item
     */
    subscription_details?: billing_bill_resource_invoice_item_parents_invoice_item_subscription_parent | null;
    /**
     * The type of parent that generated this invoice item
     */
    type: billing_bill_resource_invoice_item_parents_invoice_item_parent.type;
};
export namespace billing_bill_resource_invoice_item_parents_invoice_item_parent {
    /**
     * The type of parent that generated this invoice item
     */
    export enum type {
        SUBSCRIPTION_DETAILS = 'subscription_details',
    }
}

