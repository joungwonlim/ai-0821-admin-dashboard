/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_processing_customer_notification = {
    /**
     * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
     */
    approval_requested?: boolean | null;
    /**
     * If customer approval is required, they need to provide approval before this time.
     */
    completes_at?: number | null;
};

