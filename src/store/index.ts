import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { CategoriesState } from './categories/types';
import { StatesState } from './states/types';
import { CompaniesState } from './companies/types';

import rootReducer from './rootReducer';
// import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  categories: CategoriesState;
  states: StatesState;
  companies: CompaniesState;
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
