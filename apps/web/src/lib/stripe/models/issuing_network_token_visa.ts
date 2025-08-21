/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_network_token_visa = {
    /**
     * A unique reference ID from Visa to represent the card account number.
     */
    card_reference_id: string;
    /**
     * The network-unique identifier for the token.
     */
    token_reference_id: string;
    /**
     * The ID of the entity requesting tokenization, specific to Visa.
     */
    token_requestor_id: string;
    /**
     * Degree of risk associated with the token between `01` and `99`, with higher number indicating higher risk. A `00` value indicates the token was not scored by Visa.
     */
    token_risk_score?: string;
};

