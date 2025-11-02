/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_giropay = {
    /**
     * Bank code of bank associated with the bank account.
     */
    bank_code?: string | null;
    /**
     * Name of the bank associated with the bank account.
     */
    bank_name?: string | null;
    /**
     * Bank Identifier Code of the bank associated with the bank account.
     */
    bic?: string | null;
    /**
     * Owner's verified full name. Values are verified or provided by Giropay directly
     * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     * Giropay rarely provides this information so the attribute is usually empty.
     */
    verified_name?: string | null;
};

