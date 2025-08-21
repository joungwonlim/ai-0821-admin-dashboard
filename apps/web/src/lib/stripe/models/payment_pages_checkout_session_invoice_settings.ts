/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { connect_account_reference } from './connect_account_reference';
import type { deleted_tax_id } from './deleted_tax_id';
import type { invoice_setting_checkout_rendering_options } from './invoice_setting_checkout_rendering_options';
import type { invoice_setting_custom_field } from './invoice_setting_custom_field';
import type { tax_id } from './tax_id';
export type payment_pages_checkout_session_invoice_settings = {
    /**
     * The account tax IDs associated with the invoice.
     */
    account_tax_ids?: Array<(string | tax_id | deleted_tax_id)> | null;
    /**
     * Custom fields displayed on the invoice.
     */
    custom_fields?: Array<invoice_setting_custom_field> | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * Footer displayed on the invoice.
     */
    footer?: string | null;
    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: connect_account_reference | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * Options for invoice PDF rendering.
     */
    rendering_options?: invoice_setting_checkout_rendering_options | null;
};

