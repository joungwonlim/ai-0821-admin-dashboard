/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_connections_resource_accountholder } from './bank_connections_resource_accountholder';
import type { bank_connections_resource_balance } from './bank_connections_resource_balance';
import type { bank_connections_resource_balance_refresh } from './bank_connections_resource_balance_refresh';
import type { bank_connections_resource_ownership_refresh } from './bank_connections_resource_ownership_refresh';
import type { bank_connections_resource_transaction_refresh } from './bank_connections_resource_transaction_refresh';
import type { financial_connections_account_ownership } from './financial_connections_account_ownership';
/**
 * A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access.
 */
export type financial_connections_account = {
    /**
     * The account holder that this account belongs to.
     */
    account_holder?: bank_connections_resource_accountholder | null;
    /**
     * The most recent information about the account's balance.
     */
    balance?: bank_connections_resource_balance | null;
    /**
     * The state of the most recent attempt to refresh the account balance.
     */
    balance_refresh?: bank_connections_resource_balance_refresh | null;
    /**
     * The type of the account. Account category is further divided in `subcategory`.
     */
    category: financial_connections_account.category;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
     */
    display_name?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The name of the institution that holds this account.
     */
    institution_name: string;
    /**
     * The last 4 digits of the account number. If present, this will be 4 numeric characters.
     */
    last4?: string | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: financial_connections_account.object;
    /**
     * The most recent information about the account's owners.
     */
    ownership?: (string | financial_connections_account_ownership) | null;
    /**
     * The state of the most recent attempt to refresh the account owners.
     */
    ownership_refresh?: bank_connections_resource_ownership_refresh | null;
    /**
     * The list of permissions granted by this account.
     */
    permissions?: Array<'balances' | 'ownership' | 'payment_method' | 'transactions'> | null;
    /**
     * The status of the link to the account.
     */
    status: financial_connections_account.status;
    /**
     * If `category` is `cash`, one of:
     *
     * - `checking`
     * - `savings`
     * - `other`
     *
     * If `category` is `credit`, one of:
     *
     * - `mortgage`
     * - `line_of_credit`
     * - `credit_card`
     * - `other`
     *
     * If `category` is `investment` or `other`, this will be `other`.
     */
    subcategory: financial_connections_account.subcategory;
    /**
     * The list of data refresh subscriptions requested on this account.
     */
    subscriptions?: Array<'transactions'> | null;
    /**
     * The [PaymentMethod type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
     */
    supported_payment_method_types: Array<'link' | 'us_bank_account'>;
    /**
     * The state of the most recent attempt to refresh the account transactions.
     */
    transaction_refresh?: bank_connections_resource_transaction_refresh | null;
};
export namespace financial_connections_account {
    /**
     * The type of the account. Account category is further divided in `subcategory`.
     */
    export enum category {
        CASH = 'cash',
        CREDIT = 'credit',
        INVESTMENT = 'investment',
        OTHER = 'other',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FINANCIAL_CONNECTIONS_ACCOUNT = 'financial_connections.account',
    }
    /**
     * The status of the link to the account.
     */
    export enum status {
        ACTIVE = 'active',
        DISCONNECTED = 'disconnected',
        INACTIVE = 'inactive',
    }
    /**
     * If `category` is `cash`, one of:
     *
     * - `checking`
     * - `savings`
     * - `other`
     *
     * If `category` is `credit`, one of:
     *
     * - `mortgage`
     * - `line_of_credit`
     * - `credit_card`
     * - `other`
     *
     * If `category` is `investment` or `other`, this will be `other`.
     */
    export enum subcategory {
        CHECKING = 'checking',
        CREDIT_CARD = 'credit_card',
        LINE_OF_CREDIT = 'line_of_credit',
        MORTGAGE = 'mortgage',
        OTHER = 'other',
        SAVINGS = 'savings',
    }
}

