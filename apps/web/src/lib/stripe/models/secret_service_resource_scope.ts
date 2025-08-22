/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type secret_service_resource_scope = {
    /**
     * The secret scope type.
     */
    type: secret_service_resource_scope.type;
    /**
     * The user ID, if type is set to "user"
     */
    user?: string;
};
export namespace secret_service_resource_scope {
    /**
     * The secret scope type.
     */
    export enum type {
        ACCOUNT = 'account',
        USER = 'user',
    }
}

