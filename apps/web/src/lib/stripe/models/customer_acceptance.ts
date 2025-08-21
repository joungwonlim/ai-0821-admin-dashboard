/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { offline_acceptance } from './offline_acceptance';
import type { online_acceptance } from './online_acceptance';
export type customer_acceptance = {
    /**
     * The time that the customer accepts the mandate.
     */
    accepted_at?: number | null;
    offline?: offline_acceptance;
    online?: online_acceptance;
    /**
     * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
     */
    type: customer_acceptance.type;
};
export namespace customer_acceptance {
    /**
     * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
     */
    export enum type {
        OFFLINE = 'offline',
        ONLINE = 'online',
    }
}

