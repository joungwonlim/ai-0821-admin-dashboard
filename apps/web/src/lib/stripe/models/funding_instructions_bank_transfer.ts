/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { funding_instructions_bank_transfer_financial_address } from './funding_instructions_bank_transfer_financial_address';
export type funding_instructions_bank_transfer = {
    /**
     * The country of the bank account to fund
     */
    country: string;
    /**
     * A list of financial addresses that can be used to fund a particular balance
     */
    financial_addresses: Array<funding_instructions_bank_transfer_financial_address>;
    /**
     * The bank_transfer type
     */
    type: funding_instructions_bank_transfer.type;
};
export namespace funding_instructions_bank_transfer {
    /**
     * The bank_transfer type
     */
    export enum type {
        EU_BANK_TRANSFER = 'eu_bank_transfer',
        JP_BANK_TRANSFER = 'jp_bank_transfer',
    }
}

