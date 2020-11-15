import { combineReducers } from 'redux';
import categories from './categories';
import states from './states';
import companies from './companies';

export default combineReducers({
  categories,
  states,
  companies,
});
