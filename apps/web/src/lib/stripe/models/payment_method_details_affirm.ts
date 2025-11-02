/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_affirm = {
    /**
     * ID of the [location](https://stripe.com/docs/api/terminal/locations) that this transaction's reader is assigned to.
     */
    location?: string;
    /**
     * ID of the [reader](https://stripe.com/docs/api/terminal/readers) this transaction was made on.
     */
    reader?: string;
    /**
     * The Affirm transaction ID associated with this payment.
     */
    transaction_id?: string | null;
};

