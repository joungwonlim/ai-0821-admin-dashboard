/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_p24 = {
    /**
     * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
     */
    bank?: payment_method_details_p24.bank | null;
    /**
     * Unique reference for this Przelewy24 payment.
     */
    reference?: string | null;
    /**
     * Owner's verified full name. Values are verified or provided by Przelewy24 directly
     * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     * Przelewy24 rarely provides this information so the attribute is usually empty.
     */
    verified_name?: string | null;
};
export namespace payment_method_details_p24 {
    /**
     * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
     */
    export enum bank {
        ALIOR_BANK = 'alior_bank',
        BANK_MILLENNIUM = 'bank_millennium',
        BANK_NOWY_BFG_SA = 'bank_nowy_bfg_sa',
        BANK_PEKAO_SA = 'bank_pekao_sa',
        BANKI_SPBDZIELCZE = 'banki_spbdzielcze',
        BLIK = 'blik',
        BNP_PARIBAS = 'bnp_paribas',
        BOZ = 'boz',
        CITI_HANDLOWY = 'citi_handlowy',
        CREDIT_AGRICOLE = 'credit_agricole',
        ENVELOBANK = 'envelobank',
        ETRANSFER_POCZTOWY24 = 'etransfer_pocztowy24',
        GETIN_BANK = 'getin_bank',
        IDEABANK = 'ideabank',
        ING = 'ing',
        INTELIGO = 'inteligo',
        MBANK_MTRANSFER = 'mbank_mtransfer',
        NEST_PRZELEW = 'nest_przelew',
        NOBLE_PAY = 'noble_pay',
        PBAC_Z_IPKO = 'pbac_z_ipko',
        PLUS_BANK = 'plus_bank',
        SANTANDER_PRZELEW24 = 'santander_przelew24',
        TMOBILE_USBUGI_BANKOWE = 'tmobile_usbugi_bankowe',
        TOYOTA_BANK = 'toyota_bank',
        VELOBANK = 'velobank',
        VOLKSWAGEN_BANK = 'volkswagen_bank',
    }
}

