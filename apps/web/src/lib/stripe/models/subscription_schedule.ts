/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { application } from './application';
import type { customer } from './customer';
import type { deleted_application } from './deleted_application';
import type { deleted_customer } from './deleted_customer';
import type { subscription } from './subscription';
import type { subscription_schedule_current_phase } from './subscription_schedule_current_phase';
import type { subscription_schedule_phase_configuration } from './subscription_schedule_phase_configuration';
import type { subscription_schedules_resource_default_settings } from './subscription_schedules_resource_default_settings';
import type { subscriptions_resource_billing_mode } from './subscriptions_resource_billing_mode';
import type { test_helpers_test_clock } from './test_helpers_test_clock';
/**
 * A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
 *
 * Related guide: [Subscription schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules)
 */
export type subscription_schedule = {
    /**
     * ID of the Connect Application that created the schedule.
     */
    application?: (string | application | deleted_application) | null;
    billing_mode: subscriptions_resource_billing_mode;
    /**
     * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at?: number | null;
    /**
     * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
     */
    completed_at?: number | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
     */
    current_phase?: subscription_schedule_current_phase | null;
    /**
     * ID of the customer who owns the subscription schedule.
     */
    customer: (string | customer | deleted_customer);
    default_settings: subscription_schedules_resource_default_settings;
    /**
     * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
     */
    end_behavior: subscription_schedule.end_behavior;
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
    object: subscription_schedule.object;
    /**
     * Configuration for the subscription schedule's phases.
     */
    phases: Array<subscription_schedule_phase_configuration>;
    /**
     * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
     */
    released_at?: number | null;
    /**
     * ID of the subscription once managed by the subscription schedule (if it is released).
     */
    released_subscription?: string | null;
    /**
     * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
     */
    status: subscription_schedule.status;
    /**
     * ID of the subscription managed by the subscription schedule.
     */
    subscription?: (string | subscription) | null;
    /**
     * ID of the test clock this subscription schedule belongs to.
     */
    test_clock?: (string | test_helpers_test_clock) | null;
};
export namespace subscription_schedule {
    /**
     * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
     */
    export enum end_behavior {
        CANCEL = 'cancel',
        NONE = 'none',
        RELEASE = 'release',
        RENEW = 'renew',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SUBSCRIPTION_SCHEDULE = 'subscription_schedule',
    }
    /**
     * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
     */
    export enum status {
        ACTIVE = 'active',
        CANCELED = 'canceled',
        COMPLETED = 'completed',
        NOT_STARTED = 'not_started',
        RELEASED = 'released',
    }
}

