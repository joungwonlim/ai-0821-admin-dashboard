/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture = {
    /**
     * The maximum amount that can be captured.
     */
    maximum_amount_capturable: number;
    /**
     * Indicates whether or not the authorized amount can be over-captured.
     */
    status: payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture.status;
};
export namespace payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture {
    /**
     * Indicates whether or not the authorized amount can be over-captured.
     */
    export enum status {
        AVAILABLE = 'available',
        UNAVAILABLE = 'unavailable',
    }
}

