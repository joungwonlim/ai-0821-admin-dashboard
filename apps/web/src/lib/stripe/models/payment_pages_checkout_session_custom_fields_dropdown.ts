/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_pages_checkout_session_custom_fields_option } from './payment_pages_checkout_session_custom_fields_option';
export type payment_pages_checkout_session_custom_fields_dropdown = {
    /**
     * The value that will pre-fill on the payment page.
     */
    default_value?: string | null;
    /**
     * The options available for the customer to select. Up to 200 options allowed.
     */
    options: Array<payment_pages_checkout_session_custom_fields_option>;
    /**
     * The option selected by the customer. This will be the `value` for the option.
     */
    value?: string | null;
};

