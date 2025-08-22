/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type treasury_received_debits_resource_linked_flows = {
    /**
     * The DebitReversal created as a result of this ReceivedDebit being reversed.
     */
    debit_reversal?: string | null;
    /**
     * Set if the ReceivedDebit is associated with an InboundTransfer's return of funds.
     */
    inbound_transfer?: string | null;
    /**
     * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
     */
    issuing_authorization?: string | null;
    /**
     * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
     */
    issuing_transaction?: string | null;
    /**
     * Set if the ReceivedDebit was created due to a [Payout](https://stripe.com/docs/api#payouts) object.
     */
    payout?: string | null;
};

