/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { currency_option } from './currency_option';
import type { custom_unit_amount } from './custom_unit_amount';
import type { deleted_product } from './deleted_product';
import type { price_tier } from './price_tier';
import type { product } from './product';
import type { recurring } from './recurring';
import type { transform_quantity } from './transform_quantity';
/**
 * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
 * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
 *
 * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
 *
 * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
 */
export type price = {
    /**
     * Whether the price can be used for new purchases.
     */
    active: boolean;
    /**
     * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
     */
    billing_scheme: price.billing_scheme;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: Record<string, currency_option>;
    /**
     * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
     */
    custom_unit_amount?: custom_unit_amount | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
     */
    lookup_key?: string | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * A brief description of the price, hidden from customers.
     */
    nickname?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: price.object;
    /**
     * The ID of the product this price is associated with.
     */
    product: (string | product | deleted_product);
    /**
     * The recurring components of a price such as `interval` and `usage_type`.
     */
    recurring?: recurring | null;
    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    tax_behavior?: price.tax_behavior | null;
    /**
     * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
     */
    tiers?: Array<price_tier>;
    /**
     * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
     */
    tiers_mode?: price.tiers_mode | null;
    /**
     * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
     */
    transform_quantity?: transform_quantity | null;
    /**
     * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
     */
    type: price.type;
    /**
     * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
     */
    unit_amount?: number | null;
    /**
     * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
     */
    unit_amount_decimal?: string | null;
};
export namespace price {
    /**
     * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
     */
    export enum billing_scheme {
        PER_UNIT = 'per_unit',
        TIERED = 'tiered',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PRICE = 'price',
    }
    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
        UNSPECIFIED = 'unspecified',
    }
    /**
     * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
     */
    export enum tiers_mode {
        GRADUATED = 'graduated',
        VOLUME = 'volume',
    }
    /**
     * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
     */
    export enum type {
        ONE_TIME = 'one_time',
        RECURRING = 'recurring',
    }
}

