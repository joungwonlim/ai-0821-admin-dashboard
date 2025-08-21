/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type payment_links_resource_transfer_data = {
    /**
     * The amount in cents (or local equivalent) that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
     */
    amount?: number | null;
    /**
     * The connected account receiving the transfer.
     */
    destination: (string | account);
};

