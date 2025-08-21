/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_resource_schedule_update_at_period_end } from './portal_resource_schedule_update_at_period_end';
import type { portal_subscription_update_product } from './portal_subscription_update_product';
export type portal_subscription_update = {
    /**
     * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
     */
    default_allowed_updates: Array<'price' | 'promotion_code' | 'quantity'>;
    /**
     * Whether the feature is enabled.
     */
    enabled: boolean;
    /**
     * The list of up to 10 products that support subscription updates.
     */
    products?: Array<portal_subscription_update_product> | null;
    /**
     * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
     */
    proration_behavior: portal_subscription_update.proration_behavior;
    schedule_at_period_end: portal_resource_schedule_update_at_period_end;
};
export namespace portal_subscription_update {
    /**
     * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
     */
    export enum proration_behavior {
        ALWAYS_INVOICE = 'always_invoice',
        CREATE_PRORATIONS = 'create_prorations',
        NONE = 'none',
    }
}

