/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_card } from './issuing_card';
import type { issuing_network_token_network_data } from './issuing_network_token_network_data';
/**
 * An issuing token object is created when an issued card is added to a digital wallet. As a [card issuer](https://stripe.com/docs/issuing), you can [view and manage these tokens](https://stripe.com/docs/issuing/controls/token-management) through Stripe.
 */
export type issuing_token = {
    /**
     * Card associated with this token.
     */
    card: (string | issuing_card);
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The hashed ID derived from the device ID from the card network associated with the token.
     */
    device_fingerprint?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The last four digits of the token.
     */
    last4?: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The token service provider / card network associated with the token.
     */
    network: issuing_token.network;
    network_data?: issuing_network_token_network_data;
    /**
     * Time at which the token was last updated by the card network. Measured in seconds since the Unix epoch.
     */
    network_updated_at: number;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_token.object;
    /**
     * The usage state of the token.
     */
    status: issuing_token.status;
    /**
     * The digital wallet for this token, if one was used.
     */
    wallet_provider?: issuing_token.wallet_provider;
};
export namespace issuing_token {
    /**
     * The token service provider / card network associated with the token.
     */
    export enum network {
        MASTERCARD = 'mastercard',
        VISA = 'visa',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_TOKEN = 'issuing.token',
    }
    /**
     * The usage state of the token.
     */
    export enum status {
        ACTIVE = 'active',
        DELETED = 'deleted',
        REQUESTED = 'requested',
        SUSPENDED = 'suspended',
    }
    /**
     * The digital wallet for this token, if one was used.
     */
    export enum wallet_provider {
        APPLE_PAY = 'apple_pay',
        GOOGLE_PAY = 'google_pay',
        SAMSUNG_PAY = 'samsung_pay',
    }
}

