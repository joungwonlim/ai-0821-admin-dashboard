/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grants_resource_amount } from './billing_credit_grants_resource_amount';
import type { billing_credit_grants_resource_applicability_config } from './billing_credit_grants_resource_applicability_config';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * A credit grant is an API resource that documents the allocation of some billing credits to a customer.
 *
 * Related guide: [Billing credits](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
 */
export type billing_credit_grant = {
    amount: billing_credit_grants_resource_amount;
    applicability_config: billing_credit_grants_resource_applicability_config;
    /**
     * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
     */
    category: billing_credit_grant.category;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * ID of the customer receiving the billing credits.
     */
    customer: (string | customer | deleted_customer);
    /**
     * The time when the billing credits become effective-when they're eligible for use.
     */
    effective_at?: number | null;
    /**
     * The time when the billing credits expire. If not present, the billing credits don't expire.
     */
    expires_at?: number | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * A descriptive name shown in dashboard.
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_credit_grant.object;
    /**
     * The priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
     */
    priority?: number | null;
    /**
     * ID of the test clock this credit grant belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
    /**
     * The time when this credit grant was voided. If not present, the credit grant hasn't been voided.
     */
    voided_at?: number | null;
};
export namespace billing_credit_grant {
    /**
     * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
     */
    export enum category {
        PAID = 'paid',
        PROMOTIONAL = 'promotional',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_CREDIT_GRANT = 'billing.credit_grant',
    }
}

