/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * Zengin Records contain Japan bank account details per the Zengin format.
 */
export type funding_instructions_bank_transfer_zengin_record = {
    account_holder_address: address;
    /**
     * The account holder name
     */
    account_holder_name?: string | null;
    /**
     * The account number
     */
    account_number?: string | null;
    /**
     * The bank account type. In Japan, this can only be `futsu` or `toza`.
     */
    account_type?: string | null;
    bank_address: address;
    /**
     * The bank code of the account
     */
    bank_code?: string | null;
    /**
     * The bank name of the account
     */
    bank_name?: string | null;
    /**
     * The branch code of the account
     */
    branch_code?: string | null;
    /**
     * The branch name of the account
     */
    branch_name?: string | null;
};

