/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payout } from './payout';
import type { treasury_credit_reversal } from './treasury_credit_reversal';
import type { treasury_outbound_payment } from './treasury_outbound_payment';
import type { treasury_outbound_transfer } from './treasury_outbound_transfer';
export type treasury_received_credits_resource_source_flows_details = {
    credit_reversal?: treasury_credit_reversal;
    outbound_payment?: treasury_outbound_payment;
    outbound_transfer?: treasury_outbound_transfer;
    payout?: payout;
    /**
     * The type of the source flow that originated the ReceivedCredit.
     */
    type: treasury_received_credits_resource_source_flows_details.type;
};
export namespace treasury_received_credits_resource_source_flows_details {
    /**
     * The type of the source flow that originated the ReceivedCredit.
     */
    export enum type {
        CREDIT_REVERSAL = 'credit_reversal',
        OTHER = 'other',
        OUTBOUND_PAYMENT = 'outbound_payment',
        OUTBOUND_TRANSFER = 'outbound_transfer',
        PAYOUT = 'payout',
    }
}

