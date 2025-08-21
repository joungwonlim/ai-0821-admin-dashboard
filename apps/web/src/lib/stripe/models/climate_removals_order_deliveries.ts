/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { climate_removals_location } from './climate_removals_location';
import type { climate_supplier } from './climate_supplier';
/**
 * The delivery of a specified quantity of carbon for an order.
 */
export type climate_removals_order_deliveries = {
    /**
     * Time at which the delivery occurred. Measured in seconds since the Unix epoch.
     */
    delivered_at: number;
    /**
     * Specific location of this delivery.
     */
    location?: climate_removals_location | null;
    /**
     * Quantity of carbon removal supplied by this delivery.
     */
    metric_tons: string;
    /**
     * Once retired, a URL to the registry entry for the tons from this delivery.
     */
    registry_url?: string | null;
    supplier: climate_supplier;
};

