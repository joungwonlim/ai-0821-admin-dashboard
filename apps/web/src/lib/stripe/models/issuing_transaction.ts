/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_transaction } from './balance_transaction';
import type { issuing_authorization } from './issuing_authorization';
import type { issuing_authorization_merchant_data } from './issuing_authorization_merchant_data';
import type { issuing_card } from './issuing_card';
import type { issuing_cardholder } from './issuing_cardholder';
import type { issuing_dispute } from './issuing_dispute';
import type { issuing_token } from './issuing_token';
import type { issuing_transaction_amount_details } from './issuing_transaction_amount_details';
import type { issuing_transaction_network_data } from './issuing_transaction_network_data';
import type { issuing_transaction_purchase_details } from './issuing_transaction_purchase_details';
import type { issuing_transaction_treasury } from './issuing_transaction_treasury';
/**
 * Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
 * your Stripe account, such as a completed purchase or refund, is represented by an Issuing
 * `Transaction` object.
 *
 * Related guide: [Issued card transactions](https://stripe.com/docs/issuing/purchases/transactions)
 */
export type issuing_transaction = {
    /**
     * The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount: number;
    /**
     * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_details?: issuing_transaction_amount_details | null;
    /**
     * The `Authorization` object that led to this transaction.
     */
    authorization?: (string | issuing_authorization) | null;
    /**
     * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
     */
    balance_transaction?: (string | balance_transaction) | null;
    /**
     * The card used to make this transaction.
     */
    card: (string | issuing_card);
    /**
     * The cardholder to whom this transaction belongs.
     */
    cardholder?: (string | issuing_cardholder) | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * If you've disputed the transaction, the ID of the dispute.
     */
    dispute?: (string | issuing_dispute) | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
     */
    merchant_amount: number;
    /**
     * The currency with which the merchant is taking payment.
     */
    merchant_currency: string;
    merchant_data: issuing_authorization_merchant_data;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * Details about the transaction, such as processing dates, set by the card network.
     */
    network_data?: issuing_transaction_network_data | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_transaction.object;
    /**
     * Additional purchase information that is optionally provided by the merchant.
     */
    purchase_details?: issuing_transaction_purchase_details | null;
    /**
     * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this transaction. If a network token was not used for this transaction, this field will be null.
     */
    token?: (string | issuing_token) | null;
    /**
     * [Treasury](https://stripe.com/docs/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
     */
    treasury?: issuing_transaction_treasury | null;
    /**
     * The nature of the transaction.
     */
    type: issuing_transaction.type;
    /**
     * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
     */
    wallet?: issuing_transaction.wallet | null;
};
export namespace issuing_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_TRANSACTION = 'issuing.transaction',
    }
    /**
     * The nature of the transaction.
     */
    export enum type {
        CAPTURE = 'capture',
        REFUND = 'refund',
    }
    /**
     * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
     */
    export enum wallet {
        APPLE_PAY = 'apple_pay',
        GOOGLE_PAY = 'google_pay',
        SAMSUNG_PAY = 'samsung_pay',
    }
}

