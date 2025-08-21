/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_taxes_tax } from './billing_bill_resource_invoicing_taxes_tax';
import type { credit_note_line_item } from './credit_note_line_item';
import type { credit_note_refund } from './credit_note_refund';
import type { credit_notes_pretax_credit_amount } from './credit_notes_pretax_credit_amount';
import type { customer } from './customer';
import type { customer_balance_transaction } from './customer_balance_transaction';
import type { deleted_customer } from './deleted_customer';
import type { discounts_resource_discount_amount } from './discounts_resource_discount_amount';
import type { invoice } from './invoice';
import type { invoices_resource_shipping_cost } from './invoices_resource_shipping_cost';
/**
 * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
 *
 * Related guide: [Credit notes](https://stripe.com/docs/billing/invoices/credit-notes)
 */
export type credit_note = {
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
     */
    amount: number;
    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping: number;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the customer.
     */
    customer: (string | customer | deleted_customer);
    /**
     * Customer balance transaction related to this credit note.
     */
    customer_balance_transaction?: (string | customer_balance_transaction) | null;
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.
     */
    discount_amount: number;
    /**
     * The aggregate amounts calculated per discount for all line items.
     */
    discount_amounts: Array<discounts_resource_discount_amount>;
    /**
     * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
     */
    effective_at?: number | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * ID of the invoice.
     */
    invoice: (string | invoice);
    /**
     * Line items that make up the credit note
     */
    lines: {
        /**
         * Details about each object.
         */
        data: Array<credit_note_line_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: credit_note.object;
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
     * Customer-facing text that appears on the credit note PDF.
     */
    memo?: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
     */
    number: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: credit_note.object;
    /**
     * Amount that was credited outside of Stripe.
     */
    out_of_band_amount?: number | null;
    /**
     * The link to download the PDF of the credit note.
     */
    pdf: string;
    /**
     * The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof.
     */
    post_payment_amount: number;
    /**
     * The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced.
     */
    pre_payment_amount: number;
    /**
     * The pretax credit amounts (ex: discount, credit grants, etc) for all line items.
     */
    pretax_credit_amounts: Array<credit_notes_pretax_credit_amount>;
    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?: credit_note.reason | null;
    /**
     * Refunds related to this credit note.
     */
    refunds: Array<credit_note_refund>;
    /**
     * The details of the cost of shipping, including the ShippingRate applied to the invoice.
     */
    shipping_cost?: invoices_resource_shipping_cost | null;
    /**
     * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    status: credit_note.status;
    /**
     * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
     */
    subtotal: number;
    /**
     * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.
     */
    subtotal_excluding_tax?: number | null;
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.
     */
    total: number;
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.
     */
    total_excluding_tax?: number | null;
    /**
     * The aggregate tax information for all line items.
     */
    total_taxes?: Array<billing_bill_resource_invoicing_taxes_tax> | null;
    /**
     * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
     */
    type: credit_note.type;
    /**
     * The time that the credit note was voided.
     */
    voided_at?: number | null;
};
export namespace credit_note {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    export enum reason {
        DUPLICATE = 'duplicate',
        FRAUDULENT = 'fraudulent',
        ORDER_CHANGE = 'order_change',
        PRODUCT_UNSATISFACTORY = 'product_unsatisfactory',
    }
    /**
     * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    export enum status {
        ISSUED = 'issued',
        VOID = 'void',
    }
    /**
     * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
     */
    export enum type {
        MIXED = 'mixed',
        POST_PAYMENT = 'post_payment',
        PRE_PAYMENT = 'pre_payment',
    }
}

