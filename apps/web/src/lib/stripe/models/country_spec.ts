/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { country_spec_verification_fields } from './country_spec_verification_fields';
/**
 * Stripe needs to collect certain pieces of information about each account
 * created. These requirements can differ depending on the account's country. The
 * Country Specs API makes these rules available to your integration.
 *
 * You can also view the information from this API call as [an online
 * guide](/docs/connect/required-verification-information).
 */
export type country_spec = {
    /**
     * The default currency for this country. This applies to both payment methods and bank accounts.
     */
    default_currency: string;
    /**
     * Unique identifier for the object. Represented as the ISO country code for this country.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: country_spec.object;
    /**
     * Currencies that can be accepted in the specific country (for transfers).
     */
    supported_bank_account_currencies: Record<string, Array<string>>;
    /**
     * Currencies that can be accepted in the specified country (for payments).
     */
    supported_payment_currencies: Array<string>;
    /**
     * Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
     */
    supported_payment_methods: Array<string>;
    /**
     * Countries that can accept transfers from the specified country.
     */
    supported_transfer_countries: Array<string>;
    verification_fields: country_spec_verification_fields;
};
export namespace country_spec {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        COUNTRY_SPEC = 'country_spec',
    }
}

