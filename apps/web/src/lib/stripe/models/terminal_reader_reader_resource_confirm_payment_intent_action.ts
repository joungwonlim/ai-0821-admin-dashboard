/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent } from './payment_intent';
import type { terminal_reader_reader_resource_confirm_config } from './terminal_reader_reader_resource_confirm_config';
/**
 * Represents a reader action to confirm a payment
 */
export type terminal_reader_reader_resource_confirm_payment_intent_action = {
    confirm_config?: terminal_reader_reader_resource_confirm_config;
    /**
     * Most recent PaymentIntent processed by the reader.
     */
    payment_intent: (string | payment_intent);
};

