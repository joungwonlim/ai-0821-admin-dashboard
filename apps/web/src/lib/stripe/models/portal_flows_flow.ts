/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_flows_flow_after_completion } from './portal_flows_flow_after_completion';
import type { portal_flows_flow_subscription_cancel } from './portal_flows_flow_subscription_cancel';
import type { portal_flows_flow_subscription_update } from './portal_flows_flow_subscription_update';
import type { portal_flows_flow_subscription_update_confirm } from './portal_flows_flow_subscription_update_confirm';
export type portal_flows_flow = {
    after_completion: portal_flows_flow_after_completion;
    /**
     * Configuration when `flow.type=subscription_cancel`.
     */
    subscription_cancel?: portal_flows_flow_subscription_cancel | null;
    /**
     * Configuration when `flow.type=subscription_update`.
     */
    subscription_update?: portal_flows_flow_subscription_update | null;
    /**
     * Configuration when `flow.type=subscription_update_confirm`.
     */
    subscription_update_confirm?: portal_flows_flow_subscription_update_confirm | null;
    /**
     * Type of flow that the customer will go through.
     */
    type: portal_flows_flow.type;
};
export namespace portal_flows_flow {
    /**
     * Type of flow that the customer will go through.
     */
    export enum type {
        PAYMENT_METHOD_UPDATE = 'payment_method_update',
        SUBSCRIPTION_CANCEL = 'subscription_cancel',
        SUBSCRIPTION_UPDATE = 'subscription_update',
        SUBSCRIPTION_UPDATE_CONFIRM = 'subscription_update_confirm',
    }
}

