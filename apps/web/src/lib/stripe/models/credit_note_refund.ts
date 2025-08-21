/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { refund } from './refund';
export type credit_note_refund = {
    /**
     * Amount of the refund that applies to this credit note, in cents (or local equivalent).
     */
    amount_refunded: number;
    /**
     * ID of the refund.
     */
    refund: (string | refund);
};

