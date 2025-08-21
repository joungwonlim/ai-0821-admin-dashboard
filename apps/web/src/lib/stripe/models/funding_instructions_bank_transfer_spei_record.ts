/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * SPEI Records contain Mexico bank account details per the SPEI format.
 */
export type funding_instructions_bank_transfer_spei_record = {
    account_holder_address: address;
    /**
     * The account holder name
     */
    account_holder_name: string;
    bank_address: address;
    /**
     * The three-digit bank code
     */
    bank_code: string;
    /**
     * The short banking institution name
     */
    bank_name: string;
    /**
     * The CLABE number
     */
    clabe: string;
};

