/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_radar_value_list = {
    /**
     * Always true for a deleted object
     */
    deleted: boolean;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: deleted_radar_value_list.object;
};
export namespace deleted_radar_value_list {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        RADAR_VALUE_LIST = 'radar.value_list',
    }
}

