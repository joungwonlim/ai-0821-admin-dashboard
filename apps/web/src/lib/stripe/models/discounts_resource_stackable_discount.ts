/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { coupon } from './coupon';
import type { discount } from './discount';
import type { promotion_code } from './promotion_code';
export type discounts_resource_stackable_discount = {
    /**
     * ID of the coupon to create a new discount for.
     */
    coupon?: (string | coupon) | null;
    /**
     * ID of an existing discount on the object (or one of its ancestors) to reuse.
     */
    discount?: (string | discount) | null;
    /**
     * ID of the promotion code to create a new discount for.
     */
    promotion_code?: (string | promotion_code) | null;
};

