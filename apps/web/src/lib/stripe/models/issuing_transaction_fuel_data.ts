/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_transaction_fuel_data = {
    /**
     * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
     */
    industry_product_code?: string | null;
    /**
     * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
     */
    quantity_decimal?: string | null;
    /**
     * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
     */
    type: string;
    /**
     * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
     */
    unit: string;
    /**
     * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
     */
    unit_cost_decimal: string;
};

