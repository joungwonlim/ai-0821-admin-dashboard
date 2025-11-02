/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_cardholder_address } from './issuing_cardholder_address';
import type { issuing_cardholder_authorization_controls } from './issuing_cardholder_authorization_controls';
import type { issuing_cardholder_company } from './issuing_cardholder_company';
import type { issuing_cardholder_individual } from './issuing_cardholder_individual';
import type { issuing_cardholder_requirements } from './issuing_cardholder_requirements';
/**
 * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
 *
 * Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
 */
export type issuing_cardholder = {
    billing: issuing_cardholder_address;
    /**
     * Additional information about a `company` cardholder.
     */
    company?: issuing_cardholder_company | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The cardholder's email address.
     */
    email?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Additional information about an `individual` cardholder.
     */
    individual?: issuing_cardholder_individual | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * The cardholder's name. This will be printed on cards issued to them.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_cardholder.object;
    /**
     * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
     */
    phone_number?: string | null;
    /**
     * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
     * This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
     */
    preferred_locales?: Array<'de' | 'en' | 'es' | 'fr' | 'it'> | null;
    requirements: issuing_cardholder_requirements;
    /**
     * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
     */
    spending_controls?: issuing_cardholder_authorization_controls | null;
    /**
     * Specifies whether to permit authorizations on this cardholder's cards.
     */
    status: issuing_cardholder.status;
    /**
     * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
     */
    type: issuing_cardholder.type;
};
export namespace issuing_cardholder {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_CARDHOLDER = 'issuing.cardholder',
    }
    /**
     * Specifies whether to permit authorizations on this cardholder's cards.
     */
    export enum status {
        ACTIVE = 'active',
        BLOCKED = 'blocked',
        INACTIVE = 'inactive',
    }
    /**
     * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
     */
    export enum type {
        COMPANY = 'company',
        INDIVIDUAL = 'individual',
    }
}

