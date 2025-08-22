/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_financial_account_features } from './treasury_financial_account_features';
import type { treasury_financial_accounts_resource_balance } from './treasury_financial_accounts_resource_balance';
import type { treasury_financial_accounts_resource_financial_address } from './treasury_financial_accounts_resource_financial_address';
import type { treasury_financial_accounts_resource_platform_restrictions } from './treasury_financial_accounts_resource_platform_restrictions';
import type { treasury_financial_accounts_resource_status_details } from './treasury_financial_accounts_resource_status_details';
/**
 * Stripe Treasury provides users with a container for money called a FinancialAccount that is separate from their Payments balance.
 * FinancialAccounts serve as the source and destination of Treasury’s money movement APIs.
 */
export type treasury_financial_account = {
    /**
     * The array of paths to active Features in the Features hash.
     */
    active_features?: Array<'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture'>;
    balance: treasury_financial_accounts_resource_balance;
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    features?: treasury_financial_account_features;
    /**
     * The set of credentials that resolve to a FinancialAccount.
     */
    financial_addresses: Array<treasury_financial_accounts_resource_financial_address>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    is_default?: boolean;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * The nickname for the FinancialAccount.
     */
    nickname?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_financial_account.object;
    /**
     * The array of paths to pending Features in the Features hash.
     */
    pending_features?: Array<'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture'>;
    /**
     * The set of functionalities that the platform can restrict on the FinancialAccount.
     */
    platform_restrictions?: treasury_financial_accounts_resource_platform_restrictions | null;
    /**
     * The array of paths to restricted Features in the Features hash.
     */
    restricted_features?: Array<'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture'>;
    /**
     * Status of this FinancialAccount.
     */
    status: treasury_financial_account.status;
    status_details: treasury_financial_accounts_resource_status_details;
    /**
     * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
     */
    supported_currencies: Array<string>;
};
export namespace treasury_financial_account {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_FINANCIAL_ACCOUNT = 'treasury.financial_account',
    }
    /**
     * Status of this FinancialAccount.
     */
    export enum status {
        CLOSED = 'closed',
        OPEN = 'open',
    }
}

