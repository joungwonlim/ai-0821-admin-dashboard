/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
 */
export type tax_code = {
    /**
     * A detailed description of which types of products the tax code represents.
     */
    description: string;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * A short name for the tax code.
     */
    name: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_code.object;
};
export namespace tax_code {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_CODE = 'tax_code',
    }
}

