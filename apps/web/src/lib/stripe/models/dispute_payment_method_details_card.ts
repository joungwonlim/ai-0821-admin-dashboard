/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type dispute_payment_method_details_card = {
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand: string;
    /**
     * The type of dispute opened. Different case types may have varying fees and financial impact.
     */
    case_type: dispute_payment_method_details_card.case_type;
    /**
     * The card network's specific dispute reason code, which maps to one of Stripe's primary dispute categories to simplify response guidance. The [Network code map](https://stripe.com/docs/disputes/categories#network-code-map) lists all available dispute reason codes by network.
     */
    network_reason_code?: string | null;
};
export namespace dispute_payment_method_details_card {
    /**
     * The type of dispute opened. Different case types may have varying fees and financial impact.
     */
    export enum case_type {
        BLOCK = 'block',
        CHARGEBACK = 'chargeback',
        COMPLIANCE = 'compliance',
        INQUIRY = 'inquiry',
        RESOLUTION = 'resolution',
    }
}

