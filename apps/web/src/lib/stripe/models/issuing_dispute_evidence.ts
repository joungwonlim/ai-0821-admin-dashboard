/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_dispute_canceled_evidence } from './issuing_dispute_canceled_evidence';
import type { issuing_dispute_duplicate_evidence } from './issuing_dispute_duplicate_evidence';
import type { issuing_dispute_fraudulent_evidence } from './issuing_dispute_fraudulent_evidence';
import type { issuing_dispute_merchandise_not_as_described_evidence } from './issuing_dispute_merchandise_not_as_described_evidence';
import type { issuing_dispute_no_valid_authorization_evidence } from './issuing_dispute_no_valid_authorization_evidence';
import type { issuing_dispute_not_received_evidence } from './issuing_dispute_not_received_evidence';
import type { issuing_dispute_other_evidence } from './issuing_dispute_other_evidence';
import type { issuing_dispute_service_not_as_described_evidence } from './issuing_dispute_service_not_as_described_evidence';
export type issuing_dispute_evidence = {
    canceled?: issuing_dispute_canceled_evidence;
    duplicate?: issuing_dispute_duplicate_evidence;
    fraudulent?: issuing_dispute_fraudulent_evidence;
    merchandise_not_as_described?: issuing_dispute_merchandise_not_as_described_evidence;
    no_valid_authorization?: issuing_dispute_no_valid_authorization_evidence;
    not_received?: issuing_dispute_not_received_evidence;
    other?: issuing_dispute_other_evidence;
    /**
     * The reason for filing the dispute. Its value will match the field containing the evidence.
     */
    reason: issuing_dispute_evidence.reason;
    service_not_as_described?: issuing_dispute_service_not_as_described_evidence;
};
export namespace issuing_dispute_evidence {
    /**
     * The reason for filing the dispute. Its value will match the field containing the evidence.
     */
    export enum reason {
        CANCELED = 'canceled',
        DUPLICATE = 'duplicate',
        FRAUDULENT = 'fraudulent',
        MERCHANDISE_NOT_AS_DESCRIBED = 'merchandise_not_as_described',
        NO_VALID_AUTHORIZATION = 'no_valid_authorization',
        NOT_RECEIVED = 'not_received',
        OTHER = 'other',
        SERVICE_NOT_AS_DESCRIBED = 'service_not_as_described',
    }
}

