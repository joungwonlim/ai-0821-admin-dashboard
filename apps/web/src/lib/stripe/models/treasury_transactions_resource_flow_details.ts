/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_authorization } from './issuing_authorization';
import type { treasury_credit_reversal } from './treasury_credit_reversal';
import type { treasury_debit_reversal } from './treasury_debit_reversal';
import type { treasury_inbound_transfer } from './treasury_inbound_transfer';
import type { treasury_outbound_payment } from './treasury_outbound_payment';
import type { treasury_outbound_transfer } from './treasury_outbound_transfer';
import type { treasury_received_credit } from './treasury_received_credit';
import type { treasury_received_debit } from './treasury_received_debit';
export type treasury_transactions_resource_flow_details = {
    credit_reversal?: treasury_credit_reversal;
    debit_reversal?: treasury_debit_reversal;
    inbound_transfer?: treasury_inbound_transfer;
    issuing_authorization?: issuing_authorization;
    outbound_payment?: treasury_outbound_payment;
    outbound_transfer?: treasury_outbound_transfer;
    received_credit?: treasury_received_credit;
    received_debit?: treasury_received_debit;
    /**
     * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
     */
    type: treasury_transactions_resource_flow_details.type;
};
export namespace treasury_transactions_resource_flow_details {
    /**
     * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
     */
    export enum type {
        CREDIT_REVERSAL = 'credit_reversal',
        DEBIT_REVERSAL = 'debit_reversal',
        INBOUND_TRANSFER = 'inbound_transfer',
        ISSUING_AUTHORIZATION = 'issuing_authorization',
        OTHER = 'other',
        OUTBOUND_PAYMENT = 'outbound_payment',
        OUTBOUND_TRANSFER = 'outbound_transfer',
        RECEIVED_CREDIT = 'received_credit',
        RECEIVED_DEBIT = 'received_debit',
    }
}

