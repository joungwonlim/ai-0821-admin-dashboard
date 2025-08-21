/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { external_account_requirements } from './external_account_requirements';
/**
 * These bank accounts are payment methods on `Customer` objects.
 *
 * On the other hand [External Accounts](/api#external_accounts) are transfer
 * destinations on `Account` objects for connected accounts.
 * They can be bank accounts or debit cards as well, and are documented in the links above.
 *
 * Related guide: [Bank debits and transfers](/payments/bank-debits-transfers)
 */
export type bank_account = {
    /**
     * The account this bank account belongs to. Only applicable on Accounts (not customers or recipients) This property is only available when returned as an [External Account](/api/external_account_bank_accounts/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
     */
    account?: (string | account) | null;
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string | null;
    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: string | null;
    /**
     * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
     */
    account_type?: string | null;
    /**
     * A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
     */
    available_payout_methods?: Array<'instant' | 'standard'> | null;
    /**
     * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
     */
    bank_name?: string | null;
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: string;
    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
     */
    currency: string;
    /**
     * The ID of the customer that the bank account is associated with.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * Whether this bank account is the default external account for its currency.
     */
    default_for_currency?: boolean | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Information about the [upcoming new requirements for the bank account](https://stripe.com/docs/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when.
     */
    future_requirements?: external_account_requirements | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The last four digits of the bank account number.
     */
    last4: string;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: bank_account.object;
    /**
     * Information about the requirements for the bank account, including what information needs to be collected.
     */
    requirements?: external_account_requirements | null;
    /**
     * The routing transit number for the bank account.
     */
    routing_number?: string | null;
    /**
     * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a payout sent to this bank account fails, we'll set the status to `errored` and will not continue to send [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) until the bank details are updated.
     *
     * For external accounts, possible values are `new`, `errored` and `verification_failed`. If a payout fails, the status is set to `errored` and scheduled payouts are stopped until account details are updated. In the US and India, if we can't [verify the owner of the bank account](https://support.stripe.com/questions/bank-account-ownership-verification), we'll set the status to `verification_failed`. Other validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply.
     */
    status: string;
};
export namespace bank_account {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BANK_ACCOUNT = 'bank_account',
    }
}

