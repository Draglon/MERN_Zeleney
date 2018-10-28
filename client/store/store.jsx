import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
// import queryString from 'query-string';

// import { } from './reducers';
// import { routesMap } from './routesMap';
  
// const history = createHistory();
  
// const {
//     reducer,
//     middleware,
//     enhancer,
//     initialDispatch,
// } = connectRoutes(history, routesMap, {
//     initialDispatch: false,
// });

// export { initialDispatch };
  
// const rootReducer = combineReducers({

// });

// const middlewares = applyMiddleware(middleware, thunk);

// export const store = createStore(
//     rootReducer,
//     // composeWithDevTools(enhancer, middlewares),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const rootReducer = combineReducers({

});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);