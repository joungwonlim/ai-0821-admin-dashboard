/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_flows_installment_options } from './payment_flows_installment_options';
import type { payment_method_options_card_present_routing } from './payment_method_options_card_present_routing';
export type payment_intent_type_specific_payment_method_options_client = {
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: payment_intent_type_specific_payment_method_options_client.capture_method;
    installments?: payment_flows_installment_options;
    /**
     * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
     */
    request_incremental_authorization_support?: boolean;
    /**
     * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
     */
    require_cvc_recollection?: boolean;
    routing?: payment_method_options_card_present_routing;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
     */
    setup_future_usage?: payment_intent_type_specific_payment_method_options_client.setup_future_usage;
    /**
     * Bank account verification method.
     */
    verification_method?: payment_intent_type_specific_payment_method_options_client.verification_method;
};
export namespace payment_intent_type_specific_payment_method_options_client {
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    export enum capture_method {
        MANUAL = 'manual',
        MANUAL_PREFERRED = 'manual_preferred',
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
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

