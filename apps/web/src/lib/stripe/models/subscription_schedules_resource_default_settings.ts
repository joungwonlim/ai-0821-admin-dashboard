/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { invoice_setting_subscription_schedule_setting } from './invoice_setting_subscription_schedule_setting';
import type { payment_method } from './payment_method';
import type { subscription_billing_thresholds } from './subscription_billing_thresholds';
import type { subscription_schedules_resource_default_settings_automatic_tax } from './subscription_schedules_resource_default_settings_automatic_tax';
import type { subscription_transfer_data } from './subscription_transfer_data';
export type subscription_schedules_resource_default_settings = {
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
     */
    application_fee_percent?: number | null;
    automatic_tax?: subscription_schedules_resource_default_settings_automatic_tax;
    /**
     * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor: subscription_schedules_resource_default_settings.billing_cycle_anchor;
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds?: subscription_billing_thresholds | null;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    collection_method?: subscription_schedules_resource_default_settings.collection_method | null;
    /**
     * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: (string | payment_method) | null;
    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string | null;
    invoice_settings: invoice_setting_subscription_schedule_setting;
    /**
     * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
     */
    transfer_data?: subscription_transfer_data | null;
};
export namespace subscription_schedules_resource_default_settings {
    /**
     * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
     */
    export enum billing_cycle_anchor {
        AUTOMATIC = 'automatic',
        PHASE_START = 'phase_start',
    }
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    export enum collection_method {
        CHARGE_AUTOMATICALLY = 'charge_automatically',
        SEND_INVOICE = 'send_invoice',
    }
}

