/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { line_items_tax_amount } from './line_items_tax_amount';
import type { shipping_rate } from './shipping_rate';
export type invoices_resource_shipping_cost = {
    /**
     * Total shipping cost before any taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
     */
    amount_tax: number;
    /**
     * Total shipping cost after taxes are applied.
     */
    amount_total: number;
    /**
     * The ID of the ShippingRate for this invoice.
     */
    shipping_rate?: (string | shipping_rate) | null;
    /**
     * The taxes applied to the shipping rate.
     */
    taxes?: Array<line_items_tax_amount>;
};

