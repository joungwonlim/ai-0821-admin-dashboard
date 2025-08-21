/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { discounts_resource_stackable_discount } from './discounts_resource_stackable_discount';
import type { invoice_setting_subscription_schedule_phase_setting } from './invoice_setting_subscription_schedule_phase_setting';
import type { payment_method } from './payment_method';
import type { schedules_phase_automatic_tax } from './schedules_phase_automatic_tax';
import type { subscription_billing_thresholds } from './subscription_billing_thresholds';
import type { subscription_schedule_add_invoice_item } from './subscription_schedule_add_invoice_item';
import type { subscription_schedule_configuration_item } from './subscription_schedule_configuration_item';
import type { subscription_transfer_data } from './subscription_transfer_data';
import type { tax_rate } from './tax_rate';
/**
 * A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
 */
export type subscription_schedule_phase_configuration = {
    /**
     * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
     */
    add_invoice_items: Array<subscription_schedule_add_invoice_item>;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
     */
    application_fee_percent?: number | null;
    automatic_tax?: schedules_phase_automatic_tax;
    /**
     * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
     */
    billing_cycle_anchor?: subscription_schedule_phase_configuration.billing_cycle_anchor | null;
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds?: subscription_billing_thresholds | null;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    collection_method?: subscription_schedule_phase_configuration.collection_method | null;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: (string | payment_method) | null;
    /**
     * The default tax rates to apply to the subscription during this phase of the subscription schedule.
     */
    default_tax_rates?: Array<tax_rate> | null;
    /**
     * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string | null;
    /**
     * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
     */
    discounts: Array<discounts_resource_stackable_discount>;
    /**
     * The end of this phase of the subscription schedule.
     */
    end_date: number;
    /**
     * The invoice settings applicable during this phase.
     */
    invoice_settings?: invoice_setting_subscription_schedule_phase_setting | null;
    /**
     * Subscription items to configure the subscription to during this phase of the subscription schedule.
     */
    items: Array<subscription_schedule_configuration_item>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
     */
    metadata?: Record<string, string> | null;
    /**
     * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * When transitioning phases, controls how prorations are handled (if any). Possible values are `create_prorations`, `none`, and `always_invoice`.
     */
    proration_behavior: subscription_schedule_phase_configuration.proration_behavior;
    /**
     * The start of this phase of the subscription schedule.
     */
    start_date: number;
    /**
     * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
     */
    transfer_data?: subscription_transfer_data | null;
    /**
     * When the trial ends within the phase.
     */
    trial_end?: number | null;
};
export namespace subscription_schedule_phase_configuration {
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
    /**
     * When transitioning phases, controls how prorations are handled (if any). Possible values are `create_prorations`, `none`, and `always_invoice`.
     */
    export enum proration_behavior {
        ALWAYS_INVOICE = 'always_invoice',
        CREATE_PRORATIONS = 'create_prorations',
        NONE = 'none',
    }
}

