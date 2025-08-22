/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_transaction_flight_data_leg = {
    /**
     * The three-letter IATA airport code of the flight's destination.
     */
    arrival_airport_code?: string | null;
    /**
     * The airline carrier code.
     */
    carrier?: string | null;
    /**
     * The three-letter IATA airport code that the flight departed from.
     */
    departure_airport_code?: string | null;
    /**
     * The flight number.
     */
    flight_number?: string | null;
    /**
     * The flight's service class.
     */
    service_class?: string | null;
    /**
     * Whether a stopover is allowed on this flight.
     */
    stopover_allowed?: boolean | null;
};

