import api from 'services/api';
import { loadRequest, loadSuccess, loadFailure, createSuccess, createFailure, createRequest } from './actionTypes';
import { Company } from './types';

export const loadCompanies = () => async (dispatch: any) => {
  dispatch(loadRequest());
  const response = await api.get('/companies');

  if (response.status !== 200) {
    return dispatch(loadFailure());
  }
  return dispatch(loadSuccess(response.data));
};

export const createCompanies = (company: Company) => async (dispatch: any) => {
  dispatch(createRequest());
  const response = await api.post('/companies', company);

  if (response.status !== 200) {
    return dispatch(createFailure());
  }
  return dispatch(createSuccess(response.data));
};
