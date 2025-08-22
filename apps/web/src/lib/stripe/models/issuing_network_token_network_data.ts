/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { issuing_network_token_device } from './issuing_network_token_device';
import type { issuing_network_token_mastercard } from './issuing_network_token_mastercard';
import type { issuing_network_token_visa } from './issuing_network_token_visa';
import type { issuing_network_token_wallet_provider } from './issuing_network_token_wallet_provider';
export type issuing_network_token_network_data = {
    device?: issuing_network_token_device;
    mastercard?: issuing_network_token_mastercard;
    /**
     * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
     */
    type: issuing_network_token_network_data.type;
    visa?: issuing_network_token_visa;
    wallet_provider?: issuing_network_token_wallet_provider;
};
export namespace issuing_network_token_network_data {
    /**
     * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
     */
    export enum type {
        MASTERCARD = 'mastercard',
        VISA = 'visa',
    }
}

