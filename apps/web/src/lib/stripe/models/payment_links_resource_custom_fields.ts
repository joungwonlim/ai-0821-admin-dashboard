/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_custom_fields_dropdown } from './payment_links_resource_custom_fields_dropdown';
import type { payment_links_resource_custom_fields_label } from './payment_links_resource_custom_fields_label';
import type { payment_links_resource_custom_fields_numeric } from './payment_links_resource_custom_fields_numeric';
import type { payment_links_resource_custom_fields_text } from './payment_links_resource_custom_fields_text';
export type payment_links_resource_custom_fields = {
    dropdown?: payment_links_resource_custom_fields_dropdown;
    /**
     * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
     */
    key: string;
    label: payment_links_resource_custom_fields_label;
    numeric?: payment_links_resource_custom_fields_numeric;
    /**
     * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
     */
    optional: boolean;
    text?: payment_links_resource_custom_fields_text;
    /**
     * The type of the field.
     */
    type: payment_links_resource_custom_fields.type;
};
export namespace payment_links_resource_custom_fields {
    /**
     * The type of the field.
     */
    export enum type {
        DROPDOWN = 'dropdown',
        NUMERIC = 'numeric',
        TEXT = 'text',
    }
}

