/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_financial_accounts_resource_aba_record } from './treasury_financial_accounts_resource_aba_record';
/**
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export type treasury_financial_accounts_resource_financial_address = {
    aba?: treasury_financial_accounts_resource_aba_record;
    /**
     * The list of networks that the address supports
     */
    supported_networks?: Array<'ach' | 'us_domestic_wire'>;
    /**
     * The type of financial address
     */
    type: treasury_financial_accounts_resource_financial_address.type;
};
export namespace treasury_financial_accounts_resource_financial_address {
    /**
     * The type of financial address
     */
    export enum type {
        ABA = 'aba',
    }
}

