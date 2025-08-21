/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type custom_unit_amount = {
    /**
     * The maximum unit amount the customer can specify for this item.
     */
    maximum?: number | null;
    /**
     * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
     */
    minimum?: number | null;
    /**
     * The starting unit amount which can be updated by the customer.
     */
    preset?: number | null;
};

