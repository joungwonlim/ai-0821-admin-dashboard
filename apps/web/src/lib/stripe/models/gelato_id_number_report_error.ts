/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_id_number_report_error = {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    code?: gelato_id_number_report_error.code | null;
    /**
     * A human-readable message giving the reason for the failure. These messages can be shown to your users.
     */
    reason?: string | null;
};
export namespace gelato_id_number_report_error {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    export enum code {
        ID_NUMBER_INSUFFICIENT_DOCUMENT_DATA = 'id_number_insufficient_document_data',
        ID_NUMBER_MISMATCH = 'id_number_mismatch',
        ID_NUMBER_UNVERIFIED_OTHER = 'id_number_unverified_other',
    }
}

