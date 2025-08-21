/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes an owner of an account.
 */
export type financial_connections_account_owner = {
    /**
     * The email address of the owner.
     */
    email?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The full name of the owner.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: financial_connections_account_owner.object;
    /**
     * The ownership object that this owner belongs to.
     */
    ownership: string;
    /**
     * The raw phone number of the owner.
     */
    phone?: string | null;
    /**
     * The raw physical address of the owner.
     */
    raw_address?: string | null;
    /**
     * The timestamp of the refresh that updated this owner.
     */
    refreshed_at?: number | null;
};
export namespace financial_connections_account_owner {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FINANCIAL_CONNECTIONS_ACCOUNT_OWNER = 'financial_connections.account_owner',
    }
}

