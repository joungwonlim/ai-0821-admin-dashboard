/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_consent = {
    /**
     * If `opt_in`, the customer consents to receiving promotional communications
     * from the merchant about this Checkout Session.
     */
    promotions?: payment_pages_checkout_session_consent.promotions | null;
    /**
     * If `accepted`, the customer in this Checkout Session has agreed to the merchant's terms of service.
     */
    terms_of_service?: payment_pages_checkout_session_consent.terms_of_service | null;
};
export namespace payment_pages_checkout_session_consent {
    /**
     * If `opt_in`, the customer consents to receiving promotional communications
     * from the merchant about this Checkout Session.
     */
    export enum promotions {
        OPT_IN = 'opt_in',
        OPT_OUT = 'opt_out',
    }
    /**
     * If `accepted`, the customer in this Checkout Session has agreed to the merchant's terms of service.
     */
    export enum terms_of_service {
        ACCEPTED = 'accepted',
    }
}

