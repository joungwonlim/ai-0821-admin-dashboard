/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines how a subscription behaves when a free trial ends.
 */
export type subscriptions_trials_resource_end_behavior = {
    /**
     * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
     */
    missing_payment_method: subscriptions_trials_resource_end_behavior.missing_payment_method;
};
export namespace subscriptions_trials_resource_end_behavior {
    /**
     * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
     */
    export enum missing_payment_method {
        CANCEL = 'cancel',
        CREATE_INVOICE = 'create_invoice',
        PAUSE = 'pause',
    }
}

