/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type gelato_report_document_options = {
    /**
     * Array of strings of allowed identity document types. If the provided identity document isn’t one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
     */
    allowed_types?: Array<'driving_license' | 'id_card' | 'passport'>;
    /**
     * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document’s extracted name and date of birth.
     */
    require_id_number?: boolean;
    /**
     * Disable image uploads, identity document images have to be captured using the device’s camera.
     */
    require_live_capture?: boolean;
    /**
     * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user’s face. [Learn more](https://stripe.com/docs/identity/selfie).
     */
    require_matching_selfie?: boolean;
};

