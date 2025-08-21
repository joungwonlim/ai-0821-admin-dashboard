/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_private_card_payment_method_options_resource_restrictions = {
    /**
     * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
     */
    brands_blocked?: Array<'american_express' | 'discover_global_network' | 'mastercard' | 'visa'>;
};

