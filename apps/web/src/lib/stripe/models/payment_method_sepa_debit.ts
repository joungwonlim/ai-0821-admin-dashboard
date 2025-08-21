/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { sepa_debit_generated_from } from './sepa_debit_generated_from';
export type payment_method_sepa_debit = {
    /**
     * Bank code of bank associated with the bank account.
     */
    bank_code?: string | null;
    /**
     * Branch code of bank associated with the bank account.
     */
    branch_code?: string | null;
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Information about the object that generated this PaymentMethod.
     */
    generated_from?: sepa_debit_generated_from | null;
    /**
     * Last four characters of the IBAN.
     */
    last4?: string | null;
};

