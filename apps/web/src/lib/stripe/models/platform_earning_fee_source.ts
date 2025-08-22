/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type platform_earning_fee_source = {
    /**
     * Charge ID that created this application fee.
     */
    charge?: string;
    /**
     * Payout ID that created this application fee.
     */
    payout?: string;
    /**
     * Type of object that created the application fee.
     */
    type: platform_earning_fee_source.type;
};
export namespace platform_earning_fee_source {
    /**
     * Type of object that created the application fee.
     */
    export enum type {
        CHARGE = 'charge',
        PAYOUT = 'payout',
    }
}

