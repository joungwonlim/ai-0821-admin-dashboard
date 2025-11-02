/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type notification_event_request = {
    /**
     * ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
     */
    id?: string | null;
    /**
     * The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.
     */
    idempotency_key?: string | null;
};

