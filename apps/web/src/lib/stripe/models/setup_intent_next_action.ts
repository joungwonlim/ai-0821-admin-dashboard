/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code } from './payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code';
import type { setup_intent_next_action_redirect_to_url } from './setup_intent_next_action_redirect_to_url';
import type { setup_intent_next_action_verify_with_microdeposits } from './setup_intent_next_action_verify_with_microdeposits';
export type setup_intent_next_action = {
    cashapp_handle_redirect_or_display_qr_code?: payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code;
    redirect_to_url?: setup_intent_next_action_redirect_to_url;
    /**
     * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
     */
    type: string;
    /**
     * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
     */
    use_stripe_sdk?: Record<string, any>;
    verify_with_microdeposits?: setup_intent_next_action_verify_with_microdeposits;
};

