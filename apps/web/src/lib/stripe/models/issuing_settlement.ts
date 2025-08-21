/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * When a non-stripe BIN is used, any use of an [issued card](https://stripe.com/docs/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
 */
export type issuing_settlement = {
    /**
     * The Bank Identification Number reflecting this settlement record.
     */
    bin: string;
    /**
     * The date that the transactions are cleared and posted to user's accounts.
     */
    clearing_date: number;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The total interchange received as reimbursement for the transactions.
     */
    interchange_fees_amount: number;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * The total net amount required to settle with the network.
     */
    net_total_amount: number;
    /**
     * The card network for this settlement report. One of ["visa", "maestro"]
     */
    network: issuing_settlement.network;
    /**
     * The total amount of fees owed to the network.
     */
    network_fees_amount: number;
    /**
     * The Settlement Identification Number assigned by the network.
     */
    network_settlement_identifier: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: issuing_settlement.object;
    /**
     * One of `international` or `uk_national_net`.
     */
    settlement_service: string;
    /**
     * The current processing status of this settlement.
     */
    status: issuing_settlement.status;
    /**
     * The total transaction amount reflected in this settlement.
     */
    transaction_amount: number;
    /**
     * The total number of transactions reflected in this settlement.
     */
    transaction_count: number;
};
export namespace issuing_settlement {
    /**
     * The card network for this settlement report. One of ["visa", "maestro"]
     */
    export enum network {
        MAESTRO = 'maestro',
        VISA = 'visa',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ISSUING_SETTLEMENT = 'issuing.settlement',
    }
    /**
     * The current processing status of this settlement.
     */
    export enum status {
        COMPLETE = 'complete',
        PENDING = 'pending',
    }
}

