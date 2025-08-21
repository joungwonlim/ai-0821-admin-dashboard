/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_annual_revenue } from './account_annual_revenue';
import type { account_monthly_estimated_revenue } from './account_monthly_estimated_revenue';
import type { address } from './address';
export type account_business_profile = {
    /**
     * The applicant's gross annual revenue for its preceding fiscal year.
     */
    annual_revenue?: account_annual_revenue | null;
    /**
     * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
     */
    estimated_worker_count?: number | null;
    /**
     * [The merchant category code for the account](/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
     */
    mcc?: string | null;
    /**
     * Whether the business is a minority-owned, women-owned, and/or LGBTQI+ -owned business.
     */
    minority_owned_business_designation?: Array<'lgbtqi_owned_business' | 'minority_owned_business' | 'none_of_these_apply' | 'prefer_not_to_answer' | 'women_owned_business'> | null;
    monthly_estimated_revenue?: account_monthly_estimated_revenue;
    /**
     * The customer-facing business name.
     */
    name?: string | null;
    /**
     * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
     */
    product_description?: string | null;
    /**
     * A publicly available mailing address for sending support issues to.
     */
    support_address?: address | null;
    /**
     * A publicly available email address for sending support issues to.
     */
    support_email?: string | null;
    /**
     * A publicly available phone number to call with support issues.
     */
    support_phone?: string | null;
    /**
     * A publicly available website for handling support issues.
     */
    support_url?: string | null;
    /**
     * The business's publicly available website.
     */
    url?: string | null;
};

