/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Choice to be selected on a Reader
 */
export type terminal_reader_reader_resource_choice = {
    /**
     * The id to be selected
     */
    id?: string | null;
    /**
     * The button style for the choice
     */
    style?: terminal_reader_reader_resource_choice.style | null;
    /**
     * The text to be selected
     */
    text: string;
};
export namespace terminal_reader_reader_resource_choice {
    /**
     * The button style for the choice
     */
    export enum style {
        PRIMARY = 'primary',
        SECONDARY = 'secondary',
    }
}

