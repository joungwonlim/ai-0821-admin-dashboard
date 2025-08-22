/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_payment_method_reuse_agreement } from './payment_links_resource_payment_method_reuse_agreement';
export type payment_links_resource_consent_collection = {
    /**
     * Settings related to the payment method reuse text shown in the Checkout UI.
     */
    payment_method_reuse_agreement?: payment_links_resource_payment_method_reuse_agreement | null;
    /**
     * If set to `auto`, enables the collection of customer consent for promotional communications.
     */
    promotions?: payment_links_resource_consent_collection.promotions | null;
    /**
     * If set to `required`, it requires cutomers to accept the terms of service before being able to pay. If set to `none`, customers won't be shown a checkbox to accept the terms of service.
     */
    terms_of_service?: payment_links_resource_consent_collection.terms_of_service | null;
};
export namespace payment_links_resource_consent_collection {
    /**
     * If set to `auto`, enables the collection of customer consent for promotional communications.
     */
    export enum promotions {
        AUTO = 'auto',
        NONE = 'none',
    }
    /**
     * If set to `required`, it requires cutomers to accept the terms of service before being able to pay. If set to `none`, customers won't be shown a checkbox to accept the terms of service.
     */
    export enum terms_of_service {
        NONE = 'none',
        REQUIRED = 'required',
    }
}

