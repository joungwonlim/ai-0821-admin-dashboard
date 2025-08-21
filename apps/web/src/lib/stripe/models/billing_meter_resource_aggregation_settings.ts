/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type billing_meter_resource_aggregation_settings = {
    /**
     * Specifies how events are aggregated.
     */
    formula: billing_meter_resource_aggregation_settings.formula;
};
export namespace billing_meter_resource_aggregation_settings {
    /**
     * Specifies how events are aggregated.
     */
    export enum formula {
        COUNT = 'count',
        LAST = 'last',
        SUM = 'sum',
    }
}

