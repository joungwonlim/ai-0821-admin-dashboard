/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_tos_acceptance = {
    /**
     * The Unix timestamp marking when the account representative accepted their service agreement
     */
    date?: number | null;
    /**
     * The IP address from which the account representative accepted their service agreement
     */
    ip?: string | null;
    /**
     * The user's service agreement type
     */
    service_agreement?: string;
    /**
     * The user agent of the browser from which the account representative accepted their service agreement
     */
    user_agent?: string | null;
};

