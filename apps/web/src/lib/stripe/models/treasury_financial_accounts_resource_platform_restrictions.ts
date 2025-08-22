/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Restrictions that a Connect Platform has placed on this FinancialAccount.
 */
export type treasury_financial_accounts_resource_platform_restrictions = {
    /**
     * Restricts all inbound money movement.
     */
    inbound_flows?: treasury_financial_accounts_resource_platform_restrictions.inbound_flows | null;
    /**
     * Restricts all outbound money movement.
     */
    outbound_flows?: treasury_financial_accounts_resource_platform_restrictions.outbound_flows | null;
};
export namespace treasury_financial_accounts_resource_platform_restrictions {
    /**
     * Restricts all inbound money movement.
     */
    export enum inbound_flows {
        RESTRICTED = 'restricted',
        UNRESTRICTED = 'unrestricted',
    }
    /**
     * Restricts all outbound money movement.
     */
    export enum outbound_flows {
        RESTRICTED = 'restricted',
        UNRESTRICTED = 'unrestricted',
    }
}

