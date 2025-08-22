/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
export type billing_details = {
    /**
     * Billing address.
     */
    address?: address | null;
    /**
     * Email address.
     */
    email?: string | null;
    /**
     * Full name.
     */
    name?: string | null;
    /**
     * Billing phone number (including extension).
     */
    phone?: string | null;
    /**
     * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
     */
    tax_id?: string | null;
};

