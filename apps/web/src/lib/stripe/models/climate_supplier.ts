/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { climate_removals_location } from './climate_removals_location';
/**
 * A supplier of carbon removal.
 */
export type climate_supplier = {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Link to a webpage to learn more about the supplier.
     */
    info_url: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The locations in which this supplier operates.
     */
    locations: Array<climate_removals_location>;
    /**
     * Name of this carbon removal supplier.
     */
    name: string;
    /**
     * String representing the object’s type. Objects of the same type share the same value.
     */
    object: climate_supplier.object;
    /**
     * The scientific pathway used for carbon removal.
     */
    removal_pathway: climate_supplier.removal_pathway;
};
export namespace climate_supplier {
    /**
     * String representing the object’s type. Objects of the same type share the same value.
     */
    export enum object {
        CLIMATE_SUPPLIER = 'climate.supplier',
    }
    /**
     * The scientific pathway used for carbon removal.
     */
    export enum removal_pathway {
        BIOMASS_CARBON_REMOVAL_AND_STORAGE = 'biomass_carbon_removal_and_storage',
        DIRECT_AIR_CAPTURE = 'direct_air_capture',
        ENHANCED_WEATHERING = 'enhanced_weathering',
    }
}

