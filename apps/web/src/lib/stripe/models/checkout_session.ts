/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkout_session_payment_method_options } from './checkout_session_payment_method_options';
import type { checkout_session_wallet_options } from './checkout_session_wallet_options';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { invoice } from './invoice';
import type { item } from './item';
import type { payment_flows_payment_intent_presentment_details } from './payment_flows_payment_intent_presentment_details';
import type { payment_intent } from './payment_intent';
import type { payment_link } from './payment_link';
import type { payment_method_config_biz_payment_method_configuration_details } from './payment_method_config_biz_payment_method_configuration_details';
import type { payment_pages_checkout_session_adaptive_pricing } from './payment_pages_checkout_session_adaptive_pricing';
import type { payment_pages_checkout_session_after_expiration } from './payment_pages_checkout_session_after_expiration';
import type { payment_pages_checkout_session_automatic_tax } from './payment_pages_checkout_session_automatic_tax';
import type { payment_pages_checkout_session_collected_information } from './payment_pages_checkout_session_collected_information';
import type { payment_pages_checkout_session_consent } from './payment_pages_checkout_session_consent';
import type { payment_pages_checkout_session_consent_collection } from './payment_pages_checkout_session_consent_collection';
import type { payment_pages_checkout_session_currency_conversion } from './payment_pages_checkout_session_currency_conversion';
import type { payment_pages_checkout_session_custom_fields } from './payment_pages_checkout_session_custom_fields';
import type { payment_pages_checkout_session_custom_text } from './payment_pages_checkout_session_custom_text';
import type { payment_pages_checkout_session_customer_details } from './payment_pages_checkout_session_customer_details';
import type { payment_pages_checkout_session_discount } from './payment_pages_checkout_session_discount';
import type { payment_pages_checkout_session_invoice_creation } from './payment_pages_checkout_session_invoice_creation';
import type { payment_pages_checkout_session_optional_item } from './payment_pages_checkout_session_optional_item';
import type { payment_pages_checkout_session_permissions } from './payment_pages_checkout_session_permissions';
import type { payment_pages_checkout_session_phone_number_collection } from './payment_pages_checkout_session_phone_number_collection';
import type { payment_pages_checkout_session_saved_payment_method_options } from './payment_pages_checkout_session_saved_payment_method_options';
import type { payment_pages_checkout_session_shipping_address_collection } from './payment_pages_checkout_session_shipping_address_collection';
import type { payment_pages_checkout_session_shipping_cost } from './payment_pages_checkout_session_shipping_cost';
import type { payment_pages_checkout_session_shipping_option } from './payment_pages_checkout_session_shipping_option';
import type { payment_pages_checkout_session_tax_id_collection } from './payment_pages_checkout_session_tax_id_collection';
import type { payment_pages_checkout_session_total_details } from './payment_pages_checkout_session_total_details';
import type { setup_intent } from './setup_intent';
import type { subscription } from './subscription';
/**
 * A Checkout Session represents your customer's session as they pay for
 * one-time purchases or subscriptions through [Checkout](https://stripe.com/docs/payments/checkout)
 * or [Payment Links](https://stripe.com/docs/payments/payment-links). We recommend creating a
 * new Session each time your customer attempts to pay.
 *
 * Once payment is successful, the Checkout Session will contain a reference
 * to the [Customer](https://stripe.com/docs/api/customers), and either the successful
 * [PaymentIntent](https://stripe.com/docs/api/payment_intents) or an active
 * [Subscription](https://stripe.com/docs/api/subscriptions).
 *
 * You can create a Checkout Session on your server and redirect to its URL
 * to begin Checkout.
 *
 * Related guide: [Checkout quickstart](https://stripe.com/docs/checkout/quickstart)
 */
