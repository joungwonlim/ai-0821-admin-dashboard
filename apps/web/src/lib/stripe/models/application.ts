/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type application = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The name of the application.
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: application.object;
};
export namespace application {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        APPLICATION = 'application',
    }
}

