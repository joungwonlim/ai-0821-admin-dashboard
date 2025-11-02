/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export type funding_instructions_bank_transfer_aba_record = {
    account_holder_address: address;
    /**
     * The account holder name
     */
    account_holder_name: string;
    /**
     * The ABA account number
     */
    account_number: string;
    /**
     * The account type
     */
    account_type: string;
    bank_address: address;
    /**
     * The bank name
     */
    bank_name: string;
    /**
     * The ABA routing number
     */
    routing_number: string;
};

