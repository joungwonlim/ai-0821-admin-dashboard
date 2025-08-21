/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * SWIFT Records contain U.S. bank account details per the SWIFT format.
 */
export type funding_instructions_bank_transfer_swift_record = {
    account_holder_address: address;
    /**
     * The account holder name
     */
    account_holder_name: string;
    /**
     * The account number
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
     * The SWIFT code
     */
    swift_code: string;
};

