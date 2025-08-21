/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_transaction } from './balance_transaction';
import type { issuing_authorization_amount_details } from './issuing_authorization_amount_details';
import type { issuing_authorization_fleet_data } from './issuing_authorization_fleet_data';
import type { issuing_authorization_fraud_challenge } from './issuing_authorization_fraud_challenge';
import type { issuing_authorization_fuel_data } from './issuing_authorization_fuel_data';
import type { issuing_authorization_merchant_data } from './issuing_authorization_merchant_data';
import type { issuing_authorization_network_data } from './issuing_authorization_network_data';
import type { issuing_authorization_pending_request } from './issuing_authorization_pending_request';
import type { issuing_authorization_request } from './issuing_authorization_request';
import type { issuing_authorization_treasury } from './issuing_authorization_treasury';
import type { issuing_authorization_verification_data } from './issuing_authorization_verification_data';
import type { issuing_card } from './issuing_card';
import type { issuing_cardholder } from './issuing_cardholder';
import type { issuing_token } from './issuing_token';
import type { issuing_transaction } from './issuing_transaction';
/**
 * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
 * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
 * purchase to be completed successfully.
 *
 * Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
 */
export type issuing_authorization = {
    /**
     * The total amount that was authorized or rejected. This amount is in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `amount` should be the same as `merchant_amount`, unless `currency` and `merchant_currency` are different.
     */
    amount: number;
    /**
     * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_details?: issuing_authorization_amount_details | null;
    /**
     * Whether the authorization has been approved.
     */
    approved: boolean;
    /**
     * How the card details were provided.
     */
    authorization_method: issuing_authorization.authorization_method;
    /**
     * List of balance transactions associated with this authorization.
     */
    balance_transactions: Array<balance_transaction>;
    card: issuing_card;
    /**
     * The cardholder to whom this authorization belongs.
     */
    cardholder?: (string | issuing_cardholder) | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The currency of the cardholder. This currency can be different from the currency presented at authorization and the `merchant_currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Fleet-specific information for authorizations using Fleet cards.
     */
    fleet?: issuing_authorization_fleet_data | null;
    /**
     * Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons.
     */
    fraud_challenges?: Array<issuing_authorization_fraud_challenge> | null;
    /**
     * Information about fuel that was purchased with this transaction. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed.
     */
    fuel?: issuing_authorization_fuel_data | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `merchant_amount` should be the same as `amount`, unless `merchant_currency` and `currency` are different.
     */
    merchant_amount: number;
    /**
     * The local currency that was presented to the cardholder for the authorization. This currency can be different from the cardholder currency and the `currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    merchant_currency: string;
    merchant_data: issuing_authorization_merchant_data;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * Details about the authorization, such as identifiers, set by the card network.
     */
    network_data?: issuing_authorization_network_data | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_authorization.object;
    /**
     * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
     */
    pending_request?: issuing_authorization_pending_request | null;
    /**
     * History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. based on your spending_controls). If the merchant changes the authorization by performing an incremental authorization, you can look at this field to see the previous requests for the authorization. This field can be helpful in determining why a given authorization was approved/declined.
     */
    request_history: Array<issuing_authorization_request>;
    /**
     * The current status of the authorization in its lifecycle.
     */
    status: issuing_authorization.status;
    /**
     * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this authorization. If a network token was not used for this authorization, this field will be null.
     */
    token?: (string | issuing_token) | null;
    /**
     * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
     */
    transactions: Array<issuing_transaction>;
    /**
     * [Treasury](https://stripe.com/docs/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://stripe.com/docs/api/treasury/financial_accounts).
     */
    treasury?: issuing_authorization_treasury | null;
    verification_data: issuing_authorization_verification_data;
    /**
     * Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant.
     */
    verified_by_fraud_challenge?: boolean | null;
    /**
     * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
     */
    wallet?: string | null;
};
export namespace issuing_authorization {
    /**
     * How the card details were provided.
     */
    export enum authorization_method {
        CHIP = 'chip',
        CONTACTLESS = 'contactless',
        KEYED_IN = 'keyed_in',
        ONLINE = 'online',
        SWIPE = 'swipe',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_AUTHORIZATION = 'issuing.authorization',
    }
    /**
     * The current status of the authorization in its lifecycle.
     */
    export enum status {
        CLOSED = 'closed',
        EXPIRED = 'expired',
        PENDING = 'pending',
        REVERSED = 'reversed',
    }
}

