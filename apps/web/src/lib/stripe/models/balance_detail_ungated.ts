/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_amount } from './balance_amount';
export type balance_detail_ungated = {
    /**
     * Funds that are available for use.
     */
    available: Array<balance_amount>;
    /**
     * Funds that are pending
     */
    pending: Array<balance_amount>;
};

