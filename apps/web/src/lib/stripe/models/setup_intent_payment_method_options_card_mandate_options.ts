/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type setup_intent_payment_method_options_card_mandate_options = {
    /**
     * Amount to be charged for future payments.
     */
    amount: number;
    /**
     * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
     */
    amount_type: setup_intent_payment_method_options_card_mandate_options.amount_type;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * A description of the mandate or subscription that is meant to be displayed to the customer.
     */
    description?: string | null;
    /**
     * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
     */
    end_date?: number | null;
    /**
     * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
     */
    interval: setup_intent_payment_method_options_card_mandate_options.interval;
    /**
     * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
     */
    interval_count?: number | null;
    /**
     * Unique identifier for the mandate or subscription.
     */
    reference: string;
    /**
     * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
     */
    start_date: number;
    /**
     * Specifies the type of mandates supported. Possible values are `india`.
     */
    supported_types?: Array<'india'> | null;
};
export namespace setup_intent_payment_method_options_card_mandate_options {
    /**
     * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
     */
    export enum amount_type {
        FIXED = 'fixed',
        MAXIMUM = 'maximum',
    }
    /**
     * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
     */
    export enum interval {
        DAY = 'day',
        MONTH = 'month',
        SPORADIC = 'sporadic',
        WEEK = 'week',
        YEAR = 'year',
    }
}

