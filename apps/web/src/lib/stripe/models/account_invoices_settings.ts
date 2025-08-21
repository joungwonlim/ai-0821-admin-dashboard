/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_id } from './tax_id';
export type account_invoices_settings = {
    /**
     * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
     */
    default_account_tax_ids?: Array<(string | tax_id)> | null;
    /**
     * Whether payment methods should be saved when a payment is completed for a one-time invoices on a hosted invoice page.
     */
    hosted_payment_method_save?: account_invoices_settings.hosted_payment_method_save | null;
};
export namespace account_invoices_settings {
    /**
     * Whether payment methods should be saved when a payment is completed for a one-time invoices on a hosted invoice page.
     */
    export enum hosted_payment_method_save {
        ALWAYS = 'always',
        NEVER = 'never',
        OFFER = 'offer',
    }
}

