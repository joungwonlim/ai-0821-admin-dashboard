/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_lines_common_proration_details } from './billing_bill_resource_invoicing_lines_common_proration_details';
export type billing_bill_resource_invoicing_lines_parents_invoice_line_item_invoice_item_parent = {
    /**
     * The invoice item that generated this line item
     */
    invoice_item: string;
    /**
     * Whether this is a proration
     */
    proration: boolean;
    /**
     * Additional details for proration line items
     */
    proration_details?: billing_bill_resource_invoicing_lines_common_proration_details | null;
    /**
     * The subscription that the invoice item belongs to
     */
    subscription?: string | null;
};

