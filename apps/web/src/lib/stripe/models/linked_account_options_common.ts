/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_flows_private_payment_methods_financial_connections_common_linked_account_options_filters } from './payment_flows_private_payment_methods_financial_connections_common_linked_account_options_filters';
export type linked_account_options_common = {
    filters?: payment_flows_private_payment_methods_financial_connections_common_linked_account_options_filters;
    /**
     * The list of permissions to request. The `payment_method` permission must be included.
     */
    permissions?: Array<'balances' | 'ownership' | 'payment_method' | 'transactions'>;
    /**
     * Data features requested to be retrieved upon account creation.
     */
    prefetch?: Array<'balances' | 'ownership' | 'transactions'> | null;
    /**
     * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
     */
    return_url?: string;
};

