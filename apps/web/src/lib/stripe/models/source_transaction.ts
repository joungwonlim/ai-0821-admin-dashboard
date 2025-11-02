/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { source_transaction_ach_credit_transfer_data } from './source_transaction_ach_credit_transfer_data';
import type { source_transaction_chf_credit_transfer_data } from './source_transaction_chf_credit_transfer_data';
import type { source_transaction_gbp_credit_transfer_data } from './source_transaction_gbp_credit_transfer_data';
import type { source_transaction_paper_check_data } from './source_transaction_paper_check_data';
import type { source_transaction_sepa_credit_transfer_data } from './source_transaction_sepa_credit_transfer_data';
/**
 * Some payment methods have no required amount that a customer must send.
 * Customers can be instructed to send any amount, and it can be made up of
 * multiple transactions. As such, sources can have multiple associated
 * transactions.
 */
export type source_transaction = {
    ach_credit_transfer?: source_transaction_ach_credit_transfer_data;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
     */
    amount: number;
    chf_credit_transfer?: source_transaction_chf_credit_transfer_data;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    gbp_credit_transfer?: source_transaction_gbp_credit_transfer_data;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: source_transaction.object;
    paper_check?: source_transaction_paper_check_data;
    sepa_credit_transfer?: source_transaction_sepa_credit_transfer_data;
    /**
     * The ID of the source this transaction is attached to.
     */
    source: string;
    /**
     * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
     */
    status: string;
    /**
     * The type of source this transaction is attached to.
     */
    type: source_transaction.type;
};
export namespace source_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SOURCE_TRANSACTION = 'source_transaction',
    }
    /**
     * The type of source this transaction is attached to.
     */
    export enum type {
        ACH_CREDIT_TRANSFER = 'ach_credit_transfer',
        ACH_DEBIT = 'ach_debit',
        ALIPAY = 'alipay',
        BANCONTACT = 'bancontact',
        CARD = 'card',
        CARD_PRESENT = 'card_present',
        EPS = 'eps',
        GIROPAY = 'giropay',
        IDEAL = 'ideal',
        KLARNA = 'klarna',
        MULTIBANCO = 'multibanco',
        P24 = 'p24',
        SEPA_DEBIT = 'sepa_debit',
        SOFORT = 'sofort',
        THREE_D_SECURE = 'three_d_secure',
        WECHAT = 'wechat',
    }
}

