/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_alternative } from './account_requirements_alternative';
import type { account_requirements_error } from './account_requirements_error';
export type account_capability_requirements = {
    /**
     * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
     */
    alternatives?: Array<account_requirements_alternative> | null;
    /**
     * The date by which all required account information must be both submitted and verified. This includes fields listed in `currently_due` as well as those in `pending_verification`. If any required information is missing or unverified by this date, the account may be disabled. Note that `current_deadline` may change if additional `currently_due` requirements are requested.
     */
    current_deadline?: number | null;
    /**
     * Fields that need to be collected to keep the capability enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
     */
    currently_due: Array<string>;
    /**
     * Description of why the capability is disabled. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
     */
    disabled_reason?: account_capability_requirements.disabled_reason | null;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors: Array<account_requirements_error>;
    /**
     * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
     */
    eventually_due: Array<string>;
    /**
     * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the capability on the account.
     */
    past_due: Array<string>;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification: Array<string>;
};
export namespace account_capability_requirements {
    /**
     * Description of why the capability is disabled. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
     */
    export enum disabled_reason {
        OTHER = 'other',
        PAUSED_INACTIVITY = 'paused.inactivity',
        PENDING_ONBOARDING = 'pending.onboarding',
        PENDING_REVIEW = 'pending.review',
        PLATFORM_DISABLED = 'platform_disabled',
        PLATFORM_PAUSED = 'platform_paused',
        REJECTED_INACTIVITY = 'rejected.inactivity',
        REJECTED_OTHER = 'rejected.other',
        REJECTED_UNSUPPORTED_BUSINESS = 'rejected.unsupported_business',
        REQUIREMENTS_FIELDS_NEEDED = 'requirements.fields_needed',
    }
}

