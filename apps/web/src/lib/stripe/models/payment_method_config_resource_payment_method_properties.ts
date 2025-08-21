/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_config_resource_display_preference } from './payment_method_config_resource_display_preference';
export type payment_method_config_resource_payment_method_properties = {
    /**
     * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
     */
    available: boolean;
    display_preference: payment_method_config_resource_display_preference;
};

