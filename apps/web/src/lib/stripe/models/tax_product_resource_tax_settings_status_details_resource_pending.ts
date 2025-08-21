/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_tax_settings_status_details_resource_pending = {
    /**
     * The list of missing fields that are required to perform calculations. It includes the entry `head_office` when the status is `pending`. It is recommended to set the optional values even if they aren't listed as required for calculating taxes. Calculations can fail if missing fields aren't explicitly provided on every call.
     */
    missing_fields?: Array<string> | null;
};

