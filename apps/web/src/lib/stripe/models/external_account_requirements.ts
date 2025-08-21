/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_requirements_error } from './account_requirements_error';
export type external_account_requirements = {
    /**
     * Fields that need to be collected to keep the external account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
     */
    currently_due?: Array<string> | null;
    /**
     * Fields that are `currently_due` and need to be collected again because validation or verification failed.
     */
    errors?: Array<account_requirements_error> | null;
    /**
     * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the external account.
     */
    past_due?: Array<string> | null;
    /**
     * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
     */
    pending_verification?: Array<string> | null;
};

