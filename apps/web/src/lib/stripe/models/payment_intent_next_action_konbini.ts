/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_intent_next_action_konbini_stores } from './payment_intent_next_action_konbini_stores';
export type payment_intent_next_action_konbini = {
    /**
     * The timestamp at which the pending Konbini payment expires.
     */
    expires_at: number;
    /**
     * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
     */
    hosted_voucher_url?: string | null;
    stores: payment_intent_next_action_konbini_stores;
};

