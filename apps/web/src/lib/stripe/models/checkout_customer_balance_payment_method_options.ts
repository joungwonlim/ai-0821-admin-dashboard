/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkout_customer_balance_bank_transfer_payment_method_options } from './checkout_customer_balance_bank_transfer_payment_method_options';
export type checkout_customer_balance_payment_method_options = {
    bank_transfer?: checkout_customer_balance_bank_transfer_payment_method_options;
    /**
     * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
     */
    funding_type?: checkout_customer_balance_payment_method_options.funding_type | null;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
     */
    setup_future_usage?: checkout_customer_balance_payment_method_options.setup_future_usage;
};
export namespace checkout_customer_balance_payment_method_options {
    /**
     * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
     */
    export enum funding_type {
        BANK_TRANSFER = 'bank_transfer',
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
    }
}

