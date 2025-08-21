/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { shipping_rate_delivery_estimate } from './shipping_rate_delivery_estimate';
import type { shipping_rate_fixed_amount } from './shipping_rate_fixed_amount';
import type { tax_code } from './tax_code';
/**
 * Shipping rates describe the price of shipping presented to your customers and
 * applied to a purchase. For more information, see [Charge for shipping](https://stripe.com/docs/payments/during-payment/charge-shipping).
 */
export type shipping_rate = {
    /**
     * Whether the shipping rate can be used for new purchases. Defaults to `true`.
     */
    active: boolean;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
     */
    delivery_estimate?: shipping_rate_delivery_estimate | null;
    /**
     * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
     */
    display_name?: string | null;
    fixed_amount?: shipping_rate_fixed_amount;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: shipping_rate.object;
    /**
     * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
     */
    tax_behavior?: shipping_rate.tax_behavior | null;
    /**
     * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
     */
    tax_code?: (string | tax_code) | null;
    /**
     * The type of calculation to use on the shipping rate.
     */
    type: shipping_rate.type;
};
export namespace shipping_rate {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SHIPPING_RATE = 'shipping_rate',
    }
    /**
     * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
        UNSPECIFIED = 'unspecified',
    }
    /**
     * The type of calculation to use on the shipping rate.
     */
    export enum type {
        FIXED_AMOUNT = 'fixed_amount',
    }
}

