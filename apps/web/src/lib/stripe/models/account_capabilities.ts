/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_capabilities = {
    /**
     * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
     */
    acss_debit_payments?: account_capabilities.acss_debit_payments;
    /**
     * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
     */
    affirm_payments?: account_capabilities.affirm_payments;
    /**
     * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
     */
    afterpay_clearpay_payments?: account_capabilities.afterpay_clearpay_payments;
    /**
     * The status of the Alma capability of the account, or whether the account can directly process Alma payments.
     */
    alma_payments?: account_capabilities.alma_payments;
    /**
     * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
     */
    amazon_pay_payments?: account_capabilities.amazon_pay_payments;
    /**
     * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
     */
    au_becs_debit_payments?: account_capabilities.au_becs_debit_payments;
    /**
     * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
     */
    bacs_debit_payments?: account_capabilities.bacs_debit_payments;
    /**
     * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
     */
    bancontact_payments?: account_capabilities.bancontact_payments;
    /**
     * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
     */
    bank_transfer_payments?: account_capabilities.bank_transfer_payments;
    /**
     * The status of the Billie capability of the account, or whether the account can directly process Billie payments.
     */
    billie_payments?: account_capabilities.billie_payments;
    /**
     * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
     */
    blik_payments?: account_capabilities.blik_payments;
    /**
     * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
     */
    boleto_payments?: account_capabilities.boleto_payments;
    /**
     * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
     */
    card_issuing?: account_capabilities.card_issuing;
    /**
     * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
     */
    card_payments?: account_capabilities.card_payments;
    /**
     * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
     */
    cartes_bancaires_payments?: account_capabilities.cartes_bancaires_payments;
    /**
     * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
     */
    cashapp_payments?: account_capabilities.cashapp_payments;
    /**
     * The status of the Crypto capability of the account, or whether the account can directly process Crypto payments.
     */
    crypto_payments?: account_capabilities.crypto_payments;
    /**
     * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
     */
    eps_payments?: account_capabilities.eps_payments;
    /**
     * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
     */
    fpx_payments?: account_capabilities.fpx_payments;
    /**
     * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
     */
    gb_bank_transfer_payments?: account_capabilities.gb_bank_transfer_payments;
    /**
     * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
     */
    giropay_payments?: account_capabilities.giropay_payments;
    /**
     * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
     */
    grabpay_payments?: account_capabilities.grabpay_payments;
    /**
     * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
     */
    ideal_payments?: account_capabilities.ideal_payments;
    /**
     * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
     */
    india_international_payments?: account_capabilities.india_international_payments;
    /**
     * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
     */
    jcb_payments?: account_capabilities.jcb_payments;
    /**
     * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
     */
    jp_bank_transfer_payments?: account_capabilities.jp_bank_transfer_payments;
    /**
     * The status of the KakaoPay capability of the account, or whether the account can directly process KakaoPay payments.
     */
    kakao_pay_payments?: account_capabilities.kakao_pay_payments;
    /**
     * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
     */
    klarna_payments?: account_capabilities.klarna_payments;
    /**
     * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
     */
    konbini_payments?: account_capabilities.konbini_payments;
    /**
     * The status of the KrCard capability of the account, or whether the account can directly process KrCard payments.
     */
    kr_card_payments?: account_capabilities.kr_card_payments;
    /**
     * The status of the legacy payments capability of the account.
     */
    legacy_payments?: account_capabilities.legacy_payments;
    /**
     * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
     */
    link_payments?: account_capabilities.link_payments;
    /**
     * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
     */
    mobilepay_payments?: account_capabilities.mobilepay_payments;
    /**
     * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
     */
    multibanco_payments?: account_capabilities.multibanco_payments;
    /**
     * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
     */
    mx_bank_transfer_payments?: account_capabilities.mx_bank_transfer_payments;
    /**
     * The status of the NaverPay capability of the account, or whether the account can directly process NaverPay payments.
     */
    naver_pay_payments?: account_capabilities.naver_pay_payments;
    /**
     * The status of the New Zealand BECS Direct Debit payments capability of the account, or whether the account can directly process New Zealand BECS Direct Debit charges.
     */
    nz_bank_account_becs_debit_payments?: account_capabilities.nz_bank_account_becs_debit_payments;
    /**
     * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
     */
    oxxo_payments?: account_capabilities.oxxo_payments;
    /**
     * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
     */
    p24_payments?: account_capabilities.p24_payments;
    /**
     * The status of the pay_by_bank payments capability of the account, or whether the account can directly process pay_by_bank charges.
     */
    pay_by_bank_payments?: account_capabilities.pay_by_bank_payments;
    /**
     * The status of the Payco capability of the account, or whether the account can directly process Payco payments.
     */
    payco_payments?: account_capabilities.payco_payments;
    /**
     * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
     */
    paynow_payments?: account_capabilities.paynow_payments;
    /**
     * The status of the pix payments capability of the account, or whether the account can directly process pix charges.
     */
    pix_payments?: account_capabilities.pix_payments;
    /**
     * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
     */
    promptpay_payments?: account_capabilities.promptpay_payments;
    /**
     * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
     */
    revolut_pay_payments?: account_capabilities.revolut_pay_payments;
    /**
     * The status of the SamsungPay capability of the account, or whether the account can directly process SamsungPay payments.
     */
    samsung_pay_payments?: account_capabilities.samsung_pay_payments;
    /**
     * The status of the Satispay capability of the account, or whether the account can directly process Satispay payments.
     */
    satispay_payments?: account_capabilities.satispay_payments;
    /**
     * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
     */
    sepa_bank_transfer_payments?: account_capabilities.sepa_bank_transfer_payments;
    /**
     * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
     */
    sepa_debit_payments?: account_capabilities.sepa_debit_payments;
    /**
     * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
     */
    sofort_payments?: account_capabilities.sofort_payments;
    /**
     * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
     */
    swish_payments?: account_capabilities.swish_payments;
    /**
     * The status of the tax reporting 1099-K (US) capability of the account.
     */
    tax_reporting_us_1099_k?: account_capabilities.tax_reporting_us_1099_k;
    /**
     * The status of the tax reporting 1099-MISC (US) capability of the account.
     */
    tax_reporting_us_1099_misc?: account_capabilities.tax_reporting_us_1099_misc;
    /**
     * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
     */
    transfers?: account_capabilities.transfers;
    /**
     * The status of the banking capability, or whether the account can have bank accounts.
     */
    treasury?: account_capabilities.treasury;
    /**
     * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
     */
    twint_payments?: account_capabilities.twint_payments;
    /**
     * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
     */
    us_bank_account_ach_payments?: account_capabilities.us_bank_account_ach_payments;
    /**
     * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
     */
    us_bank_transfer_payments?: account_capabilities.us_bank_transfer_payments;
    /**
     * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
     */
    zip_payments?: account_capabilities.zip_payments;
};
export namespace account_capabilities {
    /**
     * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
     */
    export enum acss_debit_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
     */
    export enum affirm_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
     */
    export enum afterpay_clearpay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Alma capability of the account, or whether the account can directly process Alma payments.
     */
    export enum alma_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
     */
    export enum amazon_pay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
     */
    export enum au_becs_debit_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
     */
    export enum bacs_debit_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
     */
    export enum bancontact_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
     */
    export enum bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Billie capability of the account, or whether the account can directly process Billie payments.
     */
    export enum billie_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
     */
    export enum blik_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
     */
    export enum boleto_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
     */
    export enum card_issuing {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
     */
    export enum card_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
     */
    export enum cartes_bancaires_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
     */
    export enum cashapp_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Crypto capability of the account, or whether the account can directly process Crypto payments.
     */
    export enum crypto_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
     */
    export enum eps_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
     */
    export enum fpx_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
     */
    export enum gb_bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
     */
    export enum giropay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
     */
    export enum grabpay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
     */
    export enum ideal_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
     */
    export enum india_international_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
     */
    export enum jcb_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
     */
    export enum jp_bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the KakaoPay capability of the account, or whether the account can directly process KakaoPay payments.
     */
    export enum kakao_pay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
     */
    export enum klarna_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
     */
    export enum konbini_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the KrCard capability of the account, or whether the account can directly process KrCard payments.
     */
    export enum kr_card_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the legacy payments capability of the account.
     */
    export enum legacy_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
     */
    export enum link_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
     */
    export enum mobilepay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
     */
    export enum multibanco_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
     */
    export enum mx_bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the NaverPay capability of the account, or whether the account can directly process NaverPay payments.
     */
    export enum naver_pay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the New Zealand BECS Direct Debit payments capability of the account, or whether the account can directly process New Zealand BECS Direct Debit charges.
     */
    export enum nz_bank_account_becs_debit_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
     */
    export enum oxxo_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
     */
    export enum p24_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the pay_by_bank payments capability of the account, or whether the account can directly process pay_by_bank charges.
     */
    export enum pay_by_bank_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Payco capability of the account, or whether the account can directly process Payco payments.
     */
    export enum payco_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
     */
    export enum paynow_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the pix payments capability of the account, or whether the account can directly process pix charges.
     */
    export enum pix_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
     */
    export enum promptpay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
     */
    export enum revolut_pay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the SamsungPay capability of the account, or whether the account can directly process SamsungPay payments.
     */
    export enum samsung_pay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Satispay capability of the account, or whether the account can directly process Satispay payments.
     */
    export enum satispay_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
     */
    export enum sepa_bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
     */
    export enum sepa_debit_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
     */
    export enum sofort_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
     */
    export enum swish_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the tax reporting 1099-K (US) capability of the account.
     */
    export enum tax_reporting_us_1099_k {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the tax reporting 1099-MISC (US) capability of the account.
     */
    export enum tax_reporting_us_1099_misc {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
     */
    export enum transfers {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the banking capability, or whether the account can have bank accounts.
     */
    export enum treasury {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
     */
    export enum twint_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
     */
    export enum us_bank_account_ach_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
     */
    export enum us_bank_transfer_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
     */
    export enum zip_payments {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
}

