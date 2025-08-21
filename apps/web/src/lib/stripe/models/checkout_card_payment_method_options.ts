/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkout_card_installments_options } from './checkout_card_installments_options';
import type { payment_pages_private_card_payment_method_options_resource_restrictions } from './payment_pages_private_card_payment_method_options_resource_restrictions';
export type checkout_card_payment_method_options = {
    installments?: checkout_card_installments_options;
    /**
     * Request ability to [capture beyond the standard authorization validity window](/payments/extended-authorization) for this CheckoutSession.
     */
    request_extended_authorization?: checkout_card_payment_method_options.request_extended_authorization;
    /**
     * Request ability to [increment the authorization](/payments/incremental-authorization) for this CheckoutSession.
     */
    request_incremental_authorization?: checkout_card_payment_method_options.request_incremental_authorization;
    /**
     * Request ability to make [multiple captures](/payments/multicapture) for this CheckoutSession.
     */
    request_multicapture?: checkout_card_payment_method_options.request_multicapture;
    /**
     * Request ability to [overcapture](/payments/overcapture) for this CheckoutSession.
     */
    request_overcapture?: checkout_card_payment_method_options.request_overcapture;
    /**
     * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
     */
    request_three_d_secure: checkout_card_payment_method_options.request_three_d_secure;
    restrictions?: payment_pages_private_card_payment_method_options_resource_restrictions;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
     */
    setup_future_usage?: checkout_card_payment_method_options.setup_future_usage;
    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
     */
    statement_descriptor_suffix_kana?: string;
    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
     */
    statement_descriptor_suffix_kanji?: string;
};
export namespace checkout_card_payment_method_options {
    /**
     * Request ability to [capture beyond the standard authorization validity window](/payments/extended-authorization) for this CheckoutSession.
     */
    export enum request_extended_authorization {
        IF_AVAILABLE = 'if_available',
        NEVER = 'never',
    }
    /**
     * Request ability to [increment the authorization](/payments/incremental-authorization) for this CheckoutSession.
     */
    export enum request_incremental_authorization {
        IF_AVAILABLE = 'if_available',
        NEVER = 'never',
    }
    /**
     * Request ability to make [multiple captures](/payments/multicapture) for this CheckoutSession.
     */
    export enum request_multicapture {
        IF_AVAILABLE = 'if_available',
        NEVER = 'never',
    }
    /**
     * Request ability to [overcapture](/payments/overcapture) for this CheckoutSession.
     */
    export enum request_overcapture {
        IF_AVAILABLE = 'if_available',
        NEVER = 'never',
    }
    /**
     * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
     */
    export enum request_three_d_secure {
        ANY = 'any',
        AUTOMATIC = 'automatic',
        CHALLENGE = 'challenge',
    }
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
     */
    export enum setup_future_usage {
        NONE = 'none',
        OFF_SESSION = 'off_session',
        ON_SESSION = 'on_session',
    }
}

