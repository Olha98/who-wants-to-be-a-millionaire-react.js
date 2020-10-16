import { combineReducers } from 'redux';
import info from '../../assets/json/2.json'

 const rootReducer = combineReducers({
  successfully: info,
});
export default rootReducer

