/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_card_installments_plan = {
    /**
     * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
     */
    count?: number | null;
    /**
     * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
     * One of `month`.
     */
    interval?: payment_method_details_card_installments_plan.interval | null;
    /**
     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
     */
    type: payment_method_details_card_installments_plan.type;
};
export namespace payment_method_details_card_installments_plan {
    /**
     * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
     * One of `month`.
     */
    export enum interval {
        MONTH = 'month',
    }
    /**
     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
     */
    export enum type {
        BONUS = 'bonus',
        FIXED_COUNT = 'fixed_count',
        REVOLVING = 'revolving',
    }
}

