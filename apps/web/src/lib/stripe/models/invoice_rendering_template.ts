/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Rendering Templates are used to configure how invoices are rendered on surfaces like the PDF. Invoice Rendering Templates
 * can be created from within the Dashboard, and they can be used over the API when creating invoices.
 */
export type invoice_rendering_template = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * A brief description of the template, hidden from customers
     */
    nickname?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: invoice_rendering_template.object;
    /**
     * The status of the template, one of `active` or `archived`.
     */
    status: invoice_rendering_template.status;
    /**
     * Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering
     */
    version: number;
};
export namespace invoice_rendering_template {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        INVOICE_RENDERING_TEMPLATE = 'invoice_rendering_template',
    }
    /**
     * The status of the template, one of `active` or `archived`.
     */
    export enum status {
        ACTIVE = 'active',
        ARCHIVED = 'archived',
    }
}

