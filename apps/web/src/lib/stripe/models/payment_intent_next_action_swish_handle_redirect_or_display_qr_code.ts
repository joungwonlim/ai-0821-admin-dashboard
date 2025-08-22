/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_next_action_swish_qr_code } from './payment_intent_next_action_swish_qr_code';
export type payment_intent_next_action_swish_handle_redirect_or_display_qr_code = {
    /**
     * The URL to the hosted Swish instructions page, which allows customers to view the QR code.
     */
    hosted_instructions_url: string;
    qr_code: payment_intent_next_action_swish_qr_code;
};

