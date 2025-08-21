/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type source_transaction_gbp_credit_transfer_data = {
    /**
     * Bank account fingerprint associated with the Stripe owned bank account receiving the transfer.
     */
    fingerprint?: string;
    /**
     * The credit transfer rails the sender used to push this transfer. The possible rails are: Faster Payments, BACS, CHAPS, and wire transfers. Currently only Faster Payments is supported.
     */
    funding_method?: string;
    /**
     * Last 4 digits of sender account number associated with the transfer.
     */
    last4?: string;
    /**
     * Sender entered arbitrary information about the transfer.
     */
    reference?: string;
    /**
     * Sender account number associated with the transfer.
     */
    sender_account_number?: string;
    /**
     * Sender name associated with the transfer.
     */
    sender_name?: string;
    /**
     * Sender sort code associated with the transfer.
     */
    sender_sort_code?: string;
};

