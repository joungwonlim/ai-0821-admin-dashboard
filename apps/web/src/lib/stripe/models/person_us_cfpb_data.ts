/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { person_ethnicity_details } from './person_ethnicity_details';
import type { person_race_details } from './person_race_details';
export type person_us_cfpb_data = {
    /**
     * The persons ethnicity details
     */
    ethnicity_details?: person_ethnicity_details | null;
    /**
     * The persons race details
     */
    race_details?: person_race_details | null;
    /**
     * The persons self-identified gender
     */
    self_identified_gender?: string | null;
};

