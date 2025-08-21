/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_webhook_endpoint = {
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
    object: deleted_webhook_endpoint.object;
};
export namespace deleted_webhook_endpoint {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        WEBHOOK_ENDPOINT = 'webhook_endpoint',
    }
}

