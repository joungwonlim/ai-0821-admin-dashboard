/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_dispute_treasury = {
    /**
     * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
     */
    debit_reversal?: string | null;
    /**
     * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
     */
    received_debit: string;
};

