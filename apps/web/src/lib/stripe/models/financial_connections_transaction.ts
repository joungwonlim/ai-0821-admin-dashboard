/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_connections_resource_transaction_resource_status_transitions } from './bank_connections_resource_transaction_resource_status_transitions';
/**
 * A Transaction represents a real transaction that affects a Financial Connections Account balance.
 */
export type financial_connections_transaction = {
    /**
     * The ID of the Financial Connections Account this transaction belongs to.
     */
    account: string;
    /**
     * The amount of this transaction, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The description of this transaction.
     */
    description: string;
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
    object: financial_connections_transaction.object;
    /**
     * The status of the transaction.
     */
    status: financial_connections_transaction.status;
    status_transitions: bank_connections_resource_transaction_resource_status_transitions;
    /**
     * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
     */
    transacted_at: number;
    /**
     * The token of the transaction refresh that last updated or created this transaction.
     */
    transaction_refresh: string;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
};
export namespace financial_connections_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FINANCIAL_CONNECTIONS_TRANSACTION = 'financial_connections.transaction',
    }
    /**
     * The status of the transaction.
     */
    export enum status {
        PENDING = 'pending',
        POSTED = 'posted',
        VOID = 'void',
    }
}

