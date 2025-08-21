/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_links_resource_completed_sessions = {
    /**
     * The current number of checkout sessions that have been completed on the payment link which count towards the `completed_sessions` restriction to be met.
     */
    count: number;
    /**
     * The maximum number of checkout sessions that can be completed for the `completed_sessions` restriction to be met.
     */
    limit: number;
};

