/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type treasury_outbound_payments_resource_outbound_payment_resource_end_user_details = {
    /**
     * IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked.
     */
    ip_address?: string | null;
    /**
     * `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
     */
    present: boolean;
};

