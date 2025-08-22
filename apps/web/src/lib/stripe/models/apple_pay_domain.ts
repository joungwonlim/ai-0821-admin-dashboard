/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type apple_pay_domain = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    domain_name: string;
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
    object: apple_pay_domain.object;
};
export namespace apple_pay_domain {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        APPLE_PAY_DOMAIN = 'apple_pay_domain',
    }
}