export type checkout_session = {
    /**
     * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
     */
    adaptive_pricing?: payment_pages_checkout_session_adaptive_pricing | null;
    /**
     * When set, provides configuration for actions to take if this Checkout Session expires.
     */
    after_expiration?: payment_pages_checkout_session_after_expiration | null;
    /**
     * Enables user redeemable promotion codes.
     */
    allow_promotion_codes?: boolean | null;
    /**
     * Total of all items before discounts or taxes are applied.
     */
    amount_subtotal?: number | null;
    /**
     * Total of all items after discounts and taxes are applied.
     */
    amount_total?: number | null;
    automatic_tax: payment_pages_checkout_session_automatic_tax;
    /**
     * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
     */
    billing_address_collection?: checkout_session.billing_address_collection | null;
    /**
     * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website.
     */
    cancel_url?: string | null;
    /**
     * A unique string to reference the Checkout Session. This can be a
     * customer ID, a cart ID, or similar, and can be used to reconcile the
     * Session with your internal systems.
     */
    client_reference_id?: string | null;
    /**
     * The client secret of your Checkout Session. Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. For `ui_mode: embedded`, the client secret is to be used when initializing Stripe.js embedded checkout.
     * For `ui_mode: custom`, use the client secret with [initCheckout](https://stripe.com/docs/js/custom_checkout/init) on your front end.
     */
    client_secret?: string | null;
    /**
     * Information about the customer collected within the Checkout Session.
     */
    collected_information?: payment_pages_checkout_session_collected_information | null;
    /**
     * Results of `consent_collection` for this session.
     */
    consent?: payment_pages_checkout_session_consent | null;
    /**
     * When set, provides configuration for the Checkout Session to gather active consent from customers.
     */
    consent_collection?: payment_pages_checkout_session_consent_collection | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null;
    /**
     * Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31.
     */
    currency_conversion?: payment_pages_checkout_session_currency_conversion | null;
    /**
     * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
     */
    custom_fields: Array<payment_pages_checkout_session_custom_fields>;
    custom_text: payment_pages_checkout_session_custom_text;
    /**
     * The ID of the customer for this Session.
     * For Checkout Sessions in `subscription` mode or Checkout Sessions with `customer_creation` set as `always` in `payment` mode, Checkout
     * will create a new customer object based on information provided
     * during the payment flow unless an existing customer was provided when
     * the Session was created.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
     */
    customer_creation?: checkout_session.customer_creation | null;
    /**
     * The customer details including the customer's tax exempt status and the customer's tax IDs. Customer's address details are not present on Sessions in `setup` mode.
     */
    customer_details?: payment_pages_checkout_session_customer_details | null;
    /**
     * If provided, this value will be used when the Customer object is created.
     * If not provided, customers will be asked to enter their email address.
     * Use this parameter to prefill customer data if you already have an email
     * on file. To access information about the customer once the payment flow is
     * complete, use the `customer` attribute.
     */
    customer_email?: string | null;
    /**
     * List of coupons and promotion codes attached to the Checkout Session.
     */
    discounts?: Array<payment_pages_checkout_session_discount> | null;
    /**
     * The timestamp at which the Checkout Session will expire.
     */
    expires_at: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * ID of the invoice created by the Checkout Session, if it exists.
     */
    invoice?: (string | invoice) | null;
    /**
     * Details on the state of invoice creation for the Checkout Session.
     */
    invoice_creation?: payment_pages_checkout_session_invoice_creation | null;
    /**
     * The line items purchased by the customer.
     */
    line_items?: {
        /**
         * Details about each object.
         */
        data: Array<item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: checkout_session.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
     */
    locale?: checkout_session.locale | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * The mode of the Checkout Session.
     */
    mode: checkout_session.mode;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: checkout_session.object;
    /**
     * The optional items presented to the customer at checkout.
     */
    optional_items?: Array<payment_pages_checkout_session_optional_item> | null;
    /**
     * Where the user is coming from. This informs the optimizations that are applied to the session.
     */
    origin_context?: checkout_session.origin_context | null;
    /**
     * The ID of the PaymentIntent for Checkout Sessions in `payment` mode. You can't confirm or cancel the PaymentIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
     */
    payment_intent?: (string | payment_intent) | null;
    /**
     * The ID of the Payment Link that created this Session.
     */
    payment_link?: (string | payment_link) | null;
    /**
     * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
     */
    payment_method_collection?: checkout_session.payment_method_collection | null;
    /**
     * Information about the payment method configuration used for this Checkout session if using dynamic payment methods.
     */
    payment_method_configuration_details?: payment_method_config_biz_payment_method_configuration_details | null;
    /**
     * Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession.
     */
    payment_method_options?: checkout_session_payment_method_options | null;
    /**
     * A list of the types of payment methods (e.g. card) this Checkout
     * Session is allowed to accept.
     */
    payment_method_types: Array<string>;
    /**
     * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
     * You can use this value to decide when to fulfill your customer's order.
     */
    payment_status: checkout_session.payment_status;
    /**
     * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.
     *
     * For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
     */
    permissions?: payment_pages_checkout_session_permissions | null;
    phone_number_collection?: payment_pages_checkout_session_phone_number_collection;
    presentment_details?: payment_flows_payment_intent_presentment_details;
    /**
     * The ID of the original expired Checkout Session that triggered the recovery flow.
     */
    recovered_from?: string | null;
    /**
     * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
     */
    redirect_on_completion?: checkout_session.redirect_on_completion;
    /**
     * Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
     */
    return_url?: string;
    /**
     * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
     */
    saved_payment_method_options?: payment_pages_checkout_session_saved_payment_method_options | null;
    /**
     * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
     */
    setup_intent?: (string | setup_intent) | null;
    /**
     * When set, provides configuration for Checkout to collect a shipping address from a customer.
     */
    shipping_address_collection?: payment_pages_checkout_session_shipping_address_collection | null;
    /**
     * The details of the customer cost of shipping, including the customer chosen ShippingRate.
     */
    shipping_cost?: payment_pages_checkout_session_shipping_cost | null;
    /**
     * The shipping rate options applied to this Session.
     */
    shipping_options: Array<payment_pages_checkout_session_shipping_option>;
    /**
     * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
     */
    status?: checkout_session.status | null;
    /**
     * Describes the type of transaction being performed by Checkout in order to customize
     * relevant text on the page, such as the submit button. `submit_type` can only be
     * specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
     */
    submit_type?: checkout_session.submit_type | null;
    /**
     * The ID of the [Subscription](https://stripe.com/docs/api/subscriptions) for Checkout Sessions in `subscription` mode.
     */
    subscription?: (string | subscription) | null;
    /**
     * The URL the customer will be directed to after the payment or
     * subscription creation is successful.
     */
    success_url?: string | null;
    tax_id_collection?: payment_pages_checkout_session_tax_id_collection;
    /**
     * Tax and discount details for the computed total amount.
     */
    total_details?: payment_pages_checkout_session_total_details | null;
    /**
     * The UI mode of the Session. Defaults to `hosted`.
     */
    ui_mode?: checkout_session.ui_mode | null;
    /**
     * The URL to the Checkout Session. Applies to Checkout Sessions with `ui_mode: hosted`. Redirect customers to this URL to take them to Checkout. If you’re using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it’ll use `checkout.stripe.com.`
     * This value is only present when the session is active.
     */
    url?: string | null;
    /**
     * Wallet-specific configuration for this Checkout Session.
     */
    wallet_options?: checkout_session_wallet_options | null;
};
export namespace checkout_session {
    /**
     * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
     */
    export enum billing_address_collection {
        AUTO = 'auto',
        REQUIRED = 'required',
    }
    /**
     * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
     */
    export enum customer_creation {
        ALWAYS = 'always',
        IF_REQUIRED = 'if_required',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
     */
    export enum locale {
        AUTO = 'auto',
        BG = 'bg',
        CS = 'cs',
        DA = 'da',
        DE = 'de',
        EL = 'el',
        EN = 'en',
        EN_GB = 'en-GB',
        ES = 'es',
        ES_419 = 'es-419',
        ET = 'et',
        FI = 'fi',
        FIL = 'fil',
        FR = 'fr',
        FR_CA = 'fr-CA',
        HR = 'hr',
        HU = 'hu',
        ID = 'id',
        IT = 'it',
        JA = 'ja',
        KO = 'ko',
        LT = 'lt',
        LV = 'lv',
        MS = 'ms',
        MT = 'mt',
        NB = 'nb',
        NL = 'nl',
        PL = 'pl',
        PT = 'pt',
        PT_BR = 'pt-BR',
        RO = 'ro',
        RU = 'ru',
        SK = 'sk',
        SL = 'sl',
        SV = 'sv',
        TH = 'th',
        TR = 'tr',
        VI = 'vi',
        ZH = 'zh',
        ZH_HK = 'zh-HK',
        ZH_TW = 'zh-TW',
    }
    /**
     * The mode of the Checkout Session.
     */
    export enum mode {
        PAYMENT = 'payment',
        SETUP = 'setup',
        SUBSCRIPTION = 'subscription',
    }
    /**
     * Where the user is coming from. This informs the optimizations that are applied to the session.
     */
    export enum origin_context {
        MOBILE_APP = 'mobile_app',
        WEB = 'web',
    }
    /**
     * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
     */
    export enum payment_method_collection {
        ALWAYS = 'always',
        IF_REQUIRED = 'if_required',
    }
    /**
     * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
     * You can use this value to decide when to fulfill your customer's order.
     */
    export enum payment_status {
        NO_PAYMENT_REQUIRED = 'no_payment_required',
        PAID = 'paid',
        UNPAID = 'unpaid',
    }
    /**
     * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
     */
    export enum redirect_on_completion {
        ALWAYS = 'always',
        IF_REQUIRED = 'if_required',
        NEVER = 'never',
    }
    /**
     * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
     */
    export enum status {
        COMPLETE = 'complete',
        EXPIRED = 'expired',
        OPEN = 'open',
    }
    /**
     * Describes the type of transaction being performed by Checkout in order to customize
     * relevant text on the page, such as the submit button. `submit_type` can only be
     * specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
     */
    export enum submit_type {
        AUTO = 'auto',
        BOOK = 'book',
        DONATE = 'donate',
        PAY = 'pay',
        SUBSCRIBE = 'subscribe',
    }
    /**
     * The UI mode of the Session. Defaults to `hosted`.
     */
    export enum ui_mode {
        CUSTOM = 'custom',
        EMBEDDED = 'embedded',
        HOSTED = 'hosted',
    }
}

