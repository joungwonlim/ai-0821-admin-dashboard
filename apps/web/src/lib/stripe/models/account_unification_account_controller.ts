/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_unification_account_controller_fees } from './account_unification_account_controller_fees';
import type { account_unification_account_controller_losses } from './account_unification_account_controller_losses';
import type { account_unification_account_controller_stripe_dashboard } from './account_unification_account_controller_stripe_dashboard';
export type account_unification_account_controller = {
    fees?: account_unification_account_controller_fees;
    /**
     * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
     */
    is_controller?: boolean;
    losses?: account_unification_account_controller_losses;
    /**
     * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
     */
    requirement_collection?: account_unification_account_controller.requirement_collection;
    stripe_dashboard?: account_unification_account_controller_stripe_dashboard;
    /**
     * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
     */
    type: account_unification_account_controller.type;
};
export namespace account_unification_account_controller {
    /**
     * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
     */
    export enum requirement_collection {
        APPLICATION = 'application',
        STRIPE = 'stripe',
    }
    /**
     * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
     */
    export enum type {
        ACCOUNT = 'account',
        APPLICATION = 'application',
    }
}

