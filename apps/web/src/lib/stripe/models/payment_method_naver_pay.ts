/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_naver_pay = {
    /**
     * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
     */
    buyer_id?: string | null;
    /**
     * Whether to fund this transaction with Naver Pay points or a card.
     */
    funding: payment_method_naver_pay.funding;
};
export namespace payment_method_naver_pay {
    /**
     * Whether to fund this transaction with Naver Pay points or a card.
     */
    export enum funding {
        CARD = 'card',
        POINTS = 'points',
    }
}

