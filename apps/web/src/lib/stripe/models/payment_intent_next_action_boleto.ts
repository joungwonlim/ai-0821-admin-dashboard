/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_boleto = {
    /**
     * The timestamp after which the boleto expires.
     */
    expires_at?: number | null;
    /**
     * The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher.
     */
    hosted_voucher_url?: string | null;
    /**
     * The boleto number.
     */
    number?: string | null;
    /**
     * The URL to the downloadable boleto voucher PDF.
     */
    pdf?: string | null;
};

