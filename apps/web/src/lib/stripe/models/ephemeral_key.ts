/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ephemeral_key = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Time at which the key will expire. Measured in seconds since the Unix epoch.
     */
    expires: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: ephemeral_key.object;
    /**
     * The key's secret. You can use this value to make authorized requests to the Stripe API.
     */
    secret?: string;
};
export namespace ephemeral_key {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        EPHEMERAL_KEY = 'ephemeral_key',
    }
}

