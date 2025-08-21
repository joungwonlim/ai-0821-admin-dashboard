/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_session_resource_components_resource_payment_element_resource_features } from './customer_session_resource_components_resource_payment_element_resource_features';
/**
 * This hash contains whether the Payment Element is enabled and the features it supports.
 */
export type customer_session_resource_components_resource_payment_element = {
    /**
     * Whether the Payment Element is enabled.
     */
    enabled: boolean;
    /**
     * This hash defines whether the Payment Element supports certain features.
     */
    features?: customer_session_resource_components_resource_payment_element_resource_features | null;
};

