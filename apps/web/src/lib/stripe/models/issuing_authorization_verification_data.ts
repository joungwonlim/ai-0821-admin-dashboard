/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_authorization_authentication_exemption } from './issuing_authorization_authentication_exemption';
import type { issuing_authorization_three_d_secure } from './issuing_authorization_three_d_secure';
export type issuing_authorization_verification_data = {
    /**
     * Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
     */
    address_line1_check: issuing_authorization_verification_data.address_line1_check;
    /**
     * Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
     */
    address_postal_code_check: issuing_authorization_verification_data.address_postal_code_check;
    /**
     * The exemption applied to this authorization.
     */
    authentication_exemption?: issuing_authorization_authentication_exemption | null;
    /**
     * Whether the cardholder provided a CVC and if it matched Stripe’s record.
     */
    cvc_check: issuing_authorization_verification_data.cvc_check;
    /**
     * Whether the cardholder provided an expiry date and if it matched Stripe’s record.
     */
    expiry_check: issuing_authorization_verification_data.expiry_check;
    /**
     * The postal code submitted as part of the authorization used for postal code verification.
     */
    postal_code?: string | null;
    /**
     * 3D Secure details.
     */
    three_d_secure?: issuing_authorization_three_d_secure | null;
};
export namespace issuing_authorization_verification_data {
    /**
     * Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
     */
    export enum address_line1_check {
        MATCH = 'match',
        MISMATCH = 'mismatch',
        NOT_PROVIDED = 'not_provided',
    }
    /**
     * Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
     */
    export enum address_postal_code_check {
        MATCH = 'match',
        MISMATCH = 'mismatch',
        NOT_PROVIDED = 'not_provided',
    }
    /**
     * Whether the cardholder provided a CVC and if it matched Stripe’s record.
     */
    export enum cvc_check {
        MATCH = 'match',
        MISMATCH = 'mismatch',
        NOT_PROVIDED = 'not_provided',
    }
    /**
     * Whether the cardholder provided an expiry date and if it matched Stripe’s record.
     */
    export enum expiry_check {
        MATCH = 'match',
        MISMATCH = 'mismatch',
        NOT_PROVIDED = 'not_provided',
    }
}

