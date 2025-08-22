/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_physical_bundle_features } from './issuing_physical_bundle_features';
/**
 * A Physical Bundle represents the bundle of physical items - card stock, carrier letter, and envelope - that is shipped to a cardholder when you create a physical card.
 */
export type issuing_physical_bundle = {
    features: issuing_physical_bundle_features;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Friendly display name.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_physical_bundle.object;
    /**
     * Whether this physical bundle can be used to create cards.
     */
    status: issuing_physical_bundle.status;
    /**
     * Whether this physical bundle is a standard Stripe offering or custom-made for you.
     */
    type: issuing_physical_bundle.type;
};
export namespace issuing_physical_bundle {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_PHYSICAL_BUNDLE = 'issuing.physical_bundle',
    }
    /**
     * Whether this physical bundle can be used to create cards.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        REVIEW = 'review',
    }
    /**
     * Whether this physical bundle is a standard Stripe offering or custom-made for you.
     */
    export enum type {
        CUSTOM = 'custom',
        STANDARD = 'standard',
    }
}

