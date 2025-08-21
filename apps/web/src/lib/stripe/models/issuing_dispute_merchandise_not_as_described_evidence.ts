/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_merchandise_not_as_described_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
    /**
     * Explanation of why the cardholder is disputing this transaction.
     */
    explanation?: string | null;
    /**
     * Date when the product was received.
     */
    received_at?: number | null;
    /**
     * Description of the cardholder's attempt to return the product.
     */
    return_description?: string | null;
    /**
     * Result of cardholder's attempt to return the product.
     */
    return_status?: issuing_dispute_merchandise_not_as_described_evidence.return_status | null;
    /**
     * Date when the product was returned or attempted to be returned.
     */
    returned_at?: number | null;
};
export namespace issuing_dispute_merchandise_not_as_described_evidence {
    /**
     * Result of cardholder's attempt to return the product.
     */
    export enum return_status {
        MERCHANT_REJECTED = 'merchant_rejected',
        SUCCESSFUL = 'successful',
    }
}

