/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_deducted_at_source = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_deducted_at_source.object;
    /**
     * The end of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
     */
    period_end: number;
    /**
     * The start of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
     */
    period_start: number;
    /**
     * The TAN that was supplied to Stripe when TDS was assessed
     */
    tax_deduction_account_number: string;
};
export namespace tax_deducted_at_source {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_DEDUCTED_AT_SOURCE = 'tax_deducted_at_source',
    }
}

