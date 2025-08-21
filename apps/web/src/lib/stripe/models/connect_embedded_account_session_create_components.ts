/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_embedded_account_config_claim } from './connect_embedded_account_config_claim';
import type { connect_embedded_base_config_claim } from './connect_embedded_base_config_claim';
import type { connect_embedded_disputes_list_config } from './connect_embedded_disputes_list_config';
import type { connect_embedded_financial_account_config_claim } from './connect_embedded_financial_account_config_claim';
import type { connect_embedded_financial_account_transactions_config_claim } from './connect_embedded_financial_account_transactions_config_claim';
import type { connect_embedded_instant_payouts_promotion_config } from './connect_embedded_instant_payouts_promotion_config';
import type { connect_embedded_issuing_card_config_claim } from './connect_embedded_issuing_card_config_claim';
import type { connect_embedded_issuing_cards_list_config_claim } from './connect_embedded_issuing_cards_list_config_claim';
import type { connect_embedded_payment_disputes_config } from './connect_embedded_payment_disputes_config';
import type { connect_embedded_payments_config_claim } from './connect_embedded_payments_config_claim';
import type { connect_embedded_payouts_config } from './connect_embedded_payouts_config';
export type connect_embedded_account_session_create_components = {
    account_management: connect_embedded_account_config_claim;
    account_onboarding: connect_embedded_account_config_claim;
    balance_report: connect_embedded_base_config_claim;
    balances: connect_embedded_payouts_config;
    disputes_list: connect_embedded_disputes_list_config;
    documents: connect_embedded_base_config_claim;
    financial_account: connect_embedded_financial_account_config_claim;
    financial_account_transactions: connect_embedded_financial_account_transactions_config_claim;
    instant_payouts_promotion: connect_embedded_instant_payouts_promotion_config;
    issuing_card: connect_embedded_issuing_card_config_claim;
    issuing_cards_list: connect_embedded_issuing_cards_list_config_claim;
    notification_banner: connect_embedded_account_config_claim;
    payment_details: connect_embedded_payments_config_claim;
    payment_disputes: connect_embedded_payment_disputes_config;
    payments: connect_embedded_payments_config_claim;
    payout_details: connect_embedded_base_config_claim;
    payout_reconciliation_report: connect_embedded_base_config_claim;
    payouts: connect_embedded_payouts_config;
    payouts_list: connect_embedded_base_config_claim;
    tax_registrations: connect_embedded_base_config_claim;
    tax_settings: connect_embedded_base_config_claim;
};

