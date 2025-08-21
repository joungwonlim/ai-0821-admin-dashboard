/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_next_action_wechat_pay_display_qr_code = {
    /**
     * The data being used to generate QR code
     */
    data: string;
    /**
     * The URL to the hosted WeChat Pay instructions page, which allows customers to view the WeChat Pay QR code.
     */
    hosted_instructions_url: string;
    /**
     * The base64 image data for a pre-generated QR code
     */
    image_data_url: string;
    /**
     * The image_url_png string used to render QR code
     */
    image_url_png: string;
    /**
     * The image_url_svg string used to render QR code
     */
    image_url_svg: string;
};

