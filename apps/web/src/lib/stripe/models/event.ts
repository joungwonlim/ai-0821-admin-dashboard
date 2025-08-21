/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { notification_event_data } from './notification_event_data';
import type { notification_event_request } from './notification_event_request';
/**
 * Snapshot events allow you to track and react to activity in your Stripe integration. When
 * the state of another API resource changes, Stripe creates an `Event` object that contains
 * all the relevant information associated with that action, including the affected API
 * resource. For example, a successful payment triggers a `charge.succeeded` event, which
 * contains the `Charge` in the event's data property. Some actions trigger multiple events.
 * For example, if you create a new subscription for a customer, it triggers both a
 * `customer.subscription.created` event and a `charge.succeeded` event.
 *
 * Configure an event destination in your account to listen for events that represent actions
 * your integration needs to respond to. Additionally, you can retrieve an individual event or
 * a list of events from the API.
 *
 * [Connect](https://docs.stripe.com/connect) platforms can also receive event notifications
 * that occur in their connected accounts. These events include an account attribute that
 * identifies the relevant connected account.
 *
 * You can access events through the [Retrieve Event API](https://docs.stripe.com/api/events#retrieve_event)
 * for 30 days.
 */
export type event = {
    /**
     * The connected account that originates the event.
     */
    account?: string;
    /**
     * The Stripe API version used to render `data` when the event was created. The contents of `data` never change, so this value remains static regardless of the API version currently in use. This property is populated only for events created on or after October 31, 2014.
     */
    api_version?: string | null;
    /**
     * Authentication context needed to fetch the event or related object.
     */
    context?: string;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    data: notification_event_data;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: event.object;
    /**
     * Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify.
     */
    pending_webhooks: number;
    /**
     * Information on the API request that triggers the event.
     */
    request?: notification_event_request | null;
    /**
     * Description of the event (for example, `invoice.created` or `charge.refunded`).
     */
    type: string;
};
export namespace event {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        EVENT = 'event',
    }
}

