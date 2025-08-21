/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type transform_usage = {
    /**
     * Divide usage by this number.
     */
    divide_by: number;
    /**
     * After division, either round the result `up` or `down`.
     */
    round: transform_usage.round;
};
export namespace transform_usage {
    /**
     * After division, either round the result `up` or `down`.
     */
    export enum round {
        DOWN = 'down',
        UP = 'up',
    }
}

