/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_attempt_payment_method_details_card_checks } from './setup_attempt_payment_method_details_card_checks';
import type { setup_attempt_payment_method_details_card_wallet } from './setup_attempt_payment_method_details_card_wallet';
import type { three_d_secure_details } from './three_d_secure_details';
export type setup_attempt_payment_method_details_card = {
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand?: string | null;
    /**
     * Check results by Card networks on Card address and CVC at the time of authorization
     */
    checks?: setup_attempt_payment_method_details_card_checks | null;
    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country?: string | null;
    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month?: number | null;
    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year?: number | null;
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
     * The last four digits of the card.
     */
    last4?: string | null;
    /**
     * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    network?: string | null;
    /**
     * Populated if this authorization used 3D Secure authentication.
     */
    three_d_secure?: three_d_secure_details | null;
    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet?: setup_attempt_payment_method_details_card_wallet | null;
};

