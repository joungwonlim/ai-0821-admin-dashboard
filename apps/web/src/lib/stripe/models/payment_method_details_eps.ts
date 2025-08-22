/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_eps = {
    /**
     * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
     */
    bank?: payment_method_details_eps.bank | null;
    /**
     * Owner's verified full name. Values are verified or provided by EPS directly
     * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     * EPS rarely provides this information so the attribute is usually empty.
     */
    verified_name?: string | null;
};
export namespace payment_method_details_eps {
    /**
     * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
     */
    export enum bank {
        ARZTE_UND_APOTHEKER_BANK = 'arzte_und_apotheker_bank',
        AUSTRIAN_ANADI_BANK_AG = 'austrian_anadi_bank_ag',
        BANK_AUSTRIA = 'bank_austria',
        BANKHAUS_CARL_SPANGLER = 'bankhaus_carl_spangler',
        BANKHAUS_SCHELHAMMER_UND_SCHATTERA_AG = 'bankhaus_schelhammer_und_schattera_ag',
        BAWAG_PSK_AG = 'bawag_psk_ag',
        BKS_BANK_AG = 'bks_bank_ag',
        BRULL_KALLMUS_BANK_AG = 'brull_kallmus_bank_ag',
        BTV_VIER_LANDER_BANK = 'btv_vier_lander_bank',
        CAPITAL_BANK_GRAWE_GRUPPE_AG = 'capital_bank_grawe_gruppe_ag',
        DEUTSCHE_BANK_AG = 'deutsche_bank_ag',
        DOLOMITENBANK = 'dolomitenbank',
        EASYBANK_AG = 'easybank_ag',
        ERSTE_BANK_UND_SPARKASSEN = 'erste_bank_und_sparkassen',
        HYPO_ALPEADRIABANK_INTERNATIONAL_AG = 'hypo_alpeadriabank_international_ag',
        HYPO_BANK_BURGENLAND_AKTIENGESELLSCHAFT = 'hypo_bank_burgenland_aktiengesellschaft',
        HYPO_NOE_LB_FUR_NIEDEROSTERREICH_U_WIEN = 'hypo_noe_lb_fur_niederosterreich_u_wien',
        HYPO_OBEROSTERREICH_SALZBURG_STEIERMARK = 'hypo_oberosterreich_salzburg_steiermark',
        HYPO_TIROL_BANK_AG = 'hypo_tirol_bank_ag',
        HYPO_VORARLBERG_BANK_AG = 'hypo_vorarlberg_bank_ag',
        MARCHFELDER_BANK = 'marchfelder_bank',
        OBERBANK_AG = 'oberbank_ag',
        RAIFFEISEN_BANKENGRUPPE_OSTERREICH = 'raiffeisen_bankengruppe_osterreich',
        SCHOELLERBANK_AG = 'schoellerbank_ag',
        SPARDA_BANK_WIEN = 'sparda_bank_wien',
        VOLKSBANK_GRUPPE = 'volksbank_gruppe',
        VOLKSKREDITBANK_AG = 'volkskreditbank_ag',
        VR_BANK_BRAUNAU = 'vr_bank_braunau',
    }
}

