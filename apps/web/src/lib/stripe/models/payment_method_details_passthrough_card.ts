/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_passthrough_card = {
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand?: string | null;
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
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding?: string | null;
    /**
     * The last four digits of the card.
     */
    last4?: string | null;
};

