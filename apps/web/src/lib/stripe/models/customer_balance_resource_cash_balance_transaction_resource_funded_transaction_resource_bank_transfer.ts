/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_eu_bank_transfer } from './customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_eu_bank_transfer';
import type { customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_gb_bank_transfer } from './customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_gb_bank_transfer';
import type { customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_jp_bank_transfer } from './customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_jp_bank_transfer';
import type { customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer } from './customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer';
export type customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer = {
    eu_bank_transfer?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_eu_bank_transfer;
    gb_bank_transfer?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_gb_bank_transfer;
    jp_bank_transfer?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_jp_bank_transfer;
    /**
     * The user-supplied reference field on the bank transfer.
     */
    reference?: string | null;
    /**
     * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    type: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer.type;
    us_bank_transfer?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer;
};
export namespace customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer {
    /**
     * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    export enum type {
        EU_BANK_TRANSFER = 'eu_bank_transfer',
        GB_BANK_TRANSFER = 'gb_bank_transfer',
        JP_BANK_TRANSFER = 'jp_bank_transfer',
        MX_BANK_TRANSFER = 'mx_bank_transfer',
        US_BANK_TRANSFER = 'us_bank_transfer',
    }
}

