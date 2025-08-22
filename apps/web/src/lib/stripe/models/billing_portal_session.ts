/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_portal_configuration } from './billing_portal_configuration';
import type { portal_flows_flow } from './portal_flows_flow';
/**
 * The Billing customer portal is a Stripe-hosted UI for subscription and
 * billing management.
 *
 * A portal configuration describes the functionality and features that you
 * want to provide to your customers through the portal.
 *
 * A portal session describes the instantiation of the customer portal for
 * a particular customer. By visiting the session's URL, the customer
 * can manage their subscriptions and billing details. For security reasons,
 * sessions are short-lived and will expire if the customer does not visit the URL.
 * Create sessions on-demand when customers intend to manage their subscriptions
 * and billing details.
 *
 * Related guide: [Customer management](/customer-management)
 */
export type billing_portal_session = {
    /**
     * The configuration used by this session, describing the features available.
     */
    configuration: (string | billing_portal_configuration);
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The ID of the customer for this session.
     */
    customer: string;
    /**
     * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
     */
    flow?: portal_flows_flow | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
     */
    locale?: billing_portal_session.locale | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_portal_session.object;
    /**
     * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
     */
    on_behalf_of?: string | null;
    /**
     * The URL to redirect customers to when they click on the portal's link to return to your website.
     */
    return_url?: string | null;
    /**
     * The short-lived URL of the session that gives customers access to the customer portal.
     */
    url: string;
};
export namespace billing_portal_session {
    /**
     * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
     */
    export enum locale {
        AUTO = 'auto',
        BG = 'bg',
        CS = 'cs',
        DA = 'da',
        DE = 'de',
        EL = 'el',
        EN = 'en',
        EN_AU = 'en-AU',
        EN_CA = 'en-CA',
        EN_GB = 'en-GB',
        EN_IE = 'en-IE',
        EN_IN = 'en-IN',
        EN_NZ = 'en-NZ',
        EN_SG = 'en-SG',
        ES = 'es',
        ES_419 = 'es-419',
        ET = 'et',
        FI = 'fi',
        FIL = 'fil',
        FR = 'fr',
        FR_CA = 'fr-CA',
        HR = 'hr',
        HU = 'hu',
        ID = 'id',
        IT = 'it',
        JA = 'ja',
        KO = 'ko',
        LT = 'lt',
        LV = 'lv',
        MS = 'ms',
        MT = 'mt',
        NB = 'nb',
        NL = 'nl',
        PL = 'pl',
        PT = 'pt',
        PT_BR = 'pt-BR',
        RO = 'ro',
        RU = 'ru',
        SK = 'sk',
        SL = 'sl',
        SV = 'sv',
        TH = 'th',
        TR = 'tr',
        VI = 'vi',
        ZH = 'zh',
        ZH_HK = 'zh-HK',
        ZH_TW = 'zh-TW',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_PORTAL_SESSION = 'billing_portal.session',
    }
}

