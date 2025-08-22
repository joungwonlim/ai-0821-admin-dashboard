/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_authorization_three_d_secure = {
    /**
     * The outcome of the 3D Secure authentication request.
     */
    result: issuing_authorization_three_d_secure.result;
};
export namespace issuing_authorization_three_d_secure {
    /**
     * The outcome of the 3D Secure authentication request.
     */
    export enum result {
        ATTEMPT_ACKNOWLEDGED = 'attempt_acknowledged',
        AUTHENTICATED = 'authenticated',
        FAILED = 'failed',
        REQUIRED = 'required',
    }
}

