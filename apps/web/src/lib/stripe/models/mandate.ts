/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_acceptance } from './customer_acceptance';
import type { mandate_multi_use } from './mandate_multi_use';
import type { mandate_payment_method_details } from './mandate_payment_method_details';
import type { mandate_single_use } from './mandate_single_use';
import type { payment_method } from './payment_method';
/**
 * A Mandate is a record of the permission that your customer gives you to debit their payment method.
 */
export type mandate = {
    customer_acceptance: customer_acceptance;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    multi_use?: mandate_multi_use;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: mandate.object;
    /**
     * The account (if any) that the mandate is intended for.
     */
    on_behalf_of?: string;
    /**
     * ID of the payment method associated with this mandate.
     */
    payment_method: (string | payment_method);
    payment_method_details: mandate_payment_method_details;
    single_use?: mandate_single_use;
    /**
     * The mandate status indicates whether or not you can use it to initiate a payment.
     */
    status: mandate.status;
    /**
     * The type of the mandate.
     */
    type: mandate.type;
};
export namespace mandate {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        MANDATE = 'mandate',
    }
    /**
     * The mandate status indicates whether or not you can use it to initiate a payment.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        PENDING = 'pending',
    }
    /**
     * The type of the mandate.
     */
    export enum type {
        MULTI_USE = 'multi_use',
        SINGLE_USE = 'single_use',
    }
}

