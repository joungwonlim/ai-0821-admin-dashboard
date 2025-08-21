/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_treasury = {
    /**
     * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
     */
    received_credits: Array<string>;
    /**
     * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
     */
    received_debits: Array<string>;
    /**
     * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
     */
    transaction?: string | null;
};

