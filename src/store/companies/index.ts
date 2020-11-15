import { Reducer } from 'redux';
import { CompaniesState, CompaniesTypes } from './types';

const INITIAL_STATE: CompaniesState = {
  data: [],
  company: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<CompaniesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CompaniesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CompaniesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case CompaniesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case CompaniesTypes.LOAD_RESET:
      return { ...state, loading: false, data: [], company: undefined };
    case CompaniesTypes.LOAD_COMPANY_SUCCESS:
      return { ...state, loading: false, company: action.payload.data };
    case CompaniesTypes.LOAD_COMPANY_FAILURE:
      return { ...state, loading: false, company: undefined };
    case CompaniesTypes.CREATE_REQUEST:
      return { ...state, loading: true };
    case CompaniesTypes.CREATE_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case CompaniesTypes.CREATE_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
