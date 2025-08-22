/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_canceled_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
    /**
     * Date when order was canceled.
     */
    canceled_at?: number | null;
    /**
     * Whether the cardholder was provided with a cancellation policy.
     */
    cancellation_policy_provided?: boolean | null;
    /**
     * Reason for canceling the order.
     */
    cancellation_reason?: string | null;
    /**
     * Date when the cardholder expected to receive the product.
     */
    expected_at?: number | null;
    /**
     * Explanation of why the cardholder is disputing this transaction.
     */
    explanation?: string | null;
    /**
     * Description of the merchandise or service that was purchased.
     */
    product_description?: string | null;
    /**
     * Whether the product was a merchandise or service.
     */
    product_type?: issuing_dispute_canceled_evidence.product_type | null;
    /**
     * Result of cardholder's attempt to return the product.
     */
    return_status?: issuing_dispute_canceled_evidence.return_status | null;
    /**
     * Date when the product was returned or attempted to be returned.
     */
    returned_at?: number | null;
};
export namespace issuing_dispute_canceled_evidence {
    /**
     * Whether the product was a merchandise or service.
     */
    export enum product_type {
        MERCHANDISE = 'merchandise',
        SERVICE = 'service',
    }
    /**
     * Result of cardholder's attempt to return the product.
     */
    export enum return_status {
        MERCHANT_REJECTED = 'merchant_rejected',
        SUCCESSFUL = 'successful',
    }
}

