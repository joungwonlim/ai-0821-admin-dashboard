/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_no_valid_authorization_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
    /**
     * Explanation of why the cardholder is disputing this transaction.
     */
    explanation?: string | null;
};

