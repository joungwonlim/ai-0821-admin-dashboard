/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_details } from './billing_details';
import type { customer } from './customer';
import type { payment_flows_private_payment_methods_alipay } from './payment_flows_private_payment_methods_alipay';
import type { payment_method_acss_debit } from './payment_method_acss_debit';
import type { payment_method_affirm } from './payment_method_affirm';
import type { payment_method_afterpay_clearpay } from './payment_method_afterpay_clearpay';
import type { payment_method_alma } from './payment_method_alma';
import type { payment_method_amazon_pay } from './payment_method_amazon_pay';
import type { payment_method_au_becs_debit } from './payment_method_au_becs_debit';
import type { payment_method_bacs_debit } from './payment_method_bacs_debit';
import type { payment_method_bancontact } from './payment_method_bancontact';
import type { payment_method_billie } from './payment_method_billie';
import type { payment_method_blik } from './payment_method_blik';
import type { payment_method_boleto } from './payment_method_boleto';
import type { payment_method_card } from './payment_method_card';
import type { payment_method_card_present } from './payment_method_card_present';
import type { payment_method_cashapp } from './payment_method_cashapp';
import type { payment_method_crypto } from './payment_method_crypto';
import type { payment_method_customer_balance } from './payment_method_customer_balance';
import type { payment_method_eps } from './payment_method_eps';
import type { payment_method_fpx } from './payment_method_fpx';
import type { payment_method_giropay } from './payment_method_giropay';
import type { payment_method_grabpay } from './payment_method_grabpay';
import type { payment_method_ideal } from './payment_method_ideal';
import type { payment_method_interac_present } from './payment_method_interac_present';
import type { payment_method_kakao_pay } from './payment_method_kakao_pay';
import type { payment_method_klarna } from './payment_method_klarna';
import type { payment_method_konbini } from './payment_method_konbini';
import type { payment_method_kr_card } from './payment_method_kr_card';
import type { payment_method_link } from './payment_method_link';
import type { payment_method_mobilepay } from './payment_method_mobilepay';
import type { payment_method_multibanco } from './payment_method_multibanco';
import type { payment_method_naver_pay } from './payment_method_naver_pay';
import type { payment_method_nz_bank_account } from './payment_method_nz_bank_account';
import type { payment_method_oxxo } from './payment_method_oxxo';
import type { payment_method_p24 } from './payment_method_p24';
import type { payment_method_pay_by_bank } from './payment_method_pay_by_bank';
import type { payment_method_payco } from './payment_method_payco';
import type { payment_method_paynow } from './payment_method_paynow';
import type { payment_method_paypal } from './payment_method_paypal';
import type { payment_method_pix } from './payment_method_pix';
import type { payment_method_promptpay } from './payment_method_promptpay';
import type { payment_method_revolut_pay } from './payment_method_revolut_pay';
import type { payment_method_samsung_pay } from './payment_method_samsung_pay';
import type { payment_method_satispay } from './payment_method_satispay';
import type { payment_method_sepa_debit } from './payment_method_sepa_debit';
import type { payment_method_sofort } from './payment_method_sofort';
import type { payment_method_swish } from './payment_method_swish';
import type { payment_method_twint } from './payment_method_twint';
import type { payment_method_us_bank_account } from './payment_method_us_bank_account';
import type { payment_method_wechat_pay } from './payment_method_wechat_pay';
import type { payment_method_zip } from './payment_method_zip';
import type { radar_radar_options } from './radar_radar_options';
/**
 * PaymentMethod objects represent your customer's payment instruments.
 * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
 * Customer objects to store instrument details for future payments.
 *
 * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
 */
