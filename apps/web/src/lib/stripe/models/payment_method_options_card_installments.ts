/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_details_card_installments_plan } from './payment_method_details_card_installments_plan';
export type payment_method_options_card_installments = {
    /**
     * Installment plans that may be selected for this PaymentIntent.
     */
    available_plans?: Array<payment_method_details_card_installments_plan> | null;
    /**
     * Whether Installments are enabled for this PaymentIntent.
     */
    enabled: boolean;
    /**
     * Installment plan selected for this PaymentIntent.
     */
    plan?: payment_method_details_card_installments_plan | null;
};

