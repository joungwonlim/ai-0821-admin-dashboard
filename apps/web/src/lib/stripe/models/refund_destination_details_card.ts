/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type refund_destination_details_card = {
    /**
     * Value of the reference number assigned to the refund.
     */
    reference?: string;
    /**
     * Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`.
     */
    reference_status?: string;
    /**
     * Type of the reference number assigned to the refund.
     */
    reference_type?: string;
    /**
     * The type of refund. This can be `refund`, `reversal`, or `pending`.
     */
    type: refund_destination_details_card.type;
};
export namespace refund_destination_details_card {
    /**
     * The type of refund. This can be `refund`, `reversal`, or `pending`.
     */
    export enum type {
        PENDING = 'pending',
        REFUND = 'refund',
        REVERSAL = 'reversal',
    }
}

