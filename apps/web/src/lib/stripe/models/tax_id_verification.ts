/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_id_verification = {
    /**
     * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
     */
    status: tax_id_verification.status;
    /**
     * Verified address.
     */
    verified_address?: string | null;
    /**
     * Verified name.
     */
    verified_name?: string | null;
};
export namespace tax_id_verification {
    /**
     * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
     */
    export enum status {
        PENDING = 'pending',
        UNAVAILABLE = 'unavailable',
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
}

