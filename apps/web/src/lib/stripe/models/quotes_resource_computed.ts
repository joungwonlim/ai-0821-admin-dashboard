/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { quotes_resource_recurring } from './quotes_resource_recurring';
import type { quotes_resource_upfront } from './quotes_resource_upfront';
export type quotes_resource_computed = {
    /**
     * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
     */
    recurring?: quotes_resource_recurring | null;
    upfront: quotes_resource_upfront;
};

