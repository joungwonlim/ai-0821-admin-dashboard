/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_not_received_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
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
    product_type?: issuing_dispute_not_received_evidence.product_type | null;
};
export namespace issuing_dispute_not_received_evidence {
    /**
     * Whether the product was a merchandise or service.
     */
    export enum product_type {
        MERCHANDISE = 'merchandise',
        SERVICE = 'service',
    }
}

