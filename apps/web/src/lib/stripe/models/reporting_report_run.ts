/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
import type { financial_reporting_finance_report_run_run_parameters } from './financial_reporting_finance_report_run_run_parameters';
/**
 * The Report Run object represents an instance of a report type generated with
 * specific run parameters. Once the object is created, Stripe begins processing the report.
 * When the report has finished running, it will give you a reference to a file
 * where you can retrieve your results. For an overview, see
 * [API Access to Reports](https://stripe.com/docs/reporting/statements/api).
 *
 * Note that certain report types can only be run based on your live-mode data (not test-mode
 * data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export type reporting_report_run = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * If something should go wrong during the run, a message about the failure (populated when
     * `status=failed`).
     */
    error?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * `true` if the report is run on live mode data and `false` if it is run on test mode data.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: reporting_report_run.object;
    parameters: financial_reporting_finance_report_run_run_parameters;
    /**
     * The ID of the [report type](https://stripe.com/docs/reports/report-types) to run, such as `"balance.summary.1"`.
     */
    report_type: string;
    /**
     * The file object representing the result of the report run (populated when
     * `status=succeeded`).
     */
    result?: file | null;
    /**
     * Status of this report run. This will be `pending` when the run is initially created.
     * When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
     * Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
     */
    status: string;
    /**
     * Timestamp at which this run successfully finished (populated when
     * `status=succeeded`). Measured in seconds since the Unix epoch.
     */
    succeeded_at?: number | null;
};
export namespace reporting_report_run {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        REPORTING_REPORT_RUN = 'reporting.report_run',
    }
}

