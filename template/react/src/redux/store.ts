import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
const middlewares: any[] = [thunk];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({});
  middlewares.push(logger);
}

const composeEnhancers = 
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(
  reducer,                                            /* 组合reducer */
  composeEnhancers(applyMiddleware(...middlewares))   /* 添加中间件 */
)

export default store;
