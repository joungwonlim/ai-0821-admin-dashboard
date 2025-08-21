/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_taxes_tax } from './billing_bill_resource_invoicing_taxes_tax';
import type { credit_notes_pretax_credit_amount } from './credit_notes_pretax_credit_amount';
import type { discounts_resource_discount_amount } from './discounts_resource_discount_amount';
import type { tax_rate } from './tax_rate';
/**
 * The credit note line item object
 */
export type credit_note_line_item = {
    /**
     * The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
     */
    amount: number;
    /**
     * Description of the item being credited.
     */
    description?: string | null;
    /**
     * The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
     */
    discount_amount: number;
    /**
     * The amount of discount calculated per discount for this line item
     */
    discount_amounts: Array<discounts_resource_discount_amount>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * ID of the invoice line item being credited
     */
    invoice_line_item?: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: credit_note_line_item.object;
    /**
     * The pretax credit amounts (ex: discount, credit grants, etc) for this line item.
     */
    pretax_credit_amounts: Array<credit_notes_pretax_credit_amount>;
    /**
     * The number of units of product being credited.
     */
    quantity?: number | null;
    /**
     * The tax rates which apply to the line item.
     */
    tax_rates: Array<tax_rate>;
    /**
     * The tax information of the line item.
     */
    taxes?: Array<billing_bill_resource_invoicing_taxes_tax> | null;
    /**
     * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
     */
    type: credit_note_line_item.type;
    /**
     * The cost of each unit of product being credited.
     */
    unit_amount?: number | null;
    /**
     * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
     */
    unit_amount_decimal?: string | null;
};
export namespace credit_note_line_item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CREDIT_NOTE_LINE_ITEM = 'credit_note_line_item',
    }
    /**
     * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
     */
    export enum type {
        CUSTOM_LINE_ITEM = 'custom_line_item',
        INVOICE_LINE_ITEM = 'invoice_line_item',
    }
}

