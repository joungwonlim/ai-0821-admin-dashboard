/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type portal_subscription_update_product_adjustable_quantity = {
    /**
     * If true, the quantity can be adjusted to any non-negative integer.
     */
    enabled: boolean;
    /**
     * The maximum quantity that can be set for the product.
     */
    maximum?: number | null;
    /**
     * The minimum quantity that can be set for the product.
     */
    minimum: number;
};

