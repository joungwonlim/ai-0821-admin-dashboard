/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_personalization_design_preferences = {
    /**
     * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
     */
    is_default: boolean;
    /**
     * Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist.
     */
    is_platform_default?: boolean | null;
};

