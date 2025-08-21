/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_options_customer_balance_eu_bank_account } from './payment_method_options_customer_balance_eu_bank_account';
export type checkout_customer_balance_bank_transfer_payment_method_options = {
    eu_bank_transfer?: payment_method_options_customer_balance_eu_bank_account;
    /**
     * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
     *
     * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
     */
    requested_address_types?: Array<'aba' | 'iban' | 'sepa' | 'sort_code' | 'spei' | 'swift' | 'zengin'>;
    /**
     * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    type?: checkout_customer_balance_bank_transfer_payment_method_options.type | null;
};
export namespace checkout_customer_balance_bank_transfer_payment_method_options {
    /**
     * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    export enum type {
        EU_BANK_TRANSFER = 'eu_bank_transfer',
        GB_BANK_TRANSFER = 'gb_bank_transfer',
        JP_BANK_TRANSFER = 'jp_bank_transfer',
        MX_BANK_TRANSFER = 'mx_bank_transfer',
        US_BANK_TRANSFER = 'us_bank_transfer',
    }
}

