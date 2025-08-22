/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type cancellation_details = {
    /**
     * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
     */
    comment?: string | null;
    /**
     * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
     */
    feedback?: cancellation_details.feedback | null;
    /**
     * Why this subscription was canceled.
     */
    reason?: cancellation_details.reason | null;
};
export namespace cancellation_details {
    /**
     * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
     */
    export enum feedback {
        CUSTOMER_SERVICE = 'customer_service',
        LOW_QUALITY = 'low_quality',
        MISSING_FEATURES = 'missing_features',
        OTHER = 'other',
        SWITCHED_SERVICE = 'switched_service',
        TOO_COMPLEX = 'too_complex',
        TOO_EXPENSIVE = 'too_expensive',
        UNUSED = 'unused',
    }
    /**
     * Why this subscription was canceled.
     */
    export enum reason {
        CANCELLATION_REQUESTED = 'cancellation_requested',
        PAYMENT_DISPUTED = 'payment_disputed',
        PAYMENT_FAILED = 'payment_failed',
    }
}

