/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { quote } from './quote';
export type quotes_resource_from_quote = {
    /**
     * Whether this quote is a revision of a different quote.
     */
    is_revision: boolean;
    /**
     * The quote that was cloned.
     */
    quote: (string | quote);
};

