/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_customer_details_resource_tax_id } from './tax_product_resource_customer_details_resource_tax_id';
import type { tax_product_resource_postal_address } from './tax_product_resource_postal_address';
export type tax_product_resource_customer_details = {
    /**
     * The customer's postal address (for example, home or business location).
     */
    address?: tax_product_resource_postal_address | null;
    /**
     * The type of customer address provided.
     */
    address_source?: tax_product_resource_customer_details.address_source | null;
    /**
     * The customer's IP address (IPv4 or IPv6).
     */
    ip_address?: string | null;
    /**
     * The customer's tax IDs (for example, EU VAT numbers).
     */
    tax_ids: Array<tax_product_resource_customer_details_resource_tax_id>;
    /**
     * The taxability override used for taxation.
     */
    taxability_override: tax_product_resource_customer_details.taxability_override;
};
export namespace tax_product_resource_customer_details {
    /**
     * The type of customer address provided.
     */
    export enum address_source {
        BILLING = 'billing',
        SHIPPING = 'shipping',
    }
    /**
     * The taxability override used for taxation.
     */
    export enum taxability_override {
        CUSTOMER_EXEMPT = 'customer_exempt',
        NONE = 'none',
        REVERSE_CHARGE = 'reverse_charge',
    }
}

