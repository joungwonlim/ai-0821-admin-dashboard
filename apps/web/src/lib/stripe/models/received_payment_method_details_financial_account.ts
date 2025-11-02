/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type received_payment_method_details_financial_account = {
    /**
     * The FinancialAccount ID.
     */
    id: string;
    /**
     * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
     */
    network: received_payment_method_details_financial_account.network;
};
export namespace received_payment_method_details_financial_account {
    /**
     * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
     */
    export enum network {
        STRIPE = 'stripe',
    }
}

