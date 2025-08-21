/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { forwarded_request_header } from './forwarded_request_header';
/**
 * Details about the request forwarded to the destination endpoint.
 */
export type forwarded_request_details = {
    /**
     * The body payload to send to the destination endpoint.
     */
    body: string;
    /**
     * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
     */
    headers: Array<forwarded_request_header>;
    /**
     * The HTTP method used to call the destination endpoint.
     */
    http_method: forwarded_request_details.http_method;
};
export namespace forwarded_request_details {
    /**
     * The HTTP method used to call the destination endpoint.
     */
    export enum http_method {
        POST = 'POST',
    }
}

