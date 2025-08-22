/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { bank_account } from './bank_account';
import type { card } from './card';
import type { cash_balance } from './cash_balance';
import type { customer_tax } from './customer_tax';
import type { discount } from './discount';
import type { invoice_setting_customer_setting } from './invoice_setting_customer_setting';
import type { shipping } from './shipping';
import type { source } from './source';
import type { subscription } from './subscription';
import type { tax_id } from './tax_id';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * This object represents a customer of your business. Use it to [create recurring charges](https://stripe.com/docs/invoicing/customer), [save payment](https://stripe.com/docs/payments/save-during-payment) and contact information,
 * and track payments that belong to the same customer.
 */
export type customer = {
    /**
     * The customer's address.
     */
    address?: address | null;
    /**
     * The current balance, if any, that's stored on the customer in their default currency. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that's added to their next invoice. The balance only considers amounts that Stripe hasn't successfully applied to any invoice. It doesn't reflect unpaid invoices. This balance is only taken into account after invoices finalize. For multi-currency balances, see [invoice_credit_balance](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance).
     */
    balance?: number;
    /**
     * The current funds being held by Stripe on behalf of the customer. You can apply these funds towards payment intents when the source is "cash_balance". The `settings[reconciliation_mode]` field describes if these funds apply to these payment intents manually or automatically.
     */
    cash_balance?: cash_balance | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
     */
    currency?: string | null;
    /**
     * ID of the default payment source for the customer.
     *
     * If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
     */
    default_source?: (string | bank_account | card | source) | null;
    /**
     * Tracks the most recent state change on any invoice belonging to the customer. Paying an invoice or marking it uncollectible via the API will set this field to false. An automatic payment failure or passing the `invoice.due_date` will set this field to `true`.
     *
     * If an invoice becomes uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't reset to `false`.
     *
     * If you care whether the customer has paid their most recent subscription invoice, use `subscription.status` instead. Paying or marking uncollectible any customer invoice regardless of whether it is the latest invoice for a subscription will always set this field to `false`.
     */
    delinquent?: boolean | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * Describes the current discount active on the customer, if there is one.
     */
    discount?: discount | null;
    /**
     * The customer's email address.
     */
    email?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
     */
    invoice_credit_balance?: Record<string, number>;
    /**
     * The prefix for the customer used to generate unique invoice numbers.
     */
    invoice_prefix?: string | null;
    invoice_settings?: invoice_setting_customer_setting;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string>;
    /**
     * The customer's full name or business name.
     */
    name?: string | null;
    /**
     * The suffix of the customer's next invoice number (for example, 0001). When the account uses account level sequencing, this parameter is ignored in API requests and the field omitted in API responses.
     */
    next_invoice_sequence?: number;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: customer.object;
    /**
     * The customer's phone number.
     */
    phone?: string | null;
    /**
     * The customer's preferred locales (languages), ordered by preference.
     */
    preferred_locales?: Array<string> | null;
    /**
     * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
     */
    shipping?: shipping | null;
    /**
     * The customer's payment sources, if any.
     */
    sources?: {
        /**
         * Details about each object.
         */
        data: Array<(bank_account | card | source)>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: customer.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * The customer's current subscriptions, if any.
     */
    subscriptions?: {
        /**
         * Details about each object.
         */
        data: Array<subscription>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: customer.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    tax?: customer_tax;
    /**
     * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
     */
    tax_exempt?: customer.tax_exempt | null;
    /**
     * The customer's tax IDs.
     */
    tax_ids?: {
        /**
         * Details about each object.
         */
        data: Array<tax_id>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: customer.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * ID of the test clock that this customer belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
};
export namespace customer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CUSTOMER = 'customer',
    }
    /**
     * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
     */
    export enum tax_exempt {
        EXEMPT = 'exempt',
        NONE = 'none',
        REVERSE = 'reverse',
    }
}

