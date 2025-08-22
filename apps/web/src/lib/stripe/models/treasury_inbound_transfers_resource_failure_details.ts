/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type treasury_inbound_transfers_resource_failure_details = {
    /**
     * Reason for the failure.
     */
    code: treasury_inbound_transfers_resource_failure_details.code;
};
export namespace treasury_inbound_transfers_resource_failure_details {
    /**
     * Reason for the failure.
     */
    export enum code {
        ACCOUNT_CLOSED = 'account_closed',
        ACCOUNT_FROZEN = 'account_frozen',
        BANK_ACCOUNT_RESTRICTED = 'bank_account_restricted',
        BANK_OWNERSHIP_CHANGED = 'bank_ownership_changed',
        DEBIT_NOT_AUTHORIZED = 'debit_not_authorized',
        INCORRECT_ACCOUNT_HOLDER_ADDRESS = 'incorrect_account_holder_address',
        INCORRECT_ACCOUNT_HOLDER_NAME = 'incorrect_account_holder_name',
        INCORRECT_ACCOUNT_HOLDER_TAX_ID = 'incorrect_account_holder_tax_id',
        INSUFFICIENT_FUNDS = 'insufficient_funds',
        INVALID_ACCOUNT_NUMBER = 'invalid_account_number',
        INVALID_CURRENCY = 'invalid_currency',
        NO_ACCOUNT = 'no_account',
        OTHER = 'other',
    }
}

