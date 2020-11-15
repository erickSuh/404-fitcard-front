import api from 'services/api';
import { Dispatch } from 'redux';
import { loadRequest, loadSuccess, loadFailure } from './actionTypes';

export const loadStates = () => async (dispatch: Dispatch) => {
  dispatch(loadRequest());
  const response = await api.get('/states');

  if (response.status !== 200) {
    return dispatch(loadFailure());
  }
  return dispatch(loadSuccess(response.data));
};
