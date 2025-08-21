/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_business_profile } from './account_business_profile';
import type { account_capabilities } from './account_capabilities';
import type { account_future_requirements } from './account_future_requirements';
import type { account_group_membership } from './account_group_membership';
import type { account_requirements } from './account_requirements';
import type { account_settings } from './account_settings';
import type { account_tos_acceptance } from './account_tos_acceptance';
import type { account_unification_account_controller } from './account_unification_account_controller';
import type { bank_account } from './bank_account';
import type { card } from './card';
import type { legal_entity_company } from './legal_entity_company';
import type { person } from './person';
/**
 * This is an object representing a Stripe account. You can retrieve it to see
 * properties on the account like its current requirements or if the account is
 * enabled to make live charges or receive payouts.
 *
 * For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
 * is `application`, which includes Custom accounts, the properties below are always
 * returned.
 *
 * For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
 * is `stripe`, which includes Standard and Express accounts, some properties are only returned
 * until you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions)
 * to start Connect Onboarding. Learn about the [differences between accounts](/connect/accounts).
 */
export type account = {
    /**
     * Business information about the account.
     */
    business_profile?: account_business_profile | null;
    /**
     * The business type.
     */
    business_type?: account.business_type | null;
    capabilities?: account_capabilities;
    /**
     * Whether the account can process charges.
     */
    charges_enabled?: boolean;
    company?: legal_entity_company;
    controller?: account_unification_account_controller;
    /**
     * The account's country.
     */
    country?: string;
    /**
     * Time at which the account was connected. Measured in seconds since the Unix epoch.
     */
    created?: number;
    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;
    /**
     * Whether account details have been submitted. Accounts with Stripe Dashboard access, which includes Standard accounts, cannot receive payouts before this is true. Accounts where this is false should be directed to [an onboarding flow](/connect/onboarding) to finish submitting account details.
     */
    details_submitted?: boolean;
    /**
     * An email address associated with the account. It's not used for authentication and Stripe doesn't market to this field without explicit approval from the platform.
     */
    email?: string | null;
    /**
     * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
     */
    external_accounts?: {
        /**
         * The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
         */
        data: Array<(bank_account | card)>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: account.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    future_requirements?: account_future_requirements;
    /**
     * The groups associated with the account.
     */
    groups?: account_group_membership | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    individual?: person;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: account.object;
    /**
     * Whether the funds in this account can be paid out.
     */
    payouts_enabled?: boolean;
    requirements?: account_requirements;
    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: account_settings | null;
    tos_acceptance?: account_tos_acceptance;
    /**
     * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
     */
    type?: account.type;
};
export namespace account {
    /**
     * The business type.
     */
    export enum business_type {
        COMPANY = 'company',
        GOVERNMENT_ENTITY = 'government_entity',
        INDIVIDUAL = 'individual',
        NON_PROFIT = 'non_profit',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
     */
    export enum type {
        CUSTOM = 'custom',
        EXPRESS = 'express',
        NONE = 'none',
        STANDARD = 'standard',
    }
}

