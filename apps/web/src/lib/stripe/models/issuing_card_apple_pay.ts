/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_card_apple_pay = {
    /**
     * Apple Pay Eligibility
     */
    eligible: boolean;
    /**
     * Reason the card is ineligible for Apple Pay
     */
    ineligible_reason?: issuing_card_apple_pay.ineligible_reason | null;
};
export namespace issuing_card_apple_pay {
    /**
     * Reason the card is ineligible for Apple Pay
     */
    export enum ineligible_reason {
        MISSING_AGREEMENT = 'missing_agreement',
        MISSING_CARDHOLDER_CONTACT = 'missing_cardholder_contact',
        UNSUPPORTED_REGION = 'unsupported_region',
    }
}

