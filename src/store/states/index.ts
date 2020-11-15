import { Reducer } from 'redux';
import { StatesState, StatesTypes } from './types';

const INITIAL_STATE: StatesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<StatesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StatesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case StatesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case StatesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
