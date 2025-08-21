/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_kr_card = {
    /**
     * The local credit or debit card brand.
     */
    brand?: payment_method_details_kr_card.brand | null;
    /**
     * A unique identifier for the buyer as determined by the local payment processor.
     */
    buyer_id?: string | null;
    /**
     * The last four digits of the card. This may not be present for American Express cards.
     */
    last4?: string | null;
    /**
     * The Korean Card transaction ID associated with this payment.
     */
    transaction_id?: string | null;
};
export namespace payment_method_details_kr_card {
    /**
     * The local credit or debit card brand.
     */
    export enum brand {
        BC = 'bc',
        CITI = 'citi',
        HANA = 'hana',
        HYUNDAI = 'hyundai',
        JEJU = 'jeju',
        JEONBUK = 'jeonbuk',
        KAKAOBANK = 'kakaobank',
        KBANK = 'kbank',
        KDBBANK = 'kdbbank',
        KOOKMIN = 'kookmin',
        KWANGJU = 'kwangju',
        LOTTE = 'lotte',
        MG = 'mg',
        NH = 'nh',
        POST = 'post',
        SAMSUNG = 'samsung',
        SAVINGSBANK = 'savingsbank',
        SHINHAN = 'shinhan',
        SHINHYUP = 'shinhyup',
        SUHYUP = 'suhyup',
        TOSSBANK = 'tossbank',
        WOORI = 'woori',
    }
}

