/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { gelato_provided_details } from './gelato_provided_details';
import type { gelato_related_person } from './gelato_related_person';
import type { gelato_session_last_error } from './gelato_session_last_error';
import type { gelato_verification_session_options } from './gelato_verification_session_options';
import type { gelato_verified_outputs } from './gelato_verified_outputs';
import type { identity_verification_report } from './identity_verification_report';
import type { verification_session_redaction } from './verification_session_redaction';
/**
 * A VerificationSession guides you through the process of collecting and verifying the identities
 * of your users. It contains details about the type of verification, such as what [verification
 * check](/docs/identity/verification-checks) to perform. Only create one VerificationSession for
 * each verification in your system.
 *
 * A VerificationSession transitions through [multiple
 * statuses](/docs/identity/how-sessions-work) throughout its lifetime as it progresses through
 * the verification flow. The VerificationSession contains the user's verified data after
 * verification checks are complete.
 *
 * Related guide: [The Verification Sessions API](https://stripe.com/docs/identity/verification-sessions)
 */
export type identity_verification_session = {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string | null;
    /**
     * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
     */
    client_secret?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * If present, this property tells you the last error encountered when processing the verification.
     */
    last_error?: gelato_session_last_error | null;
    /**
     * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
     */
    last_verification_report?: (string | identity_verification_report) | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: identity_verification_session.object;
    /**
     * A set of options for the session’s verification checks.
     */
    options?: gelato_verification_session_options | null;
    /**
     * Details provided about the user being verified. These details may be shown to the user.
     */
    provided_details?: gelato_provided_details | null;
    /**
     * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
     */
    redaction?: verification_session_redaction | null;
    /**
     * Customer ID
     */
    related_customer?: string | null;
    related_person?: gelato_related_person;
    /**
     * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
     */
    status: identity_verification_session.status;
    /**
     * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
     */
    type: identity_verification_session.type;
    /**
     * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 48 hours and can only be used once. Don’t store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
     */
    url?: string | null;
    /**
     * The configuration token of a verification flow from the dashboard.
     */
    verification_flow?: string;
    /**
     * The user’s verified data.
     */
    verified_outputs?: gelato_verified_outputs | null;
};
export namespace identity_verification_session {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        IDENTITY_VERIFICATION_SESSION = 'identity.verification_session',
    }
    /**
     * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
     */
    export enum status {
        CANCELED = 'canceled',
        PROCESSING = 'processing',
        REQUIRES_INPUT = 'requires_input',
        VERIFIED = 'verified',
    }
    /**
     * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
     */
    export enum type {
        DOCUMENT = 'document',
        ID_NUMBER = 'id_number',
        VERIFICATION_FLOW = 'verification_flow',
    }
}

