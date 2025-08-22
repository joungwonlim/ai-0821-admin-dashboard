/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { funding_instructions_bank_transfer_aba_record } from './funding_instructions_bank_transfer_aba_record';
import type { funding_instructions_bank_transfer_iban_record } from './funding_instructions_bank_transfer_iban_record';
import type { funding_instructions_bank_transfer_sort_code_record } from './funding_instructions_bank_transfer_sort_code_record';
import type { funding_instructions_bank_transfer_spei_record } from './funding_instructions_bank_transfer_spei_record';
import type { funding_instructions_bank_transfer_swift_record } from './funding_instructions_bank_transfer_swift_record';
import type { funding_instructions_bank_transfer_zengin_record } from './funding_instructions_bank_transfer_zengin_record';
/**
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export type funding_instructions_bank_transfer_financial_address = {
    aba?: funding_instructions_bank_transfer_aba_record;
    iban?: funding_instructions_bank_transfer_iban_record;
    sort_code?: funding_instructions_bank_transfer_sort_code_record;
    spei?: funding_instructions_bank_transfer_spei_record;
    /**
     * The payment networks supported by this FinancialAddress
     */
    supported_networks?: Array<'ach' | 'bacs' | 'domestic_wire_us' | 'fps' | 'sepa' | 'spei' | 'swift' | 'zengin'>;
    swift?: funding_instructions_bank_transfer_swift_record;
    /**
     * The type of financial address
     */
    type: funding_instructions_bank_transfer_financial_address.type;
    zengin?: funding_instructions_bank_transfer_zengin_record;
};
export namespace funding_instructions_bank_transfer_financial_address {
    /**
     * The type of financial address
     */
    export enum type {
        ABA = 'aba',
        IBAN = 'iban',
        SORT_CODE = 'sort_code',
        SPEI = 'spei',
        SWIFT = 'swift',
        ZENGIN = 'zengin',
    }
}

