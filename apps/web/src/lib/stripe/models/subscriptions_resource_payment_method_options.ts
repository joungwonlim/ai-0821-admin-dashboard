/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_acss_debit } from './invoice_payment_method_options_acss_debit';
import type { invoice_payment_method_options_bancontact } from './invoice_payment_method_options_bancontact';
import type { invoice_payment_method_options_customer_balance } from './invoice_payment_method_options_customer_balance';
import type { invoice_payment_method_options_konbini } from './invoice_payment_method_options_konbini';
import type { invoice_payment_method_options_sepa_debit } from './invoice_payment_method_options_sepa_debit';
import type { invoice_payment_method_options_us_bank_account } from './invoice_payment_method_options_us_bank_account';
import type { subscription_payment_method_options_card } from './subscription_payment_method_options_card';
export type subscriptions_resource_payment_method_options = {
    /**
     * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to invoices created by the subscription.
     */
    acss_debit?: invoice_payment_method_options_acss_debit | null;
    /**
     * This sub-hash contains details about the Bancontact payment method options to pass to invoices created by the subscription.
     */
    bancontact?: invoice_payment_method_options_bancontact | null;
    /**
     * This sub-hash contains details about the Card payment method options to pass to invoices created by the subscription.
     */
    card?: subscription_payment_method_options_card | null;
    /**
     * This sub-hash contains details about the Bank transfer payment method options to pass to invoices created by the subscription.
     */
    customer_balance?: invoice_payment_method_options_customer_balance | null;
    /**
     * This sub-hash contains details about the Konbini payment method options to pass to invoices created by the subscription.
     */
    konbini?: invoice_payment_method_options_konbini | null;
    /**
     * This sub-hash contains details about the SEPA Direct Debit payment method options to pass to invoices created by the subscription.
     */
    sepa_debit?: invoice_payment_method_options_sepa_debit | null;
    /**
     * This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription.
     */
    us_bank_account?: invoice_payment_method_options_us_bank_account | null;
};

