/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_apple_pay_domain = {
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
    object: deleted_apple_pay_domain.object;
};
export namespace deleted_apple_pay_domain {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        APPLE_PAY_DOMAIN = 'apple_pay_domain',
    }
}

