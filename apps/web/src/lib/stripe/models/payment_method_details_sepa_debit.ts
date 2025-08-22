/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_sepa_debit = {
    /**
     * Bank code of bank associated with the bank account.
     */
    bank_code?: string | null;
    /**
     * Branch code of bank associated with the bank account.
     */
    branch_code?: string | null;
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Last four characters of the IBAN.
     */
    last4?: string | null;
    /**
     * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://stripe.com/docs/api/mandates/retrieve).
     */
    mandate?: string | null;
};

