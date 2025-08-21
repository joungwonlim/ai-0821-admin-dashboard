/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { gelato_data_document_report_date_of_birth } from './gelato_data_document_report_date_of_birth';
import type { gelato_data_document_report_expiration_date } from './gelato_data_document_report_expiration_date';
import type { gelato_data_document_report_issued_date } from './gelato_data_document_report_issued_date';
import type { gelato_document_report_error } from './gelato_document_report_error';
/**
 * Result from a document check
 */
export type gelato_document_report = {
    /**
     * Address as it appears in the document.
     */
    address?: address | null;
    /**
     * Date of birth as it appears in the document.
     */
    dob?: gelato_data_document_report_date_of_birth | null;
    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error?: gelato_document_report_error | null;
    /**
     * Expiration date of the document.
     */
    expiration_date?: gelato_data_document_report_expiration_date | null;
    /**
     * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
     */
    files?: Array<string> | null;
    /**
     * First name as it appears in the document.
     */
    first_name?: string | null;
    /**
     * Issued date of the document.
     */
    issued_date?: gelato_data_document_report_issued_date | null;
    /**
     * Issuing country of the document.
     */
    issuing_country?: string | null;
    /**
     * Last name as it appears in the document.
     */
    last_name?: string | null;
    /**
     * Document ID number.
     */
    number?: string | null;
    /**
     * Sex of the person in the document.
     */
    sex?: gelato_document_report.sex | null;
    /**
     * Status of this `document` check.
     */
    status: gelato_document_report.status;
    /**
     * Type of the document.
     */
    type?: gelato_document_report.type | null;
    /**
     * Place of birth as it appears in the document.
     */
    unparsed_place_of_birth?: string | null;
    /**
     * Sex as it appears in the document.
     */
    unparsed_sex?: string | null;
};
export namespace gelato_document_report {
    /**
     * Sex of the person in the document.
     */
    export enum sex {
        _REDACTED_ = '[redacted]',
        FEMALE = 'female',
        MALE = 'male',
        UNKNOWN = 'unknown',
    }
    /**
     * Status of this `document` check.
     */
    export enum status {
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
    /**
     * Type of the document.
     */
    export enum type {
        DRIVING_LICENSE = 'driving_license',
        ID_CARD = 'id_card',
        PASSPORT = 'passport',
    }
}

