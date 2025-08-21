/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_location } from './terminal_location';
import type { terminal_reader_reader_resource_reader_action } from './terminal_reader_reader_resource_reader_action';
/**
 * A Reader represents a physical device for accepting payment details.
 *
 * Related guide: [Connecting to a reader](https://stripe.com/docs/terminal/payments/connect-reader)
 */
export type terminal_reader = {
    /**
     * The most recent action performed by the reader.
     */
    action?: terminal_reader_reader_resource_reader_action | null;
    /**
     * The current software version of the reader.
     */
    device_sw_version?: string | null;
    /**
     * Device type of the reader.
     */
    device_type: terminal_reader.device_type;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The local IP address of the reader.
     */
    ip_address?: string | null;
    /**
     * Custom label given to the reader for easier identification.
     */
    label: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The location identifier of the reader.
     */
    location?: (string | terminal_location) | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: terminal_reader.object;
    /**
     * Serial number of the reader.
     */
    serial_number: string;
    /**
     * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
     */
    status?: terminal_reader.status | null;
};
export namespace terminal_reader {
    /**
     * Device type of the reader.
     */
    export enum device_type {
        BBPOS_CHIPPER2X = 'bbpos_chipper2x',
        BBPOS_WISEPAD3 = 'bbpos_wisepad3',
        BBPOS_WISEPOS_E = 'bbpos_wisepos_e',
        MOBILE_PHONE_READER = 'mobile_phone_reader',
        SIMULATED_STRIPE_S700 = 'simulated_stripe_s700',
        SIMULATED_WISEPOS_E = 'simulated_wisepos_e',
        STRIPE_M2 = 'stripe_m2',
        STRIPE_S700 = 'stripe_s700',
        VERIFONE_P400 = 'verifone_P400',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TERMINAL_READER = 'terminal.reader',
    }
    /**
     * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
     */
    export enum status {
        OFFLINE = 'offline',
        ONLINE = 'online',
    }
}

