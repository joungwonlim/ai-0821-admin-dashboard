/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mandate } from './mandate';
export type inbound_transfers_payment_method_details_us_bank_account = {
    /**
     * Account holder type: individual or company.
     */
    account_holder_type?: inbound_transfers_payment_method_details_us_bank_account.account_holder_type | null;
    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    account_type?: inbound_transfers_payment_method_details_us_bank_account.account_type | null;
    /**
     * Name of the bank associated with the bank account.
     */
    bank_name?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Last four digits of the bank account number.
     */
    last4?: string | null;
    /**
     * ID of the mandate used to make this payment.
     */
    mandate?: (string | mandate);
    /**
     * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
     */
    network: inbound_transfers_payment_method_details_us_bank_account.network;
    /**
     * Routing number of the bank account.
     */
    routing_number?: string | null;
};
export namespace inbound_transfers_payment_method_details_us_bank_account {
    /**
     * Account holder type: individual or company.
     */
    export enum account_holder_type {
        COMPANY = 'company',
        INDIVIDUAL = 'individual',
    }
    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    export enum account_type {
        CHECKING = 'checking',
        SAVINGS = 'savings',
    }
    /**
     * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
     */
    export enum network {
        ACH = 'ach',
    }
}

