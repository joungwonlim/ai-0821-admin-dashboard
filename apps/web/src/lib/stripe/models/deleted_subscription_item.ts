/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_subscription_item = {
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
    object: deleted_subscription_item.object;
};
export namespace deleted_subscription_item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SUBSCRIPTION_ITEM = 'subscription_item',
    }
}

