/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscriptions_resource_payment_method_options } from './subscriptions_resource_payment_method_options';
export type subscriptions_resource_payment_settings = {
    /**
     * Payment-method-specific configuration to provide to invoices created by the subscription.
     */
    payment_method_options?: subscriptions_resource_payment_method_options | null;
    /**
     * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
     */
    payment_method_types?: Array<'ach_credit_transfer' | 'ach_debit' | 'acss_debit' | 'affirm' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'jp_credit_transfer' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'p24' | 'payco' | 'paynow' | 'paypal' | 'promptpay' | 'revolut_pay' | 'sepa_credit_transfer' | 'sepa_debit' | 'sofort' | 'swish' | 'us_bank_account' | 'wechat_pay'> | null;
    /**
     * Configure whether Stripe updates `subscription.default_payment_method` when payment succeeds. Defaults to `off`.
     */
    save_default_payment_method?: subscriptions_resource_payment_settings.save_default_payment_method | null;
};
export namespace subscriptions_resource_payment_settings {
    /**
     * Configure whether Stripe updates `subscription.default_payment_method` when payment succeeds. Defaults to `off`.
     */
    export enum save_default_payment_method {
        OFF = 'off',
        ON_SUBSCRIPTION = 'on_subscription',
    }
}

