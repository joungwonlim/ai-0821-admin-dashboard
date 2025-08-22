/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_item_threshold_reason } from './invoice_item_threshold_reason';
export type invoice_threshold_reason = {
    /**
     * The total invoice amount threshold boundary if it triggered the threshold invoice.
     */
    amount_gte?: number | null;
    /**
     * Indicates which line items triggered a threshold invoice.
     */
    item_reasons: Array<invoice_item_threshold_reason>;
};

