/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_merchant_data = {
    /**
     * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
     */
    category: string;
    /**
     * The merchant category code for the seller’s business
     */
    category_code: string;
    /**
     * City where the seller is located
     */
    city?: string | null;
    /**
     * Country where the seller is located
     */
    country?: string | null;
    /**
     * Name of the seller
     */
    name?: string | null;
    /**
     * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
     */
    network_id: string;
    /**
     * Postal code where the seller is located
     */
    postal_code?: string | null;
    /**
     * State where the seller is located
     */
    state?: string | null;
    /**
     * The seller's tax identification number. Currently populated for French merchants only.
     */
    tax_id?: string | null;
    /**
     * An ID assigned by the seller to the location of the sale.
     */
    terminal_id?: string | null;
    /**
     * URL provided by the merchant on a 3DS request
     */
    url?: string | null;
};

