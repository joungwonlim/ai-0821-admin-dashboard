/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer } from './customer';
import type { tax_i_ds_owner } from './tax_i_ds_owner';
import type { tax_id_verification } from './tax_id_verification';
/**
 * You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers) or account.
 * Customer and account tax IDs get displayed on related invoices and credit notes.
 *
 * Related guides: [Customer tax identification numbers](https://stripe.com/docs/billing/taxes/tax-ids), [Account tax IDs](https://stripe.com/docs/invoicing/connect#account-tax-ids)
 */
export type tax_id = {
    /**
     * Two-letter ISO code representing the country of the tax ID.
     */
    country?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * ID of the customer.
     */
    customer?: (string | customer) | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_id.object;
    /**
     * The account or customer the tax ID belongs to.
     */
    owner?: tax_i_ds_owner | null;
    /**
     * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`. Note that some legacy tax IDs have type `unknown`
     */
    type: tax_id.type;
    /**
     * Value of the tax ID.
     */
    value: string;
    /**
     * Tax ID verification information.
     */
    verification?: tax_id_verification | null;
};
export namespace tax_id {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_ID = 'tax_id',
    }
    /**
     * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`. Note that some legacy tax IDs have type `unknown`
     */
    export enum type {
        AD_NRT = 'ad_nrt',
        AE_TRN = 'ae_trn',
        AL_TIN = 'al_tin',
        AM_TIN = 'am_tin',
        AO_TIN = 'ao_tin',
        AR_CUIT = 'ar_cuit',
        AU_ABN = 'au_abn',
        AU_ARN = 'au_arn',
        AW_TIN = 'aw_tin',
        AZ_TIN = 'az_tin',
        BA_TIN = 'ba_tin',
        BB_TIN = 'bb_tin',
        BD_BIN = 'bd_bin',
        BF_IFU = 'bf_ifu',
        BG_UIC = 'bg_uic',
        BH_VAT = 'bh_vat',
        BJ_IFU = 'bj_ifu',
        BO_TIN = 'bo_tin',
        BR_CNPJ = 'br_cnpj',
        BR_CPF = 'br_cpf',
        BS_TIN = 'bs_tin',
        BY_TIN = 'by_tin',
        CA_BN = 'ca_bn',
        CA_GST_HST = 'ca_gst_hst',
        CA_PST_BC = 'ca_pst_bc',
        CA_PST_MB = 'ca_pst_mb',
        CA_PST_SK = 'ca_pst_sk',
        CA_QST = 'ca_qst',
        CD_NIF = 'cd_nif',
        CH_UID = 'ch_uid',
        CH_VAT = 'ch_vat',
        CL_TIN = 'cl_tin',
        CM_NIU = 'cm_niu',
        CN_TIN = 'cn_tin',
        CO_NIT = 'co_nit',
        CR_TIN = 'cr_tin',
        CV_NIF = 'cv_nif',
        DE_STN = 'de_stn',
        DO_RCN = 'do_rcn',
        EC_RUC = 'ec_ruc',
        EG_TIN = 'eg_tin',
        ES_CIF = 'es_cif',
        ET_TIN = 'et_tin',
        EU_OSS_VAT = 'eu_oss_vat',
        EU_VAT = 'eu_vat',
        GB_VAT = 'gb_vat',
        GE_VAT = 'ge_vat',
        GN_NIF = 'gn_nif',
        HK_BR = 'hk_br',
        HR_OIB = 'hr_oib',
        HU_TIN = 'hu_tin',
        ID_NPWP = 'id_npwp',
        IL_VAT = 'il_vat',
        IN_GST = 'in_gst',
        IS_VAT = 'is_vat',
        JP_CN = 'jp_cn',
        JP_RN = 'jp_rn',
        JP_TRN = 'jp_trn',
        KE_PIN = 'ke_pin',
        KG_TIN = 'kg_tin',
        KH_TIN = 'kh_tin',
        KR_BRN = 'kr_brn',
        KZ_BIN = 'kz_bin',
        LA_TIN = 'la_tin',
        LI_UID = 'li_uid',
        LI_VAT = 'li_vat',
        MA_VAT = 'ma_vat',
        MD_VAT = 'md_vat',
        ME_PIB = 'me_pib',
        MK_VAT = 'mk_vat',
        MR_NIF = 'mr_nif',
        MX_RFC = 'mx_rfc',
        MY_FRP = 'my_frp',
        MY_ITN = 'my_itn',
        MY_SST = 'my_sst',
        NG_TIN = 'ng_tin',
        NO_VAT = 'no_vat',
        NO_VOEC = 'no_voec',
        NP_PAN = 'np_pan',
        NZ_GST = 'nz_gst',
        OM_VAT = 'om_vat',
        PE_RUC = 'pe_ruc',
        PH_TIN = 'ph_tin',
        RO_TIN = 'ro_tin',
        RS_PIB = 'rs_pib',
        RU_INN = 'ru_inn',
        RU_KPP = 'ru_kpp',
        SA_VAT = 'sa_vat',
        SG_GST = 'sg_gst',
        SG_UEN = 'sg_uen',
        SI_TIN = 'si_tin',
        SN_NINEA = 'sn_ninea',
        SR_FIN = 'sr_fin',
        SV_NIT = 'sv_nit',
        TH_VAT = 'th_vat',
        TJ_TIN = 'tj_tin',
        TR_TIN = 'tr_tin',
        TW_VAT = 'tw_vat',
        TZ_VAT = 'tz_vat',
        UA_VAT = 'ua_vat',
        UG_TIN = 'ug_tin',
        UNKNOWN = 'unknown',
        US_EIN = 'us_ein',
        UY_RUC = 'uy_ruc',
        UZ_TIN = 'uz_tin',
        UZ_VAT = 'uz_vat',
        VE_RIF = 've_rif',
        VN_TIN = 'vn_tin',
        ZA_VAT = 'za_vat',
        ZM_TIN = 'zm_tin',
        ZW_TIN = 'zw_tin',
    }
}

