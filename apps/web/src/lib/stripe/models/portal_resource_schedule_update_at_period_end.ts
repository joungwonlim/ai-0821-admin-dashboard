/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_resource_schedule_update_at_period_end_condition } from './portal_resource_schedule_update_at_period_end_condition';
export type portal_resource_schedule_update_at_period_end = {
    /**
     * List of conditions. When any condition is true, an update will be scheduled at the end of the current period.
     */
    conditions: Array<portal_resource_schedule_update_at_period_end_condition>;
};

