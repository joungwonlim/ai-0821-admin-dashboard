/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_domain_resource_payment_method_status_details } from './payment_method_domain_resource_payment_method_status_details';
/**
 * Indicates the status of a specific payment method on a payment method domain.
 */
export type payment_method_domain_resource_payment_method_status = {
    /**
     * The status of the payment method on the domain.
     */
    status: payment_method_domain_resource_payment_method_status.status;
    status_details?: payment_method_domain_resource_payment_method_status_details;
};
export namespace payment_method_domain_resource_payment_method_status {
    /**
     * The status of the payment method on the domain.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }
}

