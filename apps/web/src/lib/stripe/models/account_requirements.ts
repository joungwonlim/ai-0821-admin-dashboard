/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_alternative } from './account_requirements_alternative';
import type { account_requirements_error } from './account_requirements_error';
export type account_requirements = {
    /**
     * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
     */
    alternatives?: Array<account_requirements_alternative> | null;
    /**
     * Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected.
     */
    current_deadline?: number | null;
    /**
     * Fields that need to be collected to keep the account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
     */
    currently_due?: Array<string> | null;
    /**
     * If the account is disabled, this enum describes why. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
     */
    disabled_reason?: account_requirements.disabled_reason | null;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors?: Array<account_requirements_error> | null;
    /**
     * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
     */
    eventually_due?: Array<string> | null;
    /**
     * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the account.
     */
    past_due?: Array<string> | null;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification?: Array<string> | null;
};
export namespace account_requirements {
    /**
     * If the account is disabled, this enum describes why. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
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

