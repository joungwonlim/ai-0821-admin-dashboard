/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { payment_pages_checkout_session_tax_id } from './payment_pages_checkout_session_tax_id';
export type payment_pages_checkout_session_customer_details = {
    /**
     * The customer's address after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
     */
    address?: address | null;
    /**
     * The email associated with the Customer, if one exists, on the Checkout Session after a completed Checkout Session or at time of session expiry.
     * Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
     */
    email?: string | null;
    /**
     * The customer's name after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
     */
    name?: string | null;
    /**
     * The customer's phone number after a completed Checkout Session.
     */
    phone?: string | null;
    /**
     * The customer’s tax exempt status after a completed Checkout Session.
     */
    tax_exempt?: payment_pages_checkout_session_customer_details.tax_exempt | null;
    /**
     * The customer’s tax IDs after a completed Checkout Session.
     */
    tax_ids?: Array<payment_pages_checkout_session_tax_id> | null;
};
export namespace payment_pages_checkout_session_customer_details {
    /**
     * The customer’s tax exempt status after a completed Checkout Session.
     */
    export enum tax_exempt {
        EXEMPT = 'exempt',
        NONE = 'none',
        REVERSE = 'reverse',
    }
}

