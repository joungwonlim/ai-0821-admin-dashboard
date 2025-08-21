/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_tax_id = {
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
    object: deleted_tax_id.object;
};
export namespace deleted_tax_id {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_ID = 'tax_id',
    }
}

