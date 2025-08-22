/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_amount_by_source_type } from './balance_amount_by_source_type';
export type balance_net_available = {
    /**
     * Net balance amount, subtracting fees from platform-set pricing.
     */
    amount: number;
    /**
     * ID of the external account for this net balance (not expandable).
     */
    destination: string;
    source_types?: balance_amount_by_source_type;
};

