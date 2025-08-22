/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_authorization_amount_details } from './issuing_authorization_amount_details';
export type issuing_authorization_request = {
    /**
     * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
     */
    amount: number;
    /**
     * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_details?: issuing_authorization_amount_details | null;
    /**
     * Whether this request was approved.
     */
    approved: boolean;
    /**
     * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
     */
    authorization_code?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    merchant_amount: number;
    /**
     * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    merchant_currency: string;
    /**
     * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
     */
    network_risk_score?: number | null;
    /**
     * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
     */
    reason: issuing_authorization_request.reason;
    /**
     * If the `request_history.reason` is `webhook_error` because the direct webhook response is invalid (for example, parsing errors or missing parameters), we surface a more detailed error message via this field.
     */
    reason_message?: string | null;
    /**
     * Time when the card network received an authorization request from the acquirer in UTC. Referred to by networks as transmission time.
     */
    requested_at?: number | null;
};
export namespace issuing_authorization_request {
    /**
     * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
     */
    export enum reason {
        ACCOUNT_DISABLED = 'account_disabled',
        CARD_ACTIVE = 'card_active',
        CARD_CANCELED = 'card_canceled',
        CARD_EXPIRED = 'card_expired',
        CARD_INACTIVE = 'card_inactive',
        CARDHOLDER_BLOCKED = 'cardholder_blocked',
        CARDHOLDER_INACTIVE = 'cardholder_inactive',
        CARDHOLDER_VERIFICATION_REQUIRED = 'cardholder_verification_required',
        INSECURE_AUTHORIZATION_METHOD = 'insecure_authorization_method',
        INSUFFICIENT_FUNDS = 'insufficient_funds',
        NETWORK_FALLBACK = 'network_fallback',
        NOT_ALLOWED = 'not_allowed',
        PIN_BLOCKED = 'pin_blocked',
        SPENDING_CONTROLS = 'spending_controls',
        SUSPECTED_FRAUD = 'suspected_fraud',
        VERIFICATION_FAILED = 'verification_failed',
        WEBHOOK_APPROVED = 'webhook_approved',
        WEBHOOK_DECLINED = 'webhook_declined',
        WEBHOOK_ERROR = 'webhook_error',
        WEBHOOK_TIMEOUT = 'webhook_timeout',
    }
}

