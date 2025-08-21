/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
export type issuing_card_shipping_address_validation = {
    /**
     * The address validation capabilities to use.
     */
    mode: issuing_card_shipping_address_validation.mode;
    /**
     * The normalized shipping address.
     */
    normalized_address?: address | null;
    /**
     * The validation result for the shipping address.
     */
    result?: issuing_card_shipping_address_validation.result | null;
};
export namespace issuing_card_shipping_address_validation {
    /**
     * The address validation capabilities to use.
     */
    export enum mode {
        DISABLED = 'disabled',
        NORMALIZATION_ONLY = 'normalization_only',
        VALIDATION_AND_NORMALIZATION = 'validation_and_normalization',
    }
    /**
     * The validation result for the shipping address.
     */
    export enum result {
        INDETERMINATE = 'indeterminate',
        LIKELY_DELIVERABLE = 'likely_deliverable',
        LIKELY_UNDELIVERABLE = 'likely_undeliverable',
    }
}

