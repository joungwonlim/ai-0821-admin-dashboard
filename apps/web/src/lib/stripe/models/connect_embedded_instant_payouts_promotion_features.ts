/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type connect_embedded_instant_payouts_promotion_features = {
    /**
     * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
     */
    disable_stripe_user_authentication: boolean;
    /**
     * Whether external account collection is enabled. This feature can only be `false` for accounts where you’re responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
     */
    external_account_collection: boolean;
    /**
     * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
     */
    instant_payouts: boolean;
};

