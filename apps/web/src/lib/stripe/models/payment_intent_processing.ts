/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_card_processing } from './payment_intent_card_processing';
export type payment_intent_processing = {
    card?: payment_intent_card_processing;
    /**
     * Type of the payment method for which payment is in `processing` state, one of `card`.
     */
    type: payment_intent_processing.type;
};
export namespace payment_intent_processing {
    /**
     * Type of the payment method for which payment is in `processing` state, one of `card`.
     */
    export enum type {
        CARD = 'card',
    }
}

