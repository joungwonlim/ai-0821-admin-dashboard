/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grants_resource_amount } from './billing_credit_grants_resource_amount';
import type { billing_credit_grants_resource_balance_credits_applied } from './billing_credit_grants_resource_balance_credits_applied';
export type billing_credit_grants_resource_balance_debit = {
    amount: billing_credit_grants_resource_amount;
    /**
     * Details of how the billing credits were applied to an invoice. Only present if `type` is `credits_applied`.
     */
    credits_applied?: billing_credit_grants_resource_balance_credits_applied | null;
    /**
     * The type of debit transaction.
     */
    type: billing_credit_grants_resource_balance_debit.type;
};
export namespace billing_credit_grants_resource_balance_debit {
    /**
     * The type of debit transaction.
     */
    export enum type {
        CREDITS_APPLIED = 'credits_applied',
        CREDITS_EXPIRED = 'credits_expired',
        CREDITS_VOIDED = 'credits_voided',
    }
}

