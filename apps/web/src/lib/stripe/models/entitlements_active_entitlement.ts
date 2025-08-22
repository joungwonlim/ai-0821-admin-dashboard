/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { entitlements_feature } from './entitlements_feature';
/**
 * An active entitlement describes access to a feature for a customer.
 */
export type entitlements_active_entitlement = {
    /**
     * The [Feature](https://stripe.com/docs/api/entitlements/feature) that the customer is entitled to.
     */
    feature: (string | entitlements_feature);
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * A unique key you provide as your own system identifier. This may be up to 80 characters.
     */
    lookup_key: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: entitlements_active_entitlement.object;
};
export namespace entitlements_active_entitlement {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ENTITLEMENTS_ACTIVE_ENTITLEMENT = 'entitlements.active_entitlement',
    }
}

