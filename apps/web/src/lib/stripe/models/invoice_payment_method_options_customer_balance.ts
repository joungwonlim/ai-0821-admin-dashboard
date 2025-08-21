/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_customer_balance_bank_transfer } from './invoice_payment_method_options_customer_balance_bank_transfer';
export type invoice_payment_method_options_customer_balance = {
    bank_transfer?: invoice_payment_method_options_customer_balance_bank_transfer;
    /**
     * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
     */
    funding_type?: invoice_payment_method_options_customer_balance.funding_type | null;
};
export namespace invoice_payment_method_options_customer_balance {
    /**
     * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
     */
    export enum funding_type {
        BANK_TRANSFER = 'bank_transfer',
    }
}

