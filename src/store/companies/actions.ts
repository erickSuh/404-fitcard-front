import api from 'services/api';
import { Dispatch } from 'redux';
import {
  loadRequest,
  loadSuccess,
  loadFailure,
  createSuccess,
  createFailure,
  createRequest,
  loadCompanySuccess,
  loadCompanyFailure,
} from './actionTypes';
import { Company } from './types';

export const loadCompany = (id: string) => async (dispatch: Dispatch) => {
  dispatch(loadRequest());
  const response = await api.get(`/companies/${id}`);

  if (response.status !== 200) {
    return dispatch(loadCompanyFailure());
  }
  return dispatch(loadCompanySuccess(response.data));
};

export const loadCompanies = () => async (dispatch: Dispatch) => {
  dispatch(loadRequest());
  const response = await api.get('/companies');

  if (response.status !== 200) {
    return dispatch(loadFailure());
  }
  return dispatch(loadSuccess(response.data));
};

export const createCompany = (company: Company) => async (dispatch: Dispatch) => {
  dispatch(createRequest());
  const response = await api.post('/companies', company);

  if (response.status !== 200) {
    return dispatch(createFailure());
  }
  return dispatch(createSuccess(response.data));
};

export const updateCompany = (company: Company, id: string, onSuccess?: () => void) => async (dispatch: Dispatch) => {
  dispatch(loadRequest());
  const response = await api.patch(`/companies/${id}`, company);

  if (response.status !== 200) {
    return dispatch(loadCompanyFailure());
  }
  dispatch(loadCompanySuccess(response.data));
  if (onSuccess) onSuccess();
  return true;
};

export const deleteCompany = (id: string, onSuccess?: () => void) => async (dispatch: Dispatch) => {
  dispatch(loadRequest());
  const response = await api.delete(`/companies/${id}`);

  if (response.status !== 200) {
    return dispatch(loadCompanyFailure());
  }
  dispatch(loadCompanySuccess(response.data));
  if (onSuccess) onSuccess();
  return true;
};
