/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_flows_subscription_update_confirm_discount } from './portal_flows_subscription_update_confirm_discount';
import type { portal_flows_subscription_update_confirm_item } from './portal_flows_subscription_update_confirm_item';
export type portal_flows_flow_subscription_update_confirm = {
    /**
     * The coupon or promotion code to apply to this subscription update.
     */
    discounts?: Array<portal_flows_subscription_update_confirm_discount> | null;
    /**
     * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
     */
    items: Array<portal_flows_subscription_update_confirm_item>;
    /**
     * The ID of the subscription to be updated.
     */
    subscription: string;
};

