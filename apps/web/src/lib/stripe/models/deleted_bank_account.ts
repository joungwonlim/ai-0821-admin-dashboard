/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_bank_account = {
    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
     */
    currency?: string | null;
    /**
     * Always true for a deleted object
     */
    deleted: boolean;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: deleted_bank_account.object;
};
export namespace deleted_bank_account {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BANK_ACCOUNT = 'bank_account',
    }
}

