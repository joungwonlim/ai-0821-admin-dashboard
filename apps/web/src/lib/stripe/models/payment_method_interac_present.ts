/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_card_present_networks } from './payment_method_card_present_networks';
export type payment_method_interac_present = {
    /**
     * Card brand. Can be `interac`, `mastercard` or `visa`.
     */
    brand?: string | null;
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
     * The name of the card's issuing bank.
     */
    issuer?: string | null;
    /**
     * The last four digits of the card.
     */
    last4?: string | null;
    /**
     * Contains information about card networks that can be used to process the payment.
     */
    networks?: payment_method_card_present_networks | null;
    /**
     * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
     */
    preferred_locales?: Array<string> | null;
    /**
     * How card details were read in this transaction.
     */
    read_method?: payment_method_interac_present.read_method | null;
};
export namespace payment_method_interac_present {
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

