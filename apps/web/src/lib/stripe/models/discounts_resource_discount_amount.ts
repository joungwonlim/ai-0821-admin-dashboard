/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deleted_discount } from './deleted_discount';
import type { discount } from './discount';
export type discounts_resource_discount_amount = {
    /**
     * The amount, in cents (or local equivalent), of the discount.
     */
    amount: number;
    /**
     * The discount that was applied to get this discount amount.
     */
    discount: (string | discount | deleted_discount);
};

