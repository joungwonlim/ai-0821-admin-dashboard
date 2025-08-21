/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_paynow_display_qr_code = {
    /**
     * The raw data string used to generate QR code, it should be used together with QR code library.
     */
    data: string;
    /**
     * The URL to the hosted PayNow instructions page, which allows customers to view the PayNow QR code.
     */
    hosted_instructions_url?: string | null;
    /**
     * The image_url_png string used to render QR code
     */
    image_url_png: string;
    /**
     * The image_url_svg string used to render QR code
     */
    image_url_svg: string;
};

