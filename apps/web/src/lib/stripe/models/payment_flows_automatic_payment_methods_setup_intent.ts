/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_flows_automatic_payment_methods_setup_intent = {
    /**
     * Controls whether this SetupIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
     */
    allow_redirects?: payment_flows_automatic_payment_methods_setup_intent.allow_redirects;
    /**
     * Automatically calculates compatible payment methods
     */
    enabled?: boolean | null;
};
export namespace payment_flows_automatic_payment_methods_setup_intent {
    /**
     * Controls whether this SetupIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
     */
    export enum allow_redirects {
        ALWAYS = 'always',
        NEVER = 'never',
    }
}

