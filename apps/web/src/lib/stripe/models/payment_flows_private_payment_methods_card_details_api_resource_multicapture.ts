/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_flows_private_payment_methods_card_details_api_resource_multicapture = {
    /**
     * Indicates whether or not multiple captures are supported.
     */
    status: payment_flows_private_payment_methods_card_details_api_resource_multicapture.status;
};
export namespace payment_flows_private_payment_methods_card_details_api_resource_multicapture {
    /**
     * Indicates whether or not multiple captures are supported.
     */
    export enum status {
        AVAILABLE = 'available',
        UNAVAILABLE = 'unavailable',
    }
}

