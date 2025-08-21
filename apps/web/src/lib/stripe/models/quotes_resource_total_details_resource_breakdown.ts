/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { line_items_discount_amount } from './line_items_discount_amount';
import type { line_items_tax_amount } from './line_items_tax_amount';
export type quotes_resource_total_details_resource_breakdown = {
    /**
     * The aggregated discounts.
     */
    discounts: Array<line_items_discount_amount>;
    /**
     * The aggregated tax amounts by rate.
     */
    taxes: Array<line_items_tax_amount>;
};

