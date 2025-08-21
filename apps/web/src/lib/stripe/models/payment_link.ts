/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { deleted_application } from './deleted_application';
import type { item } from './item';
import type { payment_links_resource_after_completion } from './payment_links_resource_after_completion';
import type { payment_links_resource_automatic_tax } from './payment_links_resource_automatic_tax';
import type { payment_links_resource_consent_collection } from './payment_links_resource_consent_collection';
import type { payment_links_resource_custom_fields } from './payment_links_resource_custom_fields';
import type { payment_links_resource_custom_text } from './payment_links_resource_custom_text';
import type { payment_links_resource_invoice_creation } from './payment_links_resource_invoice_creation';
import type { payment_links_resource_optional_item } from './payment_links_resource_optional_item';
import type { payment_links_resource_payment_intent_data } from './payment_links_resource_payment_intent_data';
import type { payment_links_resource_phone_number_collection } from './payment_links_resource_phone_number_collection';
import type { payment_links_resource_restrictions } from './payment_links_resource_restrictions';
import type { payment_links_resource_shipping_address_collection } from './payment_links_resource_shipping_address_collection';
import type { payment_links_resource_shipping_option } from './payment_links_resource_shipping_option';
import type { payment_links_resource_subscription_data } from './payment_links_resource_subscription_data';
import type { payment_links_resource_tax_id_collection } from './payment_links_resource_tax_id_collection';
import type { payment_links_resource_transfer_data } from './payment_links_resource_transfer_data';
/**
 * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.
 *
 * When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.
 *
 * Related guide: [Payment Links API](https://stripe.com/docs/payment-links)
 */
export type payment_link = {
    /**
     * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
     */
    active: boolean;
    after_completion: payment_links_resource_after_completion;
    /**
     * Whether user redeemable promotion codes are enabled.
     */
    allow_promotion_codes: boolean;
    /**
     * The ID of the Connect application that created the Payment Link.
     */
    application?: (string | application | deleted_application) | null;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
     */
    application_fee_amount?: number | null;
    /**
     * This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
     */
    application_fee_percent?: number | null;
    automatic_tax: payment_links_resource_automatic_tax;
    /**
     * Configuration for collecting the customer's billing address. Defaults to `auto`.
     */
    billing_address_collection: payment_link.billing_address_collection;
    /**
     * When set, provides configuration to gather active consent from customers.
     */
    consent_collection?: payment_links_resource_consent_collection | null;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
     */
    custom_fields: Array<payment_links_resource_custom_fields>;
    custom_text: payment_links_resource_custom_text;
    /**
     * Configuration for Customer creation during checkout.
     */
    customer_creation: payment_link.customer_creation;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The custom message to be displayed to a customer when a payment link is no longer active.
     */
    inactive_message?: string | null;
    /**
     * Configuration for creating invoice for payment mode payment links.
     */
    invoice_creation?: payment_links_resource_invoice_creation | null;
    /**
     * The line items representing what is being sold.
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
        object: payment_link.object;
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
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: payment_link.object;
    /**
     * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * The optional items presented to the customer at checkout.
     */
    optional_items?: Array<payment_links_resource_optional_item> | null;
    /**
     * Indicates the parameters to be passed to PaymentIntent creation during checkout.
     */
    payment_intent_data?: payment_links_resource_payment_intent_data | null;
    /**
     * Configuration for collecting a payment method during checkout. Defaults to `always`.
     */
    payment_method_collection: payment_link.payment_method_collection;
    /**
     * The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
     */
    payment_method_types?: Array<'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'klarna' | 'konbini' | 'link' | 'mobilepay' | 'multibanco' | 'oxxo' | 'p24' | 'pay_by_bank' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip'> | null;
    phone_number_collection: payment_links_resource_phone_number_collection;
    /**
     * Settings that restrict the usage of a payment link.
     */
    restrictions?: payment_links_resource_restrictions | null;
    /**
     * Configuration for collecting the customer's shipping address.
     */
    shipping_address_collection?: payment_links_resource_shipping_address_collection | null;
    /**
     * The shipping rate options applied to the session.
     */
    shipping_options: Array<payment_links_resource_shipping_option>;
    /**
     * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
     */
    submit_type: payment_link.submit_type;
    /**
     * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
     */
    subscription_data?: payment_links_resource_subscription_data | null;
    tax_id_collection: payment_links_resource_tax_id_collection;
    /**
     * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
     */
    transfer_data?: payment_links_resource_transfer_data | null;
    /**
     * The public URL that can be shared with customers.
     */
    url: string;
};
export namespace payment_link {
    /**
     * Configuration for collecting the customer's billing address. Defaults to `auto`.
     */
    export enum billing_address_collection {
        AUTO = 'auto',
        REQUIRED = 'required',
    }
    /**
     * Configuration for Customer creation during checkout.
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
     * Configuration for collecting a payment method during checkout. Defaults to `always`.
     */
    export enum payment_method_collection {
        ALWAYS = 'always',
        IF_REQUIRED = 'if_required',
    }
    /**
     * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
     */
    export enum submit_type {
        AUTO = 'auto',
        BOOK = 'book',
        DONATE = 'donate',
        PAY = 'pay',
        SUBSCRIBE = 'subscribe',
    }
}

