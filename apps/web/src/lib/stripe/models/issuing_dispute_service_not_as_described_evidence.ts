/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_service_not_as_described_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
    /**
     * Date when order was canceled.
     */
    canceled_at?: number | null;
    /**
     * Reason for canceling the order.
     */
    cancellation_reason?: string | null;
    /**
     * Explanation of why the cardholder is disputing this transaction.
     */
    explanation?: string | null;
    /**
     * Date when the product was received.
     */
    received_at?: number | null;
};

