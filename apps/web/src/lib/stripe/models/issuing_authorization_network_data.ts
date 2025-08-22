/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_network_data = {
    /**
     * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
     */
    acquiring_institution_id?: string | null;
    /**
     * The System Trace Audit Number (STAN) is a 6-digit identifier assigned by the acquirer. Prefer `network_data.transaction_id` if present, unless you have special requirements.
     */
    system_trace_audit_number?: string | null;
    /**
     * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
     */
    transaction_id?: string | null;
};

