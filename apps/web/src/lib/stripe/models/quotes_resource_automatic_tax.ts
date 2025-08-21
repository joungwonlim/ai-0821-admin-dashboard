/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_account_reference } from './connect_account_reference';
export type quotes_resource_automatic_tax = {
    /**
     * Automatically calculate taxes
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
     * The status of the most recent automated tax calculation for this quote.
     */
    status?: quotes_resource_automatic_tax.status | null;
};
export namespace quotes_resource_automatic_tax {
    /**
     * The status of the most recent automated tax calculation for this quote.
     */
    export enum status {
        COMPLETE = 'complete',
        FAILED = 'failed',
        REQUIRES_LOCATION_INPUTS = 'requires_location_inputs',
    }
}

