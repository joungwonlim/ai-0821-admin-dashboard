/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type portal_customer_update = {
    /**
     * The types of customer updates that are supported. When empty, customers are not updateable.
     */
    allowed_updates: Array<'address' | 'email' | 'name' | 'phone' | 'shipping' | 'tax_id'>;
    /**
     * Whether the feature is enabled.
     */
    enabled: boolean;
};

