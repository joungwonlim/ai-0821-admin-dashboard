/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_extended_authorization_extended_authorization } from './payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_extended_authorization_extended_authorization';
import type { payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_incremental_authorization_incremental_authorization } from './payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_incremental_authorization_incremental_authorization';
import type { payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture } from './payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture';
import type { payment_flows_private_payment_methods_card_details_api_resource_multicapture } from './payment_flows_private_payment_methods_card_details_api_resource_multicapture';
import type { payment_method_details_card_checks } from './payment_method_details_card_checks';
import type { payment_method_details_card_installments } from './payment_method_details_card_installments';
import type { payment_method_details_card_network_token } from './payment_method_details_card_network_token';
import type { payment_method_details_card_wallet } from './payment_method_details_card_wallet';
import type { three_d_secure_details_charge } from './three_d_secure_details_charge';
export type payment_method_details_card = {
    /**
     * The authorized amount.
     */
    amount_authorized?: number | null;
    /**
     * Authorization code on the charge.
     */
    authorization_code?: string | null;
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand?: string | null;
    /**
     * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
     */
    capture_before?: number;
    /**
     * Check results by Card networks on Card address and CVC at time of payment.
     */
    checks?: payment_method_details_card_checks | null;
    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country?: string | null;
    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;
    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;
    extended_authorization?: payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_extended_authorization_extended_authorization;
    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
     *
     * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
     */
    fingerprint?: string | null;
    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding?: string | null;
    incremental_authorization?: payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_incremental_authorization_incremental_authorization;
    /**
     * Installment details for this payment.
     *
     * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
     */
    installments?: payment_method_details_card_installments | null;
    /**
     * The last four digits of the card.
     */
    last4?: string | null;
    /**
     * ID of the mandate used to make this payment or created by it.
     */
    mandate?: string | null;
    multicapture?: payment_flows_private_payment_methods_card_details_api_resource_multicapture;
    /**
     * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    network?: string | null;
    /**
     * If this card has network token credentials, this contains the details of the network token credentials.
     */
    network_token?: payment_method_details_card_network_token | null;
    /**
     * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
     */
    network_transaction_id?: string | null;
    overcapture?: payment_flows_private_payment_methods_card_details_api_resource_enterprise_features_overcapture_overcapture;
    /**
     * Status of a card based on the card issuer.
     */
    regulated_status?: payment_method_details_card.regulated_status | null;
    /**
     * Populated if this transaction used 3D Secure authentication.
     */
    three_d_secure?: three_d_secure_details_charge | null;
    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet?: payment_method_details_card_wallet | null;
};
export namespace payment_method_details_card {
    /**
     * Status of a card based on the card issuer.
     */
    export enum regulated_status {
        REGULATED = 'regulated',
        UNREGULATED = 'unregulated',
    }
}

