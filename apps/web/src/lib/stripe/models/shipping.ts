/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
export type shipping = {
    address?: address;
    /**
     * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
     */
    carrier?: string | null;
    /**
     * Recipient name.
     */
    name?: string;
    /**
     * Recipient phone (including extension).
     */
    phone?: string | null;
    /**
     * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
     */
    tracking_number?: string | null;
};

