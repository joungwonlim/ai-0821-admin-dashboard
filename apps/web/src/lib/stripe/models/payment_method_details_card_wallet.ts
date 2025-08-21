/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_details_card_wallet_amex_express_checkout } from './payment_method_details_card_wallet_amex_express_checkout';
import type { payment_method_details_card_wallet_apple_pay } from './payment_method_details_card_wallet_apple_pay';
import type { payment_method_details_card_wallet_google_pay } from './payment_method_details_card_wallet_google_pay';
import type { payment_method_details_card_wallet_link } from './payment_method_details_card_wallet_link';
import type { payment_method_details_card_wallet_masterpass } from './payment_method_details_card_wallet_masterpass';
import type { payment_method_details_card_wallet_samsung_pay } from './payment_method_details_card_wallet_samsung_pay';
import type { payment_method_details_card_wallet_visa_checkout } from './payment_method_details_card_wallet_visa_checkout';
export type payment_method_details_card_wallet = {
    amex_express_checkout?: payment_method_details_card_wallet_amex_express_checkout;
    apple_pay?: payment_method_details_card_wallet_apple_pay;
    /**
     * (For tokenized numbers only.) The last four digits of the device account number.
     */
    dynamic_last4?: string | null;
    google_pay?: payment_method_details_card_wallet_google_pay;
    link?: payment_method_details_card_wallet_link;
    masterpass?: payment_method_details_card_wallet_masterpass;
    samsung_pay?: payment_method_details_card_wallet_samsung_pay;
    /**
     * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    type: payment_method_details_card_wallet.type;
    visa_checkout?: payment_method_details_card_wallet_visa_checkout;
};
export namespace payment_method_details_card_wallet {
    /**
     * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    export enum type {
        AMEX_EXPRESS_CHECKOUT = 'amex_express_checkout',
        APPLE_PAY = 'apple_pay',
        GOOGLE_PAY = 'google_pay',
        LINK = 'link',
        MASTERPASS = 'masterpass',
        SAMSUNG_PAY = 'samsung_pay',
        VISA_CHECKOUT = 'visa_checkout',
    }
}

