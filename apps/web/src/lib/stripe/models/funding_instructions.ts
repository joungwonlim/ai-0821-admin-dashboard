/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { funding_instructions_bank_transfer } from './funding_instructions_bank_transfer';
/**
 * Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) that is
 * automatically applied to future invoices and payments using the `customer_balance` payment method.
 * Customers can fund this balance by initiating a bank transfer to any account in the
 * `financial_addresses` field.
 * Related guide: [Customer balance funding instructions](https://stripe.com/docs/payments/customer-balance/funding-instructions)
 */
export type funding_instructions = {
    bank_transfer: funding_instructions_bank_transfer;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The `funding_type` of the returned instructions
     */
    funding_type: funding_instructions.funding_type;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: funding_instructions.object;
};
export namespace funding_instructions {
    /**
     * The `funding_type` of the returned instructions
     */
    export enum funding_type {
        BANK_TRANSFER = 'bank_transfer',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FUNDING_INSTRUCTIONS = 'funding_instructions',
    }
}

