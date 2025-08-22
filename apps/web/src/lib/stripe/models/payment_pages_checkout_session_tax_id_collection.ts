/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_tax_id_collection = {
    /**
     * Indicates whether tax ID collection is enabled for the session
     */
    enabled: boolean;
    /**
     * Indicates whether a tax ID is required on the payment page
     */
    required: payment_pages_checkout_session_tax_id_collection.required;
};
export namespace payment_pages_checkout_session_tax_id_collection {
    /**
     * Indicates whether a tax ID is required on the payment page
     */
    export enum required {
        IF_SUPPORTED = 'if_supported',
        NEVER = 'never',
    }
}

