/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type source_transaction_paper_check_data = {
    /**
     * Time at which the deposited funds will be available for use. Measured in seconds since the Unix epoch.
     */
    available_at?: string;
    /**
     * Comma-separated list of invoice IDs associated with the paper check.
     */
    invoices?: string;
};

