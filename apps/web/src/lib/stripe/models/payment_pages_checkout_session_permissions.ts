/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_permissions = {
    /**
     * Determines which entity is allowed to update the shipping details.
     *
     * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
     *
     * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
     */
    update_shipping_details?: payment_pages_checkout_session_permissions.update_shipping_details | null;
};
export namespace payment_pages_checkout_session_permissions {
    /**
     * Determines which entity is allowed to update the shipping details.
     *
     * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
     *
     * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
     */
    export enum update_shipping_details {
        CLIENT_ONLY = 'client_only',
        SERVER_ONLY = 'server_only',
    }
}

