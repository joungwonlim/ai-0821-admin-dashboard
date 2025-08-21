/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_unification_account_controller_fees = {
    /**
     * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
     */
    payer: account_unification_account_controller_fees.payer;
};
export namespace account_unification_account_controller_fees {
    /**
     * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
     */
    export enum payer {
        ACCOUNT = 'account',
        APPLICATION = 'application',
        APPLICATION_CUSTOM = 'application_custom',
        APPLICATION_EXPRESS = 'application_express',
    }
}

