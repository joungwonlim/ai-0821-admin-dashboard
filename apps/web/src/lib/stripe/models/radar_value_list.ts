/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { radar_value_list_item } from './radar_value_list_item';
/**
 * Value lists allow you to group values together which can then be referenced in rules.
 *
 * Related guide: [Default Stripe lists](https://stripe.com/docs/radar/lists#managing-list-items)
 */
export type radar_value_list = {
    /**
     * The name of the value list for use in rules.
     */
    alias: string;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The name or email address of the user who created this value list.
     */
    created_by: string;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`.
     */
    item_type: radar_value_list.item_type;
    /**
     * List of items contained within this value list.
     */
    list_items: {
        /**
         * Details about each object.
         */
        data: Array<radar_value_list_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: radar_value_list.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * The name of the value list.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: radar_value_list.object;
};
export namespace radar_value_list {
    /**
     * The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`.
     */
    export enum item_type {
        CARD_BIN = 'card_bin',
        CARD_FINGERPRINT = 'card_fingerprint',
        CASE_SENSITIVE_STRING = 'case_sensitive_string',
        COUNTRY = 'country',
        CUSTOMER_ID = 'customer_id',
        EMAIL = 'email',
        IP_ADDRESS = 'ip_address',
        SEPA_DEBIT_FINGERPRINT = 'sepa_debit_fingerprint',
        STRING = 'string',
        US_BANK_ACCOUNT_FINGERPRINT = 'us_bank_account_fingerprint',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
}

