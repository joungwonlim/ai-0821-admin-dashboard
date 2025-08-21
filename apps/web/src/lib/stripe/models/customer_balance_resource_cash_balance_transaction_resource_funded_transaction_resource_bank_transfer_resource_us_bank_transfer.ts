/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer = {
    /**
     * The banking network used for this funding.
     */
    network?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer.network;
    /**
     * The full name of the sender, as supplied by the sending bank.
     */
    sender_name?: string | null;
};
export namespace customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transfer {
    /**
     * The banking network used for this funding.
     */
    export enum network {
        ACH = 'ach',
        DOMESTIC_WIRE_US = 'domestic_wire_us',
        SWIFT = 'swift',
    }
}

