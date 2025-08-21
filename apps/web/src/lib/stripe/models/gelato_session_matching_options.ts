/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_session_matching_options = {
    /**
     * Strictness of the DOB matching policy to apply.
     */
    dob?: gelato_session_matching_options.dob;
    /**
     * Strictness of the name matching policy to apply.
     */
    name?: gelato_session_matching_options.name;
};
export namespace gelato_session_matching_options {
    /**
     * Strictness of the DOB matching policy to apply.
     */
    export enum dob {
        NONE = 'none',
        SIMILAR = 'similar',
    }
    /**
     * Strictness of the name matching policy to apply.
     */
    export enum name {
        NONE = 'none',
        SIMILAR = 'similar',
    }
}

