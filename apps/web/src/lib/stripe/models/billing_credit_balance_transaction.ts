/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grant } from './billing_credit_grant';
import type { billing_credit_grants_resource_balance_credit } from './billing_credit_grants_resource_balance_credit';
import type { billing_credit_grants_resource_balance_debit } from './billing_credit_grants_resource_balance_debit';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * A credit balance transaction is a resource representing a transaction (either a credit or a debit) against an existing credit grant.
 */
export type billing_credit_balance_transaction = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Credit details for this credit balance transaction. Only present if type is `credit`.
     */
    credit?: billing_credit_grants_resource_balance_credit | null;
    /**
     * The credit grant associated with this credit balance transaction.
     */
    credit_grant: (string | billing_credit_grant);
    /**
     * Debit details for this credit balance transaction. Only present if type is `debit`.
     */
    debit?: billing_credit_grants_resource_balance_debit | null;
    /**
     * The effective time of this credit balance transaction.
     */
    effective_at: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_credit_balance_transaction.object;
    /**
     * ID of the test clock this credit balance transaction belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
    /**
     * The type of credit balance transaction (credit or debit).
     */
    type?: billing_credit_balance_transaction.type | null;
};
export namespace billing_credit_balance_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_CREDIT_BALANCE_TRANSACTION = 'billing.credit_balance_transaction',
    }
    /**
     * The type of credit balance transaction (credit or debit).
     */
    export enum type {
        CREDIT = 'credit',
        DEBIT = 'debit',
    }
}

