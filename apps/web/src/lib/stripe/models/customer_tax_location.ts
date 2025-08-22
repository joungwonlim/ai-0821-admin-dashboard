/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type customer_tax_location = {
    /**
     * The identified tax country of the customer.
     */
    country: string;
    /**
     * The data source used to infer the customer's location.
     */
    source: customer_tax_location.source;
    /**
     * The identified tax state, county, province, or region of the customer.
     */
    state?: string | null;
};
export namespace customer_tax_location {
    /**
     * The data source used to infer the customer's location.
     */
    export enum source {
        BILLING_ADDRESS = 'billing_address',
        IP_ADDRESS = 'ip_address',
        PAYMENT_METHOD = 'payment_method',
        SHIPPING_DESTINATION = 'shipping_destination',
    }
}

