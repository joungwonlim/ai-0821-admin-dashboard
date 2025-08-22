/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_personalization_design_rejection_reasons = {
    /**
     * The reason(s) the card logo was rejected.
     */
    card_logo?: Array<'geographic_location' | 'inappropriate' | 'network_name' | 'non_binary_image' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material'> | null;
    /**
     * The reason(s) the carrier text was rejected.
     */
    carrier_text?: Array<'geographic_location' | 'inappropriate' | 'network_name' | 'non_fiat_currency' | 'other' | 'other_entity' | 'promotional_material'> | null;
};

