/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { address } from './address';
import type { api_errors } from './api_errors';
import type { application } from './application';
import type { automatic_tax } from './automatic_tax';
import type { bank_account } from './bank_account';
import type { billing_bill_resource_invoicing_parents_invoice_parent } from './billing_bill_resource_invoicing_parents_invoice_parent';
import type { billing_bill_resource_invoicing_taxes_tax } from './billing_bill_resource_invoicing_taxes_tax';
import type { card } from './card';
import type { connect_account_reference } from './connect_account_reference';
import type { customer } from './customer';
import type { deleted_application } from './deleted_application';
import type { deleted_customer } from './deleted_customer';
import type { deleted_discount } from './deleted_discount';
import type { deleted_tax_id } from './deleted_tax_id';
import type { discount } from './discount';
import type { discounts_resource_discount_amount } from './discounts_resource_discount_amount';
import type { invoice_payment } from './invoice_payment';
import type { invoice_setting_custom_field } from './invoice_setting_custom_field';
import type { invoice_threshold_reason } from './invoice_threshold_reason';
import type { invoices_payment_settings } from './invoices_payment_settings';
import type { invoices_resource_confirmation_secret } from './invoices_resource_confirmation_secret';
import type { invoices_resource_from_invoice } from './invoices_resource_from_invoice';
import type { invoices_resource_invoice_rendering } from './invoices_resource_invoice_rendering';
import type { invoices_resource_invoice_tax_id } from './invoices_resource_invoice_tax_id';
import type { invoices_resource_pretax_credit_amount } from './invoices_resource_pretax_credit_amount';
import type { invoices_resource_shipping_cost } from './invoices_resource_shipping_cost';
import type { invoices_resource_status_transitions } from './invoices_resource_status_transitions';
import type { line_item } from './line_item';
import type { payment_method } from './payment_method';
import type { shipping } from './shipping';
import type { source } from './source';
import type { tax_id } from './tax_id';
import type { tax_rate } from './tax_rate';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * Invoices are statements of amounts owed by a customer, and are either
 * generated one-off, or generated periodically from a subscription.
 *
 * They contain [invoice items](https://stripe.com/docs/api#invoiceitems), and proration adjustments
 * that may be caused by subscription upgrades/downgrades (if necessary).
 *
 * If your invoice is configured to be billed through automatic charges,
 * Stripe automatically finalizes your invoice and attempts payment. Note
 * that finalizing the invoice,
 * [when automatic](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection), does
 * not happen immediately as the invoice is created. Stripe waits
 * until one hour after the last webhook was successfully sent (or the last
 * webhook timed out after failing). If you (and the platforms you may have
 * connected to) have no webhooks configured, Stripe waits one hour after
 * creation to finalize the invoice.
 *
 * If your invoice is configured to be billed by sending an email, then based on your
 * [email settings](https://dashboard.stripe.com/account/billing/automatic),
 * Stripe will email the invoice to your customer and await payment. These
 * emails can contain a link to a hosted page to pay the invoice.
 *
 * Stripe applies any customer credit on the account before determining the
 * amount due for the invoice (i.e., the amount that will be actually
 * charged). If the amount due for the invoice is less than Stripe's [minimum allowed charge
 * per currency](/docs/currencies#minimum-and-maximum-charge-amounts), the
 * invoice is automatically marked paid, and we add the amount due to the
 * customer's credit balance which is applied to the next invoice.
 *
 * More details on the customer's credit balance are
 * [here](https://stripe.com/docs/billing/customer/balance).
 *
 * Related guide: [Send invoices to customers](https://stripe.com/docs/billing/invoices/sending)
 */
export type invoice = {
    /**
     * The country of the business associated with this invoice, most often the business creating the invoice.
     */
    account_country?: string | null;
    /**
     * The public name of the business associated with this invoice, most often the business creating the invoice.
     */
    account_name?: string | null;
    /**
     * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
     */
    account_tax_ids?: Array<(string | tax_id | deleted_tax_id)> | null;
    /**
     * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
     */
    amount_due: number;
    /**
     * Amount that was overpaid on the invoice. The amount overpaid is credited to the customer's credit balance.
     */
    amount_overpaid: number;
    /**
     * The amount, in cents (or local equivalent), that was paid.
     */
    amount_paid: number;
    /**
     * The difference between amount_due and amount_paid, in cents (or local equivalent).
     */
    amount_remaining: number;
    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping: number;
    /**
     * ID of the Connect Application that created the invoice.
     */
    application?: (string | application | deleted_application) | null;
    /**
     * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule. If a failure is returned with a non-retryable return code, the invoice can no longer be retried unless a new payment method is obtained. Retries will continue to be scheduled, and attempt_count will continue to increment, but retries will only be executed if a new payment method is obtained.
     */
    attempt_count: number;
    /**
     * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
     */
    attempted: boolean;
    /**
     * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
     */
    auto_advance: boolean;
    automatic_tax: automatic_tax;
    /**
     * The time when this invoice is currently scheduled to be automatically finalized. The field will be `null` if the invoice is not scheduled to finalize in the future. If the invoice is not in the draft state, this field will always be `null` - see `finalized_at` for the time when an already-finalized invoice was finalized.
     */
    automatically_finalizes_at?: number | null;
    /**
     * Indicates the reason why the invoice was created.
     *
     * * `manual`: Unrelated to a subscription, for example, created via the invoice editor.
     * * `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
     * * `subscription_create`: A new subscription was created.
     * * `subscription_cycle`: A subscription advanced into a new period.
     * * `subscription_threshold`: A subscription reached a billing threshold.
     * * `subscription_update`: A subscription was updated.
     * * `upcoming`: Reserved for simulated invoices, per the upcoming invoice endpoint.
     */
    billing_reason?: invoice.billing_reason | null;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
     */
    collection_method: invoice.collection_method;
    /**
     * The confirmation secret associated with this invoice. Currently, this contains the client_secret of the PaymentIntent that Stripe creates during invoice finalization.
     */
    confirmation_secret?: invoices_resource_confirmation_secret | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Custom fields displayed on the invoice.
     */
    custom_fields?: Array<invoice_setting_custom_field> | null;
    /**
     * The ID of the customer who will be billed.
     */
    customer: (string | customer | deleted_customer);
    /**
     * The customer's address. Until the invoice is finalized, this field will equal `customer.address`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_address?: address | null;
    /**
     * The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_email?: string | null;
    /**
     * The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_name?: string | null;
    /**
     * The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_phone?: string | null;
    /**
     * The customer's shipping information. Until the invoice is finalized, this field will equal `customer.shipping`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_shipping?: shipping | null;
    /**
     * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_tax_exempt?: invoice.customer_tax_exempt | null;
    /**
     * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
     */
    customer_tax_ids?: Array<invoices_resource_invoice_tax_id> | null;
    /**
     * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
     */
    default_payment_method?: (string | payment_method) | null;
    /**
     * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
     */
    default_source?: (string | bank_account | card | source) | null;
    /**
     * The tax rates applied to this invoice, if any.
     */
    default_tax_rates: Array<tax_rate>;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
     */
    description?: string | null;
    /**
     * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<(string | discount | deleted_discount)>;
    /**
     * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
     */
    due_date?: number | null;
    /**
     * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
     */
    effective_at?: number | null;
    /**
     * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
     */
    ending_balance?: number | null;
    /**
     * Footer displayed on the invoice.
     */
    footer?: string | null;
    /**
     * Details of the invoice that was cloned. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
     */
    from_invoice?: invoices_resource_from_invoice | null;
    /**
     * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
     */
    hosted_invoice_url?: string | null;
    /**
     * Unique identifier for the object. For preview invoices created using the [create preview](https://stripe.com/docs/api/invoices/create_preview) endpoint, this id will be prefixed with `upcoming_in`.
     */
    id: string;
    /**
     * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
     */
    invoice_pdf?: string | null;
    issuer: connect_account_reference;
    /**
     * The error encountered during the previous attempt to finalize the invoice. This field is cleared when the invoice is successfully finalized.
     */
    last_finalization_error?: api_errors | null;
    /**
     * The ID of the most recent non-draft revision of this invoice
     */
    latest_revision?: (string | invoice) | null;
    /**
     * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
     */
    lines: {
        /**
         * Details about each object.
         */
        data: Array<line_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: invoice.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
     */
    next_payment_attempt?: number | null;
    /**
     * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
     */
    number?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: invoice.object;
    /**
     * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * The parent that generated this invoice
     */
    parent?: billing_bill_resource_invoicing_parents_invoice_parent | null;
    payment_settings: invoices_payment_settings;
    /**
     * Payments for this invoice
     */
    payments?: {
        /**
         * Details about each object.
         */
        data: Array<invoice_payment>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: invoice.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * End of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
     */
    period_end: number;
    /**
     * Start of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
     */
    period_start: number;
    /**
     * Total amount of all post-payment credit notes issued for this invoice.
     */
    post_payment_credit_notes_amount: number;
    /**
     * Total amount of all pre-payment credit notes issued for this invoice.
     */
    pre_payment_credit_notes_amount: number;
    /**
     * This is the transaction number that appears on email receipts sent for this invoice.
     */
    receipt_number?: string | null;
    /**
     * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
     */
    rendering?: invoices_resource_invoice_rendering | null;
    /**
     * The details of the cost of shipping, including the ShippingRate applied on the invoice.
     */
    shipping_cost?: invoices_resource_shipping_cost | null;
    /**
     * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
     */
    shipping_details?: shipping | null;
    /**
     * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. For revision invoices, this also includes any customer balance that was applied to the original invoice.
     */
    starting_balance: number;
    /**
     * Extra information about an invoice for the customer's credit card statement.
     */
    statement_descriptor?: string | null;
    /**
     * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
     */
    status?: invoice.status | null;
    status_transitions: invoices_resource_status_transitions;
    /**
     * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. Item discounts are already incorporated
     */
    subtotal: number;
    /**
     * The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
     */
    subtotal_excluding_tax?: number | null;
    /**
     * ID of the test clock this invoice belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
    threshold_reason?: invoice_threshold_reason;
    /**
     * Total after discounts and taxes.
     */
    total: number;
    /**
     * The aggregate amounts calculated per discount across all line items.
     */
    total_discount_amounts?: Array<discounts_resource_discount_amount> | null;
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax.
     */
    total_excluding_tax?: number | null;
    /**
     * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. This is a combined list of total_pretax_credit_amounts across all invoice line items.
     */
    total_pretax_credit_amounts?: Array<invoices_resource_pretax_credit_amount> | null;
    /**
     * The aggregate tax information of all line items.
     */
    total_taxes?: Array<billing_bill_resource_invoicing_taxes_tax> | null;
    /**
     * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
     */
    webhooks_delivered_at?: number | null;
};
export namespace invoice {
    /**
     * Indicates the reason why the invoice was created.
     *
     * * `manual`: Unrelated to a subscription, for example, created via the invoice editor.
     * * `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
     * * `subscription_create`: A new subscription was created.
     * * `subscription_cycle`: A subscription advanced into a new period.
     * * `subscription_threshold`: A subscription reached a billing threshold.
     * * `subscription_update`: A subscription was updated.
     * * `upcoming`: Reserved for simulated invoices, per the upcoming invoice endpoint.
     */
    export enum billing_reason {
        AUTOMATIC_PENDING_INVOICE_ITEM_INVOICE = 'automatic_pending_invoice_item_invoice',
        MANUAL = 'manual',
        QUOTE_ACCEPT = 'quote_accept',
        SUBSCRIPTION = 'subscription',
        SUBSCRIPTION_CREATE = 'subscription_create',
        SUBSCRIPTION_CYCLE = 'subscription_cycle',
        SUBSCRIPTION_THRESHOLD = 'subscription_threshold',
        SUBSCRIPTION_UPDATE = 'subscription_update',
        UPCOMING = 'upcoming',
    }
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
     */
    export enum collection_method {
        CHARGE_AUTOMATICALLY = 'charge_automatically',
        SEND_INVOICE = 'send_invoice',
    }
    /**
     * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
     */
    export enum customer_tax_exempt {
        EXEMPT = 'exempt',
        NONE = 'none',
        REVERSE = 'reverse',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
     */
    export enum status {
        DRAFT = 'draft',
        OPEN = 'open',
        PAID = 'paid',
        UNCOLLECTIBLE = 'uncollectible',
        VOID = 'void',
    }
}

