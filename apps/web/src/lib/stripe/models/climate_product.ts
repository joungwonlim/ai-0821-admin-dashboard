/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { climate_removals_products_price } from './climate_removals_products_price';
import type { climate_supplier } from './climate_supplier';
/**
 * A Climate product represents a type of carbon removal unit available for reservation.
 * You can retrieve it to see the current price and availability.
 */
export type climate_product = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Current prices for a metric ton of carbon removal in a currency's smallest unit.
     */
    current_prices_per_metric_ton: Record<string, climate_removals_products_price>;
    /**
     * The year in which the carbon removal is expected to be delivered.
     */
    delivery_year?: number | null;
    /**
     * Unique identifier for the object. For convenience, Climate product IDs are human-readable strings
     * that start with `climsku_`. See [carbon removal inventory](https://stripe.com/docs/climate/orders/carbon-removal-inventory)
     * for a list of available carbon removal products.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The quantity of metric tons available for reservation.
     */
    metric_tons_available: string;
    /**
     * The Climate product's name.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: climate_product.object;
    /**
     * The carbon removal suppliers that fulfill orders for this Climate product.
     */
    suppliers: Array<climate_supplier>;
};
export namespace climate_product {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CLIMATE_PRODUCT = 'climate.product',
    }
}

