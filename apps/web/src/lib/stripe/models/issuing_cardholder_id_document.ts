/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { file } from './file';
export type issuing_cardholder_id_document = {
    /**
     * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
     */
    back?: (string | file) | null;
    /**
     * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
     */
    front?: (string | file) | null;
};

