/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { amazon_pay_underlying_payment_method_funding_details } from './amazon_pay_underlying_payment_method_funding_details';
export type payment_method_details_amazon_pay = {
    funding?: amazon_pay_underlying_payment_method_funding_details;
    /**
     * The Amazon Pay transaction ID associated with this payment.
     */
    transaction_id?: string | null;
};

