/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_next_action_alipay_handle_redirect } from './payment_intent_next_action_alipay_handle_redirect';
import type { payment_intent_next_action_boleto } from './payment_intent_next_action_boleto';
import type { payment_intent_next_action_card_await_notification } from './payment_intent_next_action_card_await_notification';
import type { payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code } from './payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code';
import type { payment_intent_next_action_display_bank_transfer_instructions } from './payment_intent_next_action_display_bank_transfer_instructions';
import type { payment_intent_next_action_display_multibanco_details } from './payment_intent_next_action_display_multibanco_details';
import type { payment_intent_next_action_display_oxxo_details } from './payment_intent_next_action_display_oxxo_details';
import type { payment_intent_next_action_konbini } from './payment_intent_next_action_konbini';
import type { payment_intent_next_action_paynow_display_qr_code } from './payment_intent_next_action_paynow_display_qr_code';
import type { payment_intent_next_action_pix_display_qr_code } from './payment_intent_next_action_pix_display_qr_code';
import type { payment_intent_next_action_promptpay_display_qr_code } from './payment_intent_next_action_promptpay_display_qr_code';
import type { payment_intent_next_action_redirect_to_url } from './payment_intent_next_action_redirect_to_url';
import type { payment_intent_next_action_swish_handle_redirect_or_display_qr_code } from './payment_intent_next_action_swish_handle_redirect_or_display_qr_code';
import type { payment_intent_next_action_verify_with_microdeposits } from './payment_intent_next_action_verify_with_microdeposits';
import type { payment_intent_next_action_wechat_pay_display_qr_code } from './payment_intent_next_action_wechat_pay_display_qr_code';
import type { payment_intent_next_action_wechat_pay_redirect_to_android_app } from './payment_intent_next_action_wechat_pay_redirect_to_android_app';
import type { payment_intent_next_action_wechat_pay_redirect_to_ios_app } from './payment_intent_next_action_wechat_pay_redirect_to_ios_app';
export type payment_intent_next_action = {
    alipay_handle_redirect?: payment_intent_next_action_alipay_handle_redirect;
    boleto_display_details?: payment_intent_next_action_boleto;
    card_await_notification?: payment_intent_next_action_card_await_notification;
    cashapp_handle_redirect_or_display_qr_code?: payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code;
    display_bank_transfer_instructions?: payment_intent_next_action_display_bank_transfer_instructions;
    konbini_display_details?: payment_intent_next_action_konbini;
    multibanco_display_details?: payment_intent_next_action_display_multibanco_details;
    oxxo_display_details?: payment_intent_next_action_display_oxxo_details;
    paynow_display_qr_code?: payment_intent_next_action_paynow_display_qr_code;
    pix_display_qr_code?: payment_intent_next_action_pix_display_qr_code;
    promptpay_display_qr_code?: payment_intent_next_action_promptpay_display_qr_code;
    redirect_to_url?: payment_intent_next_action_redirect_to_url;
    swish_handle_redirect_or_display_qr_code?: payment_intent_next_action_swish_handle_redirect_or_display_qr_code;
    /**
     * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
     */
    type: string;
    /**
     * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
     */
    use_stripe_sdk?: Record<string, any>;
    verify_with_microdeposits?: payment_intent_next_action_verify_with_microdeposits;
    wechat_pay_display_qr_code?: payment_intent_next_action_wechat_pay_display_qr_code;
    wechat_pay_redirect_to_android_app?: payment_intent_next_action_wechat_pay_redirect_to_android_app;
    wechat_pay_redirect_to_ios_app?: payment_intent_next_action_wechat_pay_redirect_to_ios_app;
};

