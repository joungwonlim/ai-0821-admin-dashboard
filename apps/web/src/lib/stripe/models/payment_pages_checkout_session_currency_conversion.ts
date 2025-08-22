/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_currency_conversion = {
    /**
     * Total of all items in source currency before discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total of all items in source currency after discounts and taxes are applied.
     */
    amount_total: number;
    /**
     * Exchange rate used to convert source currency amounts to customer currency amounts
     */
    fx_rate: string;
    /**
     * Creation currency of the CheckoutSession before localization
     */
    source_currency: string;
};

