/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type charge_transfer_data = {
    /**
     * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
     */
    amount?: number | null;
    /**
     * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
     */
    destination: (string | account);
};

