/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_fuel_data = {
    /**
     * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
     */
    industry_product_code?: string | null;
    /**
     * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
     */
    quantity_decimal?: string | null;
    /**
     * The type of fuel that was purchased.
     */
    type?: issuing_authorization_fuel_data.type | null;
    /**
     * The units for `quantity_decimal`.
     */
    unit?: issuing_authorization_fuel_data.unit | null;
    /**
     * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
     */
    unit_cost_decimal?: string | null;
};
export namespace issuing_authorization_fuel_data {
    /**
     * The type of fuel that was purchased.
     */
    export enum type {
        DIESEL = 'diesel',
        OTHER = 'other',
        UNLEADED_PLUS = 'unleaded_plus',
        UNLEADED_REGULAR = 'unleaded_regular',
        UNLEADED_SUPER = 'unleaded_super',
    }
    /**
     * The units for `quantity_decimal`.
     */
    export enum unit {
        CHARGING_MINUTE = 'charging_minute',
        IMPERIAL_GALLON = 'imperial_gallon',
        KILOGRAM = 'kilogram',
        KILOWATT_HOUR = 'kilowatt_hour',
        LITER = 'liter',
        OTHER = 'other',
        POUND = 'pound',
        US_GALLON = 'us_gallon',
    }
}

