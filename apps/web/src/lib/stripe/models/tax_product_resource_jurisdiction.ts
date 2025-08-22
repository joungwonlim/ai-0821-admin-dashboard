/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_jurisdiction = {
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;
    /**
     * A human-readable name for the jurisdiction imposing the tax.
     */
    display_name: string;
    /**
     * Indicates the level of the jurisdiction imposing the tax.
     */
    level: tax_product_resource_jurisdiction.level;
    /**
     * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
     */
    state?: string | null;
};
export namespace tax_product_resource_jurisdiction {
    /**
     * Indicates the level of the jurisdiction imposing the tax.
     */
    export enum level {
        CITY = 'city',
        COUNTRY = 'country',
        COUNTY = 'county',
        DISTRICT = 'district',
        STATE = 'state',
    }
}

