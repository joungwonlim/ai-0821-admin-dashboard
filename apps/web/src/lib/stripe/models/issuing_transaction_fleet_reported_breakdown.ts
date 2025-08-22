/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_transaction_fleet_fuel_price_data } from './issuing_transaction_fleet_fuel_price_data';
import type { issuing_transaction_fleet_non_fuel_price_data } from './issuing_transaction_fleet_non_fuel_price_data';
import type { issuing_transaction_fleet_tax_data } from './issuing_transaction_fleet_tax_data';
export type issuing_transaction_fleet_reported_breakdown = {
    /**
     * Breakdown of fuel portion of the purchase.
     */
    fuel?: issuing_transaction_fleet_fuel_price_data | null;
    /**
     * Breakdown of non-fuel portion of the purchase.
     */
    non_fuel?: issuing_transaction_fleet_non_fuel_price_data | null;
    /**
     * Information about tax included in this transaction.
     */
    tax?: issuing_transaction_fleet_tax_data | null;
};

