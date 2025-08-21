/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { outbound_transfers_payment_method_details_financial_account } from './outbound_transfers_payment_method_details_financial_account';
import type { outbound_transfers_payment_method_details_us_bank_account } from './outbound_transfers_payment_method_details_us_bank_account';
import type { treasury_shared_resource_billing_details } from './treasury_shared_resource_billing_details';
export type outbound_transfers_payment_method_details = {
    billing_details: treasury_shared_resource_billing_details;
    financial_account?: outbound_transfers_payment_method_details_financial_account;
    /**
     * The type of the payment method used in the OutboundTransfer.
     */
    type: outbound_transfers_payment_method_details.type;
    us_bank_account?: outbound_transfers_payment_method_details_us_bank_account;
};
export namespace outbound_transfers_payment_method_details {
    /**
     * The type of the payment method used in the OutboundTransfer.
     */
    export enum type {
        FINANCIAL_ACCOUNT = 'financial_account',
        US_BANK_ACCOUNT = 'us_bank_account',
    }
}

