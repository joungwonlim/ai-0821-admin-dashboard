/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dispute_transaction_shipping_address } from './dispute_transaction_shipping_address';
export type dispute_visa_compelling_evidence3_disputed_transaction = {
    /**
     * User Account ID used to log into business platform. Must be recognizable by the user.
     */
    customer_account_id?: string | null;
    /**
     * Unique identifier of the cardholder’s device derived from a combination of at least two hardware and software attributes. Must be at least 20 characters.
     */
    customer_device_fingerprint?: string | null;
    /**
     * Unique identifier of the cardholder’s device such as a device serial number (e.g., International Mobile Equipment Identity [IMEI]). Must be at least 15 characters.
     */
    customer_device_id?: string | null;
    /**
     * The email address of the customer.
     */
    customer_email_address?: string | null;
    /**
     * The IP address that the customer used when making the purchase.
     */
    customer_purchase_ip?: string | null;
    /**
     * Categorization of disputed payment.
     */
    merchandise_or_services?: dispute_visa_compelling_evidence3_disputed_transaction.merchandise_or_services | null;
    /**
     * A description of the product or service that was sold.
     */
    product_description?: string | null;
    /**
     * The address to which a physical product was shipped. All fields are required for Visa Compelling Evidence 3.0 evidence submission.
     */
    shipping_address?: dispute_transaction_shipping_address | null;
};
export namespace dispute_visa_compelling_evidence3_disputed_transaction {
    /**
     * Categorization of disputed payment.
     */
    export enum merchandise_or_services {
        MERCHANDISE = 'merchandise',
        SERVICES = 'services',
    }
}

