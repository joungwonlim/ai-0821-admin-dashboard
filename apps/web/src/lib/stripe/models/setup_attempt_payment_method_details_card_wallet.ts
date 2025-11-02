/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_details_card_wallet_apple_pay } from './payment_method_details_card_wallet_apple_pay';
import type { payment_method_details_card_wallet_google_pay } from './payment_method_details_card_wallet_google_pay';
export type setup_attempt_payment_method_details_card_wallet = {
    apple_pay?: payment_method_details_card_wallet_apple_pay;
    google_pay?: payment_method_details_card_wallet_google_pay;
    /**
     * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    type: setup_attempt_payment_method_details_card_wallet.type;
};
export namespace setup_attempt_payment_method_details_card_wallet {
    /**
     * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    export enum type {
        APPLE_PAY = 'apple_pay',
        GOOGLE_PAY = 'google_pay',
        LINK = 'link',
    }
}

