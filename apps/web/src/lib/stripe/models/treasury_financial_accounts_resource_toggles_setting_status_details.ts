/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Additional details on the FinancialAccount Features information.
 */
export type treasury_financial_accounts_resource_toggles_setting_status_details = {
    /**
     * Represents the reason why the status is `pending` or `restricted`.
     */
    code: treasury_financial_accounts_resource_toggles_setting_status_details.code;
    /**
     * Represents what the user should do, if anything, to activate the Feature.
     */
    resolution?: treasury_financial_accounts_resource_toggles_setting_status_details.resolution | null;
    /**
     * The `platform_restrictions` that are restricting this Feature.
     */
    restriction?: treasury_financial_accounts_resource_toggles_setting_status_details.restriction;
};
export namespace treasury_financial_accounts_resource_toggles_setting_status_details {
    /**
     * Represents the reason why the status is `pending` or `restricted`.
     */
    export enum code {
        ACTIVATING = 'activating',
        CAPABILITY_NOT_REQUESTED = 'capability_not_requested',
        FINANCIAL_ACCOUNT_CLOSED = 'financial_account_closed',
        REJECTED_OTHER = 'rejected_other',
        REJECTED_UNSUPPORTED_BUSINESS = 'rejected_unsupported_business',
        REQUIREMENTS_PAST_DUE = 'requirements_past_due',
        REQUIREMENTS_PENDING_VERIFICATION = 'requirements_pending_verification',
        RESTRICTED_BY_PLATFORM = 'restricted_by_platform',
        RESTRICTED_OTHER = 'restricted_other',
    }
    /**
     * Represents what the user should do, if anything, to activate the Feature.
     */
    export enum resolution {
        CONTACT_STRIPE = 'contact_stripe',
        PROVIDE_INFORMATION = 'provide_information',
        REMOVE_RESTRICTION = 'remove_restriction',
    }
    /**
     * The `platform_restrictions` that are restricting this Feature.
     */
    export enum restriction {
        INBOUND_FLOWS = 'inbound_flows',
        OUTBOUND_FLOWS = 'outbound_flows',
    }
}

