/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type terminal_configuration_configuration_resource_enterprise_tls_wifi = {
    /**
     * A File ID representing a PEM file containing the server certificate
     */
    ca_certificate_file?: string;
    /**
     * A File ID representing a PEM file containing the client certificate
     */
    client_certificate_file: string;
    /**
     * A File ID representing a PEM file containing the client RSA private key
     */
    private_key_file: string;
    /**
     * Password for the private key file
     */
    private_key_file_password?: string;
    /**
     * Name of the WiFi network
     */
    ssid: string;
};

