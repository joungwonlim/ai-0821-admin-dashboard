/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type issuing_physical_bundle_features = {
    /**
     * The policy for how to use card logo images in a card design with this physical bundle.
     */
    card_logo: issuing_physical_bundle_features.card_logo;
    /**
     * The policy for how to use carrier letter text in a card design with this physical bundle.
     */
    carrier_text: issuing_physical_bundle_features.carrier_text;
    /**
     * The policy for how to use a second line on a card with this physical bundle.
     */
    second_line: issuing_physical_bundle_features.second_line;
};
export namespace issuing_physical_bundle_features {
    /**
     * The policy for how to use card logo images in a card design with this physical bundle.
     */
    export enum card_logo {
        OPTIONAL = 'optional',
        REQUIRED = 'required',
        UNSUPPORTED = 'unsupported',
    }
    /**
     * The policy for how to use carrier letter text in a card design with this physical bundle.
     */
    export enum carrier_text {
        OPTIONAL = 'optional',
        REQUIRED = 'required',
        UNSUPPORTED = 'unsupported',
    }
    /**
     * The policy for how to use a second line on a card with this physical bundle.
     */
    export enum second_line {
        OPTIONAL = 'optional',
        REQUIRED = 'required',
        UNSUPPORTED = 'unsupported',
    }
}

