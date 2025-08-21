/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_card_checks = {
    /**
     * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_line1_check?: string | null;
    /**
     * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_postal_code_check?: string | null;
    /**
     * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    cvc_check?: string | null;
};

