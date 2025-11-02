/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { climate_product } from './climate_product';
import type { climate_removals_beneficiary } from './climate_removals_beneficiary';
import type { climate_removals_order_deliveries } from './climate_removals_order_deliveries';
/**
 * Orders represent your intent to purchase a particular Climate product. When you create an order, the
 * payment is deducted from your merchant balance.
 */
export type climate_order = {
    /**
     * Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.
     */
    amount_fees: number;
    /**
     * Total amount of the carbon removal in the currency's smallest unit.
     */
    amount_subtotal: number;
    /**
     * Total amount of the order including fees in the currency's smallest unit.
     */
    amount_total: number;
    beneficiary?: climate_removals_beneficiary;
    /**
     * Time at which the order was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at?: number | null;
    /**
     * Reason for the cancellation of this order.
     */
    cancellation_reason?: climate_order.cancellation_reason | null;
    /**
     * For delivered orders, a URL to a delivery certificate for the order.
     */
    certificate?: string | null;
    /**
     * Time at which the order was confirmed. Measured in seconds since the Unix epoch.
     */
    confirmed_at?: number | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.
     */
    currency: string;
    /**
     * Time at which the order's expected_delivery_year was delayed. Measured in seconds since the Unix epoch.
     */
    delayed_at?: number | null;
    /**
     * Time at which the order was delivered. Measured in seconds since the Unix epoch.
     */
    delivered_at?: number | null;
    /**
     * Details about the delivery of carbon removal for this order.
     */
    delivery_details: Array<climate_removals_order_deliveries>;
    /**
     * The year this order is expected to be delivered.
     */
    expected_delivery_year: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * Quantity of carbon removal that is included in this order.
     */
    metric_tons: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: climate_order.object;
    /**
     * Unique ID for the Climate `Product` this order is purchasing.
     */
    product: (string | climate_product);
    /**
     * Time at which the order's product was substituted for a different product. Measured in seconds since the Unix epoch.
     */
    product_substituted_at?: number | null;
    /**
     * The current status of this order.
     */
    status: climate_order.status;
};
export namespace climate_order {
    /**
     * Reason for the cancellation of this order.
     */
    export enum cancellation_reason {
        EXPIRED = 'expired',
        PRODUCT_UNAVAILABLE = 'product_unavailable',
        REQUESTED = 'requested',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CLIMATE_ORDER = 'climate.order',
    }
    /**
     * The current status of this order.
     */
    export enum status {
        AWAITING_FUNDS = 'awaiting_funds',
        CANCELED = 'canceled',
        CONFIRMED = 'confirmed',
        DELIVERED = 'delivered',
        OPEN = 'open',
    }
}

