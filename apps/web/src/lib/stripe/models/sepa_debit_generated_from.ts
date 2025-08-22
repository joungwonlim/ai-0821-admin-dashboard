/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { setup_attempt } from './setup_attempt';
export type sepa_debit_generated_from = {
    /**
     * The ID of the Charge that generated this PaymentMethod, if any.
     */
    charge?: (string | charge) | null;
    /**
     * The ID of the SetupAttempt that generated this PaymentMethod, if any.
     */
    setup_attempt?: (string | setup_attempt) | null;
};

