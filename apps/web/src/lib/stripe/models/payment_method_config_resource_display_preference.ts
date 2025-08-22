/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_config_resource_display_preference = {
    /**
     * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
     */
    overridable?: boolean | null;
    /**
     * The account's display preference.
     */
    preference: payment_method_config_resource_display_preference.preference;
    /**
     * The effective display preference value.
     */
    value: payment_method_config_resource_display_preference.value;
};
export namespace payment_method_config_resource_display_preference {
    /**
     * The account's display preference.
     */
    export enum preference {
        NONE = 'none',
        OFF = 'off',
        ON = 'on',
    }
    /**
     * The effective display preference value.
     */
    export enum value {
        OFF = 'off',
        ON = 'on',
    }
}

