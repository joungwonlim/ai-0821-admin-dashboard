/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_email_report_error = {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    code?: gelato_email_report_error.code | null;
    /**
     * A human-readable message giving the reason for the failure. These messages can be shown to your users.
     */
    reason?: string | null;
};
export namespace gelato_email_report_error {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    export enum code {
        EMAIL_UNVERIFIED_OTHER = 'email_unverified_other',
        EMAIL_VERIFICATION_DECLINED = 'email_verification_declined',
    }
}

