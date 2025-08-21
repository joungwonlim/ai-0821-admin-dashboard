/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_tipping_config } from './terminal_reader_reader_resource_tipping_config';
/**
 * Represents a per-transaction override of a reader configuration
 */
export type terminal_reader_reader_resource_collect_config = {
    /**
     * Enable customer-initiated cancellation when processing this payment.
     */
    enable_customer_cancellation?: boolean;
    /**
     * Override showing a tipping selection screen on this transaction.
     */
    skip_tipping?: boolean;
    tipping?: terminal_reader_reader_resource_tipping_config;
};

