/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_cardholder_card_issuing } from './issuing_cardholder_card_issuing';
import type { issuing_cardholder_individual_dob } from './issuing_cardholder_individual_dob';
import type { issuing_cardholder_verification } from './issuing_cardholder_verification';
export type issuing_cardholder_individual = {
    /**
     * Information related to the card_issuing program for this cardholder.
     */
    card_issuing?: issuing_cardholder_card_issuing | null;
    /**
     * The date of birth of this cardholder.
     */
    dob?: issuing_cardholder_individual_dob | null;
    /**
     * The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
     */
    first_name?: string | null;
    /**
     * The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
     */
    last_name?: string | null;
    /**
     * Government-issued ID document for this cardholder.
     */
    verification?: issuing_cardholder_verification | null;
};

