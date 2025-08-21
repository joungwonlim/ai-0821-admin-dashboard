/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type deleted_plan = {
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
    object: deleted_plan.object;
};
export namespace deleted_plan {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PLAN = 'plan',
    }
}

