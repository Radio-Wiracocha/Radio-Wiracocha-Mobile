import {
  applyMiddleware, createStore, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
