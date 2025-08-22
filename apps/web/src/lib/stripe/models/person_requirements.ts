/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_alternative } from './account_requirements_alternative';
import type { account_requirements_error } from './account_requirements_error';
export type person_requirements = {
    /**
     * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
     */
    alternatives?: Array<account_requirements_alternative> | null;
    /**
     * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
     */
    currently_due: Array<string>;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors: Array<account_requirements_error>;
    /**
     * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set.
     */
    eventually_due: Array<string>;
    /**
     * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account.
     */
    past_due: Array<string>;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification: Array<string>;
};

