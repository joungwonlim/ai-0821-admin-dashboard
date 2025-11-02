/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_custom_fields_dropdown_option } from './payment_links_resource_custom_fields_dropdown_option';
export type payment_links_resource_custom_fields_dropdown = {
    /**
     * The value that will pre-fill on the payment page.
     */
    default_value?: string | null;
    /**
     * The options available for the customer to select. Up to 200 options allowed.
     */
    options: Array<payment_links_resource_custom_fields_dropdown_option>;
};

