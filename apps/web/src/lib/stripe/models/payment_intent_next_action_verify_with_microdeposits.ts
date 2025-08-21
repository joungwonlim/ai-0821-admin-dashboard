/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_verify_with_microdeposits = {
    /**
     * The timestamp when the microdeposits are expected to land.
     */
    arrival_date: number;
    /**
     * The URL for the hosted verification page, which allows customers to verify their bank account.
     */
    hosted_verification_url: string;
    /**
     * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
     */
    microdeposit_type?: payment_intent_next_action_verify_with_microdeposits.microdeposit_type | null;
};
export namespace payment_intent_next_action_verify_with_microdeposits {
    /**
     * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
     */
    export enum microdeposit_type {
        AMOUNTS = 'amounts',
        DESCRIPTOR_CODE = 'descriptor_code',
    }
}

