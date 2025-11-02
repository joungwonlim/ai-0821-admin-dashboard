/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { legal_entity_dob } from './legal_entity_dob';
import type { legal_entity_japan_address } from './legal_entity_japan_address';
import type { legal_entity_person_verification } from './legal_entity_person_verification';
import type { person_additional_tos_acceptances } from './person_additional_tos_acceptances';
import type { person_future_requirements } from './person_future_requirements';
import type { person_relationship } from './person_relationship';
import type { person_requirements } from './person_requirements';
import type { person_us_cfpb_data } from './person_us_cfpb_data';
/**
 * This is an object representing a person associated with a Stripe account.
 *
 * A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
 *
 * See the [Standard onboarding](/connect/standard-accounts) or [Express onboarding](/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](/connect/handling-api-verification#person-information).
 */
export type person = {
    /**
     * The account the person is associated with.
     */
    account: string;
    additional_tos_acceptances?: person_additional_tos_acceptances;
    address?: address;
    address_kana?: legal_entity_japan_address | null;
    address_kanji?: legal_entity_japan_address | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    dob?: legal_entity_dob;
    /**
     * The person's email address. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    email?: string | null;
    /**
     * The person's first name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    first_name?: string | null;
    /**
     * The Kana variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    first_name_kana?: string | null;
    /**
     * The Kanji variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    first_name_kanji?: string | null;
    /**
     * A list of alternate names or aliases that the person is known by. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    full_name_aliases?: Array<string>;
    future_requirements?: person_future_requirements | null;
    /**
     * The person's gender.
     */
    gender?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Whether the person's `id_number` was provided. True if either the full ID number was provided or if only the required part of the ID number was provided (ex. last four of an individual's SSN for the US indicated by `ssn_last_4_provided`).
     */
    id_number_provided?: boolean;
    /**
     * Whether the person's `id_number_secondary` was provided.
     */
    id_number_secondary_provided?: boolean;
    /**
     * The person's last name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    last_name?: string | null;
    /**
     * The Kana variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    last_name_kana?: string | null;
    /**
     * The Kanji variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    last_name_kanji?: string | null;
    /**
     * The person's maiden name.
     */
    maiden_name?: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string>;
    /**
     * The country where the person is a national.
     */
    nationality?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: person.object;
    /**
     * The person's phone number.
     */
    phone?: string | null;
    /**
     * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
     */
    political_exposure?: person.political_exposure;
    registered_address?: address;
    relationship?: person_relationship;
    requirements?: person_requirements | null;
    /**
     * Whether the last four digits of the person's Social Security number have been provided (U.S. only).
     */
    ssn_last_4_provided?: boolean;
    /**
     * Demographic data related to the person.
     */
    us_cfpb_data?: person_us_cfpb_data | null;
    verification?: legal_entity_person_verification;
};
export namespace person {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PERSON = 'person',
    }
    /**
     * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
     */
    export enum political_exposure {
        EXISTING = 'existing',
        NONE = 'none',
    }
}

