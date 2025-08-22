/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { customer } from './customer';
export type bank_connections_resource_accountholder = {
    /**
     * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
     */
    account?: (string | account);
    /**
     * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
     */
    customer?: (string | customer);
    /**
     * Type of account holder that this account belongs to.
     */
    type: bank_connections_resource_accountholder.type;
};
export namespace bank_connections_resource_accountholder {
    /**
     * Type of account holder that this account belongs to.
     */
    export enum type {
        ACCOUNT = 'account',
        CUSTOMER = 'customer',
    }
}

