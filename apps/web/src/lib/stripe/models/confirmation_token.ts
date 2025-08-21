/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { confirmation_tokens_resource_mandate_data } from './confirmation_tokens_resource_mandate_data';
import type { confirmation_tokens_resource_payment_method_options } from './confirmation_tokens_resource_payment_method_options';
import type { confirmation_tokens_resource_payment_method_preview } from './confirmation_tokens_resource_payment_method_preview';
import type { confirmation_tokens_resource_shipping } from './confirmation_tokens_resource_shipping';
/**
 * ConfirmationTokens help transport client side data collected by Stripe JS over
 * to your server for confirming a PaymentIntent or SetupIntent. If the confirmation
 * is successful, values present on the ConfirmationToken are written onto the Intent.
 *
 * To learn more about how to use ConfirmationToken, visit the related guides:
 * - [Finalize payments on the server](https://stripe.com/docs/payments/finalize-payments-on-the-server)
 * - [Build two-step confirmation](https://stripe.com/docs/payments/build-a-two-step-confirmation).
 */
export type confirmation_token = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.
     */
    expires_at?: number | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Data used for generating a Mandate.
     */
    mandate_data?: confirmation_tokens_resource_mandate_data | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: confirmation_token.object;
    /**
     * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
     */
    payment_intent?: string | null;
    /**
     * Payment-method-specific configuration for this ConfirmationToken.
     */
    payment_method_options?: confirmation_tokens_resource_payment_method_options | null;
    /**
     * Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.
     */
    payment_method_preview?: confirmation_tokens_resource_payment_method_preview | null;
    /**
     * Return URL used to confirm the Intent.
     */
    return_url?: string | null;
    /**
     * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
     *
     * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
     */
    setup_future_usage?: confirmation_token.setup_future_usage | null;
    /**
     * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
     */
    setup_intent?: string | null;
    /**
     * Shipping information collected on this ConfirmationToken.
     */
    shipping?: confirmation_tokens_resource_shipping | null;
    /**
     * Indicates whether the Stripe SDK is used to handle confirmation flow. Defaults to `true` on ConfirmationToken.
     */
    use_stripe_sdk: boolean;
};
export namespace confirmation_token {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CONFIRMATION_TOKEN = 'confirmation_token',
    }
    /**
     * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
     *
     * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
     */
    export enum setup_future_usage {
        OFF_SESSION = 'off_session',
        ON_SESSION = 'on_session',
    }
}

