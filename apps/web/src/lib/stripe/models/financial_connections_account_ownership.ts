/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { financial_connections_account_owner } from './financial_connections_account_owner';
/**
 * Describes a snapshot of the owners of an account at a particular point in time.
 */
export type financial_connections_account_ownership = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: financial_connections_account_ownership.object;
    /**
     * A paginated list of owners for this account.
     */
    owners: {
        /**
         * Details about each object.
         */
        data: Array<financial_connections_account_owner>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: financial_connections_account_ownership.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
};
export namespace financial_connections_account_ownership {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FINANCIAL_CONNECTIONS_ACCOUNT_OWNERSHIP = 'financial_connections.account_ownership',
    }
}

