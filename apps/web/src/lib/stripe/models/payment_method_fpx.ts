/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_fpx = {
    /**
     * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
     */
    bank: payment_method_fpx.bank;
};
export namespace payment_method_fpx {
    /**
     * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
     */
    export enum bank {
        AFFIN_BANK = 'affin_bank',
        AGROBANK = 'agrobank',
        ALLIANCE_BANK = 'alliance_bank',
        AMBANK = 'ambank',
        BANK_ISLAM = 'bank_islam',
        BANK_MUAMALAT = 'bank_muamalat',
        BANK_OF_CHINA = 'bank_of_china',
        BANK_RAKYAT = 'bank_rakyat',
        BSN = 'bsn',
        CIMB = 'cimb',
        DEUTSCHE_BANK = 'deutsche_bank',
        HONG_LEONG_BANK = 'hong_leong_bank',
        HSBC = 'hsbc',
        KFH = 'kfh',
        MAYBANK2E = 'maybank2e',
        MAYBANK2U = 'maybank2u',
        OCBC = 'ocbc',
        PB_ENTERPRISE = 'pb_enterprise',
        PUBLIC_BANK = 'public_bank',
        RHB = 'rhb',
        STANDARD_CHARTERED = 'standard_chartered',
        UOB = 'uob',
    }
}

