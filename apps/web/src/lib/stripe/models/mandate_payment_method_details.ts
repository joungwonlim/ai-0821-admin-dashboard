/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card_mandate_payment_method_details } from './card_mandate_payment_method_details';
import type { mandate_acss_debit } from './mandate_acss_debit';
import type { mandate_amazon_pay } from './mandate_amazon_pay';
import type { mandate_au_becs_debit } from './mandate_au_becs_debit';
import type { mandate_bacs_debit } from './mandate_bacs_debit';
import type { mandate_cashapp } from './mandate_cashapp';
import type { mandate_kakao_pay } from './mandate_kakao_pay';
import type { mandate_klarna } from './mandate_klarna';
import type { mandate_kr_card } from './mandate_kr_card';
import type { mandate_link } from './mandate_link';
import type { mandate_naver_pay } from './mandate_naver_pay';
import type { mandate_nz_bank_account } from './mandate_nz_bank_account';
import type { mandate_paypal } from './mandate_paypal';
import type { mandate_revolut_pay } from './mandate_revolut_pay';
import type { mandate_sepa_debit } from './mandate_sepa_debit';
import type { mandate_us_bank_account } from './mandate_us_bank_account';
export type mandate_payment_method_details = {
    acss_debit?: mandate_acss_debit;
    amazon_pay?: mandate_amazon_pay;
    au_becs_debit?: mandate_au_becs_debit;
    bacs_debit?: mandate_bacs_debit;
    card?: card_mandate_payment_method_details;
    cashapp?: mandate_cashapp;
    kakao_pay?: mandate_kakao_pay;
    klarna?: mandate_klarna;
    kr_card?: mandate_kr_card;
    link?: mandate_link;
    naver_pay?: mandate_naver_pay;
    nz_bank_account?: mandate_nz_bank_account;
    paypal?: mandate_paypal;
    revolut_pay?: mandate_revolut_pay;
    sepa_debit?: mandate_sepa_debit;
    /**
     * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
     */
    type: string;
    us_bank_account?: mandate_us_bank_account;
};

