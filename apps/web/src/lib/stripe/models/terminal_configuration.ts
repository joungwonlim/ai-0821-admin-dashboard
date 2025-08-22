/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_configuration_configuration_resource_device_type_specific_config } from './terminal_configuration_configuration_resource_device_type_specific_config';
import type { terminal_configuration_configuration_resource_offline_config } from './terminal_configuration_configuration_resource_offline_config';
import type { terminal_configuration_configuration_resource_reboot_window } from './terminal_configuration_configuration_resource_reboot_window';
import type { terminal_configuration_configuration_resource_tipping } from './terminal_configuration_configuration_resource_tipping';
import type { terminal_configuration_configuration_resource_wifi_config } from './terminal_configuration_configuration_resource_wifi_config';
/**
 * A Configurations object represents how features should be configured for terminal readers.
 * For information about how to use it, see the [Terminal configurations documentation](https://docs.stripe.com/terminal/fleet/configurations-overview).
 */
export type terminal_configuration = {
    bbpos_wisepos_e?: terminal_configuration_configuration_resource_device_type_specific_config;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Whether this Configuration is the default for your account
     */
    is_account_default?: boolean | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String indicating the name of the Configuration object, set by the user
     */
    name?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: terminal_configuration.object;
    offline?: terminal_configuration_configuration_resource_offline_config;
    reboot_window?: terminal_configuration_configuration_resource_reboot_window;
    stripe_s700?: terminal_configuration_configuration_resource_device_type_specific_config;
    tipping?: terminal_configuration_configuration_resource_tipping;
    verifone_p400?: terminal_configuration_configuration_resource_device_type_specific_config;
    wifi?: terminal_configuration_configuration_resource_wifi_config;
};
export namespace terminal_configuration {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TERMINAL_CONFIGURATION = 'terminal.configuration',
    }
}

