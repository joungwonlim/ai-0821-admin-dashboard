/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
/**
 * A Location represents a grouping of readers.
 *
 * Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */
export type terminal_location = {
    address: address;
    /**
     * The ID of a configuration that will be used to customize all readers in this location.
     */
    configuration_overrides?: string;
    /**
     * The display name of the location.
     */
    display_name: string;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: terminal_location.object;
};
export namespace terminal_location {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TERMINAL_LOCATION = 'terminal.location',
    }
}

