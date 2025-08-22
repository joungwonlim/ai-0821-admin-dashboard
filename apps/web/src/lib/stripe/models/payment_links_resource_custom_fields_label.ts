/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_links_resource_custom_fields_label = {
    /**
     * Custom text for the label, displayed to the customer. Up to 50 characters.
     */
    custom?: string | null;
    /**
     * The type of the label.
     */
    type: payment_links_resource_custom_fields_label.type;
};
export namespace payment_links_resource_custom_fields_label {
    /**
     * The type of the label.
     */
    export enum type {
        CUSTOM = 'custom',
    }
}

