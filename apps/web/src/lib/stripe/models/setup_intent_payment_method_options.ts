/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_intent_payment_method_options_acss_debit } from './setup_intent_payment_method_options_acss_debit';
import type { setup_intent_payment_method_options_amazon_pay } from './setup_intent_payment_method_options_amazon_pay';
import type { setup_intent_payment_method_options_bacs_debit } from './setup_intent_payment_method_options_bacs_debit';
import type { setup_intent_payment_method_options_card } from './setup_intent_payment_method_options_card';
import type { setup_intent_payment_method_options_card_present } from './setup_intent_payment_method_options_card_present';
import type { setup_intent_payment_method_options_klarna } from './setup_intent_payment_method_options_klarna';
import type { setup_intent_payment_method_options_link } from './setup_intent_payment_method_options_link';
import type { setup_intent_payment_method_options_paypal } from './setup_intent_payment_method_options_paypal';
import type { setup_intent_payment_method_options_sepa_debit } from './setup_intent_payment_method_options_sepa_debit';
import type { setup_intent_payment_method_options_us_bank_account } from './setup_intent_payment_method_options_us_bank_account';
import type { setup_intent_type_specific_payment_method_options_client } from './setup_intent_type_specific_payment_method_options_client';
export type setup_intent_payment_method_options = {
    acss_debit?: (setup_intent_payment_method_options_acss_debit | setup_intent_type_specific_payment_method_options_client);
    amazon_pay?: (setup_intent_payment_method_options_amazon_pay | setup_intent_type_specific_payment_method_options_client);
    bacs_debit?: (setup_intent_payment_method_options_bacs_debit | setup_intent_type_specific_payment_method_options_client);
    card?: (setup_intent_payment_method_options_card | setup_intent_type_specific_payment_method_options_client);
    card_present?: (setup_intent_payment_method_options_card_present | setup_intent_type_specific_payment_method_options_client);
    klarna?: (setup_intent_payment_method_options_klarna | setup_intent_type_specific_payment_method_options_client);
    link?: (setup_intent_payment_method_options_link | setup_intent_type_specific_payment_method_options_client);
    paypal?: (setup_intent_payment_method_options_paypal | setup_intent_type_specific_payment_method_options_client);
    sepa_debit?: (setup_intent_payment_method_options_sepa_debit | setup_intent_type_specific_payment_method_options_client);
    us_bank_account?: (setup_intent_payment_method_options_us_bank_account | setup_intent_type_specific_payment_method_options_client);
};

