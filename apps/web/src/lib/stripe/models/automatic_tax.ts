/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_account_reference } from './connect_account_reference';
export type automatic_tax = {
    /**
     * If Stripe disabled automatic tax, this enum describes why.
     */
    disabled_reason?: automatic_tax.disabled_reason | null;
    /**
     * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
     */
    enabled: boolean;
    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability?: connect_account_reference | null;
    /**
     * The tax provider powering automatic tax.
     */
    provider?: string | null;
    /**
     * The status of the most recent automated tax calculation for this invoice.
     */
    status?: automatic_tax.status | null;
};
export namespace automatic_tax {
    /**
     * If Stripe disabled automatic tax, this enum describes why.
     */
    export enum disabled_reason {
        FINALIZATION_REQUIRES_LOCATION_INPUTS = 'finalization_requires_location_inputs',
        FINALIZATION_SYSTEM_ERROR = 'finalization_system_error',
    }
    /**
     * The status of the most recent automated tax calculation for this invoice.
     */
    export enum status {
        COMPLETE = 'complete',
        FAILED = 'failed',
        REQUIRES_LOCATION_INPUTS = 'requires_location_inputs',
    }
}

