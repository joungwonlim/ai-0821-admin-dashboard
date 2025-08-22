/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_acss_debit } from './invoice_payment_method_options_acss_debit';
import type { invoice_payment_method_options_bancontact } from './invoice_payment_method_options_bancontact';
import type { invoice_payment_method_options_card } from './invoice_payment_method_options_card';
import type { invoice_payment_method_options_customer_balance } from './invoice_payment_method_options_customer_balance';
import type { invoice_payment_method_options_konbini } from './invoice_payment_method_options_konbini';
import type { invoice_payment_method_options_sepa_debit } from './invoice_payment_method_options_sepa_debit';
import type { invoice_payment_method_options_us_bank_account } from './invoice_payment_method_options_us_bank_account';
export type invoices_payment_method_options = {
    /**
     * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent.
     */
    acss_debit?: invoice_payment_method_options_acss_debit | null;
    /**
     * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent.
     */
    bancontact?: invoice_payment_method_options_bancontact | null;
    /**
     * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice’s PaymentIntent.
     */
    card?: invoice_payment_method_options_card | null;
    /**
     * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice’s PaymentIntent.
     */
    customer_balance?: invoice_payment_method_options_customer_balance | null;
    /**
     * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice’s PaymentIntent.
     */
    konbini?: invoice_payment_method_options_konbini | null;
    /**
     * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice’s PaymentIntent.
     */
    sepa_debit?: invoice_payment_method_options_sepa_debit | null;
    /**
     * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice’s PaymentIntent.
     */
    us_bank_account?: invoice_payment_method_options_us_bank_account | null;
};

