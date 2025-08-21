/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_tax_settings_defaults = {
    /**
     * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
     */
    tax_behavior?: tax_product_resource_tax_settings_defaults.tax_behavior | null;
    /**
     * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
     */
    tax_code?: string | null;
};
export namespace tax_product_resource_tax_settings_defaults {
    /**
     * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
        INFERRED_BY_CURRENCY = 'inferred_by_currency',
    }
}

