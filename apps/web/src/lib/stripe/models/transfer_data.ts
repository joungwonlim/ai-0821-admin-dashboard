/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type transfer_data = {
    /**
     * The amount transferred to the destination account. This transfer will occur automatically after the payment succeeds. If no amount is specified, by default the entire payment amount is transferred to the destination account.
     * The amount must be less than or equal to the [amount](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-amount), and must be a positive integer
     * representing how much to transfer in the smallest currency unit (e.g., 100 cents to charge $1.00).
     */
    amount?: number;
    /**
     * The account (if any) that the payment is attributed to for tax reporting, and where funds from the payment are transferred to after payment success.
     */
    destination: (string | account);
};

