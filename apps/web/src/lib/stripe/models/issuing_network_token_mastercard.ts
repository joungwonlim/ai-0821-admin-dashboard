/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_network_token_mastercard = {
    /**
     * A unique reference ID from MasterCard to represent the card account number.
     */
    card_reference_id?: string;
    /**
     * The network-unique identifier for the token.
     */
    token_reference_id: string;
    /**
     * The ID of the entity requesting tokenization, specific to MasterCard.
     */
    token_requestor_id: string;
    /**
     * The name of the entity requesting tokenization, if known. This is directly provided from MasterCard.
     */
    token_requestor_name?: string;
};

