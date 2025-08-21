/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_unification_account_controller_losses = {
    /**
     * A value indicating who is liable when this account can't pay back negative balances from payments.
     */
    payments: account_unification_account_controller_losses.payments;
};
export namespace account_unification_account_controller_losses {
    /**
     * A value indicating who is liable when this account can't pay back negative balances from payments.
     */
    export enum payments {
        APPLICATION = 'application',
        STRIPE = 'stripe',
    }
}

