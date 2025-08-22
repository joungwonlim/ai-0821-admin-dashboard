/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_transaction_flight_data_leg } from './issuing_transaction_flight_data_leg';
export type issuing_transaction_flight_data = {
    /**
     * The time that the flight departed.
     */
    departure_at?: number | null;
    /**
     * The name of the passenger.
     */
    passenger_name?: string | null;
    /**
     * Whether the ticket is refundable.
     */
    refundable?: boolean | null;
    /**
     * The legs of the trip.
     */
    segments?: Array<issuing_transaction_flight_data_leg> | null;
    /**
     * The travel agency that issued the ticket.
     */
    travel_agency?: string | null;
};

