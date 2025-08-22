/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_details_passthrough_card } from './payment_method_details_passthrough_card';
export type amazon_pay_underlying_payment_method_funding_details = {
    card?: payment_method_details_passthrough_card;
    /**
     * funding type of the underlying payment method.
     */
    type?: amazon_pay_underlying_payment_method_funding_details.type | null;
};
export namespace amazon_pay_underlying_payment_method_funding_details {
    /**
     * funding type of the underlying payment method.
     */
    export enum type {
        CARD = 'card',
    }
}

