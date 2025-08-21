/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { confirmation_tokens_resource_mandate_data_resource_customer_acceptance_resource_online } from './confirmation_tokens_resource_mandate_data_resource_customer_acceptance_resource_online';
/**
 * This hash contains details about the customer acceptance of the Mandate.
 */
export type confirmation_tokens_resource_mandate_data_resource_customer_acceptance = {
    /**
     * If this is a Mandate accepted online, this hash contains details about the online acceptance.
     */
    online?: confirmation_tokens_resource_mandate_data_resource_customer_acceptance_resource_online | null;
    /**
     * The type of customer acceptance information included with the Mandate.
     */
    type: string;
};

