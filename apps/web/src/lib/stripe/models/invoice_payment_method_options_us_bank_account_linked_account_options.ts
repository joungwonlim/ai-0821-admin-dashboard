/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_us_bank_account_linked_account_options_filters } from './invoice_payment_method_options_us_bank_account_linked_account_options_filters';
export type invoice_payment_method_options_us_bank_account_linked_account_options = {
    filters?: invoice_payment_method_options_us_bank_account_linked_account_options_filters;
    /**
     * The list of permissions to request. The `payment_method` permission must be included.
     */
    permissions?: Array<'balances' | 'ownership' | 'payment_method' | 'transactions'>;
    /**
     * Data features requested to be retrieved upon account creation.
     */
    prefetch?: Array<'balances' | 'ownership' | 'transactions'> | null;
};

