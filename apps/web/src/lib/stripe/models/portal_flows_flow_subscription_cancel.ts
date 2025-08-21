/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_flows_retention } from './portal_flows_retention';
export type portal_flows_flow_subscription_cancel = {
    /**
     * Specify a retention strategy to be used in the cancellation flow.
     */
    retention?: portal_flows_retention | null;
    /**
     * The ID of the subscription to be canceled.
     */
    subscription: string;
};

