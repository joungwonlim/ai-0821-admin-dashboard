/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type bank_connections_resource_transaction_refresh = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
     */
    last_attempted_at: number;
    /**
     * Time at which the next transaction refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
     */
    next_refresh_available_at?: number | null;
    /**
     * The status of the last refresh attempt.
     */
    status: bank_connections_resource_transaction_refresh.status;
};
export namespace bank_connections_resource_transaction_refresh {
    /**
     * The status of the last refresh attempt.
     */
    export enum status {
        FAILED = 'failed',
        PENDING = 'pending',
        SUCCEEDED = 'succeeded',
    }
}

