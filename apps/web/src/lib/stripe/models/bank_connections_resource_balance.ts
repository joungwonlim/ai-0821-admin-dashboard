/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_connections_resource_balance_api_resource_cash_balance } from './bank_connections_resource_balance_api_resource_cash_balance';
import type { bank_connections_resource_balance_api_resource_credit_balance } from './bank_connections_resource_balance_api_resource_credit_balance';
export type bank_connections_resource_balance = {
    /**
     * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
     */
    as_of: number;
    cash?: bank_connections_resource_balance_api_resource_cash_balance;
    credit?: bank_connections_resource_balance_api_resource_credit_balance;
    /**
     * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.
     *
     * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
     *
     * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
     */
    current: Record<string, number>;
    /**
     * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
     */
    type: bank_connections_resource_balance.type;
};
export namespace bank_connections_resource_balance {
    /**
     * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
     */
    export enum type {
        CASH = 'cash',
        CREDIT = 'credit',
    }
}

