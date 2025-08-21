/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { forwarded_request_context } from './forwarded_request_context';
import type { forwarded_request_details } from './forwarded_request_details';
import type { forwarded_response_details } from './forwarded_response_details';
/**
 * Instructs Stripe to make a request on your behalf using the destination URL. The destination URL
 * is activated by Stripe at the time of onboarding. Stripe verifies requests with your credentials
 * provided during onboarding, and injects card details from the payment_method into the request.
 *
 * Stripe redacts all sensitive fields and headers, including authentication credentials and card numbers,
 * before storing the request and response data in the forwarding Request object, which are subject to a
 * 30-day retention period.
 *
 * You can provide a Stripe idempotency key to make sure that requests with the same key result in only one
 * outbound request. The Stripe idempotency key provided should be unique and different from any idempotency
 * keys provided on the underlying third-party request.
 *
 * Forwarding Requests are synchronous requests that return a response or time out according to
 * Stripe’s limits.
 *
 * Related guide: [Forward card details to third-party API endpoints](https://docs.stripe.com/payments/forwarding).
 */
export type forwarding_request = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
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
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: forwarding_request.object;
    /**
     * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
     */
    payment_method: string;
    /**
     * The field kinds to be replaced in the forwarded request.
     */
    replacements: Array<'card_cvc' | 'card_expiry' | 'card_number' | 'cardholder_name' | 'request_signature'>;
    /**
     * Context about the request from Stripe's servers to the destination endpoint.
     */
    request_context?: forwarded_request_context | null;
    /**
     * The request that was sent to the destination endpoint. We redact any sensitive fields.
     */
    request_details?: forwarded_request_details | null;
    /**
     * The response that the destination endpoint returned to us. We redact any sensitive fields.
     */
    response_details?: forwarded_response_details | null;
    /**
     * The destination URL for the forwarded request. Must be supported by the config.
     */
    url?: string | null;
};
export namespace forwarding_request {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FORWARDING_REQUEST = 'forwarding.request',
    }
}

