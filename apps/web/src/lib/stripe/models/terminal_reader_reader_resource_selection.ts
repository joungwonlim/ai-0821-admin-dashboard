/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_choice } from './terminal_reader_reader_resource_choice';
/**
 * Information about a selection being collected using a reader
 */
export type terminal_reader_reader_resource_selection = {
    /**
     * List of possible choices to be selected
     */
    choices: Array<terminal_reader_reader_resource_choice>;
    /**
     * The id of the selected choice
     */
    id?: string | null;
    /**
     * The text of the selected choice
     */
    text?: string | null;
};

