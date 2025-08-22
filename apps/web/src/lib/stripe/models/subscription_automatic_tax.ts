/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_account_reference } from './connect_account_reference';
export type subscription_automatic_tax = {
    /**
     * If Stripe disabled automatic tax, this enum describes why.
     */
    disabled_reason?: subscription_automatic_tax.disabled_reason | null;
    /**
     * Whether Stripe automatically computes tax on this subscription.
     */
    enabled: boolean;
    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability?: connect_account_reference | null;
};
export namespace subscription_automatic_tax {
    /**
     * If Stripe disabled automatic tax, this enum describes why.
     */
    export enum disabled_reason {
        REQUIRES_LOCATION_INPUTS = 'requires_location_inputs',
    }
}

