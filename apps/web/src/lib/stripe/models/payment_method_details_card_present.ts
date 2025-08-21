/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_flows_private_payment_methods_card_present_common_wallet } from './payment_flows_private_payment_methods_card_present_common_wallet';
import type { payment_method_details_card_present_offline } from './payment_method_details_card_present_offline';
import type { payment_method_details_card_present_receipt } from './payment_method_details_card_present_receipt';
export type payment_method_details_card_present = {
    /**
     * The authorized amount
     */
    amount_authorized?: number | null;
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand?: string | null;
    /**
     * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
     */
    brand_product?: string | null;
    /**
     * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
     */
    capture_before?: number;
    /**
     * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
     */
    cardholder_name?: string | null;
    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country?: string | null;
    /**
     * A high-level description of the type of cards issued in this range.
     */
    description?: string | null;
    /**
     * Authorization response cryptogram.
     */
    emv_auth_data?: string | null;
    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;
    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;
    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
     *
     * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
     */
    fingerprint?: string | null;
    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding?: string | null;
    /**
     * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
     */
    generated_card?: string | null;
    /**
     * Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
     */
    incremental_authorization_supported: boolean;
    /**
     * The name of the card's issuing bank.
     */
    issuer?: string | null;
    /**
     * The last four digits of the card.
     */
    last4?: string | null;
    /**
     * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    network?: string | null;
    /**
     * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
     */
    network_transaction_id?: string | null;
    /**
     * Details about payments collected offline.
     */
    offline?: payment_method_details_card_present_offline | null;
    /**
     * Defines whether the authorized amount can be over-captured or not
     */
    overcapture_supported: boolean;
    /**
     * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
     */
    preferred_locales?: Array<string> | null;
    /**
     * How card details were read in this transaction.
     */
    read_method?: payment_method_details_card_present.read_method | null;
    /**
     * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
     */
    receipt?: payment_method_details_card_present_receipt | null;
    wallet?: payment_flows_private_payment_methods_card_present_common_wallet;
};
export namespace payment_method_details_card_present {
    /**
     * How card details were read in this transaction.
     */
    export enum read_method {
        CONTACT_EMV = 'contact_emv',
        CONTACTLESS_EMV = 'contactless_emv',
        CONTACTLESS_MAGSTRIPE_MODE = 'contactless_magstripe_mode',
        MAGNETIC_STRIPE_FALLBACK = 'magnetic_stripe_fallback',
        MAGNETIC_STRIPE_TRACK2 = 'magnetic_stripe_track2',
    }
}

