/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method_domain_resource_payment_method_status } from './payment_method_domain_resource_payment_method_status';
/**
 * A payment method domain represents a web domain that you have registered with Stripe.
 * Stripe Elements use registered payment method domains to control where certain payment methods are shown.
 *
 * Related guide: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
 */
export type payment_method_domain = {
    amazon_pay: payment_method_domain_resource_payment_method_status;
    apple_pay: payment_method_domain_resource_payment_method_status;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The domain name that this payment method domain object represents.
     */
    domain_name: string;
    /**
     * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
     */
    enabled: boolean;
    google_pay: payment_method_domain_resource_payment_method_status;
    /**
     * Unique identifier for the object.
     */
    id: string;
    klarna: payment_method_domain_resource_payment_method_status;
    link: payment_method_domain_resource_payment_method_status;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: payment_method_domain.object;
    paypal: payment_method_domain_resource_payment_method_status;
};
export namespace payment_method_domain {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PAYMENT_METHOD_DOMAIN = 'payment_method_domain',
    }
}

