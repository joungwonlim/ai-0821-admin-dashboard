/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type legal_entity_company_verification_document = {
    /**
     * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](/file-upload#uploading-a-file).
     */
    back?: (string | file) | null;
    /**
     * A user-displayable string describing the verification state of this document.
     */
    details?: string | null;
    /**
     * One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.
     */
    details_code?: string | null;
    /**
     * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](/file-upload#uploading-a-file).
     */
    front?: (string | file) | null;
};

