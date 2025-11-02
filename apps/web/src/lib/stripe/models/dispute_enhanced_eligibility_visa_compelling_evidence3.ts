/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type dispute_enhanced_eligibility_visa_compelling_evidence3 = {
    /**
     * List of actions required to qualify dispute for Visa Compelling Evidence 3.0 evidence submission.
     */
    required_actions: Array<'missing_customer_identifiers' | 'missing_disputed_transaction_description' | 'missing_merchandise_or_services' | 'missing_prior_undisputed_transaction_description' | 'missing_prior_undisputed_transactions'>;
    /**
     * Visa Compelling Evidence 3.0 eligibility status.
     */
    status: dispute_enhanced_eligibility_visa_compelling_evidence3.status;
};
export namespace dispute_enhanced_eligibility_visa_compelling_evidence3 {
    /**
     * Visa Compelling Evidence 3.0 eligibility status.
     */
    export enum status {
        NOT_QUALIFIED = 'not_qualified',
        QUALIFIED = 'qualified',
        REQUIRES_ACTION = 'requires_action',
    }
}

