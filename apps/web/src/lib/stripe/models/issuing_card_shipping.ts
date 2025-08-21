/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address } from './address';
import type { issuing_card_shipping_address_validation } from './issuing_card_shipping_address_validation';
import type { issuing_card_shipping_customs } from './issuing_card_shipping_customs';
export type issuing_card_shipping = {
    address: address;
    /**
     * Address validation details for the shipment.
     */
    address_validation?: issuing_card_shipping_address_validation | null;
    /**
     * The delivery company that shipped a card.
     */
    carrier?: issuing_card_shipping.carrier | null;
    /**
     * Additional information that may be required for clearing customs.
     */
    customs?: issuing_card_shipping_customs | null;
    /**
     * A unix timestamp representing a best estimate of when the card will be delivered.
     */
    eta?: number | null;
    /**
     * Recipient name.
     */
    name: string;
    /**
     * The phone number of the receiver of the shipment. Our courier partners will use this number to contact you in the event of card delivery issues. For individual shipments to the EU/UK, if this field is empty, we will provide them with the phone number provided when the cardholder was initially created.
     */
    phone_number?: string | null;
    /**
     * Whether a signature is required for card delivery. This feature is only supported for US users. Standard shipping service does not support signature on delivery. The default value for standard shipping service is false and for express and priority services is true.
     */
    require_signature?: boolean | null;
    /**
     * Shipment service, such as `standard` or `express`.
     */
    service: issuing_card_shipping.service;
    /**
     * The delivery status of the card.
     */
    status?: issuing_card_shipping.status | null;
    /**
     * A tracking number for a card shipment.
     */
    tracking_number?: string | null;
    /**
     * A link to the shipping carrier's site where you can view detailed information about a card shipment.
     */
    tracking_url?: string | null;
    /**
     * Packaging options.
     */
    type: issuing_card_shipping.type;
};
export namespace issuing_card_shipping {
    /**
     * The delivery company that shipped a card.
     */
    export enum carrier {
        DHL = 'dhl',
        FEDEX = 'fedex',
        ROYAL_MAIL = 'royal_mail',
        USPS = 'usps',
    }
    /**
     * Shipment service, such as `standard` or `express`.
     */
    export enum service {
        EXPRESS = 'express',
        PRIORITY = 'priority',
        STANDARD = 'standard',
    }
    /**
     * The delivery status of the card.
     */
    export enum status {
        CANCELED = 'canceled',
        DELIVERED = 'delivered',
        FAILURE = 'failure',
        PENDING = 'pending',
        RETURNED = 'returned',
        SHIPPED = 'shipped',
        SUBMITTED = 'submitted',
    }
    /**
     * Packaging options.
     */
    export enum type {
        BULK = 'bulk',
        INDIVIDUAL = 'individual',
    }
}

