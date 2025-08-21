/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
import type { sigma_scheduled_query_run_error } from './sigma_scheduled_query_run_error';
/**
 * If you have [scheduled a Sigma query](https://stripe.com/docs/sigma/scheduled-queries), you'll
 * receive a `sigma.scheduled_query_run.created` webhook each time the query
 * runs. The webhook contains a `ScheduledQueryRun` object, which you can use to
 * retrieve the query results.
 */
export type scheduled_query_run = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * When the query was run, Sigma contained a snapshot of your Stripe data at this time.
     */
    data_load_time: number;
    error?: sigma_scheduled_query_run_error;
    /**
     * The file object representing the results of the query.
     */
    file?: file | null;
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
    object: scheduled_query_run.object;
    /**
     * Time at which the result expires and is no longer available for download.
     */
    result_available_until: number;
    /**
     * SQL for the query.
     */
    sql: string;
    /**
     * The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
     */
    status: string;
    /**
     * Title of the query.
     */
    title: string;
};
export namespace scheduled_query_run {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SCHEDULED_QUERY_RUN = 'scheduled_query_run',
    }
}

