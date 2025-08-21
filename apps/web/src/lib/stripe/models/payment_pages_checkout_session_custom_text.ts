/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_pages_checkout_session_custom_text_position } from './payment_pages_checkout_session_custom_text_position';
export type payment_pages_checkout_session_custom_text = {
    /**
     * Custom text that should be displayed after the payment confirmation button.
     */
    after_submit?: payment_pages_checkout_session_custom_text_position | null;
    /**
     * Custom text that should be displayed alongside shipping address collection.
     */
    shipping_address?: payment_pages_checkout_session_custom_text_position | null;
    /**
     * Custom text that should be displayed alongside the payment confirmation button.
     */
    submit?: payment_pages_checkout_session_custom_text_position | null;
    /**
     * Custom text that should be displayed in place of the default terms of service agreement text.
     */
    terms_of_service_acceptance?: payment_pages_checkout_session_custom_text_position | null;
};

