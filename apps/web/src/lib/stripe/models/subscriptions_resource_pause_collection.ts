/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
 * should be paused.
 */
export type subscriptions_resource_pause_collection = {
    /**
     * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
     */
    behavior: subscriptions_resource_pause_collection.behavior;
    /**
     * The time after which the subscription will resume collecting payments.
     */
    resumes_at?: number | null;
};
export namespace subscriptions_resource_pause_collection {
    /**
     * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
     */
    export enum behavior {
        KEEP_AS_DRAFT = 'keep_as_draft',
        MARK_UNCOLLECTIBLE = 'mark_uncollectible',
        VOID = 'void',
    }
}

