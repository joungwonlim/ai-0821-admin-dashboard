/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_crypto = {
    /**
     * The wallet address of the customer.
     */
    buyer_address?: string;
    /**
     * The blockchain network that the transaction was sent on.
     */
    network?: payment_method_details_crypto.network;
    /**
     * The token currency that the transaction was sent with.
     */
    token_currency?: payment_method_details_crypto.token_currency;
    /**
     * The blockchain transaction hash of the crypto payment.
     */
    transaction_hash?: string;
};
export namespace payment_method_details_crypto {
    /**
     * The blockchain network that the transaction was sent on.
     */
    export enum network {
        BASE = 'base',
        ETHEREUM = 'ethereum',
        POLYGON = 'polygon',
    }
    /**
     * The token currency that the transaction was sent with.
     */
    export enum token_currency {
        USDC = 'usdc',
        USDG = 'usdg',
        USDP = 'usdp',
    }
}

