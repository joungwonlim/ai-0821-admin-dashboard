/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type invoice_mandate_options_card = {
    /**
     * Amount to be charged for future payments.
     */
    amount?: number | null;
    /**
     * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
     */
    amount_type?: invoice_mandate_options_card.amount_type | null;
    /**
     * A description of the mandate or subscription that is meant to be displayed to the customer.
     */
    description?: string | null;
};
export namespace invoice_mandate_options_card {
    /**
     * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
     */
    export enum amount_type {
        FIXED = 'fixed',
        MAXIMUM = 'maximum',
    }
}

