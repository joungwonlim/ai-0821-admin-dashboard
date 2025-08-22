/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type terminal_configuration_configuration_resource_reboot_window = {
    /**
     * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
     */
    end_hour: number;
    /**
     * Integer between 0 to 23 that represents the start hour of the reboot time window.
     */
    start_hour: number;
};

