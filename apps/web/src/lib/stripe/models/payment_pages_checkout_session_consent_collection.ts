/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_pages_checkout_session_payment_method_reuse_agreement } from './payment_pages_checkout_session_payment_method_reuse_agreement';
export type payment_pages_checkout_session_consent_collection = {
    /**
     * If set to `hidden`, it will hide legal text related to the reuse of a payment method.
     */
    payment_method_reuse_agreement?: payment_pages_checkout_session_payment_method_reuse_agreement | null;
    /**
     * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
     * Session will determine whether to display an option to opt into promotional communication
     * from the merchant depending on the customer's locale. Only available to US merchants.
     */
    promotions?: payment_pages_checkout_session_consent_collection.promotions | null;
    /**
     * If set to `required`, it requires customers to accept the terms of service before being able to pay.
     */
    terms_of_service?: payment_pages_checkout_session_consent_collection.terms_of_service | null;
};
export namespace payment_pages_checkout_session_consent_collection {
    /**
     * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
     * Session will determine whether to display an option to opt into promotional communication
     * from the merchant depending on the customer's locale. Only available to US merchants.
     */
    export enum promotions {
        AUTO = 'auto',
        NONE = 'none',
    }
    /**
     * If set to `required`, it requires customers to accept the terms of service before being able to pay.
     */
    export enum terms_of_service {
        NONE = 'none',
        REQUIRED = 'required',
    }
}

