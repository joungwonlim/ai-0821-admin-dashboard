/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type connect_account_reference = {
    /**
     * The connected account being referenced when `type` is `account`.
     */
    account?: (string | account);
    /**
     * Type of the account referenced.
     */
    type: connect_account_reference.type;
};
export namespace connect_account_reference {
    /**
     * Type of the account referenced.
     */
    export enum type {
        ACCOUNT = 'account',
        SELF = 'self',
    }
}

