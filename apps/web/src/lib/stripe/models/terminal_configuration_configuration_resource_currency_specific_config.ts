/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type terminal_configuration_configuration_resource_currency_specific_config = {
    /**
     * Fixed amounts displayed when collecting a tip
     */
    fixed_amounts?: Array<number> | null;
    /**
     * Percentages displayed when collecting a tip
     */
    percentages?: Array<number> | null;
    /**
     * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
     */
    smart_tip_threshold?: number;
};

