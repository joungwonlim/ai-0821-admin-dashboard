/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_intent } from './setup_intent';
import type { terminal_reader_reader_resource_process_setup_config } from './terminal_reader_reader_resource_process_setup_config';
/**
 * Represents a reader action to process a setup intent
 */
export type terminal_reader_reader_resource_process_setup_intent_action = {
    /**
     * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
     */
    generated_card?: string;
    process_config?: terminal_reader_reader_resource_process_setup_config;
    /**
     * Most recent SetupIntent processed by the reader.
     */
    setup_intent: (string | setup_intent);
};

