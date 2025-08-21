/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { rule } from './rule';
export type charge_outcome = {
    /**
     * An enumerated value providing a more detailed explanation on [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines).
     */
    advice_code?: charge_outcome.advice_code | null;
    /**
     * For charges declined by the network, a 2 digit code which indicates the advice returned by the network on how to proceed with an error.
     */
    network_advice_code?: string | null;
    /**
     * For charges declined by the network, an alphanumeric code which indicates the reason the charge failed.
     */
    network_decline_code?: string | null;
    /**
     * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
     */
    network_status?: string | null;
    /**
     * An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges blocked because the payment is unlikely to be authorized have the value `low_probability_of_authorization`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
     */
    reason?: string | null;
    /**
     * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
     */
    risk_level?: string;
    /**
     * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
     */
    risk_score?: number;
    /**
     * The ID of the Radar rule that matched the payment, if applicable.
     */
    rule?: (string | rule);
    /**
     * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
     */
    seller_message?: string | null;
    /**
     * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.
     */
    type: string;
};
export namespace charge_outcome {
    /**
     * An enumerated value providing a more detailed explanation on [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines).
     */
    export enum advice_code {
        CONFIRM_CARD_DATA = 'confirm_card_data',
        DO_NOT_TRY_AGAIN = 'do_not_try_again',
        TRY_AGAIN_LATER = 'try_again_later',
    }
}

