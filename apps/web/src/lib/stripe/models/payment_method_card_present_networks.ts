/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_card_present_networks = {
    /**
     * All networks available for selection via [payment_method_options.card.network](/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
     */
    available: Array<string>;
    /**
     * The preferred network for the card.
     */
    preferred?: string | null;
};

