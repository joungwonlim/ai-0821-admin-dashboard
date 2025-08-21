/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_attempt_payment_method_details_acss_debit } from './setup_attempt_payment_method_details_acss_debit';
import type { setup_attempt_payment_method_details_amazon_pay } from './setup_attempt_payment_method_details_amazon_pay';
import type { setup_attempt_payment_method_details_au_becs_debit } from './setup_attempt_payment_method_details_au_becs_debit';
import type { setup_attempt_payment_method_details_bacs_debit } from './setup_attempt_payment_method_details_bacs_debit';
import type { setup_attempt_payment_method_details_bancontact } from './setup_attempt_payment_method_details_bancontact';
import type { setup_attempt_payment_method_details_boleto } from './setup_attempt_payment_method_details_boleto';
import type { setup_attempt_payment_method_details_card } from './setup_attempt_payment_method_details_card';
import type { setup_attempt_payment_method_details_card_present } from './setup_attempt_payment_method_details_card_present';
import type { setup_attempt_payment_method_details_cashapp } from './setup_attempt_payment_method_details_cashapp';
import type { setup_attempt_payment_method_details_ideal } from './setup_attempt_payment_method_details_ideal';
import type { setup_attempt_payment_method_details_kakao_pay } from './setup_attempt_payment_method_details_kakao_pay';
import type { setup_attempt_payment_method_details_klarna } from './setup_attempt_payment_method_details_klarna';
import type { setup_attempt_payment_method_details_kr_card } from './setup_attempt_payment_method_details_kr_card';
import type { setup_attempt_payment_method_details_link } from './setup_attempt_payment_method_details_link';
import type { setup_attempt_payment_method_details_naver_pay } from './setup_attempt_payment_method_details_naver_pay';
import type { setup_attempt_payment_method_details_nz_bank_account } from './setup_attempt_payment_method_details_nz_bank_account';
import type { setup_attempt_payment_method_details_paypal } from './setup_attempt_payment_method_details_paypal';
import type { setup_attempt_payment_method_details_revolut_pay } from './setup_attempt_payment_method_details_revolut_pay';
import type { setup_attempt_payment_method_details_sepa_debit } from './setup_attempt_payment_method_details_sepa_debit';
import type { setup_attempt_payment_method_details_sofort } from './setup_attempt_payment_method_details_sofort';
import type { setup_attempt_payment_method_details_us_bank_account } from './setup_attempt_payment_method_details_us_bank_account';
export type setup_attempt_payment_method_details = {
    acss_debit?: setup_attempt_payment_method_details_acss_debit;
    amazon_pay?: setup_attempt_payment_method_details_amazon_pay;
    au_becs_debit?: setup_attempt_payment_method_details_au_becs_debit;
    bacs_debit?: setup_attempt_payment_method_details_bacs_debit;
    bancontact?: setup_attempt_payment_method_details_bancontact;
    boleto?: setup_attempt_payment_method_details_boleto;
    card?: setup_attempt_payment_method_details_card;
    card_present?: setup_attempt_payment_method_details_card_present;
    cashapp?: setup_attempt_payment_method_details_cashapp;
    ideal?: setup_attempt_payment_method_details_ideal;
    kakao_pay?: setup_attempt_payment_method_details_kakao_pay;
    klarna?: setup_attempt_payment_method_details_klarna;
    kr_card?: setup_attempt_payment_method_details_kr_card;
    link?: setup_attempt_payment_method_details_link;
    naver_pay?: setup_attempt_payment_method_details_naver_pay;
    nz_bank_account?: setup_attempt_payment_method_details_nz_bank_account;
    paypal?: setup_attempt_payment_method_details_paypal;
    revolut_pay?: setup_attempt_payment_method_details_revolut_pay;
    sepa_debit?: setup_attempt_payment_method_details_sepa_debit;
    sofort?: setup_attempt_payment_method_details_sofort;
    /**
     * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
     */
    type: string;
    us_bank_account?: setup_attempt_payment_method_details_us_bank_account;
};

