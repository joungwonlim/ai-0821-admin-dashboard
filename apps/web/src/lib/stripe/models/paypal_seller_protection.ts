/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type paypal_seller_protection = {
    /**
     * An array of conditions that are covered for the transaction, if applicable.
     */
    dispute_categories?: Array<'fraudulent' | 'product_not_received'> | null;
    /**
     * Indicates whether the transaction is eligible for PayPal's seller protection.
     */
    status: paypal_seller_protection.status;
};
export namespace paypal_seller_protection {
    /**
     * Indicates whether the transaction is eligible for PayPal's seller protection.
     */
    export enum status {
        ELIGIBLE = 'eligible',
        NOT_ELIGIBLE = 'not_eligible',
        PARTIALLY_ELIGIBLE = 'partially_eligible',
    }
}

