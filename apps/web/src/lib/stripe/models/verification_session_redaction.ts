/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type verification_session_redaction = {
    /**
     * Indicates whether this object and its related objects have been redacted or not.
     */
    status: verification_session_redaction.status;
};
export namespace verification_session_redaction {
    /**
     * Indicates whether this object and its related objects have been redacted or not.
     */
    export enum status {
        PROCESSING = 'processing',
        REDACTED = 'redacted',
    }
}

