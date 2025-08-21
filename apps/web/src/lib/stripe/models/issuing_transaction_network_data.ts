/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_transaction_network_data = {
    /**
     * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
     */
    authorization_code?: string | null;
    /**
     * The date the transaction was processed by the card network. This can be different from the date the seller recorded the transaction depending on when the acquirer submits the transaction to the network.
     */
    processing_date?: string | null;
    /**
     * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
     */
    transaction_id?: string | null;
};

