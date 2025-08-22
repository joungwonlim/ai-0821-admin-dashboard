/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_alternative } from './account_requirements_alternative';
import type { account_requirements_error } from './account_requirements_error';
export type account_future_requirements = {
    /**
     * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
     */
    alternatives?: Array<account_requirements_alternative> | null;
    /**
     * Date on which `future_requirements` becomes the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on its enablement state prior to transitioning.
     */
    current_deadline?: number | null;
    /**
     * Fields that need to be collected to keep the account enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
     */
    currently_due?: Array<string> | null;
    /**
     * This is typed as an enum for consistency with `requirements.disabled_reason`.
     */
    disabled_reason?: account_future_requirements.disabled_reason | null;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors?: Array<account_requirements_error> | null;
    /**
     * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well.
     */
    eventually_due?: Array<string> | null;
    /**
     * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
     */
    past_due?: Array<string> | null;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification?: Array<string> | null;
};
export namespace account_future_requirements {
    /**
     * This is typed as an enum for consistency with `requirements.disabled_reason`.
     */
    export enum disabled_reason {
        ACTION_REQUIRED_REQUESTED_CAPABILITIES = 'action_required.requested_capabilities',
        LISTED = 'listed',
        OTHER = 'other',
        PLATFORM_PAUSED = 'platform_paused',
        REJECTED_FRAUD = 'rejected.fraud',
        REJECTED_INCOMPLETE_VERIFICATION = 'rejected.incomplete_verification',
        REJECTED_LISTED = 'rejected.listed',
        REJECTED_OTHER = 'rejected.other',
        REJECTED_PLATFORM_FRAUD = 'rejected.platform_fraud',
        REJECTED_PLATFORM_OTHER = 'rejected.platform_other',
        REJECTED_PLATFORM_TERMS_OF_SERVICE = 'rejected.platform_terms_of_service',
        REJECTED_TERMS_OF_SERVICE = 'rejected.terms_of_service',
        REQUIREMENTS_PAST_DUE = 'requirements.past_due',
        REQUIREMENTS_PENDING_VERIFICATION = 'requirements.pending_verification',
        UNDER_REVIEW = 'under_review',
    }
}

