/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_account_reference } from './connect_account_reference';
export type payment_links_resource_automatic_tax = {
    /**
     * If `true`, tax will be calculated automatically using the customer's location.
     */
    enabled: boolean;
    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability?: connect_account_reference | null;
};

