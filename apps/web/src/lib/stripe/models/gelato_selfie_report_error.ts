/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_selfie_report_error = {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    code?: gelato_selfie_report_error.code | null;
    /**
     * A human-readable message giving the reason for the failure. These messages can be shown to your users.
     */
    reason?: string | null;
};
export namespace gelato_selfie_report_error {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    export enum code {
        SELFIE_DOCUMENT_MISSING_PHOTO = 'selfie_document_missing_photo',
        SELFIE_FACE_MISMATCH = 'selfie_face_mismatch',
        SELFIE_MANIPULATED = 'selfie_manipulated',
        SELFIE_UNVERIFIED_OTHER = 'selfie_unverified_other',
    }
}

