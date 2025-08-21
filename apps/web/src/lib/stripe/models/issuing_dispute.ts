/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_transaction } from './balance_transaction';
import type { issuing_dispute_evidence } from './issuing_dispute_evidence';
import type { issuing_dispute_treasury } from './issuing_dispute_treasury';
import type { issuing_transaction } from './issuing_transaction';
/**
 * As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.
 *
 * Related guide: [Issuing disputes](https://stripe.com/docs/issuing/purchases/disputes)
 */
export type issuing_dispute = {
    /**
     * Disputed amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
     */
    amount: number;
    /**
     * List of balance transactions associated with the dispute.
     */
    balance_transactions?: Array<balance_transaction> | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The currency the `transaction` was made in.
     */
    currency: string;
    evidence: issuing_dispute_evidence;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
     */
    loss_reason?: issuing_dispute.loss_reason;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_dispute.object;
    /**
     * Current status of the dispute.
     */
    status: issuing_dispute.status;
    /**
     * The transaction being disputed.
     */
    transaction: (string | issuing_transaction);
    /**
     * [Treasury](https://stripe.com/docs/api/treasury) details related to this dispute if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
     */
    treasury?: issuing_dispute_treasury | null;
};
export namespace issuing_dispute {
    /**
     * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
     */
    export enum loss_reason {
        CARDHOLDER_AUTHENTICATION_ISSUER_LIABILITY = 'cardholder_authentication_issuer_liability',
        ECI5_TOKEN_TRANSACTION_WITH_TAVV = 'eci5_token_transaction_with_tavv',
        EXCESS_DISPUTES_IN_TIMEFRAME = 'excess_disputes_in_timeframe',
        HAS_NOT_MET_THE_MINIMUM_DISPUTE_AMOUNT_REQUIREMENTS = 'has_not_met_the_minimum_dispute_amount_requirements',
        INVALID_DUPLICATE_DISPUTE = 'invalid_duplicate_dispute',
        INVALID_INCORRECT_AMOUNT_DISPUTE = 'invalid_incorrect_amount_dispute',
        INVALID_NO_AUTHORIZATION = 'invalid_no_authorization',
        INVALID_USE_OF_DISPUTES = 'invalid_use_of_disputes',
        MERCHANDISE_DELIVERED_OR_SHIPPED = 'merchandise_delivered_or_shipped',
        MERCHANDISE_OR_SERVICE_AS_DESCRIBED = 'merchandise_or_service_as_described',
        NOT_CANCELLED = 'not_cancelled',
        OTHER = 'other',
        REFUND_ISSUED = 'refund_issued',
        SUBMITTED_BEYOND_ALLOWABLE_TIME_LIMIT = 'submitted_beyond_allowable_time_limit',
        TRANSACTION_3DS_REQUIRED = 'transaction_3ds_required',
        TRANSACTION_APPROVED_AFTER_PRIOR_FRAUD_DISPUTE = 'transaction_approved_after_prior_fraud_dispute',
        TRANSACTION_AUTHORIZED = 'transaction_authorized',
        TRANSACTION_ELECTRONICALLY_READ = 'transaction_electronically_read',
        TRANSACTION_QUALIFIES_FOR_VISA_EASY_PAYMENT_SERVICE = 'transaction_qualifies_for_visa_easy_payment_service',
        TRANSACTION_UNATTENDED = 'transaction_unattended',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_DISPUTE = 'issuing.dispute',
    }
    /**
     * Current status of the dispute.
     */
    export enum status {
        EXPIRED = 'expired',
        LOST = 'lost',
        SUBMITTED = 'submitted',
        UNSUBMITTED = 'unsubmitted',
        WON = 'won',
    }
}

