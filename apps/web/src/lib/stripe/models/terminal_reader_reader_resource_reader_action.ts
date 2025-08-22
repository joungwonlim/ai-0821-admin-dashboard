/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_collect_inputs_action } from './terminal_reader_reader_resource_collect_inputs_action';
import type { terminal_reader_reader_resource_collect_payment_method_action } from './terminal_reader_reader_resource_collect_payment_method_action';
import type { terminal_reader_reader_resource_confirm_payment_intent_action } from './terminal_reader_reader_resource_confirm_payment_intent_action';
import type { terminal_reader_reader_resource_process_payment_intent_action } from './terminal_reader_reader_resource_process_payment_intent_action';
import type { terminal_reader_reader_resource_process_setup_intent_action } from './terminal_reader_reader_resource_process_setup_intent_action';
import type { terminal_reader_reader_resource_refund_payment_action } from './terminal_reader_reader_resource_refund_payment_action';
import type { terminal_reader_reader_resource_set_reader_display_action } from './terminal_reader_reader_resource_set_reader_display_action';
/**
 * Represents an action performed by the reader
 */
export type terminal_reader_reader_resource_reader_action = {
    collect_inputs?: terminal_reader_reader_resource_collect_inputs_action;
    collect_payment_method?: terminal_reader_reader_resource_collect_payment_method_action;
    confirm_payment_intent?: terminal_reader_reader_resource_confirm_payment_intent_action;
    /**
     * Failure code, only set if status is `failed`.
     */
    failure_code?: string | null;
    /**
     * Detailed failure message, only set if status is `failed`.
     */
    failure_message?: string | null;
    process_payment_intent?: terminal_reader_reader_resource_process_payment_intent_action;
    process_setup_intent?: terminal_reader_reader_resource_process_setup_intent_action;
    refund_payment?: terminal_reader_reader_resource_refund_payment_action;
    set_reader_display?: terminal_reader_reader_resource_set_reader_display_action;
    /**
     * Status of the action performed by the reader.
     */
    status: terminal_reader_reader_resource_reader_action.status;
    /**
     * Type of action performed by the reader.
     */
    type: terminal_reader_reader_resource_reader_action.type;
};
export namespace terminal_reader_reader_resource_reader_action {
    /**
     * Status of the action performed by the reader.
     */
    export enum status {
        FAILED = 'failed',
        IN_PROGRESS = 'in_progress',
        SUCCEEDED = 'succeeded',
    }
    /**
     * Type of action performed by the reader.
     */
    export enum type {
        COLLECT_INPUTS = 'collect_inputs',
        COLLECT_PAYMENT_METHOD = 'collect_payment_method',
        CONFIRM_PAYMENT_INTENT = 'confirm_payment_intent',
        PROCESS_PAYMENT_INTENT = 'process_payment_intent',
        PROCESS_SETUP_INTENT = 'process_setup_intent',
        REFUND_PAYMENT = 'refund_payment',
        SET_READER_DISPLAY = 'set_reader_display',
    }
}

