/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_intent_payment_method_options_card_mandate_options } from './setup_intent_payment_method_options_card_mandate_options';
export type setup_intent_payment_method_options_card = {
    /**
     * Configuration options for setting up an eMandate for cards issued in India.
     */
    mandate_options?: setup_intent_payment_method_options_card_mandate_options | null;
    /**
     * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
     */
    network?: setup_intent_payment_method_options_card.network | null;
    /**
     * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
     */
    request_three_d_secure?: setup_intent_payment_method_options_card.request_three_d_secure | null;
};
export namespace setup_intent_payment_method_options_card {
    /**
     * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
     */
    export enum network {
        AMEX = 'amex',
        CARTES_BANCAIRES = 'cartes_bancaires',
        DINERS = 'diners',
        DISCOVER = 'discover',
        EFTPOS_AU = 'eftpos_au',
        GIROCARD = 'girocard',
        INTERAC = 'interac',
        JCB = 'jcb',
        LINK = 'link',
        MASTERCARD = 'mastercard',
        UNIONPAY = 'unionpay',
        UNKNOWN = 'unknown',
        VISA = 'visa',
    }
    /**
     * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
     */
    export enum request_three_d_secure {
        ANY = 'any',
        AUTOMATIC = 'automatic',
        CHALLENGE = 'challenge',
    }
}

