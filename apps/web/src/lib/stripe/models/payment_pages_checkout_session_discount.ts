/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { coupon } from './coupon';
import type { promotion_code } from './promotion_code';
export type payment_pages_checkout_session_discount = {
    /**
     * Coupon attached to the Checkout Session.
     */
    coupon?: (string | coupon) | null;
    /**
     * Promotion code attached to the Checkout Session.
     */
    promotion_code?: (string | promotion_code) | null;
};

