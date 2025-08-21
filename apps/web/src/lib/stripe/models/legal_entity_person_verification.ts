/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { legal_entity_person_verification_document } from './legal_entity_person_verification_document';
export type legal_entity_person_verification = {
    /**
     * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
     */
    additional_document?: legal_entity_person_verification_document | null;
    /**
     * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
     */
    details?: string | null;
    /**
     * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
     */
    details_code?: string | null;
    document?: legal_entity_person_verification_document;
    /**
     * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`. Please refer [guide](https://stripe.com/docs/connect/handling-api-verification) to handle verification updates.
     */
    status: string;
};

