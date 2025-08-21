/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_amount } from './balance_amount';
import type { balance_amount_net } from './balance_amount_net';
import type { balance_detail } from './balance_detail';
import type { balance_detail_ungated } from './balance_detail_ungated';
/**
 * This is an object representing your Stripe balance. You can retrieve it to see
 * the balance currently on your Stripe account.
 *
 * The top-level `available` and `pending` comprise your "payments balance."
 *
 * Related guide: [Balances and settlement time](https://stripe.com/docs/payments/balances), [Understanding Connect account balances](https://stripe.com/docs/connect/account-balances)
 */
export type balance = {
    /**
     * Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
     */
    available: Array<balance_amount>;
    /**
     * Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
     */
    connect_reserved?: Array<balance_amount>;
    /**
     * Funds that you can pay out using Instant Payouts.
     */
    instant_available?: Array<balance_amount_net>;
    issuing?: balance_detail;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: balance.object;
    /**
     * Funds that aren't available in the balance yet. You can find the pending balance for each currency and each payment type in the `source_types` property.
     */
    pending: Array<balance_amount>;
    refund_and_dispute_prefunding?: balance_detail_ungated;
};
export namespace balance {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BALANCE = 'balance',
    }
}

