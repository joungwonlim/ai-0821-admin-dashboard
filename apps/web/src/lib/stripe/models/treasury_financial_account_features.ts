/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_financial_accounts_resource_financial_addresses_features } from './treasury_financial_accounts_resource_financial_addresses_features';
import type { treasury_financial_accounts_resource_inbound_transfers } from './treasury_financial_accounts_resource_inbound_transfers';
import type { treasury_financial_accounts_resource_outbound_payments } from './treasury_financial_accounts_resource_outbound_payments';
import type { treasury_financial_accounts_resource_outbound_transfers } from './treasury_financial_accounts_resource_outbound_transfers';
import type { treasury_financial_accounts_resource_toggle_settings } from './treasury_financial_accounts_resource_toggle_settings';
/**
 * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
 * Stripe or the platform can control Features via the requested field.
 */
export type treasury_financial_account_features = {
    card_issuing?: treasury_financial_accounts_resource_toggle_settings;
    deposit_insurance?: treasury_financial_accounts_resource_toggle_settings;
    financial_addresses?: treasury_financial_accounts_resource_financial_addresses_features;
    inbound_transfers?: treasury_financial_accounts_resource_inbound_transfers;
    intra_stripe_flows?: treasury_financial_accounts_resource_toggle_settings;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_financial_account_features.object;
    outbound_payments?: treasury_financial_accounts_resource_outbound_payments;
    outbound_transfers?: treasury_financial_accounts_resource_outbound_transfers;
};
export namespace treasury_financial_account_features {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_FINANCIAL_ACCOUNT_FEATURES = 'treasury.financial_account_features',
    }
}

