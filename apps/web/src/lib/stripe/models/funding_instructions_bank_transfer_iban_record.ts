/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * Iban Records contain E.U. bank account details per the SEPA format.
 */
export type funding_instructions_bank_transfer_iban_record = {
    account_holder_address: address;
    /**
     * The name of the person or business that owns the bank account
     */
    account_holder_name: string;
    bank_address: address;
    /**
     * The BIC/SWIFT code of the account.
     */
    bic: string;
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;
    /**
     * The IBAN of the account.
     */
    iban: string;
};

