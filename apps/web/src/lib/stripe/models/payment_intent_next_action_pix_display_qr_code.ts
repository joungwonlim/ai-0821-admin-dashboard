/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_pix_display_qr_code = {
    /**
     * The raw data string used to generate QR code, it should be used together with QR code library.
     */
    data?: string;
    /**
     * The date (unix timestamp) when the PIX expires.
     */
    expires_at?: number;
    /**
     * The URL to the hosted pix instructions page, which allows customers to view the pix QR code.
     */
    hosted_instructions_url?: string;
    /**
     * The image_url_png string used to render png QR code
     */
    image_url_png?: string;
    /**
     * The image_url_svg string used to render svg QR code
     */
    image_url_svg?: string;
};

