/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_options_card_present_routing = {
    /**
     * Requested routing priority
     */
    requested_priority?: payment_method_options_card_present_routing.requested_priority | null;
};
export namespace payment_method_options_card_present_routing {
    /**
     * Requested routing priority
     */
    export enum requested_priority {
        DOMESTIC = 'domestic',
        INTERNATIONAL = 'international',
    }
}

