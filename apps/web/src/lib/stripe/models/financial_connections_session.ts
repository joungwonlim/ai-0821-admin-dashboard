/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_connections_resource_accountholder } from './bank_connections_resource_accountholder';
import type { bank_connections_resource_link_account_session_filters } from './bank_connections_resource_link_account_session_filters';
import type { financial_connections_account } from './financial_connections_account';
/**
 * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
 */
export type financial_connections_session = {
    /**
     * The account holder for whom accounts are collected in this session.
     */
    account_holder?: bank_connections_resource_accountholder | null;
    /**
     * The accounts that were collected as part of this Session.
     */
    accounts: {
        /**
         * Details about each object.
         */
        data: Array<financial_connections_account>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: financial_connections_session.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * A value that will be passed to the client to launch the authentication flow.
     */
    client_secret: string;
    filters?: bank_connections_resource_link_account_session_filters;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: financial_connections_session.object;
    /**
     * Permissions requested for accounts collected during this session.
     */
    permissions: Array<'balances' | 'ownership' | 'payment_method' | 'transactions'>;
    /**
     * Data features requested to be retrieved upon account creation.
     */
    prefetch?: Array<'balances' | 'ownership' | 'transactions'> | null;
    /**
     * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
     */
    return_url?: string;
};
export namespace financial_connections_session {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
}

