/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_setting_custom_field } from './invoice_setting_custom_field';
import type { invoice_setting_customer_rendering_options } from './invoice_setting_customer_rendering_options';
import type { payment_method } from './payment_method';
export type invoice_setting_customer_setting = {
    /**
     * Default custom fields to be displayed on invoices for this customer.
     */
    custom_fields?: Array<invoice_setting_custom_field> | null;
    /**
     * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
     */
    default_payment_method?: (string | payment_method) | null;
    /**
     * Default footer to be displayed on invoices for this customer.
     */
    footer?: string | null;
    /**
     * Default options for invoice PDF rendering for this customer.
     */
    rendering_options?: invoice_setting_customer_rendering_options | null;
};

