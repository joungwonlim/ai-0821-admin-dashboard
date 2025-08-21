/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_customer_balance_bank_transfer_eu_bank_transfer } from './invoice_payment_method_options_customer_balance_bank_transfer_eu_bank_transfer';
export type invoice_payment_method_options_customer_balance_bank_transfer = {
    eu_bank_transfer?: invoice_payment_method_options_customer_balance_bank_transfer_eu_bank_transfer;
    /**
     * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    type?: string | null;
};

