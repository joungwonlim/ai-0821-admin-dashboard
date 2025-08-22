/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type mandate_bacs_debit = {
    /**
     * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
     */
    network_status: mandate_bacs_debit.network_status;
    /**
     * The unique reference identifying the mandate on the Bacs network.
     */
    reference: string;
    /**
     * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
     */
    revocation_reason?: mandate_bacs_debit.revocation_reason | null;
    /**
     * The URL that will contain the mandate that the customer has signed.
     */
    url: string;
};
export namespace mandate_bacs_debit {
    /**
     * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
     */
    export enum network_status {
        ACCEPTED = 'accepted',
        PENDING = 'pending',
        REFUSED = 'refused',
        REVOKED = 'revoked',
    }
    /**
     * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
     */
    export enum revocation_reason {
        ACCOUNT_CLOSED = 'account_closed',
        BANK_ACCOUNT_RESTRICTED = 'bank_account_restricted',
        BANK_OWNERSHIP_CHANGED = 'bank_ownership_changed',
        COULD_NOT_PROCESS = 'could_not_process',
        DEBIT_NOT_AUTHORIZED = 'debit_not_authorized',
    }
}

