/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_transaction_treasury = {
    /**
     * The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund
     */
    received_credit?: string | null;
    /**
     * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture
     */
    received_debit?: string | null;
};

