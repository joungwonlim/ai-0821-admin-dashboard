/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_document_report_error = {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    code?: gelato_document_report_error.code | null;
    /**
     * A human-readable message giving the reason for the failure. These messages can be shown to your users.
     */
    reason?: string | null;
};
export namespace gelato_document_report_error {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    export enum code {
        DOCUMENT_EXPIRED = 'document_expired',
        DOCUMENT_TYPE_NOT_SUPPORTED = 'document_type_not_supported',
        DOCUMENT_UNVERIFIED_OTHER = 'document_unverified_other',
    }
}