export type payment_method = {
    acss_debit?: payment_method_acss_debit;
    affirm?: payment_method_affirm;
    afterpay_clearpay?: payment_method_afterpay_clearpay;
    alipay?: payment_flows_private_payment_methods_alipay;
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
     */
    allow_redisplay?: payment_method.allow_redisplay;
    alma?: payment_method_alma;
    amazon_pay?: payment_method_amazon_pay;
    au_becs_debit?: payment_method_au_becs_debit;
    bacs_debit?: payment_method_bacs_debit;
    bancontact?: payment_method_bancontact;
    billie?: payment_method_billie;
    billing_details: billing_details;
    blik?: payment_method_blik;
    boleto?: payment_method_boleto;
    card?: payment_method_card;
    card_present?: payment_method_card_present;
    cashapp?: payment_method_cashapp;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    crypto?: payment_method_crypto;
    /**
     * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
     */
    customer?: (string | customer) | null;
    customer_balance?: payment_method_customer_balance;
    eps?: payment_method_eps;
    fpx?: payment_method_fpx;
    giropay?: payment_method_giropay;
    grabpay?: payment_method_grabpay;
    /**
     * Unique identifier for the object.
     */
    id: string;
    ideal?: payment_method_ideal;
    interac_present?: payment_method_interac_present;
    kakao_pay?: payment_method_kakao_pay;
    klarna?: payment_method_klarna;
    konbini?: payment_method_konbini;
    kr_card?: payment_method_kr_card;
    link?: payment_method_link;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    mobilepay?: payment_method_mobilepay;
    multibanco?: payment_method_multibanco;
    naver_pay?: payment_method_naver_pay;
    nz_bank_account?: payment_method_nz_bank_account;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: payment_method.object;
    oxxo?: payment_method_oxxo;
    p24?: payment_method_p24;
    pay_by_bank?: payment_method_pay_by_bank;
    payco?: payment_method_payco;
    paynow?: payment_method_paynow;
    paypal?: payment_method_paypal;
    pix?: payment_method_pix;
    promptpay?: payment_method_promptpay;
    radar_options?: radar_radar_options;
    revolut_pay?: payment_method_revolut_pay;
    samsung_pay?: payment_method_samsung_pay;
    satispay?: payment_method_satispay;
    sepa_debit?: payment_method_sepa_debit;
    sofort?: payment_method_sofort;
    swish?: payment_method_swish;
    twint?: payment_method_twint;
    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: payment_method.type;
    us_bank_account?: payment_method_us_bank_account;
    wechat_pay?: payment_method_wechat_pay;
    zip?: payment_method_zip;
};
export namespace payment_method {
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
     */
    export enum allow_redisplay {
        ALWAYS = 'always',
        LIMITED = 'limited',
        UNSPECIFIED = 'unspecified',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PAYMENT_METHOD = 'payment_method',
    }
    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    export enum type {
        ACSS_DEBIT = 'acss_debit',
        AFFIRM = 'affirm',
        AFTERPAY_CLEARPAY = 'afterpay_clearpay',
        ALIPAY = 'alipay',
        ALMA = 'alma',
        AMAZON_PAY = 'amazon_pay',
        AU_BECS_DEBIT = 'au_becs_debit',
        BACS_DEBIT = 'bacs_debit',
        BANCONTACT = 'bancontact',
        BILLIE = 'billie',
        BLIK = 'blik',
        BOLETO = 'boleto',
        CARD = 'card',
        CARD_PRESENT = 'card_present',
        CASHAPP = 'cashapp',
        CRYPTO = 'crypto',
        CUSTOMER_BALANCE = 'customer_balance',
        EPS = 'eps',
        FPX = 'fpx',
        GIROPAY = 'giropay',
        GRABPAY = 'grabpay',
        IDEAL = 'ideal',
        INTERAC_PRESENT = 'interac_present',
        KAKAO_PAY = 'kakao_pay',
        KLARNA = 'klarna',
        KONBINI = 'konbini',
        KR_CARD = 'kr_card',
        LINK = 'link',
        MOBILEPAY = 'mobilepay',
        MULTIBANCO = 'multibanco',
        NAVER_PAY = 'naver_pay',
        NZ_BANK_ACCOUNT = 'nz_bank_account',
        OXXO = 'oxxo',
        P24 = 'p24',
        PAY_BY_BANK = 'pay_by_bank',
        PAYCO = 'payco',
        PAYNOW = 'paynow',
        PAYPAL = 'paypal',
        PIX = 'pix',
        PROMPTPAY = 'promptpay',
        REVOLUT_PAY = 'revolut_pay',
        SAMSUNG_PAY = 'samsung_pay',
        SATISPAY = 'satispay',
        SEPA_DEBIT = 'sepa_debit',
        SOFORT = 'sofort',
        SWISH = 'swish',
        TWINT = 'twint',
        US_BANK_ACCOUNT = 'us_bank_account',
        WECHAT_PAY = 'wechat_pay',
        ZIP = 'zip',
    }
}

