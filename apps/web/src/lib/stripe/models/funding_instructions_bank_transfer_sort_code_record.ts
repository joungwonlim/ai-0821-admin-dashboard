/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * Sort Code Records contain U.K. bank account details per the sort code format.
 */
export type funding_instructions_bank_transfer_sort_code_record = {
    account_holder_address: address;
    /**
     * The name of the person or business that owns the bank account
     */
    account_holder_name: string;
    /**
     * The account number
     */
    account_number: string;
    bank_address: address;
    /**
     * The six-digit sort code
     */
    sort_code: string;
};

