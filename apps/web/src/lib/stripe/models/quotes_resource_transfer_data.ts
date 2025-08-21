/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type quotes_resource_transfer_data = {
    /**
     * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
     */
    amount?: number | null;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
     */
    amount_percent?: number | null;
    /**
     * The account where funds from the payment will be transferred to upon payment success.
     */
    destination: (string | account);
};

