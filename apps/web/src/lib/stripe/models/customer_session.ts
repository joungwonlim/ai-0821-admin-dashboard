/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer } from './customer';
import type { customer_session_resource_components } from './customer_session_resource_components';
/**
 * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access
 * control over a Customer.
 *
 * Related guides: [Customer Session with the Payment Element](/payments/accept-a-payment-deferred?platform=web&type=payment#save-payment-methods),
 * [Customer Session with the Pricing Table](/payments/checkout/pricing-table#customer-session),
 * [Customer Session with the Buy Button](/payment-links/buy-button#pass-an-existing-customer).
 */
export type customer_session = {
    /**
     * The client secret of this Customer Session. Used on the client to set up secure access to the given `customer`.
     *
     * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
     */
    client_secret: string;
    components?: customer_session_resource_components;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The Customer the Customer Session was created for.
     */
    customer: (string | customer);
    /**
     * The timestamp at which this Customer Session will expire.
     */
    expires_at: number;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: customer_session.object;
};
export namespace customer_session {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CUSTOMER_SESSION = 'customer_session',
    }
}

