/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_wechat_pay = {
    /**
     * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * ID of the [location](https://stripe.com/docs/api/terminal/locations) that this transaction's reader is assigned to.
     */
    location?: string;
    /**
     * ID of the [reader](https://stripe.com/docs/api/terminal/readers) this transaction was made on.
     */
    reader?: string;
    /**
     * Transaction ID of this particular WeChat Pay transaction.
     */
    transaction_id?: string | null;
};

