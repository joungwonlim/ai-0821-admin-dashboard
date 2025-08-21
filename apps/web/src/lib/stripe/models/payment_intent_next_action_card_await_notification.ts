/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_card_await_notification = {
    /**
     * The time that payment will be attempted. If customer approval is required, they need to provide approval before this time.
     */
    charge_attempt_at?: number | null;
    /**
     * For payments greater than INR 15000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required.
     */
    customer_approval_required?: boolean | null;
};

