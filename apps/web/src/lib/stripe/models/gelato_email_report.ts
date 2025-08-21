/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_email_report_error } from './gelato_email_report_error';
/**
 * Result from a email check
 */
export type gelato_email_report = {
    /**
     * Email to be verified.
     */
    email?: string | null;
    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error?: gelato_email_report_error | null;
    /**
     * Status of this `email` check.
     */
    status: gelato_email_report.status;
};
export namespace gelato_email_report {
    /**
     * Status of this `email` check.
     */
    export enum status {
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
}

