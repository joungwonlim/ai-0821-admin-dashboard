/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dispute_visa_compelling_evidence3_disputed_transaction } from './dispute_visa_compelling_evidence3_disputed_transaction';
import type { dispute_visa_compelling_evidence3_prior_undisputed_transaction } from './dispute_visa_compelling_evidence3_prior_undisputed_transaction';
export type dispute_enhanced_evidence_visa_compelling_evidence3 = {
    /**
     * Disputed transaction details for Visa Compelling Evidence 3.0 evidence submission.
     */
    disputed_transaction?: dispute_visa_compelling_evidence3_disputed_transaction | null;
    /**
     * List of exactly two prior undisputed transaction objects for Visa Compelling Evidence 3.0 evidence submission.
     */
    prior_undisputed_transactions: Array<dispute_visa_compelling_evidence3_prior_undisputed_transaction>;
};

