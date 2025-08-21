/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_transaction_fleet_cardholder_prompt_data } from './issuing_transaction_fleet_cardholder_prompt_data';
import type { issuing_transaction_fleet_reported_breakdown } from './issuing_transaction_fleet_reported_breakdown';
export type issuing_transaction_fleet_data = {
    /**
     * Answers to prompts presented to cardholder at point of sale.
     */
    cardholder_prompt_data?: issuing_transaction_fleet_cardholder_prompt_data | null;
    /**
     * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
     */
    purchase_type?: string | null;
    /**
     * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
     */
    reported_breakdown?: issuing_transaction_fleet_reported_breakdown | null;
    /**
     * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
     */
    service_type?: string | null;
};

