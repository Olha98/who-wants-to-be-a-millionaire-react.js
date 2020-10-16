import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';

const middlewares = [thunk];

const store = createStore(
  rootReducer,  
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export default store


