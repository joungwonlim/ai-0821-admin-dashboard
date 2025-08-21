/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_input } from './terminal_reader_reader_resource_input';
/**
 * Represents a reader action to collect customer inputs
 */
export type terminal_reader_reader_resource_collect_inputs_action = {
    /**
     * List of inputs to be collected.
     */
    inputs: Array<terminal_reader_reader_resource_input>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
};

