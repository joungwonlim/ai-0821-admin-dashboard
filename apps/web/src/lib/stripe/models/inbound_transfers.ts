/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { inbound_transfers_payment_method_details_us_bank_account } from './inbound_transfers_payment_method_details_us_bank_account';
import type { treasury_shared_resource_billing_details } from './treasury_shared_resource_billing_details';
export type inbound_transfers = {
    billing_details: treasury_shared_resource_billing_details;
    /**
     * The type of the payment method used in the InboundTransfer.
     */
    type: inbound_transfers.type;
    us_bank_account?: inbound_transfers_payment_method_details_us_bank_account;
};
export namespace inbound_transfers {
    /**
     * The type of the payment method used in the InboundTransfer.
     */
    export enum type {
        US_BANK_ACCOUNT = 'us_bank_account',
    }
}

