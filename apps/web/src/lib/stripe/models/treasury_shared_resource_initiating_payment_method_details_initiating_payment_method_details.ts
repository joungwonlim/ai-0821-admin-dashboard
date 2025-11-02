/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { received_payment_method_details_financial_account } from './received_payment_method_details_financial_account';
import type { treasury_shared_resource_billing_details } from './treasury_shared_resource_billing_details';
import type { treasury_shared_resource_initiating_payment_method_details_us_bank_account } from './treasury_shared_resource_initiating_payment_method_details_us_bank_account';
export type treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details = {
    /**
     * Set when `type` is `balance`.
     */
    balance?: treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details.balance;
    billing_details: treasury_shared_resource_billing_details;
    financial_account?: received_payment_method_details_financial_account;
    /**
     * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
     */
    issuing_card?: string;
    /**
     * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
     */
    type: treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details.type;
    us_bank_account?: treasury_shared_resource_initiating_payment_method_details_us_bank_account;
};
export namespace treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details {
    /**
     * Set when `type` is `balance`.
     */
    export enum balance {
        PAYMENTS = 'payments',
    }
    /**
     * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
     */
    export enum type {
        BALANCE = 'balance',
        FINANCIAL_ACCOUNT = 'financial_account',
        ISSUING_CARD = 'issuing_card',
        STRIPE = 'stripe',
        US_BANK_ACCOUNT = 'us_bank_account',
    }
}

