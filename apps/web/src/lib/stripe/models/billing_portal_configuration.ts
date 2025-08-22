/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { application } from './application';
import type { deleted_application } from './deleted_application';
import type { portal_business_profile } from './portal_business_profile';
import type { portal_features } from './portal_features';
import type { portal_login_page } from './portal_login_page';
/**
 * A portal configuration describes the functionality and behavior of a portal session.
 */
export type billing_portal_configuration = {
    /**
     * Whether the configuration is active and can be used to create portal sessions.
     */
    active: boolean;
    /**
     * ID of the Connect Application that created the configuration.
     */
    application?: (string | application | deleted_application) | null;
    business_profile: portal_business_profile;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
     */
    default_return_url?: string | null;
    features: portal_features;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Whether the configuration is the default. If `true`, this configuration can be managed in the Dashboard and portal sessions will use this configuration unless it is overriden when creating the session.
     */
    is_default: boolean;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    login_page: portal_login_page;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * The name of the configuration.
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_portal_configuration.object;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
};
export namespace billing_portal_configuration {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_PORTAL_CONFIGURATION = 'billing_portal.configuration',
    }
}

