/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type outbound_payments_payment_method_details_financial_account = {
    /**
     * Token of the FinancialAccount.
     */
    id: string;
    /**
     * The rails used to send funds.
     */
    network: outbound_payments_payment_method_details_financial_account.network;
};
export namespace outbound_payments_payment_method_details_financial_account {
    /**
     * The rails used to send funds.
     */
    export enum network {
        STRIPE = 'stripe',
    }
}

