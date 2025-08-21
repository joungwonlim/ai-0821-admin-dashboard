/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dispute_payment_method_details_amazon_pay } from './dispute_payment_method_details_amazon_pay';
import type { dispute_payment_method_details_card } from './dispute_payment_method_details_card';
import type { dispute_payment_method_details_klarna } from './dispute_payment_method_details_klarna';
import type { dispute_payment_method_details_paypal } from './dispute_payment_method_details_paypal';
export type dispute_payment_method_details = {
    amazon_pay?: dispute_payment_method_details_amazon_pay;
    card?: dispute_payment_method_details_card;
    klarna?: dispute_payment_method_details_klarna;
    paypal?: dispute_payment_method_details_paypal;
    /**
     * Payment method type.
     */
    type: dispute_payment_method_details.type;
};
export namespace dispute_payment_method_details {
    /**
     * Payment method type.
     */
    export enum type {
        AMAZON_PAY = 'amazon_pay',
        CARD = 'card',
        KLARNA = 'klarna',
        PAYPAL = 'paypal',
    }
}

