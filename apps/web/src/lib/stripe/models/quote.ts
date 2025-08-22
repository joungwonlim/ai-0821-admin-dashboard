/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { customer } from './customer';
import type { deleted_application } from './deleted_application';
import type { deleted_customer } from './deleted_customer';
import type { deleted_invoice } from './deleted_invoice';
import type { discount } from './discount';
import type { invoice } from './invoice';
import type { invoice_setting_quote_setting } from './invoice_setting_quote_setting';
import type { item } from './item';
import type { quotes_resource_automatic_tax } from './quotes_resource_automatic_tax';
import type { quotes_resource_computed } from './quotes_resource_computed';
import type { quotes_resource_from_quote } from './quotes_resource_from_quote';
import type { quotes_resource_status_transitions } from './quotes_resource_status_transitions';
import type { quotes_resource_subscription_data_subscription_data } from './quotes_resource_subscription_data_subscription_data';
import type { quotes_resource_total_details } from './quotes_resource_total_details';
import type { quotes_resource_transfer_data } from './quotes_resource_transfer_data';
import type { subscription } from './subscription';
import type { subscription_schedule } from './subscription_schedule';
import type { tax_rate } from './tax_rate';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * A Quote is a way to model prices that you'd like to provide to a customer.
 * Once accepted, it will automatically create an invoice, subscription or subscription schedule.
 */
export type quote = {
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total after discounts and taxes are applied.
     */
    amount_total: number;
    /**
     * ID of the Connect Application that created the quote.
     */
    application?: (string | application | deleted_application) | null;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
     */
    application_fee_amount?: number | null;
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
     */
    application_fee_percent?: number | null;
    automatic_tax: quotes_resource_automatic_tax;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
     */
    collection_method: quote.collection_method;
    computed: quotes_resource_computed;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null;
    /**
     * The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * The tax rates applied to this quote.
     */
    default_tax_rates?: Array<(string | tax_rate)>;
    /**
     * A description that will be displayed on the quote PDF.
     */
    description?: string | null;
    /**
     * The discounts applied to this quote.
     */
    discounts: Array<(string | discount)>;
    /**
     * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
     */
    expires_at: number;
    /**
     * A footer that will be displayed on the quote PDF.
     */
    footer?: string | null;
    /**
     * Details of the quote that was cloned. See the [cloning documentation](https://stripe.com/docs/quotes/clone) for more details.
     */
    from_quote?: quotes_resource_from_quote | null;
    /**
     * A header that will be displayed on the quote PDF.
     */
    header?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The invoice that was created from this quote.
     */
    invoice?: (string | invoice | deleted_invoice) | null;
    invoice_settings: invoice_setting_quote_setting;
    /**
     * A list of items the customer is being quoted for.
     */
    line_items?: {
        /**
         * Details about each object.
         */
        data: Array<item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: quote.object;
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
    metadata: Record<string, string>;
    /**
     * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
     */
    number?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: quote.object;
    /**
     * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * The status of the quote.
     */
    status: quote.status;
    status_transitions: quotes_resource_status_transitions;
    /**
     * The subscription that was created or updated from this quote.
     */
    subscription?: (string | subscription) | null;
    subscription_data: quotes_resource_subscription_data_subscription_data;
    /**
     * The subscription schedule that was created or updated from this quote.
     */
    subscription_schedule?: (string | subscription_schedule) | null;
    /**
     * ID of the test clock this quote belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
    total_details: quotes_resource_total_details;
    /**
     * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
     */
    transfer_data?: quotes_resource_transfer_data | null;
};
export namespace quote {
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
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
     * The status of the quote.
     */
    export enum status {
        ACCEPTED = 'accepted',
        CANCELED = 'canceled',
        DRAFT = 'draft',
        OPEN = 'open',
    }
}

