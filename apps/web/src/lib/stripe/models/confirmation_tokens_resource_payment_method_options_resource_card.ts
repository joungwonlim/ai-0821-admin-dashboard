/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { confirmation_tokens_resource_payment_method_options_resource_card_resource_installment } from './confirmation_tokens_resource_payment_method_options_resource_card_resource_installment';
/**
 * This hash contains the card payment method options.
 */
export type confirmation_tokens_resource_payment_method_options_resource_card = {
    /**
     * The `cvc_update` Token collected from the Payment Element.
     */
    cvc_token?: string | null;
    installments?: confirmation_tokens_resource_payment_method_options_resource_card_resource_installment;
};

