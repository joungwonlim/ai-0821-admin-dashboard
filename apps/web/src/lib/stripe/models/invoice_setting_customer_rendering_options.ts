/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type invoice_setting_customer_rendering_options = {
    /**
     * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
     */
    amount_tax_display?: string | null;
    /**
     * ID of the invoice rendering template to be used for this customer's invoices. If set, the template will be used on all invoices for this customer unless a template is set directly on the invoice.
     */
    template?: string | null;
};

