/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_document_report } from './gelato_document_report';
import type { gelato_email_report } from './gelato_email_report';
import type { gelato_id_number_report } from './gelato_id_number_report';
import type { gelato_phone_report } from './gelato_phone_report';
import type { gelato_selfie_report } from './gelato_selfie_report';
import type { gelato_verification_report_options } from './gelato_verification_report_options';
/**
 * A VerificationReport is the result of an attempt to collect and verify data from a user.
 * The collection of verification checks performed is determined from the `type` and `options`
 * parameters used. You can find the result of each verification check performed in the
 * appropriate sub-resource: `document`, `id_number`, `selfie`.
 *
 * Each VerificationReport contains a copy of any data collected by the user as well as
 * reference IDs which can be used to access collected images through the [FileUpload](https://stripe.com/docs/api/files)
 * API. To configure and create VerificationReports, use the
 * [VerificationSession](https://stripe.com/docs/api/identity/verification_sessions) API.
 *
 * Related guide: [Accessing verification results](https://stripe.com/docs/identity/verification-sessions#results).
 */
export type identity_verification_report = {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    document?: gelato_document_report;
    email?: gelato_email_report;
    /**
     * Unique identifier for the object.
     */
    id: string;
    id_number?: gelato_id_number_report;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: identity_verification_report.object;
    options?: gelato_verification_report_options;
    phone?: gelato_phone_report;
    selfie?: gelato_selfie_report;
    /**
     * Type of report.
     */
    type: identity_verification_report.type;
    /**
     * The configuration token of a verification flow from the dashboard.
     */
    verification_flow?: string;
    /**
     * ID of the VerificationSession that created this report.
     */
    verification_session?: string | null;
};
export namespace identity_verification_report {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        IDENTITY_VERIFICATION_REPORT = 'identity.verification_report',
    }
    /**
     * Type of report.
     */
    export enum type {
        DOCUMENT = 'document',
        ID_NUMBER = 'id_number',
        VERIFICATION_FLOW = 'verification_flow',
    }
}

