/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoices_payment_method_options } from './invoices_payment_method_options';
export type invoices_payment_settings = {
    /**
     * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
     */
    default_mandate?: string | null;
    /**
     * Payment-method-specific configuration to provide to the invoice’s PaymentIntent.
     */
    payment_method_options?: invoices_payment_method_options | null;
    /**
     * The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
     */
    payment_method_types?: Array<'ach_credit_transfer' | 'ach_debit' | 'acss_debit' | 'affirm' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'jp_credit_transfer' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'p24' | 'payco' | 'paynow' | 'paypal' | 'promptpay' | 'revolut_pay' | 'sepa_credit_transfer' | 'sepa_debit' | 'sofort' | 'swish' | 'us_bank_account' | 'wechat_pay'> | null;
};

