/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { gelato_data_verified_outputs_date } from './gelato_data_verified_outputs_date';
export type gelato_verified_outputs = {
    /**
     * The user's verified address.
     */
    address?: address | null;
    /**
     * The user’s verified date of birth.
     */
    dob?: gelato_data_verified_outputs_date | null;
    /**
     * The user's verified email address
     */
    email?: string | null;
    /**
     * The user's verified first name.
     */
    first_name?: string | null;
    /**
     * The user's verified id number.
     */
    id_number?: string | null;
    /**
     * The user's verified id number type.
     */
    id_number_type?: gelato_verified_outputs.id_number_type | null;
    /**
     * The user's verified last name.
     */
    last_name?: string | null;
    /**
     * The user's verified phone number
     */
    phone?: string | null;
    /**
     * The user's verified sex.
     */
    sex?: gelato_verified_outputs.sex | null;
    /**
     * The user's verified place of birth as it appears in the document.
     */
    unparsed_place_of_birth?: string | null;
    /**
     * The user's verified sex as it appears in the document.
     */
    unparsed_sex?: string | null;
};
export namespace gelato_verified_outputs {
    /**
     * The user's verified id number type.
     */
    export enum id_number_type {
        BR_CPF = 'br_cpf',
        SG_NRIC = 'sg_nric',
        US_SSN = 'us_ssn',
    }
    /**
     * The user's verified sex.
     */
    export enum sex {
        _REDACTED_ = '[redacted]',
        FEMALE = 'female',
        MALE = 'male',
        UNKNOWN = 'unknown',
    }
}

