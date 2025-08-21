/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * You can configure [webhook endpoints](https://docs.stripe.com/webhooks/) via the API to be
 * notified about events that happen in your Stripe account or connected
 * accounts.
 *
 * Most users configure webhooks from [the dashboard](https://dashboard.stripe.com/webhooks), which provides a user interface for registering and testing your webhook endpoints.
 *
 * Related guide: [Setting up webhooks](https://docs.stripe.com/webhooks/configure)
 */
export type webhook_endpoint = {
    /**
     * The API version events are rendered as for this webhook endpoint.
     */
    api_version?: string | null;
    /**
     * The ID of the associated Connect application.
     */
    application?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * An optional description of what the webhook is used for.
     */
    description?: string | null;
    /**
     * The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
     */
    enabled_events: Array<string>;
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
    object: webhook_endpoint.object;
    /**
     * The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). Only returned at creation.
     */
    secret?: string;
    /**
     * The status of the webhook. It can be `enabled` or `disabled`.
     */
    status: string;
    /**
     * The URL of the webhook endpoint.
     */
    url: string;
};
export namespace webhook_endpoint {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        WEBHOOK_ENDPOINT = 'webhook_endpoint',
    }
}

