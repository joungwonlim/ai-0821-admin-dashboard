/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_data_id_number_report_date } from './gelato_data_id_number_report_date';
import type { gelato_id_number_report_error } from './gelato_id_number_report_error';
/**
 * Result from an id_number check
 */
export type gelato_id_number_report = {
    /**
     * Date of birth.
     */
    dob?: gelato_data_id_number_report_date | null;
    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error?: gelato_id_number_report_error | null;
    /**
     * First name.
     */
    first_name?: string | null;
    /**
     * ID number. When `id_number_type` is `us_ssn`, only the last 4 digits are present.
     */
    id_number?: string | null;
    /**
     * Type of ID number.
     */
    id_number_type?: gelato_id_number_report.id_number_type | null;
    /**
     * Last name.
     */
    last_name?: string | null;
    /**
     * Status of this `id_number` check.
     */
    status: gelato_id_number_report.status;
};
export namespace gelato_id_number_report {
    /**
     * Type of ID number.
     */
    export enum id_number_type {
        BR_CPF = 'br_cpf',
        SG_NRIC = 'sg_nric',
        US_SSN = 'us_ssn',
    }
    /**
     * Status of this `id_number` check.
     */
    export enum status {
        UNVERIFIED = 'unverified',
        VERIFIED = 'verified',
    }
}

