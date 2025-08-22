/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_card_authorization_controls } from './issuing_card_authorization_controls';
import type { issuing_card_shipping } from './issuing_card_shipping';
import type { issuing_card_wallets } from './issuing_card_wallets';
import type { issuing_cardholder } from './issuing_cardholder';
import type { issuing_personalization_design } from './issuing_personalization_design';
/**
 * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
 */
export type issuing_card = {
    /**
     * The brand of the card.
     */
    brand: string;
    /**
     * The reason why the card was canceled.
     */
    cancellation_reason?: issuing_card.cancellation_reason | null;
    cardholder: issuing_cardholder;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Supported currencies are `usd` in the US, `eur` in the EU, and `gbp` in the UK.
     */
    currency: string;
    /**
     * The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
     */
    cvc?: string;
    /**
     * The expiration month of the card.
     */
    exp_month: number;
    /**
     * The expiration year of the card.
     */
    exp_year: number;
    /**
     * The financial account this card is attached to.
     */
    financial_account?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The last 4 digits of the card number.
     */
    last4: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
     */
    number?: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_card.object;
    /**
     * The personalization design object belonging to this card.
     */
    personalization_design?: (string | issuing_personalization_design) | null;
    /**
     * The latest card that replaces this card, if any.
     */
    replaced_by?: (string | issuing_card) | null;
    /**
     * The card this card replaces, if any.
     */
    replacement_for?: (string | issuing_card) | null;
    /**
     * The reason why the previous card needed to be replaced.
     */
    replacement_reason?: issuing_card.replacement_reason | null;
    /**
     * Where and how the card will be shipped.
     */
    shipping?: issuing_card_shipping | null;
    spending_controls: issuing_card_authorization_controls;
    /**
     * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
     */
    status: issuing_card.status;
    /**
     * The type of the card.
     */
    type: issuing_card.type;
    /**
     * Information relating to digital wallets (like Apple Pay and Google Pay).
     */
    wallets?: issuing_card_wallets | null;
};
export namespace issuing_card {
    /**
     * The reason why the card was canceled.
     */
    export enum cancellation_reason {
        DESIGN_REJECTED = 'design_rejected',
        LOST = 'lost',
        STOLEN = 'stolen',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_CARD = 'issuing.card',
    }
    /**
     * The reason why the previous card needed to be replaced.
     */
    export enum replacement_reason {
        DAMAGED = 'damaged',
        EXPIRED = 'expired',
        LOST = 'lost',
        STOLEN = 'stolen',
    }
    /**
     * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
     */
    export enum status {
        ACTIVE = 'active',
        CANCELED = 'canceled',
        INACTIVE = 'inactive',
    }
    /**
     * The type of the card.
     */
    export enum type {
        PHYSICAL = 'physical',
        VIRTUAL = 'virtual',
    }
}

