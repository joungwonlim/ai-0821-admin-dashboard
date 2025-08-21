/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_transaction } from './treasury_transaction';
export type treasury_outbound_transfers_resource_returned_details = {
    /**
     * Reason for the return.
     */
    code: treasury_outbound_transfers_resource_returned_details.code;
    /**
     * The Transaction associated with this object.
     */
    transaction: (string | treasury_transaction);
};
export namespace treasury_outbound_transfers_resource_returned_details {
    /**
     * Reason for the return.
     */
    export enum code {
        ACCOUNT_CLOSED = 'account_closed',
        ACCOUNT_FROZEN = 'account_frozen',
        BANK_ACCOUNT_RESTRICTED = 'bank_account_restricted',
        BANK_OWNERSHIP_CHANGED = 'bank_ownership_changed',
        DECLINED = 'declined',
        INCORRECT_ACCOUNT_HOLDER_NAME = 'incorrect_account_holder_name',
        INVALID_ACCOUNT_NUMBER = 'invalid_account_number',
        INVALID_CURRENCY = 'invalid_currency',
        NO_ACCOUNT = 'no_account',
        OTHER = 'other',
    }
}

