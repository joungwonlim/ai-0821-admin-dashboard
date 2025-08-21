/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grants_resource_amount } from './billing_credit_grants_resource_amount';
import type { billing_credit_grants_resource_balance_credits_application_invoice_voided } from './billing_credit_grants_resource_balance_credits_application_invoice_voided';
export type billing_credit_grants_resource_balance_credit = {
    amount: billing_credit_grants_resource_amount;
    /**
     * Details of the invoice to which the reinstated credits were originally applied. Only present if `type` is `credits_application_invoice_voided`.
     */
    credits_application_invoice_voided?: billing_credit_grants_resource_balance_credits_application_invoice_voided | null;
    /**
     * The type of credit transaction.
     */
    type: billing_credit_grants_resource_balance_credit.type;
};
export namespace billing_credit_grants_resource_balance_credit {
    /**
     * The type of credit transaction.
     */
    export enum type {
        CREDITS_APPLICATION_INVOICE_VOIDED = 'credits_application_invoice_voided',
        CREDITS_GRANTED = 'credits_granted',
    }
}

