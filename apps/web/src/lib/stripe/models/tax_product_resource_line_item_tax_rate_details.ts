/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_line_item_tax_rate_details = {
    /**
     * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
     */
    display_name: string;
    /**
     * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
     */
    percentage_decimal: string;
    /**
     * The tax type, such as `vat` or `sales_tax`.
     */
    tax_type: tax_product_resource_line_item_tax_rate_details.tax_type;
};
export namespace tax_product_resource_line_item_tax_rate_details {
    /**
     * The tax type, such as `vat` or `sales_tax`.
     */
    export enum tax_type {
        AMUSEMENT_TAX = 'amusement_tax',
        COMMUNICATIONS_TAX = 'communications_tax',
        GST = 'gst',
        HST = 'hst',
        IGST = 'igst',
        JCT = 'jct',
        LEASE_TAX = 'lease_tax',
        PST = 'pst',
        QST = 'qst',
        RETAIL_DELIVERY_FEE = 'retail_delivery_fee',
        RST = 'rst',
        SALES_TAX = 'sales_tax',
        SERVICE_TAX = 'service_tax',
        VAT = 'vat',
    }
}

