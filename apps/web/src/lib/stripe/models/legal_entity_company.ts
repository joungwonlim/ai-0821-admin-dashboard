/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { legal_entity_company_verification } from './legal_entity_company_verification';
import type { legal_entity_directorship_declaration } from './legal_entity_directorship_declaration';
import type { legal_entity_japan_address } from './legal_entity_japan_address';
import type { legal_entity_registration_date } from './legal_entity_registration_date';
import type { legal_entity_ubo_declaration } from './legal_entity_ubo_declaration';
export type legal_entity_company = {
    address?: address;
    /**
     * The Kana variation of the company's primary address (Japan only).
     */
    address_kana?: legal_entity_japan_address | null;
    /**
     * The Kanji variation of the company's primary address (Japan only).
     */
    address_kanji?: legal_entity_japan_address | null;
    /**
     * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
     */
    directors_provided?: boolean;
    /**
     * This hash is used to attest that the director information provided to Stripe is both current and correct.
     */
    directorship_declaration?: legal_entity_directorship_declaration | null;
    /**
     * Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
     */
    executives_provided?: boolean;
    /**
     * The export license ID number of the company, also referred as Import Export Code (India only).
     */
    export_license_id?: string;
    /**
     * The purpose code to use for export transactions (India only).
     */
    export_purpose_code?: string;
    /**
     * The company's legal name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    name?: string | null;
    /**
     * The Kana variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    name_kana?: string | null;
    /**
     * The Kanji variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
     */
    name_kanji?: string | null;
    /**
     * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
     */
    owners_provided?: boolean;
    /**
     * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
     */
    ownership_declaration?: legal_entity_ubo_declaration | null;
    /**
     * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
     */
    ownership_exemption_reason?: legal_entity_company.ownership_exemption_reason;
    /**
     * The company's phone number (used for verification).
     */
    phone?: string | null;
    registration_date?: legal_entity_registration_date;
    /**
     * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
     */
    structure?: legal_entity_company.structure;
    /**
     * Whether the company's business ID number was provided.
     */
    tax_id_provided?: boolean;
    /**
     * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
     */
    tax_id_registrar?: string;
    /**
     * Whether the company's business VAT number was provided.
     */
    vat_id_provided?: boolean;
    /**
     * Information on the verification state of the company.
     */
    verification?: legal_entity_company_verification | null;
};
export namespace legal_entity_company {
    /**
     * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
     */
    export enum ownership_exemption_reason {
        QUALIFIED_ENTITY_EXCEEDS_OWNERSHIP_THRESHOLD = 'qualified_entity_exceeds_ownership_threshold',
        QUALIFIES_AS_FINANCIAL_INSTITUTION = 'qualifies_as_financial_institution',
    }
    /**
     * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
     */
    export enum structure {
        FREE_ZONE_ESTABLISHMENT = 'free_zone_establishment',
        FREE_ZONE_LLC = 'free_zone_llc',
        GOVERNMENT_INSTRUMENTALITY = 'government_instrumentality',
        GOVERNMENTAL_UNIT = 'governmental_unit',
        INCORPORATED_NON_PROFIT = 'incorporated_non_profit',
        INCORPORATED_PARTNERSHIP = 'incorporated_partnership',
        LIMITED_LIABILITY_PARTNERSHIP = 'limited_liability_partnership',
        LLC = 'llc',
        MULTI_MEMBER_LLC = 'multi_member_llc',
        PRIVATE_COMPANY = 'private_company',
        PRIVATE_CORPORATION = 'private_corporation',
        PRIVATE_PARTNERSHIP = 'private_partnership',
        PUBLIC_COMPANY = 'public_company',
        PUBLIC_CORPORATION = 'public_corporation',
        PUBLIC_PARTNERSHIP = 'public_partnership',
        REGISTERED_CHARITY = 'registered_charity',
        SINGLE_MEMBER_LLC = 'single_member_llc',
        SOLE_ESTABLISHMENT = 'sole_establishment',
        SOLE_PROPRIETORSHIP = 'sole_proprietorship',
        TAX_EXEMPT_GOVERNMENT_INSTRUMENTALITY = 'tax_exempt_government_instrumentality',
        UNINCORPORATED_ASSOCIATION = 'unincorporated_association',
        UNINCORPORATED_NON_PROFIT = 'unincorporated_non_profit',
        UNINCORPORATED_PARTNERSHIP = 'unincorporated_partnership',
    }
}

