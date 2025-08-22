/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_details_card_present } from './payment_method_details_card_present';
export type card_generated_from_payment_method_details = {
    card_present?: payment_method_details_card_present;
    /**
     * The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.
     */
    type: string;
};

