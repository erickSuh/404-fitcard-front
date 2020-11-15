import { action } from 'typesafe-actions';
import { StatesTypes, State } from './types';

export const loadRequest = () => action(StatesTypes.LOAD_REQUEST);
export const loadSuccess = (data: State[]) => action(StatesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(StatesTypes.LOAD_FAILURE);
