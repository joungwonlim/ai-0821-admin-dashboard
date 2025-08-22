/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_requirements_alternative = {
    /**
     * Fields that can be provided to satisfy all fields in `original_fields_due`.
     */
    alternative_fields_due: Array<string>;
    /**
     * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
     */
    original_fields_due: Array<string>;
};

