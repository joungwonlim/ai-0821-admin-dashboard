/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_alternative } from './account_requirements_alternative';
import type { account_requirements_error } from './account_requirements_error';
export type account_capability_future_requirements = {
    /**
     * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
     */
    alternatives?: Array<account_requirements_alternative> | null;
    /**
     * Date on which `future_requirements` becomes the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on the capability's enablement state prior to transitioning.
     */
    current_deadline?: number | null;
    /**
     * Fields that need to be collected to keep the capability enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
     */
    currently_due: Array<string>;
    /**
     * This is typed as an enum for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is null because fields in `future_requirements` will never disable the account.
     */
    disabled_reason?: account_capability_future_requirements.disabled_reason | null;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors: Array<account_requirements_error>;
    /**
     * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well.
     */
    eventually_due: Array<string>;
    /**
     * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
     */
    past_due: Array<string>;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification: Array<string>;
};
export namespace account_capability_future_requirements {
    /**
     * This is typed as an enum for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is null because fields in `future_requirements` will never disable the account.
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

