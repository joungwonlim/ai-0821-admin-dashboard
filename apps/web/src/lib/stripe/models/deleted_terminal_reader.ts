/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_terminal_reader = {
    /**
     * Always true for a deleted object
     */
    deleted: boolean;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: deleted_terminal_reader.object;
};
export namespace deleted_terminal_reader {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TERMINAL_READER = 'terminal.reader',
    }
}

