/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { destination_details_unimplemented } from './destination_details_unimplemented';
import type { refund_destination_details_blik } from './refund_destination_details_blik';
import type { refund_destination_details_br_bank_transfer } from './refund_destination_details_br_bank_transfer';
import type { refund_destination_details_card } from './refund_destination_details_card';
import type { refund_destination_details_eu_bank_transfer } from './refund_destination_details_eu_bank_transfer';
import type { refund_destination_details_gb_bank_transfer } from './refund_destination_details_gb_bank_transfer';
import type { refund_destination_details_jp_bank_transfer } from './refund_destination_details_jp_bank_transfer';
import type { refund_destination_details_multibanco } from './refund_destination_details_multibanco';
import type { refund_destination_details_mx_bank_transfer } from './refund_destination_details_mx_bank_transfer';
import type { refund_destination_details_p24 } from './refund_destination_details_p24';
import type { refund_destination_details_paypal } from './refund_destination_details_paypal';
import type { refund_destination_details_swish } from './refund_destination_details_swish';
import type { refund_destination_details_th_bank_transfer } from './refund_destination_details_th_bank_transfer';
import type { refund_destination_details_us_bank_transfer } from './refund_destination_details_us_bank_transfer';
export type refund_destination_details = {
    affirm?: destination_details_unimplemented;
    afterpay_clearpay?: destination_details_unimplemented;
    alipay?: destination_details_unimplemented;
    alma?: destination_details_unimplemented;
    amazon_pay?: destination_details_unimplemented;
    au_bank_transfer?: destination_details_unimplemented;
    blik?: refund_destination_details_blik;
    br_bank_transfer?: refund_destination_details_br_bank_transfer;
    card?: refund_destination_details_card;
    cashapp?: destination_details_unimplemented;
    customer_cash_balance?: destination_details_unimplemented;
    eps?: destination_details_unimplemented;
    eu_bank_transfer?: refund_destination_details_eu_bank_transfer;
    gb_bank_transfer?: refund_destination_details_gb_bank_transfer;
    giropay?: destination_details_unimplemented;
    grabpay?: destination_details_unimplemented;
    jp_bank_transfer?: refund_destination_details_jp_bank_transfer;
    klarna?: destination_details_unimplemented;
    multibanco?: refund_destination_details_multibanco;
    mx_bank_transfer?: refund_destination_details_mx_bank_transfer;
    nz_bank_transfer?: destination_details_unimplemented;
    p24?: refund_destination_details_p24;
    paynow?: destination_details_unimplemented;
    paypal?: refund_destination_details_paypal;
    pix?: destination_details_unimplemented;
    revolut?: destination_details_unimplemented;
    sofort?: destination_details_unimplemented;
    swish?: refund_destination_details_swish;
    th_bank_transfer?: refund_destination_details_th_bank_transfer;
    /**
     * The type of transaction-specific details of the payment method used in the refund (e.g., `card`). An additional hash is included on `destination_details` with a name matching this value. It contains information specific to the refund transaction.
     */
    type: string;
    us_bank_transfer?: refund_destination_details_us_bank_transfer;
    wechat_pay?: destination_details_unimplemented;
    zip?: destination_details_unimplemented;
};

