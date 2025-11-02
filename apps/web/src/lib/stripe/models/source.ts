/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { source_code_verification_flow } from './source_code_verification_flow';
import type { source_order } from './source_order';
import type { source_owner } from './source_owner';
import type { source_receiver_flow } from './source_receiver_flow';
import type { source_redirect_flow } from './source_redirect_flow';
import type { source_type_ach_credit_transfer } from './source_type_ach_credit_transfer';
import type { source_type_ach_debit } from './source_type_ach_debit';
import type { source_type_acss_debit } from './source_type_acss_debit';
import type { source_type_alipay } from './source_type_alipay';
import type { source_type_au_becs_debit } from './source_type_au_becs_debit';
import type { source_type_bancontact } from './source_type_bancontact';
import type { source_type_card } from './source_type_card';
import type { source_type_card_present } from './source_type_card_present';
import type { source_type_eps } from './source_type_eps';
import type { source_type_giropay } from './source_type_giropay';
import type { source_type_ideal } from './source_type_ideal';
import type { source_type_klarna } from './source_type_klarna';
import type { source_type_multibanco } from './source_type_multibanco';
import type { source_type_p24 } from './source_type_p24';
import type { source_type_sepa_debit } from './source_type_sepa_debit';
import type { source_type_sofort } from './source_type_sofort';
import type { source_type_three_d_secure } from './source_type_three_d_secure';
import type { source_type_wechat } from './source_type_wechat';
/**
 * `Source` objects allow you to accept a variety of payment methods. They
 * represent a customer's payment instrument, and can be used with the Stripe API
 * just like a `Card` object: once chargeable, they can be charged, or can be
 * attached to customers.
 *
 * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
 * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
 * This newer API provides access to our latest features and payment method types.
 *
 * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
 */
export type source = {
    ach_credit_transfer?: source_type_ach_credit_transfer;
    ach_debit?: source_type_ach_debit;
    acss_debit?: source_type_acss_debit;
    alipay?: source_type_alipay;
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
     */
    allow_redisplay?: source.allow_redisplay | null;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
     */
    amount?: number | null;
    au_becs_debit?: source_type_au_becs_debit;
    bancontact?: source_type_bancontact;
    card?: source_type_card;
    card_present?: source_type_card_present;
    /**
     * The client secret of the source. Used for client-side retrieval using a publishable key.
     */
    client_secret: string;
    code_verification?: source_code_verification_flow;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
     */
    currency?: string | null;
    /**
     * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
     */
    customer?: string;
    eps?: source_type_eps;
    /**
     * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
     */
    flow: string;
    giropay?: source_type_giropay;
    /**
     * Unique identifier for the object.
     */
    id: string;
    ideal?: source_type_ideal;
    klarna?: source_type_klarna;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    multibanco?: source_type_multibanco;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: source.object;
    /**
     * Information about the owner of the payment instrument that may be used or required by particular source types.
     */
    owner?: source_owner | null;
    p24?: source_type_p24;
    receiver?: source_receiver_flow;
    redirect?: source_redirect_flow;
    sepa_debit?: source_type_sepa_debit;
    sofort?: source_type_sofort;
    source_order?: source_order;
    /**
     * Extra information about a source. This will appear on your customer's statement every time you charge the source.
     */
    statement_descriptor?: string | null;
    /**
     * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
     */
    status: string;
    three_d_secure?: source_type_three_d_secure;
    /**
     * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
     */
    type: source.type;
    /**
     * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
     */
    usage?: string | null;
    wechat?: source_type_wechat;
};
export namespace source {
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
        SOURCE = 'source',
    }
    /**
     * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
     */
    export enum type {
        ACH_CREDIT_TRANSFER = 'ach_credit_transfer',
        ACH_DEBIT = 'ach_debit',
        ACSS_DEBIT = 'acss_debit',
        ALIPAY = 'alipay',
        AU_BECS_DEBIT = 'au_becs_debit',
        BANCONTACT = 'bancontact',
        CARD = 'card',
        CARD_PRESENT = 'card_present',
        EPS = 'eps',
        GIROPAY = 'giropay',
        IDEAL = 'ideal',
        KLARNA = 'klarna',
        MULTIBANCO = 'multibanco',
        P24 = 'p24',
        SEPA_DEBIT = 'sepa_debit',
        SOFORT = 'sofort',
        THREE_D_SECURE = 'three_d_secure',
        WECHAT = 'wechat',
    }
}

