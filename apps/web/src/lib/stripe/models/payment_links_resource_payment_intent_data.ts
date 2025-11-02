/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_links_resource_payment_intent_data = {
    /**
     * Indicates when the funds will be captured from the customer's account.
     */
    capture_method?: payment_links_resource_payment_intent_data.capture_method | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link.
     */
    metadata: Record<string, string>;
    /**
     * Indicates that you intend to make future payments with the payment method collected during checkout.
     */
    setup_future_usage?: payment_links_resource_payment_intent_data.setup_future_usage | null;
    /**
     * For a non-card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge.
     */
    statement_descriptor?: string | null;
    /**
     * For a card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge. Concatenated with the account's statement descriptor prefix to form the complete statement descriptor.
     */
    statement_descriptor_suffix?: string | null;
    /**
     * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
     */
    transfer_group?: string | null;
};
export namespace payment_links_resource_payment_intent_data {
    /**
     * Indicates when the funds will be captured from the customer's account.
     */
    export enum capture_method {
        AUTOMATIC = 'automatic',
        AUTOMATIC_ASYNC = 'automatic_async',
        MANUAL = 'manual',
    }
    /**
     * Indicates that you intend to make future payments with the payment method collected during checkout.
     */
    export enum setup_future_usage {
        OFF_SESSION = 'off_session',
        ON_SESSION = 'on_session',
    }
}

