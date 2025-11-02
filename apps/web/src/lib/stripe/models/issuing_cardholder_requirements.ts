/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_cardholder_requirements = {
    /**
     * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
     */
    disabled_reason?: issuing_cardholder_requirements.disabled_reason | null;
    /**
     * Array of fields that need to be collected in order to verify and re-enable the cardholder.
     */
    past_due?: Array<'company.tax_id' | 'individual.card_issuing.user_terms_acceptance.date' | 'individual.card_issuing.user_terms_acceptance.ip' | 'individual.dob.day' | 'individual.dob.month' | 'individual.dob.year' | 'individual.first_name' | 'individual.last_name' | 'individual.verification.document'> | null;
};
export namespace issuing_cardholder_requirements {
    /**
     * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
     */
    export enum disabled_reason {
        LISTED = 'listed',
        REJECTED_LISTED = 'rejected.listed',
        REQUIREMENTS_PAST_DUE = 'requirements.past_due',
        UNDER_REVIEW = 'under_review',
    }
}

