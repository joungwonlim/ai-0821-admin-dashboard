/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type invoices_resource_confirmation_secret = {
    /**
     * The client_secret of the payment that Stripe creates for the invoice after finalization.
     */
    client_secret: string;
    /**
     * The type of client_secret. Currently this is always payment_intent, referencing the default payment_intent that Stripe creates during invoice finalization
     */
    type: string;
};

