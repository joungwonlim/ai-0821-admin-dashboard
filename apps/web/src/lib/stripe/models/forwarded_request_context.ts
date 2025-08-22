/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Metadata about the forwarded request.
 */
export type forwarded_request_context = {
    /**
     * The time it took in milliseconds for the destination endpoint to respond.
     */
    destination_duration: number;
    /**
     * The IP address of the destination.
     */
    destination_ip_address: string;
};

