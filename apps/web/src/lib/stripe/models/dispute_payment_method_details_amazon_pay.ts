/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type dispute_payment_method_details_amazon_pay = {
    /**
     * The AmazonPay dispute type, chargeback or claim
     */
    dispute_type?: dispute_payment_method_details_amazon_pay.dispute_type | null;
};
export namespace dispute_payment_method_details_amazon_pay {
    /**
     * The AmazonPay dispute type, chargeback or claim
     */
    export enum dispute_type {
        CHARGEBACK = 'chargeback',
        CLAIM = 'claim',
    }
}

