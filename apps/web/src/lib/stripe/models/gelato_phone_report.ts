/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_phone_report_error } from './gelato_phone_report_error';
/**
 * Result from a phone check
 */
export type gelato_phone_report = {
    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error?: gelato_phone_report_error | null;
    /**
     * Phone to be verified.
     */
    phone?: string | null;
    /**
     * Status of this `phone` check.
     */
    status: gelato_phone_report.status;
};
export namespace gelato_phone_report {
    /**
     * Status of this `phone` check.
     */
    export enum status {
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
}

