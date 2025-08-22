/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_ideal = {
    /**
     * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `buut`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
     */
    bank?: payment_method_ideal.bank | null;
    /**
     * The Bank Identifier Code of the customer's bank, if the bank was provided.
     */
    bic?: payment_method_ideal.bic | null;
};
export namespace payment_method_ideal {
    /**
     * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `buut`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
     */
    export enum bank {
        ABN_AMRO = 'abn_amro',
        ASN_BANK = 'asn_bank',
        BUNQ = 'bunq',
        BUUT = 'buut',
        HANDELSBANKEN = 'handelsbanken',
        ING = 'ing',
        KNAB = 'knab',
        MONEYOU = 'moneyou',
        N26 = 'n26',
        NN = 'nn',
        RABOBANK = 'rabobank',
        REGIOBANK = 'regiobank',
        REVOLUT = 'revolut',
        SNS_BANK = 'sns_bank',
        TRIODOS_BANK = 'triodos_bank',
        VAN_LANSCHOT = 'van_lanschot',
        YOURSAFE = 'yoursafe',
    }
    /**
     * The Bank Identifier Code of the customer's bank, if the bank was provided.
     */
    export enum bic {
        ABNANL2A = 'ABNANL2A',
        ASNBNL21 = 'ASNBNL21',
        BITSNL2A = 'BITSNL2A',
        BUNQNL2A = 'BUNQNL2A',
        BUUTNL2A = 'BUUTNL2A',
        FVLBNL22 = 'FVLBNL22',
        HANDNL2A = 'HANDNL2A',
        INGBNL2A = 'INGBNL2A',
        KNABNL2H = 'KNABNL2H',
        MOYONL21 = 'MOYONL21',
        NNBANL2G = 'NNBANL2G',
        NTSBDEB1 = 'NTSBDEB1',
        RABONL2U = 'RABONL2U',
        RBRBNL21 = 'RBRBNL21',
        REVOIE23 = 'REVOIE23',
        REVOLT21 = 'REVOLT21',
        SNSBNL2A = 'SNSBNL2A',
        TRIONL2U = 'TRIONL2U',
    }
}

