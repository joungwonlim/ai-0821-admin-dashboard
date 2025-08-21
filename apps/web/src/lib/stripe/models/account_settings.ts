/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_bacs_debit_payments_settings } from './account_bacs_debit_payments_settings';
import type { account_branding_settings } from './account_branding_settings';
import type { account_card_issuing_settings } from './account_card_issuing_settings';
import type { account_card_payments_settings } from './account_card_payments_settings';
import type { account_dashboard_settings } from './account_dashboard_settings';
import type { account_invoices_settings } from './account_invoices_settings';
import type { account_payments_settings } from './account_payments_settings';
import type { account_payout_settings } from './account_payout_settings';
import type { account_sepa_debit_payments_settings } from './account_sepa_debit_payments_settings';
import type { account_treasury_settings } from './account_treasury_settings';
export type account_settings = {
    bacs_debit_payments?: account_bacs_debit_payments_settings;
    branding: account_branding_settings;
    card_issuing?: account_card_issuing_settings;
    card_payments: account_card_payments_settings;
    dashboard: account_dashboard_settings;
    invoices?: account_invoices_settings;
    payments: account_payments_settings;
    payouts?: account_payout_settings;
    sepa_debit_payments?: account_sepa_debit_payments_settings;
    treasury?: account_treasury_settings;
};

