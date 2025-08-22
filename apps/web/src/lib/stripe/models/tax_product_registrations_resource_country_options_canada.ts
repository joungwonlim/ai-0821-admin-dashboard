/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_registrations_resource_country_options_ca_province_standard } from './tax_product_registrations_resource_country_options_ca_province_standard';
export type tax_product_registrations_resource_country_options_canada = {
    province_standard?: tax_product_registrations_resource_country_options_ca_province_standard;
    /**
     * Type of registration in Canada.
     */
    type: tax_product_registrations_resource_country_options_canada.type;
};
export namespace tax_product_registrations_resource_country_options_canada {
    /**
     * Type of registration in Canada.
     */
    export enum type {
        PROVINCE_STANDARD = 'province_standard',
        SIMPLIFIED = 'simplified',
        STANDARD = 'standard',
    }
}

