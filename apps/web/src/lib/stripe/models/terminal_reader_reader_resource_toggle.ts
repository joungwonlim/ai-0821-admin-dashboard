/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about an input's toggle
 */
export type terminal_reader_reader_resource_toggle = {
    /**
     * The toggle's default value
     */
    default_value?: terminal_reader_reader_resource_toggle.default_value | null;
    /**
     * The toggle's description text
     */
    description?: string | null;
    /**
     * The toggle's title text
     */
    title?: string | null;
    /**
     * The toggle's collected value
     */
    value?: terminal_reader_reader_resource_toggle.value | null;
};
export namespace terminal_reader_reader_resource_toggle {
    /**
     * The toggle's default value
     */
    export enum default_value {
        DISABLED = 'disabled',
        ENABLED = 'enabled',
    }
    /**
     * The toggle's collected value
     */
    export enum value {
        DISABLED = 'disabled',
        ENABLED = 'enabled',
    }
}

