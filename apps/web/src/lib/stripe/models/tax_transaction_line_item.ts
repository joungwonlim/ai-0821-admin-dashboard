/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_tax_transaction_line_item_resource_reversal } from './tax_product_resource_tax_transaction_line_item_resource_reversal';
export type tax_transaction_line_item = {
    /**
     * The line item amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
     */
    amount: number;
    /**
     * The amount of tax calculated for this line item, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_tax: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
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
    object: tax_transaction_line_item.object;
    /**
     * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
     */
    product?: string | null;
    /**
     * The number of units of the item being purchased. For reversals, this is the quantity reversed.
     */
    quantity: number;
    /**
     * A custom identifier for this line item in the transaction.
     */
    reference: string;
    /**
     * If `type=reversal`, contains information about what was reversed.
     */
    reversal?: tax_product_resource_tax_transaction_line_item_resource_reversal | null;
    /**
     * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
     */
    tax_behavior: tax_transaction_line_item.tax_behavior;
    /**
     * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
     */
    tax_code: string;
    /**
     * If `reversal`, this line item reverses an earlier transaction.
     */
    type: tax_transaction_line_item.type;
};
export namespace tax_transaction_line_item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_TRANSACTION_LINE_ITEM = 'tax.transaction_line_item',
    }
    /**
     * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
    }
    /**
     * If `reversal`, this line item reverses an earlier transaction.
     */
    export enum type {
        REVERSAL = 'reversal',
        TRANSACTION = 'transaction',
    }
}

