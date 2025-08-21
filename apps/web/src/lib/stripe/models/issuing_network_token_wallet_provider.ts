/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_network_token_address } from './issuing_network_token_address';
export type issuing_network_token_wallet_provider = {
    /**
     * The wallet provider-given account ID of the digital wallet the token belongs to.
     */
    account_id?: string;
    /**
     * An evaluation on the trustworthiness of the wallet account between 1 and 5. A higher score indicates more trustworthy.
     */
    account_trust_score?: number;
    /**
     * The method used for tokenizing a card.
     */
    card_number_source?: issuing_network_token_wallet_provider.card_number_source;
    cardholder_address?: issuing_network_token_address;
    /**
     * The name of the cardholder tokenizing the card.
     */
    cardholder_name?: string;
    /**
     * An evaluation on the trustworthiness of the device. A higher score indicates more trustworthy.
     */
    device_trust_score?: number;
    /**
     * The hashed email address of the cardholder's account with the wallet provider.
     */
    hashed_account_email_address?: string;
    /**
     * The reasons for suggested tokenization given by the card network.
     */
    reason_codes?: Array<'account_card_too_new' | 'account_recently_changed' | 'account_too_new' | 'account_too_new_since_launch' | 'additional_device' | 'data_expired' | 'defer_id_v_decision' | 'device_recently_lost' | 'good_activity_history' | 'has_suspended_tokens' | 'high_risk' | 'inactive_account' | 'long_account_tenure' | 'low_account_score' | 'low_device_score' | 'low_phone_number_score' | 'network_service_error' | 'outside_home_territory' | 'provisioning_cardholder_mismatch' | 'provisioning_device_and_cardholder_mismatch' | 'provisioning_device_mismatch' | 'same_device_no_prior_authentication' | 'same_device_successful_prior_authentication' | 'software_update' | 'suspicious_activity' | 'too_many_different_cardholders' | 'too_many_recent_attempts' | 'too_many_recent_tokens'>;
    /**
     * The recommendation on responding to the tokenization request.
     */
    suggested_decision?: issuing_network_token_wallet_provider.suggested_decision;
    /**
     * The version of the standard for mapping reason codes followed by the wallet provider.
     */
    suggested_decision_version?: string;
};
export namespace issuing_network_token_wallet_provider {
    /**
     * The method used for tokenizing a card.
     */
    export enum card_number_source {
        APP = 'app',
        MANUAL = 'manual',
        ON_FILE = 'on_file',
        OTHER = 'other',
    }
    /**
     * The recommendation on responding to the tokenization request.
     */
    export enum suggested_decision {
        APPROVE = 'approve',
        DECLINE = 'decline',
        REQUIRE_AUTH = 'require_auth',
    }
}

