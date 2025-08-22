/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_fraud_challenge = {
    /**
     * The method by which the fraud challenge was delivered to the cardholder.
     */
    channel: issuing_authorization_fraud_challenge.channel;
    /**
     * The status of the fraud challenge.
     */
    status: issuing_authorization_fraud_challenge.status;
    /**
     * If the challenge is not deliverable, the reason why.
     */
    undeliverable_reason?: issuing_authorization_fraud_challenge.undeliverable_reason | null;
};
export namespace issuing_authorization_fraud_challenge {
    /**
     * The method by which the fraud challenge was delivered to the cardholder.
     */
    export enum channel {
        SMS = 'sms',
    }
    /**
     * The status of the fraud challenge.
     */
    export enum status {
        EXPIRED = 'expired',
        PENDING = 'pending',
        REJECTED = 'rejected',
        UNDELIVERABLE = 'undeliverable',
        VERIFIED = 'verified',
    }
    /**
     * If the challenge is not deliverable, the reason why.
     */
    export enum undeliverable_reason {
        NO_PHONE_NUMBER = 'no_phone_number',
        UNSUPPORTED_PHONE_NUMBER = 'unsupported_phone_number',
    }
}

