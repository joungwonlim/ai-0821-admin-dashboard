/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoice_item_parents_invoice_item_parent } from './billing_bill_resource_invoice_item_parents_invoice_item_parent';
import type { billing_bill_resource_invoicing_pricing_pricing } from './billing_bill_resource_invoicing_pricing_pricing';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { discount } from './discount';
import type { invoice } from './invoice';
import type { invoice_line_item_period } from './invoice_line_item_period';
import type { tax_rate } from './tax_rate';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * Invoice Items represent the component lines of an [invoice](https://stripe.com/docs/api/invoices). When you create an invoice item with an `invoice` field, it is attached to the specified invoice and included as [an invoice line item](https://stripe.com/docs/api/invoices/line_item) within [invoice.lines](https://stripe.com/docs/api/invoices/object#invoice_object-lines).
 *
 * Invoice Items can be created before you are ready to actually send the invoice. This can be particularly useful when combined
 * with a [subscription](https://stripe.com/docs/api/subscriptions). Sometimes you want to add a charge or credit to a customer, but actually charge
 * or credit the customer's card only at the end of a regular billing cycle. This is useful for combining several charges
 * (to minimize per-transaction fees), or for having Stripe tabulate your usage-based billing totals.
 *
 * Related guides: [Integrate with the Invoicing API](https://stripe.com/docs/invoicing/integration), [Subscription Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
 */
export type invoiceitem = {
    /**
     * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The ID of the customer who will be billed when this invoice item is billed.
     */
    customer: (string | customer | deleted_customer);
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    date: number;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * If true, discounts will apply to this invoice item. Always false for prorations.
     */
    discountable: boolean;
    /**
     * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts?: Array<(string | discount)> | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The ID of the invoice this invoice item belongs to.
     */
    invoice?: (string | invoice) | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: invoiceitem.object;
    /**
     * The parent that generated this invoice item.
     */
    parent?: billing_bill_resource_invoice_item_parents_invoice_item_parent | null;
    period: invoice_line_item_period;
    /**
     * The pricing information of the invoice item.
     */
    pricing?: billing_bill_resource_invoicing_pricing_pricing | null;
    /**
     * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
     */
    proration: boolean;
    /**
     * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
     */
    quantity: number;
    /**
     * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
     */
    tax_rates?: Array<tax_rate> | null;
    /**
     * ID of the test clock this invoice item belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
};
export namespace invoiceitem {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        INVOICEITEM = 'invoiceitem',
    }
}

