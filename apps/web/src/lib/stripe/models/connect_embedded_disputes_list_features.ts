/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type connect_embedded_disputes_list_features = {
    /**
     * Whether to allow capturing and cancelling payment intents. This is `true` by default.
     */
    capture_payments: boolean;
    /**
     * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
     */
    destination_on_behalf_of_charge_management: boolean;
    /**
     * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
     */
    dispute_management: boolean;
    /**
     * Whether sending refunds is enabled. This is `true` by default.
     */
    refund_management: boolean;
};

