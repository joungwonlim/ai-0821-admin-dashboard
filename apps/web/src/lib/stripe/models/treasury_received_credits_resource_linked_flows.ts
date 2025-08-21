/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_received_credits_resource_source_flows_details } from './treasury_received_credits_resource_source_flows_details';
export type treasury_received_credits_resource_linked_flows = {
    /**
     * The CreditReversal created as a result of this ReceivedCredit being reversed.
     */
    credit_reversal?: string | null;
    /**
     * Set if the ReceivedCredit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
     */
    issuing_authorization?: string | null;
    /**
     * Set if the ReceivedCredit is also viewable as an [Issuing transaction](https://stripe.com/docs/api#issuing_transactions) object.
     */
    issuing_transaction?: string | null;
    /**
     * ID of the source flow. Set if `network` is `stripe` and the source flow is visible to the user. Examples of source flows include OutboundPayments, payouts, or CreditReversals.
     */
    source_flow?: string | null;
    /**
     * The expandable object of the source flow.
     */
    source_flow_details?: treasury_received_credits_resource_source_flows_details | null;
    /**
     * The type of flow that originated the ReceivedCredit (for example, `outbound_payment`).
     */
    source_flow_type?: string | null;
};

