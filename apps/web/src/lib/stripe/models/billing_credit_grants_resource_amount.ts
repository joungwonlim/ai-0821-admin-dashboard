/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_credit_grants_resource_monetary_amount } from './billing_credit_grants_resource_monetary_amount';
export type billing_credit_grants_resource_amount = {
    /**
     * The monetary amount.
     */
    monetary?: billing_credit_grants_resource_monetary_amount | null;
    /**
     * The type of this amount. We currently only support `monetary` billing credits.
     */
    type: billing_credit_grants_resource_amount.type;
};
export namespace billing_credit_grants_resource_amount {
    /**
     * The type of this amount. We currently only support `monetary` billing credits.
     */
    export enum type {
        MONETARY = 'monetary',
    }
}

