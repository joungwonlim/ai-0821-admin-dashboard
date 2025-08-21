/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_tax_settings_defaults } from './tax_product_resource_tax_settings_defaults';
import type { tax_product_resource_tax_settings_head_office } from './tax_product_resource_tax_settings_head_office';
import type { tax_product_resource_tax_settings_status_details } from './tax_product_resource_tax_settings_status_details';
/**
 * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.
 *
 * Related guide: [Using the Settings API](https://stripe.com/docs/tax/settings-api)
 */
export type tax_settings = {
    defaults: tax_product_resource_tax_settings_defaults;
    /**
     * The place where your business is located.
     */
    head_office?: tax_product_resource_tax_settings_head_office | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_settings.object;
    /**
     * The status of the Tax `Settings`.
     */
    status: tax_settings.status;
    status_details: tax_product_resource_tax_settings_status_details;
};
export namespace tax_settings {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_SETTINGS = 'tax.settings',
    }
    /**
     * The status of the Tax `Settings`.
     */
    export enum status {
        ACTIVE = 'active',
        PENDING = 'pending',
    }
}

