/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_customer = {
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
    object: deleted_customer.object;
};
export namespace deleted_customer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CUSTOMER = 'customer',
    }
}

