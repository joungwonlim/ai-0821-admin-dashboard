/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_registrations_resource_country_options_eu_standard } from './tax_product_registrations_resource_country_options_eu_standard';
export type tax_product_registrations_resource_country_options_europe = {
    standard?: tax_product_registrations_resource_country_options_eu_standard;
    /**
     * Type of registration in an EU country.
     */
    type: tax_product_registrations_resource_country_options_europe.type;
};
export namespace tax_product_registrations_resource_country_options_europe {
    /**
     * Type of registration in an EU country.
     */
    export enum type {
        IOSS = 'ioss',
        OSS_NON_UNION = 'oss_non_union',
        OSS_UNION = 'oss_union',
        STANDARD = 'standard',
    }
}

