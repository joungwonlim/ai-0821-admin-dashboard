/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_clocks_resource_status_details_status_details } from './billing_clocks_resource_status_details_status_details';
/**
 * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
 * objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
 * you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
 */
export type test_helpers_test_clock = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Time at which this clock is scheduled to auto delete.
     */
    deletes_after: number;
    /**
     * Time at which all objects belonging to this clock are frozen.
     */
    frozen_time: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The custom name supplied at creation.
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: test_helpers_test_clock.object;
    /**
     * The status of the Test Clock.
     */
    status: test_helpers_test_clock.status;
    status_details: billing_clocks_resource_status_details_status_details;
};
export namespace test_helpers_test_clock {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TEST_HELPERS_TEST_CLOCK = 'test_helpers.test_clock',
    }
    /**
     * The status of the Test Clock.
     */
    export enum status {
        ADVANCING = 'advancing',
        INTERNAL_FAILURE = 'internal_failure',
        READY = 'ready',
    }
}

