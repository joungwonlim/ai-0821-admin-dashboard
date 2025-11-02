/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { funding_instructions_bank_transfer_financial_address } from './funding_instructions_bank_transfer_financial_address';
export type payment_intent_next_action_display_bank_transfer_instructions = {
    /**
     * The remaining amount that needs to be transferred to complete the payment.
     */
    amount_remaining?: number | null;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null;
    /**
     * A list of financial addresses that can be used to fund the customer balance
     */
    financial_addresses?: Array<funding_instructions_bank_transfer_financial_address>;
    /**
     * A link to a hosted page that guides your customer through completing the transfer.
     */
    hosted_instructions_url?: string | null;
    /**
     * A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer.
     */
    reference?: string | null;
    /**
     * Type of bank transfer
     */
    type: payment_intent_next_action_display_bank_transfer_instructions.type;
};
export namespace payment_intent_next_action_display_bank_transfer_instructions {
    /**
     * Type of bank transfer
     */
    export enum type {
        EU_BANK_TRANSFER = 'eu_bank_transfer',
        GB_BANK_TRANSFER = 'gb_bank_transfer',
        JP_BANK_TRANSFER = 'jp_bank_transfer',
        MX_BANK_TRANSFER = 'mx_bank_transfer',
        US_BANK_TRANSFER = 'us_bank_transfer',
    }
}

