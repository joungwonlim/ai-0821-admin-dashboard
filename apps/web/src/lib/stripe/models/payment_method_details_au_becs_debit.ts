/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_au_becs_debit = {
    /**
     * Bank-State-Branch number of the bank account.
     */
    bsb_number?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Last four digits of the bank account number.
     */
    last4?: string | null;
    /**
     * ID of the mandate used to make this payment.
     */
    mandate?: string;
};

