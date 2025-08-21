/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_links_resource_tax_id_collection = {
    /**
     * Indicates whether tax ID collection is enabled for the session.
     */
    enabled: boolean;
    required: payment_links_resource_tax_id_collection.required;
};
export namespace payment_links_resource_tax_id_collection {
    export enum required {
        IF_SUPPORTED = 'if_supported',
        NEVER = 'never',
    }
}

