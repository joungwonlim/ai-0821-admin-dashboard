/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { api_errors } from './api_errors';
import type { application } from './application';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { mandate } from './mandate';
import type { payment_flows_automatic_payment_methods_setup_intent } from './payment_flows_automatic_payment_methods_setup_intent';
import type { payment_method } from './payment_method';
import type { payment_method_config_biz_payment_method_configuration_details } from './payment_method_config_biz_payment_method_configuration_details';
import type { setup_attempt } from './setup_attempt';
import type { setup_intent_next_action } from './setup_intent_next_action';
import type { setup_intent_payment_method_options } from './setup_intent_payment_method_options';
/**
 * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
 * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
 * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
 *
 * Create a SetupIntent when you're ready to collect your customer's payment credentials.
 * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
 * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
 * you through the setup process.
 *
 * Successful SetupIntents result in payment credentials that are optimized for future payments.
 * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
 * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
 * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
 * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
 * it automatically attaches the resulting payment method to that Customer after successful setup.
 * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
 * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
 *
 * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
 *
 * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
 */
export type setup_intent = {
    /**
     * ID of the Connect application that created the SetupIntent.
     */
    application?: (string | application) | null;
    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;
    /**
     * Settings for dynamic payment methods compatible with this Setup Intent
     */
    automatic_payment_methods?: payment_flows_automatic_payment_methods_setup_intent | null;
    /**
     * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
     */
    cancellation_reason?: setup_intent.cancellation_reason | null;
    /**
     * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
     *
     * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
     */
    client_secret?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * ID of the Customer this SetupIntent belongs to, if one exists.
     *
     * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * Indicates the directions of money movement for which this payment method is intended to be used.
     *
     * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
     */
    flow_directions?: Array<'inbound' | 'outbound'> | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The error encountered in the previous SetupIntent confirmation.
     */
    last_setup_error?: api_errors | null;
    /**
     * The most recent SetupAttempt for this SetupIntent.
     */
    latest_attempt?: (string | setup_attempt) | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * ID of the multi use Mandate generated by the SetupIntent.
     */
    mandate?: (string | mandate) | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
     */
    next_action?: setup_intent_next_action | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: setup_intent.object;
    /**
     * The account (if any) for which the setup is intended.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * ID of the payment method used with this SetupIntent. If the payment method is `card_present` and isn't a digital wallet, then the [generated_card](https://docs.stripe.com/api/setup_attempts/object#setup_attempt_object-payment_method_details-card_present-generated_card) associated with the `latest_attempt` is attached to the Customer instead.
     */
    payment_method?: (string | payment_method) | null;
    /**
     * Information about the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) used for this Setup Intent.
     */
    payment_method_configuration_details?: payment_method_config_biz_payment_method_configuration_details | null;
    /**
     * Payment method-specific configuration for this SetupIntent.
     */
    payment_method_options?: setup_intent_payment_method_options | null;
    /**
     * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
     */
    payment_method_types: Array<string>;
    /**
     * ID of the single_use Mandate generated by the SetupIntent.
     */
    single_use_mandate?: (string | mandate) | null;
    /**
     * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
     */
    status: setup_intent.status;
    /**
     * Indicates how the payment method is intended to be used in the future.
     *
     * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
     */
    usage: string;
};
export namespace setup_intent {
    /**
     * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
     */
    export enum cancellation_reason {
        ABANDONED = 'abandoned',
        DUPLICATE = 'duplicate',
        REQUESTED_BY_CUSTOMER = 'requested_by_customer',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SETUP_INTENT = 'setup_intent',
    }
    /**
     * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
     */
    export enum status {
        CANCELED = 'canceled',
        PROCESSING = 'processing',
        REQUIRES_ACTION = 'requires_action',
        REQUIRES_CONFIRMATION = 'requires_confirmation',
        REQUIRES_PAYMENT_METHOD = 'requires_payment_method',
        SUCCEEDED = 'succeeded',
    }
}

