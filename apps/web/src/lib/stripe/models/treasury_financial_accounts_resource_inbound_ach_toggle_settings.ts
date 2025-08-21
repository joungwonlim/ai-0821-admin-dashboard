/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_financial_accounts_resource_toggles_setting_status_details } from './treasury_financial_accounts_resource_toggles_setting_status_details';
/**
 * Toggle settings for enabling/disabling an inbound ACH specific feature
 */
export type treasury_financial_accounts_resource_inbound_ach_toggle_settings = {
    /**
     * Whether the FinancialAccount should have the Feature.
     */
    requested: boolean;
    /**
     * Whether the Feature is operational.
     */
    status: treasury_financial_accounts_resource_inbound_ach_toggle_settings.status;
    /**
     * Additional details; includes at least one entry when the status is not `active`.
     */
    status_details: Array<treasury_financial_accounts_resource_toggles_setting_status_details>;
};
export namespace treasury_financial_accounts_resource_inbound_ach_toggle_settings {
    /**
     * Whether the Feature is operational.
     */
    export enum status {
        ACTIVE = 'active',
        PENDING = 'pending',
        RESTRICTED = 'restricted',
    }
}

