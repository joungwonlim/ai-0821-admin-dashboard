/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { account_capability_future_requirements } from './account_capability_future_requirements';
import type { account_capability_requirements } from './account_capability_requirements';
/**
 * This is an object representing a capability for a Stripe account.
 *
 * Related guide: [Account capabilities](https://stripe.com/docs/connect/account-capabilities)
 */
export type capability = {
    /**
     * The account for which the capability enables functionality.
     */
    account: (string | account);
    future_requirements?: account_capability_future_requirements;
    /**
     * The identifier for the capability.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: capability.object;
    /**
     * Whether the capability has been requested.
     */
    requested: boolean;
    /**
     * Time at which the capability was requested. Measured in seconds since the Unix epoch.
     */
    requested_at?: number | null;
    requirements?: account_capability_requirements;
    /**
     * The status of the capability.
     */
    status: capability.status;
};
export namespace capability {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CAPABILITY = 'capability',
    }
    /**
     * The status of the capability.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
        UNREQUESTED = 'unrequested',
    }
}

