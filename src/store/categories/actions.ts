import api from 'services/api';
import { loadRequest, loadSuccess, loadFailure } from './actionTypes';

export const loadCategories = () => async (dispatch: any) => {
  dispatch(loadRequest());
  const response = await api.get('/categories');

  if (response.status !== 200) {
    return dispatch(loadFailure());
  }
  return dispatch(loadSuccess(response.data));
};
