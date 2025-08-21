/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { entitlements_feature } from './entitlements_feature';
/**
 * A product_feature represents an attachment between a feature and a product.
 * When a product is purchased that has a feature attached, Stripe will create an entitlement to the feature for the purchasing customer.
 */
export type product_feature = {
    entitlement_feature: entitlements_feature;
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
    object: product_feature.object;
};
export namespace product_feature {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PRODUCT_FEATURE = 'product_feature',
    }
}

