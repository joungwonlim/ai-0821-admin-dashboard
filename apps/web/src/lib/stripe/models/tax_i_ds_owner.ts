/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { customer } from './customer';
export type tax_i_ds_owner = {
    /**
     * The account being referenced when `type` is `account`.
     */
    account?: (string | account);
    /**
     * The Connect Application being referenced when `type` is `application`.
     */
    application?: (string | application);
    /**
     * The customer being referenced when `type` is `customer`.
     */
    customer?: (string | customer);
    /**
     * Type of owner referenced.
     */
    type: tax_i_ds_owner.type;
};
export namespace tax_i_ds_owner {
    /**
     * Type of owner referenced.
     */
    export enum type {
        ACCOUNT = 'account',
        APPLICATION = 'application',
        CUSTOMER = 'customer',
        SELF = 'self',
    }
}

