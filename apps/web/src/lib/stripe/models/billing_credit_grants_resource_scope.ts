/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grants_resource_applicable_price } from './billing_credit_grants_resource_applicable_price';
export type billing_credit_grants_resource_scope = {
    /**
     * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
     */
    price_type?: billing_credit_grants_resource_scope.price_type;
    /**
     * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
     */
    prices?: Array<billing_credit_grants_resource_applicable_price>;
};
export namespace billing_credit_grants_resource_scope {
    /**
     * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
     */
    export enum price_type {
        METERED = 'metered',
    }
}

