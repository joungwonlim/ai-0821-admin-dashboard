/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_authentication_exemption = {
    /**
     * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
     */
    claimed_by: issuing_authorization_authentication_exemption.claimed_by;
    /**
     * The specific exemption claimed for this authorization.
     */
    type: issuing_authorization_authentication_exemption.type;
};
export namespace issuing_authorization_authentication_exemption {
    /**
     * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
     */
    export enum claimed_by {
        ACQUIRER = 'acquirer',
        ISSUER = 'issuer',
    }
    /**
     * The specific exemption claimed for this authorization.
     */
    export enum type {
        LOW_VALUE_TRANSACTION = 'low_value_transaction',
        TRANSACTION_RISK_ANALYSIS = 'transaction_risk_analysis',
        UNKNOWN = 'unknown',
    }
}

