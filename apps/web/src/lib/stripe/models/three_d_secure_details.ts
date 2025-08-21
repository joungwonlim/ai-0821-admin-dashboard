/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type three_d_secure_details = {
    /**
     * For authenticated transactions: how the customer was authenticated by
     * the issuing bank.
     */
    authentication_flow?: three_d_secure_details.authentication_flow | null;
    /**
     * The Electronic Commerce Indicator (ECI). A protocol-level field
     * indicating what degree of authentication was performed.
     */
    electronic_commerce_indicator?: three_d_secure_details.electronic_commerce_indicator | null;
    /**
     * Indicates the outcome of 3D Secure authentication.
     */
    result?: three_d_secure_details.result | null;
    /**
     * Additional information about why 3D Secure succeeded or failed based
     * on the `result`.
     */
    result_reason?: three_d_secure_details.result_reason | null;
    /**
     * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
     * (dsTransId) for this payment.
     */
    transaction_id?: string | null;
    /**
     * The version of 3D Secure that was used.
     */
    version?: three_d_secure_details.version | null;
};
export namespace three_d_secure_details {
    /**
     * For authenticated transactions: how the customer was authenticated by
     * the issuing bank.
     */
    export enum authentication_flow {
        CHALLENGE = 'challenge',
        FRICTIONLESS = 'frictionless',
    }
    /**
     * The Electronic Commerce Indicator (ECI). A protocol-level field
     * indicating what degree of authentication was performed.
     */
    export enum electronic_commerce_indicator {
        _01 = '01',
        _02 = '02',
        _05 = '05',
        _06 = '06',
        _07 = '07',
    }
    /**
     * Indicates the outcome of 3D Secure authentication.
     */
    export enum result {
        ATTEMPT_ACKNOWLEDGED = 'attempt_acknowledged',
        AUTHENTICATED = 'authenticated',
        EXEMPTED = 'exempted',
        FAILED = 'failed',
        NOT_SUPPORTED = 'not_supported',
        PROCESSING_ERROR = 'processing_error',
    }
    /**
     * Additional information about why 3D Secure succeeded or failed based
     * on the `result`.
     */
    export enum result_reason {
        ABANDONED = 'abandoned',
        BYPASSED = 'bypassed',
        CANCELED = 'canceled',
        CARD_NOT_ENROLLED = 'card_not_enrolled',
        NETWORK_NOT_SUPPORTED = 'network_not_supported',
        PROTOCOL_ERROR = 'protocol_error',
        REJECTED = 'rejected',
    }
    /**
     * The version of 3D Secure that was used.
     */
    export enum version {
        _1_0_2 = '1.0.2',
        _2_1_0 = '2.1.0',
        _2_2_0 = '2.2.0',
    }
}

