/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_selfie_report_error } from './gelato_selfie_report_error';
/**
 * Result from a selfie check
 */
export type gelato_selfie_report = {
    /**
     * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
     */
    document?: string | null;
    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error?: gelato_selfie_report_error | null;
    /**
     * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
     */
    selfie?: string | null;
    /**
     * Status of this `selfie` check.
     */
    status: gelato_selfie_report.status;
};
export namespace gelato_selfie_report {
    /**
     * Status of this `selfie` check.
     */
    export enum status {
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
}

