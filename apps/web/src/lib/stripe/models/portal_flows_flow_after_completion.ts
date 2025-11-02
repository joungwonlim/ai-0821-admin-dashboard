/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_flows_after_completion_hosted_confirmation } from './portal_flows_after_completion_hosted_confirmation';
import type { portal_flows_after_completion_redirect } from './portal_flows_after_completion_redirect';
export type portal_flows_flow_after_completion = {
    /**
     * Configuration when `after_completion.type=hosted_confirmation`.
     */
    hosted_confirmation?: portal_flows_after_completion_hosted_confirmation | null;
    /**
     * Configuration when `after_completion.type=redirect`.
     */
    redirect?: portal_flows_after_completion_redirect | null;
    /**
     * The specified type of behavior after the flow is completed.
     */
    type: portal_flows_flow_after_completion.type;
};
export namespace portal_flows_flow_after_completion {
    /**
     * The specified type of behavior after the flow is completed.
     */
    export enum type {
        HOSTED_CONFIRMATION = 'hosted_confirmation',
        PORTAL_HOMEPAGE = 'portal_homepage',
        REDIRECT = 'redirect',
    }
}

