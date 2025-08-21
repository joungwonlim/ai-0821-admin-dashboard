/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_decline_charge_on } from './account_decline_charge_on';
export type account_card_payments_settings = {
    decline_on?: account_decline_charge_on;
    /**
     * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
     */
    statement_descriptor_prefix?: string | null;
    /**
     * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
     */
    statement_descriptor_prefix_kana?: string | null;
    /**
     * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
     */
    statement_descriptor_prefix_kanji?: string | null;
};

