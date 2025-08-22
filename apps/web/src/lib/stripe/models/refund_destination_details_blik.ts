/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type refund_destination_details_blik = {
    /**
     * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
     */
    network_decline_code?: string | null;
    /**
     * The reference assigned to the refund.
     */
    reference?: string | null;
    /**
     * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
     */
    reference_status?: string | null;
};

