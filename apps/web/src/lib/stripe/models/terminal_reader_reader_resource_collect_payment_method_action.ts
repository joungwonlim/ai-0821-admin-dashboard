/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent } from './payment_intent';
import type { payment_method } from './payment_method';
import type { terminal_reader_reader_resource_collect_config } from './terminal_reader_reader_resource_collect_config';
/**
 * Represents a reader action to collect a payment method
 */
export type terminal_reader_reader_resource_collect_payment_method_action = {
    collect_config?: terminal_reader_reader_resource_collect_config;
    /**
     * Most recent PaymentIntent processed by the reader.
     */
    payment_intent: (string | payment_intent);
    payment_method?: payment_method;
};

