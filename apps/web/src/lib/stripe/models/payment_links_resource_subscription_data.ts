/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_subscription_data_invoice_settings } from './payment_links_resource_subscription_data_invoice_settings';
import type { subscriptions_trials_resource_trial_settings } from './subscriptions_trials_resource_trial_settings';
export type payment_links_resource_subscription_data = {
    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string | null;
    invoice_settings: payment_links_resource_subscription_data_invoice_settings;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link.
     */
    metadata: Record<string, string>;
    /**
     * Integer representing the number of trial period days before the customer is charged for the first time.
     */
    trial_period_days?: number | null;
    /**
     * Settings related to subscription trials.
     */
    trial_settings?: subscriptions_trials_resource_trial_settings | null;
};

