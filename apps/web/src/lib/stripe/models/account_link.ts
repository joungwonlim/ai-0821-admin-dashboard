/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Account Links are the means by which a Connect platform grants a connected account permission to access
 * Stripe-hosted applications, such as Connect Onboarding.
 *
 * Related guide: [Connect Onboarding](https://stripe.com/docs/connect/custom/hosted-onboarding)
 */
export type account_link = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The timestamp at which this account link will expire.
     */
    expires_at: number;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: account_link.object;
    /**
     * The URL for the account link.
     */
    url: string;
};
export namespace account_link {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ACCOUNT_LINK = 'account_link',
    }
}

