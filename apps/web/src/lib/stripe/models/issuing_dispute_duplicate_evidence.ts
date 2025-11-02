/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_dispute_duplicate_evidence = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
     */
    additional_documentation?: (string | file) | null;
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
     */
    card_statement?: (string | file) | null;
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
     */
    cash_receipt?: (string | file) | null;
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
     */
    check_image?: (string | file) | null;
    /**
     * Explanation of why the cardholder is disputing this transaction.
     */
    explanation?: string | null;
    /**
     * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
     */
    original_transaction?: string | null;
};

