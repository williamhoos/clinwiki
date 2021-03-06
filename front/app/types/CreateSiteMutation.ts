/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CreateSiteInput, FilterKind, FieldDisplay } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateSiteMutation
// ====================================================

export interface CreateSiteMutation_createSite_site_editors {
  __typename: "User";
  /**
   * Email
   */
  email: string;
}

export interface CreateSiteMutation_createSite_site_owners {
  __typename: "User";
  /**
   * Email
   */
  email: string;
}

export interface CreateSiteMutation_createSite_site_siteView_study_basicSections {
  __typename: "SiteStudyBasicGenericSection";
  hide: boolean;
  title: string;
  name: string;
}

export interface CreateSiteMutation_createSite_site_siteView_study_extendedSections_selected {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_study_extendedSections {
  __typename: "SiteStudyExtendedGenericSection";
  fields: string[];
  hide: boolean;
  order: number | null;
  selected: CreateSiteMutation_createSite_site_siteView_study_extendedSections_selected;
  title: string;
  name: string;
}

export interface CreateSiteMutation_createSite_site_siteView_study {
  __typename: "SiteStudyPage";
  allFields: string[];
  basicSections: CreateSiteMutation_createSite_site_siteView_study_basicSections[];
  extendedSections: CreateSiteMutation_createSite_site_siteView_study_extendedSections[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_aggs_fields_preselected {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_aggs_fields_visibleOptions {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_aggs_fields {
  __typename: "SiteAggField";
  name: string;
  display: FieldDisplay;
  preselected: CreateSiteMutation_createSite_site_siteView_search_aggs_fields_preselected;
  visibleOptions: CreateSiteMutation_createSite_site_siteView_search_aggs_fields_visibleOptions;
  autoSuggest: boolean;
  rank: number | null;
}

export interface CreateSiteMutation_createSite_site_siteView_search_aggs_selected {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_aggs {
  __typename: "SiteAggSection";
  fields: CreateSiteMutation_createSite_site_siteView_search_aggs_fields[];
  selected: CreateSiteMutation_createSite_site_siteView_search_aggs_selected;
}

export interface CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields_preselected {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields_visibleOptions {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields {
  __typename: "SiteAggField";
  name: string;
  display: FieldDisplay;
  preselected: CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields_preselected;
  visibleOptions: CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields_visibleOptions;
  rank: number | null;
  autoSuggest: boolean;
}

export interface CreateSiteMutation_createSite_site_siteView_search_crowdAggs_selected {
  __typename: "SiteSelect";
  kind: FilterKind;
  values: string[];
}

export interface CreateSiteMutation_createSite_site_siteView_search_crowdAggs {
  __typename: "SiteAggSection";
  fields: CreateSiteMutation_createSite_site_siteView_search_crowdAggs_fields[];
  selected: CreateSiteMutation_createSite_site_siteView_search_crowdAggs_selected;
}

export interface CreateSiteMutation_createSite_site_siteView_search {
  __typename: "SiteSearchPage";
  fields: string[];
  aggs: CreateSiteMutation_createSite_site_siteView_search_aggs;
  crowdAggs: CreateSiteMutation_createSite_site_siteView_search_crowdAggs;
}

export interface CreateSiteMutation_createSite_site_siteView {
  __typename: "SiteView";
  id: number;
  study: CreateSiteMutation_createSite_site_siteView_study;
  search: CreateSiteMutation_createSite_site_siteView_search;
}

export interface CreateSiteMutation_createSite_site {
  __typename: "Site";
  id: number;
  editors: CreateSiteMutation_createSite_site_editors[];
  name: string;
  skipLanding: boolean | null;
  subdomain: string;
  owners: CreateSiteMutation_createSite_site_owners[];
  siteView: CreateSiteMutation_createSite_site_siteView;
}

export interface CreateSiteMutation_createSite {
  __typename: "CreateSitePayload";
  site: CreateSiteMutation_createSite_site | null;
  errors: string[] | null;
}

export interface CreateSiteMutation {
  createSite: CreateSiteMutation_createSite | null;
}

export interface CreateSiteMutationVariables {
  input: CreateSiteInput;
}
