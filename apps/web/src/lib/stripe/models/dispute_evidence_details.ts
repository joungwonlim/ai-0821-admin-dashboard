/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dispute_enhanced_eligibility } from './dispute_enhanced_eligibility';
export type dispute_evidence_details = {
    /**
     * Date by which evidence must be submitted in order to successfully challenge dispute. Will be 0 if the customer's bank or credit card company doesn't allow a response for this particular dispute.
     */
    due_by?: number | null;
    enhanced_eligibility: dispute_enhanced_eligibility;
    /**
     * Whether evidence has been staged for this dispute.
     */
    has_evidence: boolean;
    /**
     * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
     */
    past_due: boolean;
    /**
     * The number of times evidence has been submitted. Typically, you may only submit evidence once.
     */
    submission_count: number;
};

