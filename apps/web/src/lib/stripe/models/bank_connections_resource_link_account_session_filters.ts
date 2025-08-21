/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type bank_connections_resource_link_account_session_filters = {
    /**
     * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
     */
    account_subcategories?: Array<'checking' | 'credit_card' | 'line_of_credit' | 'mortgage' | 'savings'> | null;
    /**
     * List of countries from which to filter accounts.
     */
    countries?: Array<string> | null;
};

