/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_configuration_configuration_resource_enterprise_peap_wifi } from './terminal_configuration_configuration_resource_enterprise_peap_wifi';
import type { terminal_configuration_configuration_resource_enterprise_tls_wifi } from './terminal_configuration_configuration_resource_enterprise_tls_wifi';
import type { terminal_configuration_configuration_resource_personal_psk_wifi } from './terminal_configuration_configuration_resource_personal_psk_wifi';
export type terminal_configuration_configuration_resource_wifi_config = {
    enterprise_eap_peap?: terminal_configuration_configuration_resource_enterprise_peap_wifi;
    enterprise_eap_tls?: terminal_configuration_configuration_resource_enterprise_tls_wifi;
    personal_psk?: terminal_configuration_configuration_resource_personal_psk_wifi;
    /**
     * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
     */
    type: terminal_configuration_configuration_resource_wifi_config.type;
};
export namespace terminal_configuration_configuration_resource_wifi_config {
    /**
     * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
     */
    export enum type {
        ENTERPRISE_EAP_PEAP = 'enterprise_eap_peap',
        ENTERPRISE_EAP_TLS = 'enterprise_eap_tls',
        PERSONAL_PSK = 'personal_psk',
    }
}

