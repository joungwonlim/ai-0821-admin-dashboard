/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_balance_transaction } from './billing_credit_balance_transaction';
import type { deleted_discount } from './deleted_discount';
import type { discount } from './discount';
export type invoices_resource_pretax_credit_amount = {
    /**
     * The amount, in cents (or local equivalent), of the pretax credit amount.
     */
    amount: number;
    /**
     * The credit balance transaction that was applied to get this pretax credit amount.
     */
    credit_balance_transaction?: (string | billing_credit_balance_transaction) | null;
    /**
     * The discount that was applied to get this pretax credit amount.
     */
    discount?: (string | discount | deleted_discount);
    /**
     * Type of the pretax credit amount referenced.
     */
    type: invoices_resource_pretax_credit_amount.type;
};
export namespace invoices_resource_pretax_credit_amount {
    /**
     * Type of the pretax credit amount referenced.
     */
    export enum type {
        CREDIT_BALANCE_TRANSACTION = 'credit_balance_transaction',
        DISCOUNT = 'discount',
    }
}

