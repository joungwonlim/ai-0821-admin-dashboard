/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type charge_fraud_details = {
    /**
     * Assessments from Stripe. If set, the value is `fraudulent`.
     */
    stripe_report?: string;
    /**
     * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
     */
    user_report?: string;
};

