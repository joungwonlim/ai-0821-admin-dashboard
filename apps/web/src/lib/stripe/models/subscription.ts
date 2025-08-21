/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { bank_account } from './bank_account';
import type { cancellation_details } from './cancellation_details';
import type { card } from './card';
import type { customer } from './customer';
import type { deleted_application } from './deleted_application';
import type { deleted_customer } from './deleted_customer';
import type { discount } from './discount';
import type { invoice } from './invoice';
import type { payment_method } from './payment_method';
import type { setup_intent } from './setup_intent';
import type { source } from './source';
import type { subscription_automatic_tax } from './subscription_automatic_tax';
import type { subscription_billing_thresholds } from './subscription_billing_thresholds';
import type { subscription_item } from './subscription_item';
import type { subscription_pending_invoice_item_interval } from './subscription_pending_invoice_item_interval';
import type { subscription_schedule } from './subscription_schedule';
import type { subscription_transfer_data } from './subscription_transfer_data';
import type { subscriptions_resource_billing_cycle_anchor_config } from './subscriptions_resource_billing_cycle_anchor_config';
import type { subscriptions_resource_billing_mode } from './subscriptions_resource_billing_mode';
import type { subscriptions_resource_pause_collection } from './subscriptions_resource_pause_collection';
import type { subscriptions_resource_payment_settings } from './subscriptions_resource_payment_settings';
import type { subscriptions_resource_pending_update } from './subscriptions_resource_pending_update';
import type { subscriptions_resource_subscription_invoice_settings } from './subscriptions_resource_subscription_invoice_settings';
import type { subscriptions_trials_resource_trial_settings } from './subscriptions_trials_resource_trial_settings';
import type { tax_rate } from './tax_rate';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * Subscriptions allow you to charge a customer on a recurring basis.
 *
 * Related guide: [Creating subscriptions](https://stripe.com/docs/billing/subscriptions/creating)
 */
export type subscription = {
    /**
     * ID of the Connect Application that created the subscription.
     */
    application?: (string | application | deleted_application) | null;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
     */
    application_fee_percent?: number | null;
    automatic_tax: subscription_automatic_tax;
    /**
     * The reference point that aligns future [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle) dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals. The timestamp is in UTC format.
     */
    billing_cycle_anchor: number;
    /**
     * The fixed values used to calculate the `billing_cycle_anchor`.
     */
    billing_cycle_anchor_config?: subscriptions_resource_billing_cycle_anchor_config | null;
    billing_mode: subscriptions_resource_billing_mode;
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds?: subscription_billing_thresholds | null;
    /**
     * A date in the future at which the subscription will automatically get canceled
     */
    cancel_at?: number | null;
    /**
     * Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period.
     */
    cancel_at_period_end: boolean;
    /**
     * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
     */
    canceled_at?: number | null;
    /**
     * Details about why this subscription was cancelled
     */
    cancellation_details?: cancellation_details | null;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    collection_method: subscription.collection_method;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the customer who owns the subscription.
     */
    customer: (string | customer | deleted_customer);
    /**
     * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
     */
    days_until_due?: number | null;
    /**
     * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
     */
    default_payment_method?: (string | payment_method) | null;
    /**
     * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
     */
    default_source?: (string | bank_account | card | source) | null;
    /**
     * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
     */
    default_tax_rates?: Array<tax_rate> | null;
    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string | null;
    /**
     * The discounts applied to the subscription. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<(string | discount)>;
    /**
     * If the subscription has ended, the date the subscription ended.
     */
    ended_at?: number | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    invoice_settings: subscriptions_resource_subscription_invoice_settings;
    /**
     * List of subscription items, each with an attached price.
     */
    items: {
        /**
         * Details about each object.
         */
        data: Array<subscription_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: subscription.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * The most recent invoice this subscription has generated.
     */
    latest_invoice?: (string | invoice) | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
     */
    next_pending_invoice_item_invoice?: number | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: subscription.object;
    /**
     * The account (if any) the charge was made on behalf of for charges associated with this subscription. See the [Connect documentation](https://stripe.com/docs/connect/subscriptions#on-behalf-of) for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
     */
    pause_collection?: subscriptions_resource_pause_collection | null;
    /**
     * Payment settings passed on to invoices created by the subscription.
     */
    payment_settings?: subscriptions_resource_payment_settings | null;
    /**
     * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
     */
    pending_invoice_item_interval?: subscription_pending_invoice_item_interval | null;
    /**
     * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
     */
    pending_setup_intent?: (string | setup_intent) | null;
    /**
     * If specified, [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid.
     */
    pending_update?: subscriptions_resource_pending_update | null;
    /**
     * The schedule attached to the subscription
     */
    schedule?: (string | subscription_schedule) | null;
    /**
     * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
     */
    start_date: number;
    /**
     * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`.
     *
     * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated.
     *
     * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
     *
     * A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged.
     *
     * If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings).
     *
     * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
     */
    status: subscription.status;
    /**
     * ID of the test clock this subscription belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
    /**
     * The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
     */
    transfer_data?: subscription_transfer_data | null;
    /**
     * If the subscription has a trial, the end of that trial.
     */
    trial_end?: number | null;
    /**
     * Settings related to subscription trials.
     */
    trial_settings?: subscriptions_trials_resource_trial_settings | null;
    /**
     * If the subscription has a trial, the beginning of that trial.
     */
    trial_start?: number | null;
};
export namespace subscription {
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    export enum collection_method {
        CHARGE_AUTOMATICALLY = 'charge_automatically',
        SEND_INVOICE = 'send_invoice',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`.
     *
     * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated.
     *
     * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
     *
     * A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged.
     *
     * If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings).
     *
     * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
     */
    export enum status {
        ACTIVE = 'active',
        CANCELED = 'canceled',
        INCOMPLETE = 'incomplete',
        INCOMPLETE_EXPIRED = 'incomplete_expired',
        PAST_DUE = 'past_due',
        PAUSED = 'paused',
        TRIALING = 'trialing',
        UNPAID = 'unpaid',
    }
}

