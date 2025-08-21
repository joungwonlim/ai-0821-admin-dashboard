/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_next_action_cashapp_qr_code } from './payment_intent_next_action_cashapp_qr_code';
export type payment_intent_next_action_cashapp_handle_redirect_or_display_qr_code = {
    /**
     * The URL to the hosted Cash App Pay instructions page, which allows customers to view the QR code, and supports QR code refreshing on expiration.
     */
    hosted_instructions_url: string;
    /**
     * The url for mobile redirect based auth
     */
    mobile_auth_url: string;
    qr_code: payment_intent_next_action_cashapp_qr_code;
};

