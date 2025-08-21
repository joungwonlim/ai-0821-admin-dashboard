/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { networks } from './networks';
import type { payment_method_card_checks } from './payment_method_card_checks';
import type { payment_method_card_generated_card } from './payment_method_card_generated_card';
import type { payment_method_card_wallet } from './payment_method_card_wallet';
import type { three_d_secure_usage } from './three_d_secure_usage';
export type payment_method_card = {
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand: string;
    /**
     * Checks on Card address and CVC if provided.
     */
    checks?: payment_method_card_checks | null;
    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country?: string | null;
    /**
     * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
     */
    display_brand?: string | null;
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
    funding: string;
    /**
     * Details of the original PaymentMethod that created this object.
     */
    generated_from?: payment_method_card_generated_card | null;
    /**
     * The last four digits of the card.
     */
    last4: string;
    /**
     * Contains information about card networks that can be used to process the payment.
     */
    networks?: networks | null;
    /**
     * Status of a card based on the card issuer.
     */
    regulated_status?: payment_method_card.regulated_status | null;
    /**
     * Contains details on how this Card may be used for 3D Secure authentication.
     */
    three_d_secure_usage?: three_d_secure_usage | null;
    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet?: payment_method_card_wallet | null;
};
export namespace payment_method_card {
    /**
     * Status of a card based on the card issuer.
     */
    export enum regulated_status {
        REGULATED = 'regulated',
        UNREGULATED = 'unregulated',
    }
}

