/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_custom_text } from './terminal_reader_reader_resource_custom_text';
import type { terminal_reader_reader_resource_email } from './terminal_reader_reader_resource_email';
import type { terminal_reader_reader_resource_numeric } from './terminal_reader_reader_resource_numeric';
import type { terminal_reader_reader_resource_phone } from './terminal_reader_reader_resource_phone';
import type { terminal_reader_reader_resource_selection } from './terminal_reader_reader_resource_selection';
import type { terminal_reader_reader_resource_signature } from './terminal_reader_reader_resource_signature';
import type { terminal_reader_reader_resource_text } from './terminal_reader_reader_resource_text';
import type { terminal_reader_reader_resource_toggle } from './terminal_reader_reader_resource_toggle';
/**
 * Represents an input to be collected using the reader
 */
export type terminal_reader_reader_resource_input = {
    /**
     * Default text of input being collected.
     */
    custom_text?: terminal_reader_reader_resource_custom_text | null;
    email?: terminal_reader_reader_resource_email;
    numeric?: terminal_reader_reader_resource_numeric;
    phone?: terminal_reader_reader_resource_phone;
    /**
     * Indicate that this input is required, disabling the skip button.
     */
    required?: boolean | null;
    selection?: terminal_reader_reader_resource_selection;
    signature?: terminal_reader_reader_resource_signature;
    /**
     * Indicate that this input was skipped by the user.
     */
    skipped?: boolean;
    text?: terminal_reader_reader_resource_text;
    /**
     * List of toggles being collected. Values are present if collection is complete.
     */
    toggles?: Array<terminal_reader_reader_resource_toggle> | null;
    /**
     * Type of input being collected.
     */
    type: terminal_reader_reader_resource_input.type;
};
export namespace terminal_reader_reader_resource_input {
    /**
     * Type of input being collected.
     */
    export enum type {
        EMAIL = 'email',
        NUMERIC = 'numeric',
        PHONE = 'phone',
        SELECTION = 'selection',
        SIGNATURE = 'signature',
        TEXT = 'text',
    }
}

