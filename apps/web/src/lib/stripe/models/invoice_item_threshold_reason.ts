/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type invoice_item_threshold_reason = {
    /**
     * The IDs of the line items that triggered the threshold invoice.
     */
    line_item_ids: Array<string>;
    /**
     * The quantity threshold boundary that applied to the given line item.
     */
    usage_gte: number;
};

