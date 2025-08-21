/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type portal_subscription_cancellation_reason = {
    /**
     * Whether the feature is enabled.
     */
    enabled: boolean;
    /**
     * Which cancellation reasons will be given as options to the customer.
     */
    options: Array<'customer_service' | 'low_quality' | 'missing_features' | 'other' | 'switched_service' | 'too_complex' | 'too_expensive' | 'unused'>;
};

