/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_pricing_pricing_price_details } from './billing_bill_resource_invoicing_pricing_pricing_price_details';
export type billing_bill_resource_invoicing_pricing_pricing = {
    price_details?: billing_bill_resource_invoicing_pricing_pricing_price_details;
    /**
     * The type of the pricing details.
     */
    type: billing_bill_resource_invoicing_pricing_pricing.type;
    /**
     * The unit amount (in the `currency` specified) of the item which contains a decimal value with at most 12 decimal places.
     */
    unit_amount_decimal?: string | null;
};
export namespace billing_bill_resource_invoicing_pricing_pricing {
    /**
     * The type of the pricing details.
     */
    export enum type {
        PRICE_DETAILS = 'price_details',
    }
}

