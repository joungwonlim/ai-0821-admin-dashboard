/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_config_resource_payment_method_properties } from './payment_method_config_resource_payment_method_properties';
/**
 * PaymentMethodConfigurations control which payment methods are displayed to your customers when you don't explicitly specify payment method types. You can have multiple configurations with different sets of payment methods for different scenarios.
 *
 * There are two types of PaymentMethodConfigurations. Which is used depends on the [charge type](https://stripe.com/docs/connect/charges):
 *
 * **Direct** configurations apply to payments created on your account, including Connect destination charges, Connect separate charges and transfers, and payments not involving Connect.
 *
 * **Child** configurations apply to payments created on your connected accounts using direct charges, and charges with the on_behalf_of parameter.
 *
 * Child configurations have a `parent` that sets default values and controls which settings connected accounts may override. You can specify a parent ID at payment time, and Stripe will automatically resolve the connected account’s associated child configuration. Parent configurations are [managed in the dashboard](https://dashboard.stripe.com/settings/payment_methods/connected_accounts) and are not available in this API.
 *
 * Related guides:
 * - [Payment Method Configurations API](https://stripe.com/docs/connect/payment-method-configurations)
 * - [Multiple configurations on dynamic payment methods](https://stripe.com/docs/payments/multiple-payment-method-configs)
 * - [Multiple configurations for your Connect accounts](https://stripe.com/docs/connect/multiple-payment-method-configurations)
 */
export type payment_method_configuration = {
    acss_debit?: payment_method_config_resource_payment_method_properties;
    /**
     * Whether the configuration can be used for new payments.
     */
    active: boolean;
    affirm?: payment_method_config_resource_payment_method_properties;
    afterpay_clearpay?: payment_method_config_resource_payment_method_properties;
    alipay?: payment_method_config_resource_payment_method_properties;
    alma?: payment_method_config_resource_payment_method_properties;
    amazon_pay?: payment_method_config_resource_payment_method_properties;
    apple_pay?: payment_method_config_resource_payment_method_properties;
    /**
     * For child configs, the Connect application associated with the configuration.
     */
    application?: string | null;
    au_becs_debit?: payment_method_config_resource_payment_method_properties;
    bacs_debit?: payment_method_config_resource_payment_method_properties;
    bancontact?: payment_method_config_resource_payment_method_properties;
    billie?: payment_method_config_resource_payment_method_properties;
    blik?: payment_method_config_resource_payment_method_properties;
    boleto?: payment_method_config_resource_payment_method_properties;
    card?: payment_method_config_resource_payment_method_properties;
    cartes_bancaires?: payment_method_config_resource_payment_method_properties;
    cashapp?: payment_method_config_resource_payment_method_properties;
    customer_balance?: payment_method_config_resource_payment_method_properties;
    eps?: payment_method_config_resource_payment_method_properties;
    fpx?: payment_method_config_resource_payment_method_properties;
    giropay?: payment_method_config_resource_payment_method_properties;
    google_pay?: payment_method_config_resource_payment_method_properties;
    grabpay?: payment_method_config_resource_payment_method_properties;
    /**
     * Unique identifier for the object.
     */
    id: string;
    ideal?: payment_method_config_resource_payment_method_properties;
    /**
     * The default configuration is used whenever a payment method configuration is not specified.
     */
    is_default: boolean;
    jcb?: payment_method_config_resource_payment_method_properties;
    kakao_pay?: payment_method_config_resource_payment_method_properties;
    klarna?: payment_method_config_resource_payment_method_properties;
    konbini?: payment_method_config_resource_payment_method_properties;
    kr_card?: payment_method_config_resource_payment_method_properties;
    link?: payment_method_config_resource_payment_method_properties;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    mobilepay?: payment_method_config_resource_payment_method_properties;
    multibanco?: payment_method_config_resource_payment_method_properties;
    /**
     * The configuration's name.
     */
    name: string;
    naver_pay?: payment_method_config_resource_payment_method_properties;
    nz_bank_account?: payment_method_config_resource_payment_method_properties;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: payment_method_configuration.object;
    oxxo?: payment_method_config_resource_payment_method_properties;
    p24?: payment_method_config_resource_payment_method_properties;
    /**
     * For child configs, the configuration's parent configuration.
     */
    parent?: string | null;
    pay_by_bank?: payment_method_config_resource_payment_method_properties;
    payco?: payment_method_config_resource_payment_method_properties;
    paynow?: payment_method_config_resource_payment_method_properties;
    paypal?: payment_method_config_resource_payment_method_properties;
    pix?: payment_method_config_resource_payment_method_properties;
    promptpay?: payment_method_config_resource_payment_method_properties;
    revolut_pay?: payment_method_config_resource_payment_method_properties;
    samsung_pay?: payment_method_config_resource_payment_method_properties;
    satispay?: payment_method_config_resource_payment_method_properties;
    sepa_debit?: payment_method_config_resource_payment_method_properties;
    sofort?: payment_method_config_resource_payment_method_properties;
    swish?: payment_method_config_resource_payment_method_properties;
    twint?: payment_method_config_resource_payment_method_properties;
    us_bank_account?: payment_method_config_resource_payment_method_properties;
    wechat_pay?: payment_method_config_resource_payment_method_properties;
    zip?: payment_method_config_resource_payment_method_properties;
};
export namespace payment_method_configuration {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PAYMENT_METHOD_CONFIGURATION = 'payment_method_configuration',
    }
}

