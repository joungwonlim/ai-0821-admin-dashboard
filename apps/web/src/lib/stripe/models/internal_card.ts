/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type internal_card = {
    /**
     * Brand of the card used in the transaction
     */
    brand?: string | null;
    /**
     * Two-letter ISO code representing the country of the card
     */
    country?: string | null;
    /**
     * Two digit number representing the card's expiration month
     */
    exp_month?: number | null;
    /**
     * Two digit number representing the card's expiration year
     */
    exp_year?: number | null;
    /**
     * The last 4 digits of the card
     */
    last4?: string | null;
};

