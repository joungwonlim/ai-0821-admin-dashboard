/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type account_branding_settings = {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
     */
    icon?: (string | file) | null;
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
     */
    logo?: (string | file) | null;
    /**
     * A CSS hex color value representing the primary branding color for this account
     */
    primary_color?: string | null;
    /**
     * A CSS hex color value representing the secondary branding color for this account
     */
    secondary_color?: string | null;
};

