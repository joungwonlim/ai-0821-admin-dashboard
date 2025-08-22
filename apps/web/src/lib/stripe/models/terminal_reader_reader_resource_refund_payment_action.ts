/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { payment_intent } from './payment_intent';
import type { refund } from './refund';
import type { terminal_reader_reader_resource_refund_payment_config } from './terminal_reader_reader_resource_refund_payment_config';
/**
 * Represents a reader action to refund a payment
 */
export type terminal_reader_reader_resource_refund_payment_action = {
    /**
     * The amount being refunded.
     */
    amount?: number;
    /**
     * Charge that is being refunded.
     */
    charge?: (string | charge);
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string>;
    /**
     * Payment intent that is being refunded.
     */
    payment_intent?: (string | payment_intent);
    /**
     * The reason for the refund.
     */
    reason?: terminal_reader_reader_resource_refund_payment_action.reason;
    /**
     * Unique identifier for the refund object.
     */
    refund?: (string | refund);
    /**
     * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
     */
    refund_application_fee?: boolean;
    refund_payment_config?: terminal_reader_reader_resource_refund_payment_config;
    /**
     * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
     */
    reverse_transfer?: boolean;
};
export namespace terminal_reader_reader_resource_refund_payment_action {
    /**
     * The reason for the refund.
     */
    export enum reason {
        DUPLICATE = 'duplicate',
        FRAUDULENT = 'fraudulent',
        REQUESTED_BY_CUSTOMER = 'requested_by_customer',
    }
}

