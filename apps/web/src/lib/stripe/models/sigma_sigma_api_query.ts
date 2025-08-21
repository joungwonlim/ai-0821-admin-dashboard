/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A saved query object represents a query that can be executed for a run.
 */
export type sigma_sigma_api_query = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The name of the query.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: sigma_sigma_api_query.object;
    /**
     * The sql statement for the query.
     */
    sql: string;
};
export namespace sigma_sigma_api_query {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SIGMA_SIGMA_API_QUERY = 'sigma.sigma_api_query',
    }
}

