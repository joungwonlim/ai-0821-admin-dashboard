/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links_resource_completion_behavior_confirmation_page } from './payment_links_resource_completion_behavior_confirmation_page';
import type { payment_links_resource_completion_behavior_redirect } from './payment_links_resource_completion_behavior_redirect';
export type payment_links_resource_after_completion = {
    hosted_confirmation?: payment_links_resource_completion_behavior_confirmation_page;
    redirect?: payment_links_resource_completion_behavior_redirect;
    /**
     * The specified behavior after the purchase is complete.
     */
    type: payment_links_resource_after_completion.type;
};
export namespace payment_links_resource_after_completion {
    /**
     * The specified behavior after the purchase is complete.
     */
    export enum type {
        HOSTED_CONFIRMATION = 'hosted_confirmation',
        REDIRECT = 'redirect',
    }
}

