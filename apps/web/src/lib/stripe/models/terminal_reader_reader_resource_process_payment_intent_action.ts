/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent } from './payment_intent';
import type { terminal_reader_reader_resource_process_config } from './terminal_reader_reader_resource_process_config';
/**
 * Represents a reader action to process a payment intent
 */
export type terminal_reader_reader_resource_process_payment_intent_action = {
    /**
     * Most recent PaymentIntent processed by the reader.
     */
    payment_intent: (string | payment_intent);
    process_config?: terminal_reader_reader_resource_process_config;
};

