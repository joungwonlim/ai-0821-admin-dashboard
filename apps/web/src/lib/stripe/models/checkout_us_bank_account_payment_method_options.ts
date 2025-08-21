/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { linked_account_options_common } from './linked_account_options_common';
export type checkout_us_bank_account_payment_method_options = {
    financial_connections?: linked_account_options_common;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
     */
    setup_future_usage?: checkout_us_bank_account_payment_method_options.setup_future_usage;
    /**
     * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
     */
    target_date?: string;
    /**
     * Bank account verification method.
     */
    verification_method?: checkout_us_bank_account_payment_method_options.verification_method;
};
export namespace checkout_us_bank_account_payment_method_options {
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
    }
}

