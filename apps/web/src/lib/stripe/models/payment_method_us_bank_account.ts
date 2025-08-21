/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_us_bank_account_status_details } from './payment_method_us_bank_account_status_details';
import type { us_bank_account_networks } from './us_bank_account_networks';
export type payment_method_us_bank_account = {
    /**
     * Account holder type: individual or company.
     */
    account_holder_type?: payment_method_us_bank_account.account_holder_type | null;
    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    account_type?: payment_method_us_bank_account.account_type | null;
    /**
     * The name of the bank.
     */
    bank_name?: string | null;
    /**
     * The ID of the Financial Connections Account used to create the payment method.
     */
    financial_connections_account?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Last four digits of the bank account number.
     */
    last4?: string | null;
    /**
     * Contains information about US bank account networks that can be used.
     */
    networks?: us_bank_account_networks | null;
    /**
     * Routing number of the bank account.
     */
    routing_number?: string | null;
    /**
     * Contains information about the future reusability of this PaymentMethod.
     */
    status_details?: payment_method_us_bank_account_status_details | null;
};
export namespace payment_method_us_bank_account {
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
}

