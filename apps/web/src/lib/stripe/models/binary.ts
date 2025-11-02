/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file_link } from './file_link';
/**
 * This object represents files hosted on Stripe's servers. You can upload
 * files with the [create file](https://stripe.com/docs/api#create_file) request
 * (for example, when uploading dispute evidence). Stripe also
 * creates files independently (for example, the results of a [Sigma scheduled
 * query](#scheduled_queries)).
 *
 * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
 */
export type binary = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The file expires and isn't available at this time in epoch seconds.
     */
    expires_at?: number | null;
    /**
     * The suitable name for saving the file to a filesystem.
     */
    filename?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
     */
    links?: {
        /**
         * Details about each object.
         */
        data: Array<file_link>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: binary.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: binary.object;
    /**
     * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
     */
    purpose: binary.purpose;
    /**
     * The size of the file object in bytes.
     */
    size: number;
    /**
     * A suitable title for the document.
     */
    title?: string | null;
    /**
     * The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).
     */
    type?: string | null;
    /**
     * Use your live secret API key to download the file from this URL.
     */
    url?: string | null;
};
export namespace binary {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
     */
    export enum purpose {
        ACCOUNT_REQUIREMENT = 'account_requirement',
        ADDITIONAL_VERIFICATION = 'additional_verification',
        BUSINESS_ICON = 'business_icon',
        BUSINESS_LOGO = 'business_logo',
        CUSTOMER_SIGNATURE = 'customer_signature',
        DISPUTE_EVIDENCE = 'dispute_evidence',
        DOCUMENT_PROVIDER_IDENTITY_DOCUMENT = 'document_provider_identity_document',
        FINANCE_REPORT_RUN = 'finance_report_run',
        FINANCIAL_ACCOUNT_STATEMENT = 'financial_account_statement',
        IDENTITY_DOCUMENT = 'identity_document',
        IDENTITY_DOCUMENT_DOWNLOADABLE = 'identity_document_downloadable',
        ISSUING_REGULATORY_REPORTING = 'issuing_regulatory_reporting',
        PCI_DOCUMENT = 'pci_document',
        SELFIE = 'selfie',
        SIGMA_SCHEDULED_QUERY = 'sigma_scheduled_query',
        TAX_DOCUMENT_USER_UPLOAD = 'tax_document_user_upload',
        TERMINAL_ANDROID_APK = 'terminal_android_apk',
        TERMINAL_READER_SPLASHSCREEN = 'terminal_reader_splashscreen',
    }
}

