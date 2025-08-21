/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent } from './billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent';
import type { billing_bill_resource_invoicing_pricing_pricing } from './billing_bill_resource_invoicing_pricing_pricing';
import type { billing_bill_resource_invoicing_taxes_tax } from './billing_bill_resource_invoicing_taxes_tax';
import type { discount } from './discount';
import type { discounts_resource_discount_amount } from './discounts_resource_discount_amount';
import type { invoice_line_item_period } from './invoice_line_item_period';
import type { invoices_resource_pretax_credit_amount } from './invoices_resource_pretax_credit_amount';
import type { subscription } from './subscription';
/**
 * Invoice Line Items represent the individual lines within an [invoice](https://stripe.com/docs/api/invoices) and only exist within the context of an invoice.
 *
 * Each line item is backed by either an [invoice item](https://stripe.com/docs/api/invoiceitems) or a [subscription item](https://stripe.com/docs/api/subscription_items).
 */
export type line_item = {
    /**
     * The amount, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * The amount of discount calculated per discount for this line item.
     */
    discount_amounts?: Array<discounts_resource_discount_amount> | null;
    /**
     * If true, discounts will apply to this line item. Always false for prorations.
     */
    discountable: boolean;
    /**
     * The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<(string | discount)>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The ID of the invoice that contains this line item.
     */
    invoice?: string | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: line_item.object;
    /**
     * The parent that generated this line item.
     */
    parent?: billing_bill_resource_invoicing_lines_parents_invoice_line_item_parent | null;
    period: invoice_line_item_period;
    /**
     * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.
     */
    pretax_credit_amounts?: Array<invoices_resource_pretax_credit_amount> | null;
    /**
     * The pricing information of the line item.
     */
    pricing?: billing_bill_resource_invoicing_pricing_pricing | null;
    /**
     * The quantity of the subscription, if the line item is a subscription or a proration.
     */
    quantity?: number | null;
    subscription?: (string | subscription) | null;
    /**
     * The tax information of the line item.
     */
    taxes?: Array<billing_bill_resource_invoicing_taxes_tax> | null;
};
export namespace line_item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        LINE_ITEM = 'line_item',
    }
}

