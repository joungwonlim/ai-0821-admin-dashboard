/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { forwarded_request_header } from './forwarded_request_header';
/**
 * Details about the response from the destination endpoint.
 */
export type forwarded_response_details = {
    /**
     * The response body from the destination endpoint to Stripe.
     */
    body: string;
    /**
     * HTTP headers that the destination endpoint returned.
     */
    headers: Array<forwarded_request_header>;
    /**
     * The HTTP status code that the destination endpoint returned.
     */
    status: number;
};

