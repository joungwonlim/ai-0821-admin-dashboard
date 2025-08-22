/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_registrations_resource_country_options_us_state_sales_tax_election = {
    /**
     * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
     */
    jurisdiction?: string;
    /**
     * The type of the election for the state sales tax registration.
     */
    type: tax_product_registrations_resource_country_options_us_state_sales_tax_election.type;
};
export namespace tax_product_registrations_resource_country_options_us_state_sales_tax_election {
    /**
     * The type of the election for the state sales tax registration.
     */
    export enum type {
        LOCAL_USE_TAX = 'local_use_tax',
        SIMPLIFIED_SELLERS_USE_TAX = 'simplified_sellers_use_tax',
        SINGLE_LOCAL_USE_TAX = 'single_local_use_tax',
    }
}

