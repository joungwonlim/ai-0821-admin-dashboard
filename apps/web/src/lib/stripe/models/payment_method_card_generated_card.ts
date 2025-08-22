/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card_generated_from_payment_method_details } from './card_generated_from_payment_method_details';
import type { setup_attempt } from './setup_attempt';
export type payment_method_card_generated_card = {
    /**
     * The charge that created this object.
     */
    charge?: string | null;
    /**
     * Transaction-specific details of the payment method used in the payment.
     */
    payment_method_details?: card_generated_from_payment_method_details | null;
    /**
     * The ID of the SetupAttempt that generated this PaymentMethod, if any.
     */
    setup_attempt?: (string | setup_attempt) | null;
};

