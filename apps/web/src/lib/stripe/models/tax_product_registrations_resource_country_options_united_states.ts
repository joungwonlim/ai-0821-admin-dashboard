/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_registrations_resource_country_options_us_local_amusement_tax } from './tax_product_registrations_resource_country_options_us_local_amusement_tax';
import type { tax_product_registrations_resource_country_options_us_local_lease_tax } from './tax_product_registrations_resource_country_options_us_local_lease_tax';
import type { tax_product_registrations_resource_country_options_us_state_sales_tax } from './tax_product_registrations_resource_country_options_us_state_sales_tax';
export type tax_product_registrations_resource_country_options_united_states = {
    local_amusement_tax?: tax_product_registrations_resource_country_options_us_local_amusement_tax;
    local_lease_tax?: tax_product_registrations_resource_country_options_us_local_lease_tax;
    /**
     * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
     */
    state: string;
    state_sales_tax?: tax_product_registrations_resource_country_options_us_state_sales_tax;
    /**
     * Type of registration in the US.
     */
    type: tax_product_registrations_resource_country_options_united_states.type;
};
export namespace tax_product_registrations_resource_country_options_united_states {
    /**
     * Type of registration in the US.
     */
    export enum type {
        LOCAL_AMUSEMENT_TAX = 'local_amusement_tax',
        LOCAL_LEASE_TAX = 'local_lease_tax',
        STATE_COMMUNICATIONS_TAX = 'state_communications_tax',
        STATE_RETAIL_DELIVERY_FEE = 'state_retail_delivery_fee',
        STATE_SALES_TAX = 'state_sales_tax',
    }
}

