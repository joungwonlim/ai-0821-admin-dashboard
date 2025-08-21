/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_transaction_fleet_cardholder_prompt_data = {
    /**
     * Driver ID.
     */
    driver_id?: string | null;
    /**
     * Odometer reading.
     */
    odometer?: number | null;
    /**
     * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
     */
    unspecified_id?: string | null;
    /**
     * User ID.
     */
    user_id?: string | null;
    /**
     * Vehicle number.
     */
    vehicle_number?: string | null;
};

