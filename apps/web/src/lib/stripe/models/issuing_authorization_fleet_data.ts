/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_authorization_fleet_cardholder_prompt_data } from './issuing_authorization_fleet_cardholder_prompt_data';
import type { issuing_authorization_fleet_reported_breakdown } from './issuing_authorization_fleet_reported_breakdown';
export type issuing_authorization_fleet_data = {
    /**
     * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
     */
    cardholder_prompt_data?: issuing_authorization_fleet_cardholder_prompt_data | null;
    /**
     * The type of purchase.
     */
    purchase_type?: issuing_authorization_fleet_data.purchase_type | null;
    /**
     * More information about the total amount. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
     */
    reported_breakdown?: issuing_authorization_fleet_reported_breakdown | null;
    /**
     * The type of fuel service.
     */
    service_type?: issuing_authorization_fleet_data.service_type | null;
};
export namespace issuing_authorization_fleet_data {
    /**
     * The type of purchase.
     */
    export enum purchase_type {
        FUEL_AND_NON_FUEL_PURCHASE = 'fuel_and_non_fuel_purchase',
        FUEL_PURCHASE = 'fuel_purchase',
        NON_FUEL_PURCHASE = 'non_fuel_purchase',
    }
    /**
     * The type of fuel service.
     */
    export enum service_type {
        FULL_SERVICE = 'full_service',
        NON_FUEL_TRANSACTION = 'non_fuel_transaction',
        SELF_SERVICE = 'self_service',
    }
}

