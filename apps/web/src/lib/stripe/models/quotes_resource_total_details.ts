/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { quotes_resource_total_details_resource_breakdown } from './quotes_resource_total_details_resource_breakdown';
export type quotes_resource_total_details = {
    /**
     * This is the sum of all the discounts.
     */
    amount_discount: number;
    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping?: number | null;
    /**
     * This is the sum of all the tax amounts.
     */
    amount_tax: number;
    breakdown?: quotes_resource_total_details_resource_breakdown;
};

