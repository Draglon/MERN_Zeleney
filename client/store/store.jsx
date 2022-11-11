import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import queryString from 'query-string';

import { routesMap } from './routesMap.jsx';
import popup from './reducers.jsx';
  
const history = createHistory();
  
const {
  reducer,
  middleware,
  enhancer,
  initialDispatch,
} = connectRoutes(history, routesMap, {
  initialDispatch: false,
  querySerializer: queryString,
});
export { initialDispatch };

const rootReducer = combineReducers({
  location: reducer,
  popup,
});

const middlewares = applyMiddleware(middleware, thunk);

export const store = createStore(
  rootReducer,
  composeWithDevTools(enhancer, middlewares)
);