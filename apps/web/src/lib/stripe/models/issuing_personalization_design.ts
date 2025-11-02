/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
import type { issuing_personalization_design_carrier_text } from './issuing_personalization_design_carrier_text';
import type { issuing_personalization_design_preferences } from './issuing_personalization_design_preferences';
import type { issuing_personalization_design_rejection_reasons } from './issuing_personalization_design_rejection_reasons';
import type { issuing_physical_bundle } from './issuing_physical_bundle';
/**
 * A Personalization Design is a logical grouping of a Physical Bundle, card logo, and carrier text that represents a product line.
 */
export type issuing_personalization_design = {
    /**
     * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
     */
    card_logo?: (string | file) | null;
    /**
     * Hash containing carrier text, for use with physical bundles that support carrier text.
     */
    carrier_text?: issuing_personalization_design_carrier_text | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
     */
    lookup_key?: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * Friendly display name.
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_personalization_design.object;
    /**
     * The physical bundle object belonging to this personalization design.
     */
    physical_bundle: (string | issuing_physical_bundle);
    preferences: issuing_personalization_design_preferences;
    rejection_reasons: issuing_personalization_design_rejection_reasons;
    /**
     * Whether this personalization design can be used to create cards.
     */
    status: issuing_personalization_design.status;
};
export namespace issuing_personalization_design {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_PERSONALIZATION_DESIGN = 'issuing.personalization_design',
    }
    /**
     * Whether this personalization design can be used to create cards.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        REJECTED = 'rejected',
        REVIEW = 'review',
    }
}

