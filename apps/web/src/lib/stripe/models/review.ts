/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { payment_intent } from './payment_intent';
import type { radar_review_resource_location } from './radar_review_resource_location';
import type { radar_review_resource_session } from './radar_review_resource_session';
/**
 * Reviews can be used to supplement automated fraud detection with human expertise.
 *
 * Learn more about [Radar](/radar) and reviewing payments
 * [here](https://stripe.com/docs/radar/reviews).
 */
export type review = {
    /**
     * The ZIP or postal code of the card used, if applicable.
     */
    billing_zip?: string | null;
    /**
     * The charge associated with this review.
     */
    charge?: (string | charge) | null;
    /**
     * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
     */
    closed_reason?: review.closed_reason | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The IP address where the payment originated.
     */
    ip_address?: string | null;
    /**
     * Information related to the location of the payment. Note that this information is an approximation and attempts to locate the nearest population center - it should not be used to determine a specific address.
     */
    ip_address_location?: radar_review_resource_location | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: review.object;
    /**
     * If `true`, the review needs action.
     */
    open: boolean;
    /**
     * The reason the review was opened. One of `rule` or `manual`.
     */
    opened_reason: review.opened_reason;
    /**
     * The PaymentIntent ID associated with this review, if one exists.
     */
    payment_intent?: (string | payment_intent);
    /**
     * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
     */
    reason: string;
    /**
     * Information related to the browsing session of the user who initiated the payment.
     */
    session?: radar_review_resource_session | null;
};
export namespace review {
    /**
     * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
     */
    export enum closed_reason {
        APPROVED = 'approved',
        CANCELED = 'canceled',
        DISPUTED = 'disputed',
        REDACTED = 'redacted',
        REFUNDED = 'refunded',
        REFUNDED_AS_FRAUD = 'refunded_as_fraud',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        REVIEW = 'review',
    }
    /**
     * The reason the review was opened. One of `rule` or `manual`.
     */
    export enum opened_reason {
        MANUAL = 'manual',
        RULE = 'rule',
    }
}

