/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_transaction_fleet_data } from './issuing_transaction_fleet_data';
import type { issuing_transaction_flight_data } from './issuing_transaction_flight_data';
import type { issuing_transaction_fuel_data } from './issuing_transaction_fuel_data';
import type { issuing_transaction_lodging_data } from './issuing_transaction_lodging_data';
import type { issuing_transaction_receipt_data } from './issuing_transaction_receipt_data';
export type issuing_transaction_purchase_details = {
    /**
     * Fleet-specific information for transactions using Fleet cards.
     */
    fleet?: issuing_transaction_fleet_data | null;
    /**
     * Information about the flight that was purchased with this transaction.
     */
    flight?: issuing_transaction_flight_data | null;
    /**
     * Information about fuel that was purchased with this transaction.
     */
    fuel?: issuing_transaction_fuel_data | null;
    /**
     * Information about lodging that was purchased with this transaction.
     */
    lodging?: issuing_transaction_lodging_data | null;
    /**
     * The line items in the purchase.
     */
    receipt?: Array<issuing_transaction_receipt_data> | null;
    /**
     * A merchant-specific order number.
     */
    reference?: string | null;
};

