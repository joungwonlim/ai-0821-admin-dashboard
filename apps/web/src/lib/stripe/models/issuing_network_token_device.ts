/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_network_token_device = {
    /**
     * An obfuscated ID derived from the device ID.
     */
    device_fingerprint?: string;
    /**
     * The IP address of the device at provisioning time.
     */
    ip_address?: string;
    /**
     * The geographic latitude/longitude coordinates of the device at provisioning time. The format is [+-]decimal/[+-]decimal.
     */
    location?: string;
    /**
     * The name of the device used for tokenization.
     */
    name?: string;
    /**
     * The phone number of the device used for tokenization.
     */
    phone_number?: string;
    /**
     * The type of device used for tokenization.
     */
    type?: issuing_network_token_device.type;
};
export namespace issuing_network_token_device {
    /**
     * The type of device used for tokenization.
     */
    export enum type {
        OTHER = 'other',
        PHONE = 'phone',
        WATCH = 'watch',
    }
}

