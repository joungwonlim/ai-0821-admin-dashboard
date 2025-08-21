/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type treasury_received_debits_resource_reversal_details = {
    /**
     * Time before which a ReceivedDebit can be reversed.
     */
    deadline?: number | null;
    /**
     * Set if a ReceivedDebit can't be reversed.
     */
    restricted_reason?: treasury_received_debits_resource_reversal_details.restricted_reason | null;
};
export namespace treasury_received_debits_resource_reversal_details {
    /**
     * Set if a ReceivedDebit can't be reversed.
     */
    export enum restricted_reason {
        ALREADY_REVERSED = 'already_reversed',
        DEADLINE_PASSED = 'deadline_passed',
        NETWORK_RESTRICTED = 'network_restricted',
        OTHER = 'other',
        SOURCE_FLOW_RESTRICTED = 'source_flow_restricted',
    }
}

