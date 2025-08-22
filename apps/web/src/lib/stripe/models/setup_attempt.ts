/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { api_errors } from './api_errors';
import type { application } from './application';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { payment_method } from './payment_method';
import type { setup_attempt_payment_method_details } from './setup_attempt_payment_method_details';
import type { setup_intent } from './setup_intent';
/**
 * A SetupAttempt describes one attempted confirmation of a SetupIntent,
 * whether that confirmation is successful or unsuccessful. You can use
 * SetupAttempts to inspect details of a specific attempt at setting up a
 * payment method using a SetupIntent.
 */
export type setup_attempt = {
    /**
     * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
     */
    application?: (string | application) | null;
    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
     */
    customer?: (string | customer | deleted_customer) | null;
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
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: setup_attempt.object;
    /**
     * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * ID of the payment method used with this SetupAttempt.
     */
    payment_method: (string | payment_method);
    payment_method_details: setup_attempt_payment_method_details;
    /**
     * The error encountered during this attempt to confirm the SetupIntent, if any.
     */
    setup_error?: api_errors | null;
    /**
     * ID of the SetupIntent that this attempt belongs to.
     */
    setup_intent: (string | setup_intent);
    /**
     * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
     */
    status: string;
    /**
     * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
     */
    usage: string;
};
export namespace setup_attempt {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SETUP_ATTEMPT = 'setup_attempt',
    }
}

