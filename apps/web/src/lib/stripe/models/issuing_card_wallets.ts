/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_card_apple_pay } from './issuing_card_apple_pay';
import type { issuing_card_google_pay } from './issuing_card_google_pay';
export type issuing_card_wallets = {
    apple_pay: issuing_card_apple_pay;
    google_pay: issuing_card_google_pay;
    /**
     * Unique identifier for a card used with digital wallets
     */
    primary_account_identifier?: string | null;
};

