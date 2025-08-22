/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_acss_debit = {
    /**
     * Name of the bank associated with the bank account.
     */
    bank_name?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Institution number of the bank account
     */
    institution_number?: string | null;
    /**
     * Last four digits of the bank account number.
     */
    last4?: string | null;
    /**
     * ID of the mandate used to make this payment.
     */
    mandate?: string;
    /**
     * Transit number of the bank account.
     */
    transit_number?: string | null;
};

