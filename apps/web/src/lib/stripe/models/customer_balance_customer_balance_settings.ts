/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type customer_balance_customer_balance_settings = {
    /**
     * The configuration for how funds that land in the customer cash balance are reconciled.
     */
    reconciliation_mode: customer_balance_customer_balance_settings.reconciliation_mode;
    /**
     * A flag to indicate if reconciliation mode returned is the user's default or is specific to this customer cash balance
     */
    using_merchant_default: boolean;
};
export namespace customer_balance_customer_balance_settings {
    /**
     * The configuration for how funds that land in the customer cash balance are reconciled.
     */
    export enum reconciliation_mode {
        AUTOMATIC = 'automatic',
        MANUAL = 'manual',
    }
}

