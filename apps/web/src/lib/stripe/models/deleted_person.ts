/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_person = {
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
    object: deleted_person.object;
};
export namespace deleted_person {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PERSON = 'person',
    }
}

