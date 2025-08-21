/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_account } from './bank_account';
import type { card } from './card';
import type { payment_intent } from './payment_intent';
import type { payment_method } from './payment_method';
import type { setup_intent } from './setup_intent';
import type { source } from './source';
export type api_errors = {
    /**
     * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines) if they provide one.
     */
    advice_code?: string;
    /**
     * For card errors, the ID of the failed charge.
     */
    charge?: string;
    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    code?: string;
    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
     */
    decline_code?: string;
    /**
     * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
     */
    doc_url?: string;
    /**
     * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
     */
    message?: string;
    /**
     * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
     */
    network_advice_code?: string;
    /**
     * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
     */
    network_decline_code?: string;
    /**
     * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
     */
    param?: string;
    payment_intent?: payment_intent;
    payment_method?: payment_method;
    /**
     * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
     */
    payment_method_type?: string;
    /**
     * A URL to the request log entry in your dashboard.
     */
    request_log_url?: string;
    setup_intent?: setup_intent;
    /**
     * The [source object](https://stripe.com/docs/api/sources/object) for errors returned on a request involving a source.
     */
    source?: (bank_account | card | source);
    /**
     * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
     */
    type: api_errors.type;
};
export namespace api_errors {
    /**
     * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
     */
    export enum type {
        API_ERROR = 'api_error',
        CARD_ERROR = 'card_error',
        IDEMPOTENCY_ERROR = 'idempotency_error',
        INVALID_REQUEST_ERROR = 'invalid_request_error',
    }
}

