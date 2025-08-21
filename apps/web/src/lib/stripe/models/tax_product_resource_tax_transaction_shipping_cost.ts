/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_tax_transaction_shipping_cost = {
    /**
     * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
     */
    amount: number;
    /**
     * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_tax: number;
    /**
     * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
     */
    shipping_rate?: string;
    /**
     * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
     */
    tax_behavior: tax_product_resource_tax_transaction_shipping_cost.tax_behavior;
    /**
     * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
     */
    tax_code: string;
};
export namespace tax_product_resource_tax_transaction_shipping_cost {
    /**
     * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
    }
}

