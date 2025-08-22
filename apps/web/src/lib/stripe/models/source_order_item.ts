/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type source_order_item = {
    /**
     * The amount (price) for this order item.
     */
    amount?: number | null;
    /**
     * This currency of this order item. Required when `amount` is present.
     */
    currency?: string | null;
    /**
     * Human-readable description for this order item.
     */
    description?: string | null;
    /**
     * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
     */
    parent?: string | null;
    /**
     * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
     */
    quantity?: number;
    /**
     * The type of this order item. Must be `sku`, `tax`, or `shipping`.
     */
    type?: string | null;
};

