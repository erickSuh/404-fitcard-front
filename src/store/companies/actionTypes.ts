import { action } from 'typesafe-actions';
import { CompaniesTypes, Company } from './types';

export const loadRequest = () => action(CompaniesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Company[]) => action(CompaniesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CompaniesTypes.LOAD_FAILURE);

export const loadCompanySuccess = (data: Company) => action(CompaniesTypes.LOAD_COMPANY_SUCCESS, { data });
export const loadCompanyFailure = () => action(CompaniesTypes.LOAD_COMPANY_FAILURE);

export const createRequest = () => action(CompaniesTypes.CREATE_REQUEST);
export const createSuccess = (data: Company) => action(CompaniesTypes.CREATE_SUCCESS, { data });
export const createFailure = () => action(CompaniesTypes.CREATE_FAILURE);
