/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { payment_intent } from './payment_intent';
export type invoices_payments_invoice_payment_associated_payment = {
    /**
     * ID of the successful charge for this payment when `type` is `charge`.Note: charge is only surfaced if the charge object is not associated with a payment intent. If the charge object does have a payment intent, the Invoice Payment surfaces the payment intent instead.
     */
    charge?: (string | charge);
    /**
     * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
     */
    payment_intent?: (string | payment_intent);
    /**
     * Type of payment object associated with this invoice payment.
     */
    type: invoices_payments_invoice_payment_associated_payment.type;
};
export namespace invoices_payments_invoice_payment_associated_payment {
    /**
     * Type of payment object associated with this invoice payment.
     */
    export enum type {
        CHARGE = 'charge',
        PAYMENT_INTENT = 'payment_intent',
    }
}

